import { Component, OnInit, ViewChild } from '@angular/core';
import { ReferenciasService } from '../../services/referencias.service';
import { MatTableDataSource } from '@angular/material/table';
import { ContratoPersonaVO, ReferenciaConvenioVO, PersonaVO } from '@intercam/model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
    selector: 'fx-referencias.component',
    templateUrl: './fx-referencias.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})

export class FxReferenciasComponent implements OnInit {
    displayedColumns: string[] = ['conId', 'nomCorto', 'perfDescripcion', 'desTipContrato', 'conEmail'];
    displayedColumns2: string[] = ['refDivisa', 'banNombre', 'convNombre', 'convNumero', 'refNumero'];
    dataSource = new MatTableDataSource<ContratoPersonaVO>();
    dataSource2 = new MatTableDataSource<ReferenciaConvenioVO>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    showBtn: boolean = true;
    showBtn2: boolean = false;
    funcForm: FormGroup;
    getMail: string = '';
    setConId!: number;
    getTConId!: number;
    contratoPersonaVO!: ContratoPersonaVO[];
    perId: number; //clave de persona 
    paginador: boolean;
    selectedRowPintar: any;
    constructor(private refServ: ReferenciasService) {
        this.perId = Number(sessionStorage.getItem('perId'));
        // this.perId = 876831;
        console.log('perId: ', this.perId);
        this.paginador = false;
    }

