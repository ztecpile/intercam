import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EntidadVO, ProfesionVO } from '@intercam/model';
import Swal from 'sweetalert2';
import { ProfesionService } from '../../services/profesion.service';

@Component({
  selector: 'intercam-profesiones',
  templateUrl: './profesiones.component.html',
  styleUrls: ['./profesiones.component.scss']
})

export class ProfesionesComponent implements OnInit {
 
  
  funcForm: FormGroup;
  displayedColumnsProfesiones: string[] = ['observacion','proRiesgo','proClave','proNumeroClProfes'];
  dataSource = new MatTableDataSource<ProfesionVO>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  btnGuardarIf:boolean;
  btnBuscarIf:boolean;
  btnEliminarIf:boolean;
  btnDeshacerIf:boolean;
  paginador:Boolean;
  btnAltaIf: Boolean;
  profesionSelectd: ProfesionVO;
  servicesEntidad: any;
  _modalidad: any;
  ALTA_ENTIDADES: any;
  profesion: ProfesionVO;
  proDescripcion:string;
  proClave:number;
  proNumeroClProfes:string;
  proRiesgo:number;
  selectOptIdContrato: boolean;
  activeTab:boolean;
  submitted: boolean=false;
  selectedProfesion : ProfesionVO;
  constructor(private serviceProfesion : ProfesionService) {
    this.btnGuardarIf=true;
    this.btnBuscarIf=false;
    this.btnEliminarIf=true;
    this.btnDeshacerIf=true;
    this.btnAltaIf=false;
    this.paginador=false;
    this.activeTab= true;
    
   }

  ngOnInit(): void {
    this.createFunForm();
    this.funcForm.get("observacion").disable(); 
    this.funcForm.get("proRiesgo").disable();
    
  }
  onSubmit() {
    console.log("Guardando...");
  }
  
