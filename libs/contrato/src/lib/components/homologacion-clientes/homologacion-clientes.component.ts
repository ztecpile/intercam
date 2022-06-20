
import { Component, EventEmitter, OnInit, Output, ViewChildren } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { HomologacionVO } from '@intercam/model';
import { HomologacionClienteService } from '../../services/homologacion-clientes.service';
import { DialogBuscarClienteComponent } from "libs/shred-components/src/lib/dialog/dialog-buscar-cliente/buscar-cliente.component";
import { MatDialog } from '@angular/material/dialog';
import { DialogBuscaPersonaComponent } from 'libs/shred-components/src/lib/dialog/dialog-busca-persona/dialog-busca-persona.component';
import Swal from 'sweetalert2';

@Component({
    selector: 'homologacion-clientes',
    templateUrl: './homologacion-clientes.component.html',
})


export class HomologacionClientesComponent implements OnInit {

    accion = 'Homologación de Clientes';
    public funcForm: FormGroup;
    userlog = sessionStorage.getItem('usuUsuario');
    @Output() buscar_cliente = new EventEmitter<any>();
    dataMotivo: string[];
    cadenaMail: string[];
    conId: number;
    contratosFolder: string[];
    contratoEjecutivoVO: object;
    usuUsuario: string;
    sucursalVO: object;
    mail: any;
    isChecked: boolean;
    perId: number;
    biometria: any;
    perIdconcat: number;
    perfDescripcion: string;
    tipocontrato: string;
    perIdAnt: number;
    codIdAnt: void;
    perIdNew: number;
    pernomCortoAnt: any;
    codIdNew: any;
    pernomCortonew: any;
    tpeclave: string;
    cpeId: number;



    constructor(private homServe: HomologacionClienteService, private dialog: MatDialog) {
        this.isChecked = false;
        this.perId = Number(sessionStorage.getItem('perId'));

    }

    recuperarMotivosHomologacion() {
        this.homServe.getComboMotivosHomologacion().subscribe(
            then => {
                console.log(then);
                this.dataMotivo = then;
            },
            error => {
                console.log('error', error);
            }
        )
    }

    recuperarCadenaCorreo() {
        const value = 'EMAIL_HOMOLOGACION';
        this.homServe.getCadenaCorreos(value).subscribe(
            then => {
                console.log(then);
                const cadena: any = then.split(',');
                console.log(cadena);
                this.cadenaMail = cadena;
            },
            error => {
                console.log('error', error);
            }
        )
    }

