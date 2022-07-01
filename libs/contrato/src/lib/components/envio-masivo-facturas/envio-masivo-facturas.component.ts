import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ConEmailVO, InstrumentoVO, ReenvioFacturaVO, ValidaOperacionVO } from '@intercam/model';
import { DialogBuscaPersonaComponent } from 'libs/shred-components/src/lib/dialog/dialog-busca-persona/dialog-busca-persona.component';
import Swal from 'sweetalert2';
import { EnvioMasivoFacturasService } from '../../services/envio-masivo-factura.service';


export interface OperacionIngresos {
    posicion: number;
    check: boolean;
    opIngre: number;
    monto: number;
    divisa: string;
    instrumento: string
}

export interface ConEmailVo{
    checkSeleccionado: boolean,
    conId: number;
    cemEmail: string;
    cemId: number;
    cemSta: string;
    seleccionado: boolean;
}




const ELEMENT_DATA2: ConEmailVO[] = [];

@Component({
    selector: 'envio-masivo-facturas',
    templateUrl: './envio-masivo-facturas.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})

export class EnvioMasivoFacturasComponent implements OnInit {
    ELEMENT_DATA: OperacionIngresos[] = [];
    cliente = sessionStorage.getItem("cliente");
    displayedColumns: string[] = ['check', 'OIngreso', 'Monto', 'Divisa', 'Instrumento'];
    displayedColumns2: string[] = ["checkSeleccionado", 'correo'];
    selection = new SelectionModel<OperacionIngresos>(true, []);
    selection2 = new SelectionModel<ConEmailVo>(true, []);
    dataSource = new MatTableDataSource<ReenvioFacturaVO>();
    dataSourceEmai = new MatTableDataSource<ConEmailVo>();
    dataSourceFactura = new MatTableDataSource(this.ELEMENT_DATA);
    dataSourceInstrumento: InstrumentoVO[];
    funcForm: FormGroup;
    clvCli: any;
    isCheckedDeal: boolean;
    isCheckedIngre: boolean;
    mensaje: string;
    opIng: ReenvioFacturaVO[];
    correos: ConEmailVO[];

    /**
     * Seleccionar todas las filas
     * @returns retorna si las filas seleccionadas son iguales a el total de filas
     */
    isAllSelected(tabla: number) {
        let numSelected: number;
        let numRows: number;
        if (tabla == 1) {
            numSelected = this.selection.selected.length;
            numRows = this.dataSourceFactura.data.length;
        } else {
            numSelected = this.selection2.selected.length;
            numRows = this.dataSourceEmai.data.length;
        }
        return numSelected === numRows;
    }

    /**
     * Seleccionar todas las filas si no estan marcadas todas
     * @returns borra la seleccion de las filas
     */
    masterToggle(tabla: number) {
        if (tabla == 1) {
            if (this.isAllSelected(tabla)) {
                this.selection.clear();
                return;
            }

            this.selection.select(...this.dataSourceFactura.data);
        } else {
            if (this.isAllSelected(tabla)) {
                this.selection2.clear();
                return;
            }
            this.selection2.select(...this.dataSourceEmai.data);
        }

    }

    /**
     * Etiqueta de verificacion
     * @param row parametro opcional que llega la fila de la casilla seleccionada 
     * @returns verificacion de la casilla anterior
     */
    checkboxLabel(row?: OperacionIngresos, tabla?: number, row2?: ConEmailVO): string {
        let retorno: any;
        if (tabla == 1) {

            if (!row) {
                return `${this.isAllSelected(tabla) ? 'deselect' : 'select'} all`;
            }
            retorno = `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.opIngre + 1}`;
            this.tratadoDatosFac(row);
        } else {
            if (!row2) {

                return `${this.isAllSelected(tabla) ? 'deselect' : 'select'} all`;
            }
            retorno = `${this.selection2.isSelected(row2) ? 'deselect' : 'select'} row ${row2.conId + 1}`;
            this.tratadoDatosCorreo(row2);
        }
        return retorno;
    }

    constructor(private servEnvio: EnvioMasivoFacturasService, private dialog: MatDialog) {  }
    ngOnInit(): void {
        sessionStorage.setItem("cliente", '');
        if (this.cliente == '') {
            this.buscaCliente();
        }

        this.createFunForm();
        this.deshabilitarBotones();
        this.obtenerInstrumentos();
        this.isRadioChange('deal');
    }
    getCtr(name: string, group = ''): FormControl {
        if (group === '') return this.funcForm.get(name) as FormControl
        else return this.funcForm.controls[group].get(name) as FormControl
    }
    createFunForm() {

        // this.funcForm = this.formbuilder.group({
        this.funcForm = new FormGroup({
            cliente: new FormControl(''),
            fechaInicial: new FormControl(''),
            fechaFinal: new FormControl(''),
            dealIngreso: new FormControl(''),
            radioDeal: new FormControl(''),
            radioIngresos: new FormControl(''),
        });
    }
    buscaCliente() {
        const dialogRef = this.dialog.open(DialogBuscaPersonaComponent, {
            disableClose: true,
            autoFocus: true
        }).afterClosed()
            .subscribe(response => {
                console.log(response);
                sessionStorage.setItem("cliente", JSON.stringify(response.data));
                this.clvCli = response.data.tmpCveLegada;
                this.funcForm.get('cliente').setValue(response.data.tmpCveLegada + '-' + response.data.nombreCorto);
                this.obtenerCuentas(response.data.contratoId);
            });
        ;
    }

    obtenerOperacionIngreso() {
        let fechaInicio = this.funcForm.get('fechaInicial').value;
        let fechaFin = this.funcForm.get('fechaFinal').value;
        let listDealIngreso = this.funcForm.get('dealIngreso').value;
        var unixtimestampInicio = (new Date(fechaInicio)).getTime() / 1000;
        var unixtimestampFin = (new Date(fechaFin)).getTime() / 1000;

        const body = {
            "clvCli": this.clvCli,			//String tmpCveLegada de Cliente
            "fechaInicio": unixtimestampInicio,		//String Timestamp
            "fechaFin": unixtimestampFin,		//String Timestamp
            "lstClvOpe": [listDealIngreso]		//Listado de ReenvioFacturaVO o Vacio
        }
        let tipoCheck = '';
        if (Boolean(this.funcForm.get('radioDeal')) == true) {
            tipoCheck = 'deal';
        } else {
            tipoCheck = 'ingreso';
        }

        this.servEnvio.getListaOperacionesOIngresos(body, tipoCheck).subscribe(
            then => {
                console.log(then);
                this.dataSource = new MatTableDataSource(then);
                const retorno: OperacionIngresos[] = [];
                for (const data of then) {
                    let dataform: OperacionIngresos;
                    dataform.check = data.seleccionado;
                    dataform.divisa = data.clvDivisa;
                    for (const instr of this.dataSourceInstrumento) {
                        if (instr.insId == data.insId) {
                            dataform.instrumento = instr.insNombre;
                        }
                    }
                    dataform.monto = data.facMonto;
                    dataform.opIngre = data.clvOperacion + data.clvIngreso;
                    retorno.push(dataform);
                }
                this.ELEMENT_DATA = retorno;
            },
            error => {
                console.log('error', error);
            }
        )
    }
    enviarFacturas() {
        let OperInt = this.opIng.filter(item => item["selecionado"] == true);
        let correos = this.correos.filter(item => item["selected"] == true);
        const body = {
            "lstOperacionReenvioFactura": OperInt.map(item => {}),
            "lstCuentasCorreo": correos.map(item => {})
        };
        console.log(body);
        this.servEnvio.sendFacturas(body).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se enviaron las facturas', 'info');
            },
            error => {
                console.log('error', error);
                this.mostrarMensaje('No se pudo enviar las facturas', 'error');
            }
        )
    }
    obtenerCuentas(conId: any) {
        this.servEnvio.getListaCuentasCorreo(conId).subscribe(
            then => {
                console.log(then);
                this.dataSourceEmai = new MatTableDataSource(then);
            },
            error => {
                console.log('error', error);
            }
        )
    }

    obtenerInstrumentos() {
        this.servEnvio.getListaInstrumentos().subscribe(
            then => {
                console.log(then);
                this.dataSourceInstrumento = then;
            },
            error => {
                console.log('error', error);
            }
        )
    }

    isRadioChange(radio: any) {
        if (radio == 'deal') {
            this.isCheckedDeal = true;
            this.funcForm.get('radioDeal').setValue(true);
            this.isCheckedIngre = false;
            this.funcForm.get('radioIngresos').setValue(false);
        } else {
            this.isCheckedIngre = true;
            this.funcForm.get('radioIngresos').setValue(true);
            this.isCheckedDeal = false;
            this.funcForm.get('radioDeal').setValue(false);
        }


    }

    comparacionFechas(e: any) {
        console.log(e);
        let fechaInicio = new Date(this.funcForm.get('fechaInicial').value);
        let fechaFin = new Date(this.funcForm.get('fechaFinal').value);
        const meses = this.calculoMeses(fechaInicio, fechaFin);
        console.log(meses);
        if (meses == 1) {
            console.log(fechaInicio + ',' + fechaFin);
            this.habilitarBotones();
            document.getElementById('mensaje').setAttribute('hidden', '');
        } else {
            console.log(fechaInicio + ',' + fechaFin);
            this.deshabilitarBotones();
            document.getElementById('mensaje').removeAttribute('hidden');

        }
    }

    calculoMeses(fechaInicio: Date, fechaFin: Date) {
        const mesFin = fechaFin.getMonth() + 1;
        const mesInicio = fechaInicio.getMonth() + 1;
        const diaFin = fechaFin.getUTCDate();
        const diaInicio = fechaInicio.getUTCDate();
        let totalMes: any;
        if (!isNaN(mesFin)) {
            if (mesFin <= mesInicio) {
                if (diaFin < diaInicio) {
                    totalMes = 2;
                    this.mensaje = 'Fecha Inicial no puede ser mayor a la Fecha Final';
                } else {
                    totalMes = 1;
                }
            } else {
                if (diaFin <= diaInicio) {
                    totalMes = 1;
                } else {
                    totalMes = 2;
                    this.mensaje = 'El rango de fechas no puede exceder 1 mes(es)';
                }

            }
        }
        return totalMes;

    }

    deshabilitarBotones() {
        document.getElementById('buscar').setAttribute('disabled', '');
        document.getElementById('buscar').setAttribute('class', 'buscar-btn-des btn-img');

    }

    habilitarBotones() {
        document.getElementById('buscar').removeAttribute('disabled');
        document.getElementById('buscar').setAttribute('class', 'buscar-btn btn-img');

    }

    mostrarMensaje(mensaje: string, tipoMensaje: any) {
        const _this = this;
        Swal.fire({
            confirmButtonText: 'Aceptar',
            buttonsStyling: false,
            customClass: {
                title: 'sweet-title',
                confirmButton: 'button button1',
                denyButton: 'button button1',
                popup: 'sweet-modal',
                container: '',
            },
            icon: tipoMensaje,
            showCloseButton: true,
            showConfirmButton: true,
            text: mensaje,
            background: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))'
        }).then(function (result) {
            if (result.isConfirmed) {
            }
        });
    }

    tratadoDatosFac(row: OperacionIngresos) {

        const datalist: ReenvioFacturaVO[] = [];

        if (row.check == true) {
            let data = new ReenvioFacturaVO;
            data.clvCliente = this.clvCli;
            data.clvDivisa = row.divisa;
            data.clvIngreso = row.opIngre;
            data.facMonto = row.monto;
            data.clvOperacion = 0;
            data.facFechaExpedicion = null;
            data.facFolio = null;
            data.facSerie = null;
            data.rfcEmpresa = '';
            for (const inst of this.dataSourceInstrumento) {
                if (inst.insNombre == row.instrumento) {
                    data.insId = inst.insId;
                }
            }
            data.seleccionado = row.check;
            datalist.push(data);
        }
        this.opIng = datalist;
    } 

    tratadoDatosCorreo(row: ConEmailVo) {
console.log(row);
        const listmail: ConEmailVO[] = [];
        if (row.checkSeleccionado == true) {
            let mail = new ConEmailVO;
            mail.cemEmail = row.cemEmail;
            mail.cemId = row.cemId;
            mail.cemSta = row.cemSta
            mail.checkSeleccionado = row.checkSeleccionado;
            mail.conId = row.conId;
            mail.seleccionado = row.seleccionado;
            listmail.push(mail);
            console.log(listmail);
        }
        this.correos = listmail;
        console.log(this.correos);
    }

}
