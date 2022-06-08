import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BancosVO, BolsaVO, PaisVO } from '@intercam/model';
import Swal from 'sweetalert2';
import { BancoService } from '../../services/bancos.service';


@Component({
    selector: 'bancos-component',
    templateUrl: './bancos.component.html',
})


export class BancosComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['banid', 'nombre', 'estatus', 'claveBanxico', 'claveSica', 'claveSabi', 'claveSiif', 'claveOperaIntercam', 'pais', 'nombreCorto', 'claveOperaTefbv', 'claveOperaSpeua'];
    dataSource = new MatTableDataSource<BancosVO>();
    showBtn: boolean = true;
    showBtn2: boolean = false;
    paginador: boolean;
    public funcForm: FormGroup;
    datapaises: PaisVO[] = [];
    habilitarCampo: boolean = true;
    _modalidad: any;
    banid: number;
    hdefault: boolean;
    hcambio: boolean;
    heliminar: boolean;
    hdes: boolean;
    valueNombre: string = '';
    valueClaveBanxico: string = '';
    valueClaveSica: string = '';
    valueClaveSabi: string = '';
    valueClaveSiif: string = '';
    checkActivo: boolean;
    checkInactivo: boolean;
    checkOpInt: boolean = false;
    checkOpSpe: boolean = false;
    checkOpTef: boolean = false;
    valuePais: number = 1;
    valueNombreCorto: string = '';
    valueCheckOpInt: string = 'F';
    valueCheckOpSpe: string = 'F';
    valueCheckOpTef: string = 'F';
    hdeshacer: boolean;
    hguardar: boolean;
    valueEstatus: string;
    constructor(private bancoServ: BancoService, private formbuilder: FormBuilder) {
        this.paginador = false;
        this.hdefault = false;
        this.hcambio = true; 
        this.hdes = true;
        this.heliminar = true;
        this.hdeshacer = false;
        this.hguardar = false;
        this.checkActivo = false;
        this.checkInactivo = false;
    }
    ngOnInit(): void {
        this.getpaises();
        this.createFunForm();
        this.funcForm.get("nombre").disable();
        this.funcForm.get("claveBanxico").disable();
        this.funcForm.get("claveSica").disable();
        this.funcForm.get("claveSabi").disable();
        this.funcForm.get("claveSiif").disable();
        this.funcForm.get("checkOpTefbv").disable();
        this.funcForm.get("checkOpSpeua").disable();
        this.funcForm.get("checkOpInter").disable();
        this.funcForm.get("combPais").disable();
        this.funcForm.get("nombreCorto").disable();
        this.funcForm.get("optActivo").disable();
        this.funcForm.get("optInactivo").disable();
    }

    getCtr(name: string, group = ''): FormControl {
        if (group === '') return this.funcForm.get(name) as FormControl
        else return this.funcForm.controls[group].get(name) as FormControl
    }
   
    onSubmit() {
        console.log("Guardando...");
    }
    changeRadioActivo(e: any) {
        this.cambio();
        console.log(e);
        this.selectedRadio('AC');
        if (e) {
            this.checkActivo = true;
            this.valueEstatus = 'AC';
        }
    }
    changeRadioInactivo(e: any) {
        this.cambio();
        this.selectedRadio('IN');
        console.log(e);
        if (e) {
            this.checkInactivo = true;
            this.valueEstatus = 'IN';
        }
    }
    selectedRadio(id:string): void{
        if(id === 'AC'){
          this.checkInactivo = false;
        }
        if(id === 'IN'){
          this.checkActivo = false;
        }
      }
    changeCheckInter(e: any) {
        console.log(e);
        if (e) {
            this.checkOpInt = true;
            this.funcForm.get("checkOpInter").setValue(true);
            this.valueCheckOpInt = 'V'
        }else{
            this.funcForm.get("checkOpInter").setValue(false);
            this.valueCheckOpInt = 'F'
        }
    }
    changeCheckSpeia(e: any) {
        this.cambio();
        console.log(e);
        if (e) {
            this.checkOpSpe = true;
            this.funcForm.get("checkOpSpeua").setValue(true);
            this.valueCheckOpInt = 'V'
        }else{
             this.checkOpSpe = false;
            this.funcForm.get("checkOpSpeua").setValue(false);
            this.valueCheckOpInt = 'F'
        }
    }
    changeCheckFbv(e: any) {
        this.cambio();
        console.log(e);
        if (e) {
            this.checkOpTef = true;
        }
        if (e) {
            this.checkOpTef = true;
            this.funcForm.get("checkOpTefbv").setValue(true);
            this.valueCheckOpInt = 'V'
        }else{
             this.checkOpTef = false;
            this.funcForm.get("checkOpTefbv").setValue(false);
            this.valueCheckOpInt = 'F'
        }
    }


    createFunForm() {

        // this.funcForm = this.formbuilder.group({
        this.funcForm = new FormGroup({
            nombre: new FormControl('', [Validators.required]),
            claveBanxico: new FormControl('', [Validators.required]),
            claveSica: new FormControl(''),
            claveSabi: new FormControl(''),
            claveSiif: new FormControl(''),
            optActivo: new FormControl(''),
            optInactivo: new FormControl(''),
            checkOpInter: new FormControl(''),
            checkOpSpeua: new FormControl(''),
            checkOpTefbv: new FormControl(''),
            combPais: new FormControl(''),
            nombreCorto: new FormControl('')

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
                _this.limpiarCampos();
                _this.consulta();
            }
        });
    }

    selectedRow(row: any) {
        console.log(row);
        let contratoSelec: BancosVO = row;
        this.habilitarCampo = false;
        this._modalidad = "modificacion";
        this.hcambio = false;
        this.heliminar = false;
        this.hdefault = true;
        this.hdes = false;
        this.showBtn = false;
        this.showBtn2 = true;
        this.habilitarCampos();
        document.getElementById('delete').removeAttribute('disable');
        this.banid = contratoSelec.banId;
        this.funcForm.get("nombre").setValue(contratoSelec.banNombre);
        this.funcForm.get("claveBanxico").setValue(contratoSelec.banClaveBanxico);
        this.funcForm.get("claveSica").setValue(contratoSelec.banIdSica);
        this.funcForm.get("claveSabi").setValue(contratoSelec.banIdFondos);
        this.funcForm.get("claveSiif").setValue(contratoSelec.banIdCasaBolsa);
        this.funcForm.get("checkOpTefbv").setValue(contratoSelec.banOperaTefbv);
        this.funcForm.get("checkOpSpeua").setValue(contratoSelec.banOperaSpeua);
        this.funcForm.get("checkOpInter").setValue(contratoSelec.banOperaIntercam);
        this.funcForm.get("combPais").setValue(contratoSelec.paiClave);
        this.funcForm.get("nombreCorto").setValue(contratoSelec.banDescCorta);
        document.getElementById('save').hasAttribute('disable');
        document.getElementById('deshacer').hasAttribute('disable');

        if (contratoSelec.banEstatus == 'Activo') {
            this.checkActivo = true;
            this.funcForm.get("optActivo").setValue(true);
            this.checkInactivo = false;
            this.valueEstatus = 'AC';
        } else {
            this.checkActivo = false;
            this.funcForm.get("optInactivo").setValue(true);
            this.checkInactivo = true;
            this.valueEstatus = 'IN';
        }
        if (contratoSelec.banOperaIntercam == 'V') {
            this.checkOpInt = true;
            this.valueCheckOpInt = 'V';
            this.funcForm.get("checkOpInter").setValue(true);
        } else {
            this.checkOpInt = false;
            this.valueCheckOpInt = 'F';
            this.funcForm.get("checkOpInter").setValue(false);
        }
        if (contratoSelec.banOperaSpeua == 'V') {
            this.checkOpSpe = true;
            this.valueCheckOpSpe = 'V';
            this.funcForm.get("checkOpSpeua").setValue(true);
        } else {
            this.checkOpSpe = false;
            this.valueCheckOpSpe = 'F';
            this.funcForm.get("checkOpSpeua").setValue(false);
        }
        if (contratoSelec.banOperaTefbv == 'V') {
            this.checkOpTef = true;
            this.valueCheckOpTef = 'V';
            this.funcForm.get("checkOpTefbv").setValue(true);
        } else {
            this.checkOpTef = false;
            this.valueCheckOpTef = 'F';
            this.funcForm.get("checkOpTefbv").setValue(false);
        }

        this.valuePais = contratoSelec.paiClave;
        this.valueNombreCorto = contratoSelec.banDescCorta;
        console.log(contratoSelec);

    }

    consulta() {
        const listaResponse: BancosVO[] = [];
        this.bancoServ.getBancos().subscribe(
            then => {
                console.log(then);
                for (const data of then) {
                    const bancoVO: BancosVO = new BancosVO;
                    bancoVO.banClaveBanxico = data.banClaveBanxico;
                    bancoVO.banDescCorta = data.banDescCorta;
                    if (data.banEstatus == 'AC') {
                        bancoVO.banEstatus = 'Activo';
                    }else{
                        bancoVO.banEstatus = 'Inactivo';
                    }
                    bancoVO.banId = data.banId;
                    bancoVO.banIdCasaBolsa = data.banIdCasaBolsa;
                    bancoVO.banIdFondos = data.banIdFondos;
                    bancoVO.banIdSica = data.banIdSica;
                    bancoVO.banNombre = data.banNombre;
                    bancoVO.banOperaIntercam = data.banOperaIntercam;
                    bancoVO.banOperaSpeua = data.banOperaSpeua;
                    bancoVO.banOperaTefbv = data.banOperaTefbv;
                    bancoVO.paiClave = data.paiClave;
                    bancoVO.paiDescripcion = data.paiDescripcion;
                    listaResponse.push(bancoVO);

                }

                this.dataSource = new MatTableDataSource(listaResponse);
                this.paginador = true;
                document.getElementById('paginadorDiv').removeAttribute('hidden');
                this.dataSource.paginator = this.paginator;

            },
            error => {
                console.log('error', error);
            }
        );
    }

    getpaises() {
        this.bancoServ.getPaises().subscribe(
            then => {
                console.log(then);
                this.datapaises = then;
            },
            error => {
                console.log('error', error);
            }

        )
    }
    changeAltaButton() {
        this.habilitarCampos();
        this._modalidad = "alta";
    }
    cambio(){
        document.getElementById('save').removeAttribute('disabled');
        document.getElementById('deshacer').removeAttribute('disabled');
        document.getElementById('add').hasAttribute('disabled');
    }
    altaBancos() {
        let banco = new BancosVO;
        banco.banId = null;
        banco.banOperaTefbv = this.valueCheckOpTef; //this.funcForm.get('checkOpTefbv').value;
        banco.banOperaSpeua = this.valueCheckOpSpe; //this.funcForm.get('checkOpSpeua').value;
        banco.banClaveBanxico = this.funcForm.get('claveBanxico').value;
        banco.banIdSica = this.funcForm.get('claveSica').value;
        banco.banIdCasaBolsa = this.funcForm.get("claveSiif").value;
        banco.banIdFondos = this.funcForm.get("claveSabi").value;
        banco.banEstatus = this.valueEstatus;
        banco.banOperaIntercam = this.valueCheckOpInt; //this.funcForm.get('checkOpInter').value;
        banco.banNombre = this.funcForm.get("nombre").value;
        banco.paiClave = this.funcForm.get('combPais').value;
        banco.paiDescripcion = null;
        banco.banDescCorta = this.funcForm.get('nombreCorto').value;
        console.log(banco);
        this.bancoServ.createBanco(banco).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se creo un nuevo item', 'info');
            }, error => {
                this.mostrarMensaje('No se pudo crear el item', 'error');
            }
        )
    }

    modoficarBancos() {
        let banco = new BancosVO;
        banco.banId = this.banid;
        banco.banOperaTefbv = this.funcForm.get('checkOpTefbv').value;
        banco.banOperaSpeua = this.funcForm.get('checkOpSpeua').value;
        banco.banClaveBanxico = this.funcForm.get('claveBanxico').value;
        banco.banIdSica = this.funcForm.get('claveSica').value;
        banco.banIdCasaBolsa = this.funcForm.get("claveSiif").value;
        banco.banIdFondos = this.funcForm.get("claveSabi").value;
        banco.banEstatus = this.valueEstatus;
        banco.banOperaIntercam = this.funcForm.get('checkOpInter').value;
        banco.banNombre = this.funcForm.get("nombre").value;
        banco.paiClave = this.funcForm.get('combPais').value;
        banco.paiDescripcion = null;
        banco.banDescCorta = this.funcForm.get('nombreCorto').value;

        this.bancoServ.updateBanco(banco).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se actualizo el item', 'info');
            }, error => {
                this.mostrarMensaje('No se pudo actualizar el item', 'error');
            }
        )
    }
    eliminar(e: any) {
        let banco = new BancosVO;
        banco.banId = this.banid;
        banco.banOperaTefbv = this.funcForm.get('checkOpTefbv').value;
        banco.banOperaSpeua = this.funcForm.get('checkOpSpeua').value;
        banco.banClaveBanxico = this.funcForm.get('claveBanxico').value;
        banco.banIdSica = this.funcForm.get('claveSica').value;
        banco.banIdCasaBolsa = this.funcForm.get("claveSiif").value;
        banco.banIdFondos = this.funcForm.get("claveSabi").value;
        banco.banEstatus = this.valueEstatus;
        banco.banOperaIntercam = this.funcForm.get('checkOpInter').value;
        banco.banNombre = this.funcForm.get("nombre").value;
        banco.paiClave = this.funcForm.get('combPais').value;
        banco.paiDescripcion = null;
        banco.banDescCorta = this.funcForm.get('nombreCorto').value;

        this.bancoServ.deleteBanco(banco).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se elimino el item', 'info');
            }, error => {
                console.log('error', error)
                this.mostrarMensaje('No se pudo eliminar el item', 'error');
            }
        )
    }

    validarModalidad(e: any): void {
        console.log(e);
        if (this._modalidad == "modificacion") {
            this.modoficarBancos();
        } else {
            this.altaBancos();
        }
    }
    getValueSearchCombo() {
        var name: any;
        if (this.datapaises != null && this.datapaises.length > 0) {
            name = this.datapaises[0].paiDescripcion;
        }
        return name;
    }

    limpiarCampos() {
        this.showBtn = true;
        this.showBtn2 = false;
        this.habilitarCampo = true;
        document.getElementById('save').hasAttribute('disabled');
        document.getElementById('deshacer').hasAttribute('disabled');
        document.getElementById('add').removeAttribute('disabled');
        this.funcForm.get("nombre").setValue('');
        this.funcForm.get("claveBanxico").setValue('');
        this.funcForm.get("claveSica").setValue('');
        this.funcForm.get("claveSabi").setValue('');
        this.funcForm.get("claveSiif").setValue('');
        this.funcForm.get("checkOpTefbv").setValue(false);
        this.funcForm.get("checkOpSpeua").setValue(false);
        this.funcForm.get("checkOpInter").setValue(false);
        this.funcForm.get("combPais").setValue(1);
        this.funcForm.get("nombreCorto").setValue('');
        this.funcForm.get("optActivo").setValue(false);
        this.funcForm.get("optInactivo").setValue(false);
        this.deshabilitarCampos();
        this._modalidad = '';
        this.banid = 0;
    }

    habilitarCampos(){
        this.funcForm.get("nombre").enable();
        this.funcForm.get("claveBanxico").enable();
        this.funcForm.get("claveSica").enable();
        this.funcForm.get("claveSabi").enable();
        this.funcForm.get("claveSiif").enable();
        this.funcForm.get("checkOpTefbv").enable();
        this.funcForm.get("checkOpSpeua").enable();
        this.funcForm.get("checkOpInter").enable();
        this.funcForm.get("combPais").enable();
        this.funcForm.get("nombreCorto").enable();
        this.funcForm.get("optActivo").enable();
        this.funcForm.get("optInactivo").enable();
        
    }

    deshabilitarCampos(){
        this.funcForm.get("nombre").disable();
        this.funcForm.get("claveBanxico").disable();
        this.funcForm.get("claveSica").disable();
        this.funcForm.get("claveSabi").disable();
        this.funcForm.get("claveSiif").disable();
        this.funcForm.get("checkOpTefbv").disable();
        this.funcForm.get("checkOpSpeua").disable();
        this.funcForm.get("checkOpInter").disable();
        this.funcForm.get("combPais").disable();
        this.funcForm.get("nombreCorto").disable();
        this.funcForm.get("optActivo").disable();
        this.funcForm.get("optInactivo").disable();
    }
}