    guardaHomologacion() {
        let hom = new HomologacionVO;
        hom.conId = this.funcForm.get('contrato').value;
        hom.perIdAnt = this.perIdAnt;
        hom.perNombreCortoAnt = this.pernomCortoAnt;

        hom.perId = this.perIdNew;
        hom.perNombreCorto = this.pernomCortonew;
        hom.solicitante = this.funcForm.get('coorSucursal').value;
        hom.coordinador = this.funcForm.get('usuSolicitante').value;
        hom.actualizanDatos = this.funcForm.get('homoDatos').value;
        hom.observacion = this.funcForm.get('observacion').value;
        hom.sucursal = this.funcForm.get('sucursal').value;

        hom.emailPersonas = this.cadenaMail;
        console.log(hom);
        this.homServe.saveHomologacion(hom).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se realizo la homologaci\u00F3n correctamente', 'info');
            },
            error => {
                console.log('error', error);
                this.mostrarMensaje('No se realizo la homologaci\u00F3n', 'error');
            }
        )
    }

    obtenerCarpetaContratos(conId: any) {
        console.log(conId);
        if(conId == ''){
            conId = this.funcForm.get('contrato').value;
        }
        this.homServe.getFolderContratos(conId).subscribe(
            then => {
                const returncliIdCorrecto: string[] = [];
                console.log(then);
                for (const data of then.listaRepresentantes) {
                    returncliIdCorrecto.push('PERID- ' + data.idVO.perId + ' - ' + data.perfilVO.perfDescripcion + ' - ' + data.personaVO.perNomCorto);
                }
                this.contratosFolder = returncliIdCorrecto;
                this.cpeId = then.contratoVO.cpeId;
                this.funcForm.get('tipoContrato').setValue(then.contratoVO.tipoContratoVO.tconDescripcion);
                this.getCategoriaCliente(then.listaRepresentantes[0].personaVO.tipoPersonaVO.tpeClave);
                this.obtenerBiometria('busquedaIncorrecta');
                this.obtenerContratosEjecutivos(this.funcForm.get('contrato').value);
                

            },
            error => {
                console.log('error', error);
            }
        )
    }

    obtenerContratosEjecutivos(conId: any) {
        console.log(conId);
        this.homServe.getContratoEjecutivo(conId).subscribe(
            then => {
                console.log(then);
                this.contratoEjecutivoVO = then;
                this.obtenerSucursales(then.usuClaveEjec);
            },
            error => {
                console.log('error', error);
            }
        )
    }

    obtenerSucursales(usuClave: any) {
        console.log(usuClave);
        this.homServe.getSucursalUsuario(usuClave).subscribe(
            then => {
                console.log(then);
                this.sucursalVO = then;
                this.funcForm.get('sucursal').setValue(then.sucDescripcion);
            },
            error => {
                console.log('error', error);
            }
        )
    }

    obtenerBiometria(bio: any) {
        this.homServe.getBiometriaPersonal(this.perId).subscribe(
            then => {
                console.log(then);
                if (bio == 'busquedaIncorrecta') {
                    if (then == null) {
                        this.funcForm.get('bioIncorrecta').setValue('Cliente sin Enrolar');
                    } else {
                        if (then.trfCodigo == 'SRV000') {
                            this.funcForm.get('bioIncorrecta').setValue('Cliente Enrolado');
                        }
                        if (then.trfCodigo == 'SRV001' || then.trfCodigo == 'UDP001') {
                            this.funcForm.get('bioIncorrecta').setValue('Operador Enrolado');
                        }
                        if (then.trfCodigo == 'SRV002') {
                            this.funcForm.get('bioIncorrecta').setValue('Usuario en Proceso de Enrolamiento');
                        }
                        if (then.trfCodigo == 'SF') {
                            this.funcForm.get('bioIncorrecta').setValue('Peticion Enviada a FIMPE');
                        }
                        if (then.trfCodigo == 'NSF') {
                            this.funcForm.get('bioIncorrecta').setValue('Peticion no Realizada a FIMPE');
                        }
                        if (then.trfCodigo == 'DEL001') {
                            this.funcForm.get('bioIncorrecta').setValue('Usuario Eliminado');
                        }
                    }
                } else {
                    if (then == null) {
                        this.funcForm.get('bioCorrecta').setValue('Cliente sin Enrolar');
                    } else {
                        if (then.trfCodigo == 'SRV000') {
                            this.funcForm.get('bioCorrecta').setValue('Cliente Enrolado');
                        }
                        if (then.trfCodigo == 'SRV001' || then.trfCodigo == 'UDP001') {
                            this.funcForm.get('bioCorrecta').setValue('Operador Enrolado');
                        }
                        if (then.trfCodigo == 'SRV002') {
                            this.funcForm.get('bioCorrecta').setValue('Usuario en Proceso de Enrolamiento');
                        }
                        if (then.trfCodigo == 'SF') {
                            this.funcForm.get('bioCorrecta').setValue('Peticion Enviada a FIMPE');
                        }
                        if (then.trfCodigo == 'NSF') {
                            this.funcForm.get('bioCorrecta').setValue('Peticion no Realizada a FIMPE');
                        }
                        if (then.trfCodigo == 'DEL001') {
                            this.funcForm.get('bioCorrecta').setValue('Usuario Eliminado');
                        }
                    }
                }
                this.biometria = then;
            },
            error => {
                console.log('error', error);
            }
        )
    }

    getCategoriaCliente(tpeclave: any){
        console.log(tpeclave);
        const body = [tpeclave];
        this.homServe.getCategoriaCliente(body).subscribe(
            then => {
                console.log(then);
                for (const data of then){
                    console.log(data);
                if(this.cpeId == data.cpeId){
                    this.funcForm.get('catTitular').setValue(data.cpeDescripcion);
                }
            }
                
            },
            error => {
                console.log('error', error);
            }
        )
    }
    getCtr(name: string, group = ''): FormControl {
        if (group === '') return this.funcForm.get(name) as FormControl
        else return this.funcForm.controls[group].get(name) as FormControl
    }

    onSubmit() {
        console.log("Guardando...");
    }

    cambio() {
        if (this.funcForm.get('combMotivo').value == 'OTRO') {
            document.getElementById('inputOtro').removeAttribute('disabled');
        } else {
            document.getElementById('inputOtro').setAttribute('disabled', '');
        }
    }

    deshabilitarBotones() {
        document.getElementById('save').setAttribute('disabled', '');
        document.getElementById('deshacer').setAttribute('disabled', '');
        document.getElementById('deshacer').setAttribute('class', 'deshacer-button-des btn-img');
        document.getElementById('save').setAttribute('class', 'save-button-des btn-img');
    }

    habilitarBotones() {
        document.getElementById('save').removeAttribute('disabled');
        document.getElementById('deshacer').removeAttribute('disabled');
        document.getElementById('deshacer').setAttribute('class', 'deshacer-button btn-img');
        document.getElementById('save').setAttribute('class', 'save-button btn-img');

    }

    perIdIncorrcto() {
        const valor = this.funcForm.get('comboCliIdIncorrecto').value;
        const id = valor.split('-');
        console.log(id);
        this.perIdAnt = id[2].trim();
    }

    isCheckedHom() {
        console.log(this.isChecked);
        if (this.isChecked == false) {
            this.isChecked = true;
            this.funcForm.get('homoDatos').setValue(true);
        } else {
            this.isChecked = false;
            this.funcForm.get('homoDatos').setValue(false);
        }

    }

    createFunForm() {

        // this.funcForm = this.formbuilder.group({
        this.funcForm = new FormGroup({
            contrato: new FormControl(0),
            catTitular: new FormControl(''),
            tipoContrato: new FormControl(''),
            sucursal: new FormControl(''),
            cliIdCorrecto: new FormControl(''),
            usuSolicitante: new FormControl('', Validators.required),
            coorSucursal: new FormControl('', Validators.required),
            combMotivo: new FormControl('', Validators.required),
            comboCliIdIncorrecto: new FormControl(''),
            otro: new FormControl(''),
            observacion: new FormControl(''),
            homoDatos: new FormControl(false),
            bioIncorrecta: new FormControl(''),
            bioCorrecta: new FormControl('')

        });
    }

    buscaCliente(valor: any) {
        const dialogRef = this.dialog.open(DialogBuscaPersonaComponent, {
            disableClose: true,
            autoFocus: true
        }).afterClosed()
            .subscribe(response => {
                console.log(response);
                if (valor == 'cliIdIncorrecto') {
                    this.codIdAnt = this.funcForm.get('contrato').setValue(response.data.contratoId);
                    this.perIdAnt = response.data.perId;
                    this.pernomCortoAnt = response.data.nombreCorto;
                    this.obtenerCarpetaContratos(response.data.contratoId);
                }
                if (valor == 'cliIdCorrecto') {
                    this.codIdNew = response.data.contratoId;
                    this.perIdNew = response.data.perId;
                    this.pernomCortonew = response.data.nombreCorto;
                    this.funcForm.get('cliIdCorrecto').setValue('PERID- ' + response.data.perId + ' - ' + response.data.nombreCorto);
                    this.obtenerCarpetaContratos(response.data.contratoId);
                    this.obtenerBiometria('');
                }
                if (valor == 'usuSol') {
                    this.funcForm.get('usuSolicitante').setValue(response.data.desEjecutivo);
                }
                if (valor == 'coorSucursal') {
                    this.funcForm.get('coorSucursal').setValue(response.data.desEjecutivo);
                }

            });
        ;
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
                _this.limpiarCampos();
                _this.deshabilitarBotones();
            }
        });
    }

    limpiarCampos() {
        this.funcForm.get('contrato').setValue(0);
        this.funcForm.get('comboCliIdIncorrecto').setValue('');
        this.funcForm.get('catTitular').setValue('');
        this.funcForm.get('bioIncorrecta').setValue('');
        this.funcForm.get('tipoContrato').setValue('');
        this.funcForm.get('sucursal').setValue('');
        this.funcForm.get('cliIdCorrecto').setValue('');
        this.funcForm.get('bioCorrecta').setValue('');
        this.isChecked = false;
        this.funcForm.get('homoDatos').setValue(false);
        document.getElementById('checkHomo').removeAttribute('mat-checkbox-checked');
        this.funcForm.get('usuSolicitante').setValue('');
        this.funcForm.get('coorSucursal').setValue('');
        this.funcForm.get('combMotivo').setValue('');
        document.getElementById('inputOtro').setAttribute('disabled', '');
        this.funcForm.get('otro').setValue('');
        this.funcForm.get('observacion').setValue('');
        this.deshabilitarBotones();
    }
    ngOnInit(): void {
        this.recuperarMotivosHomologacion();
        this.createFunForm();
        this.deshabilitarBotones();
        this.recuperarCadenaCorreo();
        document.getElementById('inputOtro').setAttribute('disabled', '');

    }
}

