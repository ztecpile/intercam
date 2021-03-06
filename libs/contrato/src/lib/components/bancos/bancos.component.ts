import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BancosVO, BolsaVO, PaisVO } from '@intercam/model';
import Swal from 'sweetalert2';
import { BancoService } from '../../services/bancos.service';


@Component({
    selector: 'bancos-component',
    templateUrl: './bancos.component.html'
})


export class BancosComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns: string[] = ['banid', 'nombre', 'estatus', 'claveBanxico', 'claveSica', 'claveSabi', 'claveSiif', 'claveOperaIntercam', 'pais', 'nombreCorto', 'claveOperaTefbv', 'claveOperaSpeua'];
    dataSource = new MatTableDataSource<BancosVO>();
    dataSourceBkp: BancosVO[]=[];
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
    selectedRowPintar: any;
    submitted: boolean=false;
    optActivoDisabled:boolean;
    optInactivoDisabled: boolean;
    checkOpSpeDisabled: boolean;
    checkOpIntDisabled: boolean;
    checkOpTefDisabled: boolean;
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
       this.deshabilitarCampos();
       this.atributosElemento();
    }

    getCtr(name: string, group = ''): FormControl {
        if (group === '') return this.funcForm.get(name) as FormControl
        else return this.funcForm.controls[group].get(name) as FormControl
    }
   
    onSubmit() {
        console.log("Guardando...");
        this.submitted = true;
        this.funcForm.valid;
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
        this.selectedRadio('SU');
        console.log(e);
        if (e) {
            this.checkInactivo = true;
            this.valueEstatus = 'SU';
        }
    }
    selectedRadio(id:string): void{
        if(id === 'AC'){
          this.checkInactivo = false;
        }
        if(id === 'SU'){
          this.checkActivo = false;
        }
      }
    changeCheckInter(e: any) {
        this.cambio();
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

        this.funcForm = this.formbuilder.group({
        // this.funcForm = new FormGroup({
            nombre: new FormControl('', [Validators.required,Validators.maxLength(80), Validators.pattern(/^[a-z0-9\s]*$/i)]),
            claveBanxico: new FormControl('', [Validators.required,Validators.maxLength(8), Validators.pattern(/^[0-9]*$/)]),
            claveSica: new FormControl('',[Validators.maxLength(20), Validators.pattern(/^[0-9]*$/)]),
            claveSabi: new FormControl('',[Validators.maxLength(20), Validators.pattern(/^[0-9]*$/)]),
            claveSiif: new FormControl('',[Validators.maxLength(20), Validators.pattern(/^[0-9]*$/)]),
            optActivo: new FormControl(false),
            optInactivo: new FormControl(false),
            checkOpInter: new FormControl(false),
            checkOpSpeua: new FormControl(false),
            checkOpTefbv: new FormControl(false),
            combPais: new FormControl(''),
            nombreCorto: new FormControl('',[Validators.maxLength(10), Validators.pattern(/^[a-z\s]*$/i)])

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
                _this.atributosElemento();
            }
        });
    }

    selectedRow(row: any) {
        console.log(row);
        this.selectedRowPintar = row;
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
        document.getElementById('delete').removeAttribute('disabled');
        document.getElementById('tabla').setAttribute('disabled','');
        this.banid = contratoSelec.banId;
        this.createFunForm();
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
        document.getElementById('save').setAttribute('disabled','');
        document.getElementById('deshacer').removeAttribute('disabled');
        document.getElementById('deshacer').setAttribute('class','deshacer-button btn-img');

        if (contratoSelec.banEstatus == 'AC') {
            this.checkActivo = true;
            document.getElementById("optActivo").setAttribute('class','mat-radio-button ml-5 mat-accent mat-radio-checked'); 
            this.funcForm.get("optActivo").setValue(true);
            this.checkInactivo = false;
            this.valueEstatus = 'AC';
        } else if (contratoSelec.banEstatus == 'SU'){
            this.checkActivo = false;
            document.getElementById("optInactivo").setAttribute('class','mat-radio-button ml-5 mat-accent mat-radio-checked');
           
            this.funcForm.get("optInactivo").setValue(true);
            this.checkInactivo = true;
            this.valueEstatus = 'SU';
        }
        if (contratoSelec.banOperaIntercam == 'V') {
            this.checkOpInt = true;
            this.valueCheckOpInt = 'V';
    document.getElementById("checkOpInter").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-checked');
   
            this.funcForm.get("checkOpInter").setValue(true);
        } else if(contratoSelec.banOperaIntercam == 'F'){
            this.checkOpInt = false;
            this.valueCheckOpInt = 'F';
            document.getElementById('checkOpInter').removeAttribute('mat-checkbox-checked');
           
            this.funcForm.get("checkOpInter").setValue(false);
        }
        if (contratoSelec.banOperaSpeua == 'V') {
            this.checkOpSpe = true;
            this.valueCheckOpSpe = 'V';
            document.getElementById("checkOpSpeua").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-checked');

            this.funcForm.get("checkOpSpeua").setValue(true);
        } else if (contratoSelec.banOperaSpeua == 'F'){
            this.checkOpSpe = false;
            this.valueCheckOpSpe = 'F';
            document.getElementById('checkOpSpeua').removeAttribute('mat-checkbox-checked');
            this.funcForm.get("checkOpSpeua").setValue(false);
        }
        if (contratoSelec.banOperaTefbv == 'V') {
            this.checkOpTef = true;
            this.valueCheckOpTef = 'V';
         document.getElementById("checkOpTefbv").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-checked');
      
            this.funcForm.get("checkOpTefbv").setValue(true);
        } else if (contratoSelec.banOperaTefbv == 'F') {
            this.checkOpTef = false;
            this.valueCheckOpTef = 'F';
            document.getElementById('checkOpTefbv').removeAttribute('mat-checkbox-checked');
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
                    bancoVO.banEstatus = data.banEstatus;
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
                this.dataSourceBkp = then;
                this.dataSource = new MatTableDataSource(listaResponse);
                this.dataSource.sort = this.sort;
                this.paginador = true;
                this.dataSource.paginator = this.paginator;
                document.getElementById('paginadorDiv').removeAttribute('hidden');

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
        document.getElementById('buscar').setAttribute('disabled','');
        document.getElementById('add').setAttribute('disabled','');
       document.getElementById('buscar').setAttribute('class','buscar-btn-des btn-img');
       document.getElementById('add').setAttribute('class','alta-button-des btn-img');
       
    }
    cambio(){
        document.getElementById('save').removeAttribute('disabled');
        document.getElementById('deshacer').removeAttribute('disabled');
       document.getElementById('deshacer').setAttribute('class','deshacer-button btn-img');
       document.getElementById('save').setAttribute('class','save-button btn-img');
       this.submitted = true;
       this.funcForm.valid;
    }
    altaBancos() {
        this.submitted = true;
        let banco = new BancosVO;
        banco.banId = null;
       
        banco.banId = this.banid;
        if(this.funcForm.get('checkOpTefbv').value == true){
            banco.banOperaTefbv = 'V';
        }else{
            banco.banOperaTefbv = 'F';
        }
        if(this.funcForm.get('checkOpSpeua').value == true){
            banco.banOperaSpeua = 'V';
        }else{
            banco.banOperaSpeua = 'F';
        }
        if(this.funcForm.get('checkOpInter').value == true){
            banco.banOperaIntercam = 'V';
        }else{
            banco.banOperaIntercam = 'F';
        }
        banco.banClaveBanxico = this.funcForm.get('claveBanxico').value;
        banco.banIdSica = this.funcForm.get('claveSica').value;
        banco.banIdCasaBolsa = this.funcForm.get("claveSiif").value;
        banco.banIdFondos = this.funcForm.get("claveSabi").value;
        banco.banEstatus = this.valueEstatus;
        banco.banNombre = this.funcForm.get("nombre").value;
        banco.paiClave = this.funcForm.get('combPais').value;
        banco.paiDescripcion = null;
        banco.banDescCorta = this.funcForm.get('nombreCorto').value;
        console.log(banco);
        if(this.funcForm.valid){
        this.bancoServ.createBanco(banco).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se creo un nuevo item', 'info');
                this.consulta();
            }, error => {
                this.mostrarMensaje('No se pudo crear el item', 'error');
            }
        )
        }
    }

    modoficarBancos() {
        this.submitted = true;
        let banco = new BancosVO;
        banco.banId = this.banid;
        banco.banId = this.banid;
        if(this.funcForm.get('checkOpTefbv').value == true){
            banco.banOperaTefbv = 'V';
        }else{
            banco.banOperaTefbv = 'F';
        }
        if(this.funcForm.get('checkOpSpeua').value == true){
            banco.banOperaSpeua = 'V';
        }else{
            banco.banOperaSpeua = 'F';
        }
        if(this.funcForm.get('checkOpInter').value == true){
            banco.banOperaIntercam = 'V';
        }else{
            banco.banOperaIntercam = 'F';
        }
        banco.banClaveBanxico = this.funcForm.get('claveBanxico').value;
        banco.banIdSica = this.funcForm.get('claveSica').value;
        banco.banIdCasaBolsa = this.funcForm.get("claveSiif").value;
        banco.banIdFondos = this.funcForm.get("claveSabi").value;
        banco.banEstatus = this.valueEstatus;
        banco.banNombre = this.funcForm.get("nombre").value;
        banco.paiClave = this.funcForm.get('combPais').value;
        banco.paiDescripcion = null;
        banco.banDescCorta = this.funcForm.get('nombreCorto').value;
        console.log(banco);
if(this.funcForm.valid){
        this.bancoServ.updateBanco(banco).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se actualizo el item', 'info');
                this.consulta();
            }, error => {
                this.mostrarMensaje('No se pudo actualizar el item', 'error');
            }
        )
}
    }
    eliminar(e: any) {
        let banco = new BancosVO;
        banco.banId = this.banid;
        if(this.funcForm.get('checkOpTefbv').value == true){
            banco.banOperaTefbv = 'V';
        }else{
            banco.banOperaTefbv = 'F';
        }
        if(this.funcForm.get('checkOpSpeua').value == true){
            banco.banOperaSpeua = 'V';
        }else{
            banco.banOperaSpeua = 'F';
        }
        if(this.funcForm.get('checkOpInter').value == true){
            banco.banOperaIntercam = 'V';
        }else{
            banco.banOperaIntercam = 'F';
        }
        banco.banClaveBanxico = this.funcForm.get('claveBanxico').value;
        banco.banIdSica = this.funcForm.get('claveSica').value;
        banco.banIdCasaBolsa = this.funcForm.get("claveSiif").value;
        banco.banIdFondos = this.funcForm.get("claveSabi").value;
        banco.banEstatus = this.valueEstatus;
        banco.banNombre = this.funcForm.get("nombre").value;
        banco.paiClave = this.funcForm.get('combPais').value;
        banco.paiDescripcion = null;
        banco.banDescCorta = this.funcForm.get('nombreCorto').value;
console.log(banco);
        this.bancoServ.deleteBanco(banco).subscribe(
            then => {
                console.log(then);
                this.mostrarMensaje('Se elimino el item', 'info');
                this.consulta();
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
        document.getElementById('tabla').removeAttribute('disabled');
        document.getElementById('buscar').removeAttribute('disabled');
        document.getElementById('add').removeAttribute('disabled');
       document.getElementById('buscar').setAttribute('class','buscar-btn btn-img');
       document.getElementById('add').setAttribute('class','alta-button btn-img');
        document.getElementById('save').setAttribute('disabled','');
        document.getElementById('deshacer').setAttribute('disabled','');
        document.getElementById('save').setAttribute('class','save-button-des btn-img');
       document.getElementById('deshacer').setAttribute('class','deshacer-button-des btn-img');
        document.getElementById('delete').setAttribute('disabled','');
        this.funcForm.get("nombre").setValue('');
        this.funcForm.get("claveBanxico").setValue('');
        this.funcForm.get("claveSica").setValue('');
        this.funcForm.get("claveSabi").setValue('');
        this.funcForm.get("claveSiif").setValue('');
        this.funcForm.get("checkOpTefbv").setValue(false);
        this.funcForm.get("checkOpSpeua").setValue(false);
        this.funcForm.get("checkOpInter").setValue(false);
        document.getElementById('checkOpTefbv').removeAttribute('mat-checkbox-checked');
        document.getElementById('checkOpSpeua').removeAttribute('mat-checkbox-checked');
        document.getElementById('checkOpInter').removeAttribute('mat-checkbox-checked');
        this.funcForm.get("combPais").setValue('');
        this.funcForm.get("nombreCorto").setValue('');
        this.funcForm.get("optActivo").setValue(false);
        this.funcForm.get("optInactivo").setValue(false);
        document.getElementById('optActivo').removeAttribute('mat-radio-checked');
        document.getElementById('optInactivo').removeAttribute('mat-radio-checked');
        document.getElementById("checkOpSpeua").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-disabled');
        document.getElementById("checkOpTefbv").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-disabled');
        document.getElementById("checkOpInter").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-disabled');
        document.getElementById("optActivo").setAttribute('class','mat-radio-button ml-5 mat-accent mat-radio-disabled');
        document.getElementById("optInactivo").setAttribute('class','mat-radio-button ml-5 mat-accent mat-radio-disabled');
        this.selectedRowPintar = '';
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
        document.getElementById("checkOpSpeua").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before');
        document.getElementById("checkOpTefbv").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before');
        document.getElementById("checkOpInter").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before');
        document.getElementById("optActivo").setAttribute('class','mat-radio-button ml-5 mat-accent');
        document.getElementById("optInactivo").setAttribute('class','mat-radio-button ml-5 mat-accent');
        this.optActivoDisabled = false;
    this.optInactivoDisabled = false;
    this.checkOpTefDisabled =false;
        this.checkOpSpeDisabled=false;
        this.checkOpIntDisabled=false;
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
        document.getElementById("checkOpSpeua").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-disabled');
        document.getElementById("checkOpTefbv").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-disabled');
        document.getElementById("checkOpInter").setAttribute('class','mat-checkbox example-margin mat-accent mat-checkbox-label-before mat-checkbox-disabled');
        document.getElementById("optActivo").setAttribute('class','mat-radio-button ml-5 mat-accent mat-radio-disabled');
        document.getElementById("optInactivo").setAttribute('class','mat-radio-button ml-5 mat-accent mat-radio-disabled');
        this.optActivoDisabled = true;
        this.optInactivoDisabled = true;
        this.checkOpTefDisabled =true;
        this.checkOpSpeDisabled=true;
        this.checkOpIntDisabled=true;
    }

    atributosElemento(){
        document.getElementById('save').setAttribute('disabled','');
       document.getElementById('deshacer').setAttribute('disabled','');
       document.getElementById('delete').setAttribute('disabled','');
       document.getElementById('deshacer').setAttribute('class','deshacer-button-des btn-img');
       document.getElementById('save').setAttribute('class','save-button-des btn-img');
    }

    sortChange(sort: any) {
        console.log(sort);
        if (!sort.active || sort.direction === '') {
          this.dataSource.data = this.dataSourceBkp;
          return;
        }
    
        this.dataSource.data = this.dataSource.data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'claveOperador':
              return compare(a.banNombre, b.banNombre, isAsc);
            case 'habilitadoCierre':
              return compare(a.banEstatus == 'AC' ? 'Activo' : 'Inactivo', b.banEstatus == 'AC' ? 'Activo' : 'Inactivo', isAsc);
            default:
              return 0;
          }
        });
    
      }
    }
    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