    findPersonaContrato() {
        const listaResponse: ContratoPersonaVO[] = [];
        this.refServ.findPersonaContrato(this.perId).subscribe(
            then => {
                console.log(then);
                for (const data of then) {
                    const datoscondicion: ContratoPersonaVO = new ContratoPersonaVO;
                    if((data.tipContrato == 1 || data.tipContrato == 5) && data.perfilVO.perfDescripcion == 'TITULAR'){
                        datoscondicion.benContingentes = data.benContingentes;
                        datoscondicion.cargoFuncionarioVO = data.cargoFuncionarioVO;
                        datoscondicion.cluGrupoBanco = data.cluGrupoBanco;
                        datoscondicion.cpeAdicional = data.cpeAdicional;
                        datoscondicion.cpeCargo = data.cpeCargo;
                        datoscondicion.cpeCelebraOperacion = data.cpeCelebraOperacion;
                        datoscondicion.cpeConfirmaOperacion = data.cpeConfirmaOperacion;
                        datoscondicion.cpeCuartaLinea = data.cpeCuartaLinea;
                        datoscondicion.cpeEmbossingName = data.cpeEmbossingName;
                        datoscondicion.cpeEsBenfac = data.cpeEsBenfac;
                        datoscondicion.cpeEsRepetitiva = data.cpeEsRepetitiva;
                        datoscondicion.cpeEstatus = data.cpeEstatus;
                        datoscondicion.cpeFirmaDerivados = data.cpeFirmaDerivados;
                        datoscondicion.cpeFoldoc = data.cpeFoldoc;
                        datoscondicion.cpeFvigenciaStr = data.cpeFvigenciaStr;
                        datoscondicion.cpeMiembro = data.cpeMiembro;
                        datoscondicion.cpeMontoMax = data.cpeMontoMax;
                        datoscondicion.cpeMontoTdCredito = data.cpeMontoTdCredito;
                        datoscondicion.cpeNumCardBrx = data.cpeNumCardBrx;
                        datoscondicion.cpeNumCardext = data.cpeNumCardext;
                        datoscondicion.cpeOpDivisas = data.cpeOpDivisas;
                        datoscondicion.cpePerControl = data.cpePerControl;
                        datoscondicion.cpePorAccionista = data.cpePorAccionista;
                        datoscondicion.cpePropReal = data.cpePropReal;
                        datoscondicion.cpeStatusTarjetabrx = data.cpeStatusTarjetabrx;
                        datoscondicion.cpeTarjBrxCancelada = data.cpeTarjBrxCancelada;
                        datoscondicion.cpeTelefono = data.cpeTelefono;
                        datoscondicion.cpeTipoNotificacion = data.cpeTipoNotificacion;
                        datoscondicion.cpe_faltaStr = data.cpe_faltaStr;
                        datoscondicion.cpe_porcentaje = data.cpe_porcentaje;
                        datoscondicion.desTipContrato = data.desTipContrato;
                        datoscondicion.dicId = data.dicId;
                        datoscondicion.dirCalle = data.dirCalle;
                        datoscondicion.docId = data.docId;
                        datoscondicion.idVO = data.idVO;
                        datoscondicion.listaBenConting = data.listaBenConting;
                        datoscondicion.listaConPersonaPerfilVO = data.listaConPersonaPerfilVO;
                        datoscondicion.listaErrores = data.listaErrores;
                        datoscondicion.listaPerRelBen = data.listaPerRelBen;
                        datoscondicion.nomCorto = data.nomCorto;
                        datoscondicion.paiNacionalidad = data.paiNacionalidad;
                        datoscondicion.perIdBenef = data.perIdBenef;
                        datoscondicion.perNumeroBanco = data.perNumeroBanco;
                        datoscondicion.perfilVO = data.perfilVO;
                        datoscondicion.personaVO = data.personaVO;
                        datoscondicion.relPersonaVO = data.relPersonaVO;
                        datoscondicion.tipContrato = data.tipContrato;
                        datoscondicion.tmpCveBenfac = data.tmpCveBenfac;
                        datoscondicion.tmpCveRepet = data.tmpCveRepet;
                        datoscondicion.treDescripcion = data.treDescripcion;
                        datoscondicion.usuUsuario = data.usuUsuario;
                        datoscondicion.usu_clave = data.usu_clave;
                        

                        listaResponse.push(datoscondicion);
                    }
                    console.log('consulta',listaResponse);
                }
                this.dataSource = new MatTableDataSource(listaResponse);
            },
            error => {
                console.log('error', error);
            }
        );
    }
    getCtr(name: string, group = ''): FormControl {
        if (group === '') return this.funcForm.get(name) as FormControl
        else return this.funcForm.controls[group].get(name) as FormControl
    }
    selected(row: any) {
        console.log(row);
        this.selectedRowPintar = row;
        let contratoSelec: ContratoPersonaVO = row;
        this.getMail = row.idVO.contratoVO.conEmail;
        this.showBtn = false;
        this.showBtn2 = true;
        this.setConId = row.idVO.contratoVO.conId;
        this.getTConId = row.idVO.tconId;
        document.getElementById('notificar').removeAttribute('disabled');
        document.getElementById('aceptar').removeAttribute('disabled');
        document.getElementById('notificar').setAttribute('class', 'deshacer-button btn-img');
        document.getElementById('aceptar').setAttribute('class', 'save-button btn-img');
        this.findReferencia(contratoSelec.idVO.contratoVO.conId);


    }
    findReferencia(conId: number) {
        this.refServ.findReferenciaCliente(conId).subscribe(
            then => {
                console.log(then);
                this.dataSource2 = new MatTableDataSource(then);
                this.paginador = true;
                this.dataSource.paginator = this.paginator;
                
                document.getElementById('paginadorDiv').removeAttribute('hidden');
            },
            error => {
                console.log('error findReferencia', error);
            }

        )
    }

    generarReferencias() {
        this.refServ.generateReferencias(this.setConId).subscribe(
            then => {
                console.log(then);
                this.findReferencia(this.setConId);
                this.mostrarMensaje('Se generaron nuevas Referencias', 'info');
            },
            error => {
                console.log('error generarReferencias', error);
                this.mostrarMensaje('No se pudo generar nuevas Referencias', 'error');
            }

        )
    }

    envioReferencias() {
        const referenciaConvenioVO: ReferenciaConvenioVO[] = [];

        const body = {
            'mailTo': this.getMail,
            'referencias': this.dataSource2.filteredData,
            'cliente': JSON.parse(sessionStorage.getItem("_clienteVO")),
            'condId': this.setConId,
            'tconId': this.getTConId
        }
        console.log('body', body);
        this.refServ.sendReferencias(body).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se envio notificacion las referencias', 'info');
            },
            error => {
                console.log('error envioReferencias', error);
                this.mostrarMensaje('No se pudo en la notificacion de las referencias', 'error');
            }
        )
    }

    onSubmit() {
        console.log("Guardando...");
    }

    createFunForm() {
        this.funcForm = new FormGroup({
            mail: new FormControl()
        });
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
                _this.findReferencia(_this.setConId);
            }
        });
    }
    ngOnInit(): void {
        this.createFunForm();
        this.findPersonaContrato();
    }
}