  createFunForm() {
    this.funcForm = new FormGroup({
      observacion: new FormControl('', [Validators.required,Validators.maxLength(50), Validators.pattern(/^[a-z0-9\s]*$/i)]), 
      proRiesgo: new FormControl('',[ Validators.maxLength(50), Validators.pattern(/^[0-3\s]/)]),
      proClave: new FormControl('', [Validators.required])
      });
  }
  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
   }

   habilitaCampos(e:any){
      this.btnGuardarIf= false;
      this.funcForm.get("observacion").enable(); 
      this.funcForm.get("proRiesgo").enable();
      this.activeTab= true;
      this.btnGuardarIf=true;
      this._modalidad="alta";

   }
   /**
    * 
    * Metodo que elimina la profesion seleccionada
   */
   eliminar(e:any){
     
    const profesionDelete = new ProfesionVO;
    profesionDelete.proDescripcion=this.funcForm.get("observacion").value;
    profesionDelete.proRiesgo=this.funcForm.get("proRiesgo").value;
    profesionDelete.proClave=this.funcForm.get("proClave").value;
    profesionDelete.proNumeroClProfes=null;

    this.serviceProfesion.deleteProfesion(profesionDelete).subscribe(
      then =>{
        console.debug(then);
         this.mostrarMensaje('Eliminación Exitosa','info');
         this.resetValidador();
         this.funcForm.reset();
         this.obtenerProfesiones();

      },
      error => {
        console.error(error);
        //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
        this.btnBuscarIf = true;

      });
  }
  limpiar(e:any){

  }
  resetValidador():void{
    this.funcForm.reset();
    this.funcForm.get("observacion").setValue(''); 
    this.funcForm.get("proRiesgo").setValue('');
    this.funcForm.get("observacion").clearValidators(); 
    this.funcForm.get("proRiesgo").clearValidators();
    this.funcForm.get("observacion").disable(); 
    this.funcForm.get("proRiesgo").disable();
    this.btnGuardarIf=true;
    this.btnBuscarIf=false;
    this.btnEliminarIf=true;
    this.btnDeshacerIf=true;
    this.btnAltaIf=false;
    this.selectedProfesion='';
     
  }
 

  validaDatos(e:any):Boolean{
    
     //this.guardarProfesion(this.profesion);
     this.resetValidador();   

    return true;
  }
  guardarProfesion(): void{
    let profesion = new ProfesionVO;
    //profesion.proClave=this.proClave;
    profesion.proDescripcion=this.funcForm.get('observacion').value;
    profesion.proRiesgo=this.funcForm.get('proRiesgo').value;
    profesion.proNumeroClProfes=this.proNumeroClProfes;
 
    this.serviceProfesion.saveProfesion(profesion).subscribe(
      then =>{
        profesion = then;
        this.mostrarMensaje('Registro Exitoso','info');
        this.btnBuscarIf = false;
        this.btnAltaIf = true;
        this.btnEliminarIf = true;
        this.btnGuardarIf = true;
        this.btnDeshacerIf = true;
        this.obtenerProfesiones();
      },
      error => {
        console.error(error);
        //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
        this.btnBuscarIf = false;
        this.btnAltaIf = true;
        this.btnEliminarIf = true;
        this.btnGuardarIf = true;
        this.btnDeshacerIf = true;
      });
  }
  /**Metodo que actualiza la profesion sel */
  updateProfesion(): void{
     let profesionNew = new ProfesionVO; 

    profesionNew.proClave=this.funcForm.get('proClave').value;  
    profesionNew.proDescripcion=this.funcForm.get('observacion').value;
    profesionNew.proRiesgo=this.funcForm.get('proRiesgo').value;
    profesionNew.proNumeroClProfes=null;

    this.serviceProfesion.updateProfesion(profesionNew).subscribe(
      then =>{
        let prof = new ProfesionVO;
        //prof = then;
        this.mostrarMensaje('Actualización Exitosa','info');
        this.resetValidador();
        this.obtenerProfesiones();
      },
      error => {
        console.error(error);
        //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
        this.btnBuscarIf = true;
        this.btnBuscarIf = true;
        this.btnBuscarIf = true;
        this.btnBuscarIf = true;
        document.getElementById('tabla').removeAttribute('selected');

      });
  }

  /**mETODO QUE OBTIENE EL REGISTRO DE LA TABLA  */
  obtenerProfesiones(){
      
    this.serviceProfesion.findAllProfesion().subscribe(
      then => {
        var entidad = new ProfesionVO;
        // console.log(then);
        this.dataSource = new MatTableDataSource(then);
        
        this.dataSource.paginator = this.paginator;
        this.paginador=true;
        document.getElementById('paginadorDiv').removeAttribute('hidden');
        this.btnAltaIf=false;
      },
      error => console.error(error)
    )
  }
  selectProfesion(row : ProfesionVO){ 
    console.log("selected: ", row); 
    this.profesionSelectd=row;
    this.funcForm.get("observacion").setValue(row.proDescripcion);
    this.funcForm.get("proRiesgo").setValue(row.proRiesgo);
    this.funcForm.get("proClave").setValue(row.proClave);
    this.proDescripcion=this.funcForm.get("observacion").value;
    this.proRiesgo=this.funcForm.get("proRiesgo").value;
    this.proClave=this.funcForm.get("proRiesgo").value;
    this.proNumeroClProfes=this.funcForm.get("proRiesgo").value;
    this._modalidad="modificacion";
    this.btnGuardarIf=true;
    this.btnEliminarIf=false;
    this.btnDeshacerIf=false;
    this.funcForm.get("observacion").enable(); 
    this.funcForm.get("proRiesgo").enable();



  }
  selected(element: any) {
    console.log(element);
    this.selectedProfesion = element;
  }
  /**Metodo que valida si la descripcion sufrio algun cambio  */
  actualizacionDescripcion(event: Event){
      if(this.proDescripcion !== (event.target as HTMLInputElement).value && this._modalidad!== "alta"){
        this.btnGuardarIf=false;
        this.btnDeshacerIf=false;
        this.btnEliminarIf=false;
        this._modalidad="modificacion";
        
      }else{
        this.btnGuardarIf=false;
        this.btnDeshacerIf=false;
        this.btnEliminarIf=true;
        this._modalidad="alta"
      }
  }
  /**Metodo que valida si el nivel sufrio algun cambio  */
  actualizacionNivel(event: Event){
    this.submitted = true;
    var riesgo= this.proRiesgo;
    var riesgoEv = (event.target as HTMLInputElement).value;
     if(riesgo.toString !== riesgoEv.toString && this._modalidad!== "alta"){
      this.btnGuardarIf=false;
      this.btnDeshacerIf=false;
      this.btnEliminarIf=false;
      this._modalidad="modificacion";
      
    }else{
      this.btnGuardarIf=false;
      this.btnDeshacerIf=false;
      this.btnEliminarIf=true;
      this._modalidad="alta"
    }
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
        _this.estatusCampos(true);
      }
    });
  }

  estatusCampos(parametro:boolean){
    if(parametro){
      this.funcForm.get("observacion").setValue('');
      this.funcForm.get("proRiesgo").setValue(''); 
        
    }
}

validarModalidad(e:any):void{
  if(this._modalidad=="modificacion"){
      this.updateProfesion();
  }else{
     this.guardarProfesion();
      }
}

changeRadioOptIdContrato(event) {
  if(event){
    this.selectOptIdContrato = true;
  } else {
    this.selectOptIdContrato = false;
  }
}
}
 
