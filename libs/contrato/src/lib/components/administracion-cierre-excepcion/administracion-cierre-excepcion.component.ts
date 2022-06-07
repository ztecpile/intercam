import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AdministracionCierreExcepcionService } from '../../services/admin-cierre-excepcion.service';
import { UsuarioVO,CierreExcepVO, ProfesionVO } from '@intercam/model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'intercam-administracion-cierre-excepcion',
  templateUrl: './administracion-cierre-excepcion.component.html',
  styleUrls: ['./administracion-cierre-excepcion.component.scss']
})


export class AdministracionCierreExcepcionComponent implements OnInit {
  
  displayedColumns: string[] = ['idCce','perId','claveOperador','nombre','claveSucursal','habilitadoCierre'];
  dataSource = new MatTableDataSource<UsuarioVO>();
 funcForm: FormGroup;

  perId : number; //identificador de la persona 
  showBtnDes: boolean;
  showBtn: boolean;
  checksi: boolean = false;
  checkno: boolean = false;
  checked: boolean = false;
  valornombre: string = "";
  cierreExcepVO: CierreExcepVO;
  selectedAdmon: UsuarioVO;
  clave: string;
  idCce: number;
  constructor(private ACEService: AdministracionCierreExcepcionService, private formBuilder: FormBuilder) { 
    this.perId = Number(sessionStorage.getItem('perId'));

    console.log('perId: ', this.perId);
    this.showBtnDes = true;
    this.showBtn = false;
    
  }
  onSubmit() {
    console.log("Guardando...");
  }
  filtrar(e: any) {
    console.log(e);
    return this.dataSource.filter = e.value.trim().toLowerCase();
  } 

   limpiarFormulario(e:any) {
  console.log('limpiarFormulario');
  this.funcForm.get("perNom").setValue(''); 
    this.funcForm.get("optSi").setValue(false);
    this.funcForm.get("optNo").setValue(false);
    this.funcForm.get("optNo").clearValidators(); 
    this.funcForm.get("perNom").clearValidators(); 
    this.funcForm.get("optSi").clearValidators();
    this.showBtnDes = true;
    this.showBtn = false;
    this.checksi = false;
  this.checkno = false;
  this.valornombre = '';
  }
  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }
  onchange(){
    this.showBtnDes = false;
    this.showBtn = true;
  }
  selected(element: any){
    console.log(element);
    this.selectedAdmon = element;
    let userSelec:UsuarioVO = element;
    console.log(userSelec);
    console.log(this.funcForm);
    this.perId = userSelec.idPersona;
    this.valornombre = userSelec.perNomCorto;
    this.clave = userSelec.perEmpleadoUsuario;
    this.idCce = userSelec.cierreExcep.idCce;
    this.funcForm.get('perNom').setValue(userSelec.perNomCorto);
    if(element.cierreExcep.cceCierreexcep == 'V'){
      this.funcForm.get('optSi').setValue(true);
      this.checksi = true;
      this.checkno = false;
      this.funcForm.get('optNo').setValue(false);
    }else{
      this.funcForm.get('optNo').setValue(true);
      this.funcForm.get('optSi').setValue(false);
      this.checksi = false;
      this.checkno = true;
    }
   
    

  }
updateAce(el: any): void{
  console.log(el);
  console.log(this.perId);
  console.log(this.clave);
  console.log(this.checksi);
  console.log(this.checkno);
  let cierreExcepVO= new CierreExcepVO;
  console.log(cierreExcepVO);
  cierreExcepVO.idCce = this.idCce;
  cierreExcepVO.perId = Number(this.perId);
  cierreExcepVO.cceUsuabre = this.clave;
  cierreExcepVO.cceUsucierra = this.clave;
  if( this.checksi == true){
    cierreExcepVO.cceCierreexcep = 'V';
  }else{
    cierreExcepVO.cceCierreexcep = 'F';
  }
  // cierreExcepVO.perId = 85;
  // cierreExcepVO.cceUsuabre = 'UTAPIA';
  // cierreExcepVO.cceUsucierra = 'UTAPIA';
  // cierreExcepVO.cceCierreexcep = 'V';
  this.ACEService.getActualizarOperador(cierreExcepVO).subscribe(
    then =>{
      this.mostrarMensaje('Actualización Exitosa','info');
        this.limpiarFormulario(el);
        
    },
    error => {
      console.error(error);
      this.onchange();
    }
  )
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
  }).then(function(result){
    if(result.isConfirmed){
      _this.consulta();
    }
  });
}
  changeRadioSi(e: any){
    console.log(e);
   this.selectedRadio('si')
    this.onchange();
    if(e){
      this.checksi = true;
      this.checked = true;
    } else {
      this.checksi = false;
      this.checked = true;
    }
  }
  changeRadioNo(e: any){
    console.log(e);
   this.selectedRadio('no')
    this.onchange();
    if(e){
      this.checkno = true;
      this.checked = true;
    } else {
      this.checkno = false;
      this.checked = false;
    }
  }

  selectedRadio(id:string): void{
    if(id === 'si'){
      this.checkno = false;
    }
    if(id === 'no'){
      this.checksi = false;
    }
  }
  createFunForm() {
    this.funcForm = new FormGroup({
      perNom: new FormControl('', [Validators.required]),
      optSi: new FormControl(false, [Validators.required]),
      optNo: new FormControl(false, [Validators.required]),
      claveOperador: new FormControl('',[Validators.required])
    });}

    consulta(){
      this.ACEService.findAdministracionCierreExcepcion().subscribe(
        then => {
          console.log(then);
         
          this.dataSource = new MatTableDataSource(then);
        },
          error => {
            console.error('error', error);
          }
        );
    }

  ngOnInit(): void {
    
    this.createFunForm();
    this.funcForm.get("perNom").disable(); 
    this.funcForm.get("optNo").disable();
    this.funcForm.get("optSi").disable();
 this.consulta();
  }

}
