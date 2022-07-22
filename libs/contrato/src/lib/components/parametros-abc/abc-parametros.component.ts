import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ABCParametrosVO, InfoFechaHabilVO } from '@intercam/model';
import Swal from 'sweetalert2';
import { ParametrosService } from '../../services/parametros.service';

import { AcctionButtonsComponent } from 'libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component';
import { MatSort } from '@angular/material/sort';


@Component({
    selector: 'abc-parametros-component',
    templateUrl: './abc-parametros.component.html',
})

export class ABCParametrosComponent implements OnInit ,AfterViewInit{
    
  paginador:Boolean;
  btnAltaIf: boolean;
  btnBuscarIf:boolean;
  btnDeshacerIf:boolean;
  btnGuardarIf:boolean;
  funcForm: FormGroup;
  selectParametrosRow: ABCParametrosVO;
  parametro: ABCParametrosVO =new ABCParametrosVO;
  displayedColumnsParametros: string[] = ['parNombre','parDescripcion','parValor','tipoValorCbo'];
  dataSource = new MatTableDataSource<ABCParametrosVO>();
  selectedParam: any;
  submitted: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort ;
  @ViewChild(AcctionButtonsComponent) acctionButtonsComponent: AcctionButtonsComponent;
  _modalidad: string;
   
  constructor(private servicesParametros: ParametrosService, private  formBuilder: FormBuilder) { }
  ngAfterViewInit(): void {
    this.acctionButtonsComponent.hiddeBtnEliminar(true); 
  }

  ngOnInit(): void {
    this.createFunForm();
    this.funcForm.get("parNombre").disable();
    this.funcForm.get("parDescripcion").disable();
    this.funcForm.get("parValTipo").disable();
    this.funcForm.get("parValor").disable(); 
    this.funcForm.get("tipoValorCbo").disable();
    this.btnGuardarIf=true;
    this.btnBuscarIf=false;
     this.btnDeshacerIf=true;
    this.btnAltaIf=false;
  
  }
  onSubmit() {
     this.submitted = true;
    console.log("Guardando...");
    this.funcForm.value;
  }
  
  /***Metdo para crear el formulario del form */
  createFunForm() {
    this.funcForm = this.formBuilder.group({
      parNombre: new FormControl('', [Validators.required,Validators.pattern(/^[a-z0-9\s]*$/i)]), 
      parDescripcion: new FormControl('', [Validators.required,Validators.pattern(/^[a-z0-9\s]*$/i)]),
      parValTipo: new FormControl('', [Validators.required]),
      parValor: new FormControl('', [Validators.required,Validators.pattern(/^[a-z0-9\s]*$/i)]), 
      parCaducidad: new FormControl('', [Validators.required]),
      parCaducidadStr: new FormControl('', [Validators.required]),
      tipoValorCbo:['']
      });
    }

/**Funcion que selecciona el parametro de la tabla
 * 
 */
 selectParametros(row : ABCParametrosVO){
  console.log("selected: ", row); 
  this.btnDeshacerIf= false;
  this.selectParametrosRow=row;
  this.funcForm.get("parNombre").setValue(row.parNombre);
  this.funcForm.get("parDescripcion").setValue(row.parDescripcion);
  this.funcForm.get("parValTipo").setValue(row.parValTipo);
  this.funcForm.get("parValor").setValue(row.parValor);
  this.funcForm.get("parCaducidad").setValue(row.parCaducidad);
  this.funcForm.get("parCaducidadStr").setValue(row.parCaducidadStr);
}

/**Validacion de form */
getCtr(name: string, group= ''): FormControl { 
  if (group === '') return this.funcForm.get(name) as FormControl
  else return this.funcForm.controls[group].get(name) as FormControl
 }


 habilitaBotones():void{
  this.btnGuardarIf = false;
   this.btnDeshacerIf = false;
 }
  deshabilitaBotones():void{
    this.btnGuardarIf = true;
    this.btnDeshacerIf = true;
   }


/**Obtiene los datos de la fila seleccionada */
getRecord(row) {

  if (this.acctionButtonsComponent.isModoConsulta()) {
      this.parametro = row;
      this.acctionButtonsComponent.setFilaSelecionada(row);
  }

  this.funcForm.get("parNombre").setValue(row.parNombre);
  this.funcForm.get("parDescripcion").setValue(row.parDescripcion);
  this.funcForm.get("tipoValorCbo").setValue(row.parValTipo);
  this.funcForm.get("parValor").setValue(row.parValor);
  this.funcForm.get("parCaducidad").setValue(row.parCaducidad);
  this.funcForm.get("parCaducidadStr").setValue(row.parCaducidadStr); 
  this.funcForm.get("parNombre").enable();
  this.funcForm.get("tipoValorCbo").enable(); 
  this.funcForm.get("parDescripcion").enable();
  this.funcForm.get("parValor").enable(); 
 }

 changeValor(valor:any){

  if(valor==""){

  }

 }
/**Metodo para  */
/**Metodo apara dar de alta los parametros*/
onModoGuardarClick() :void{
    let parametros = new ABCParametrosVO;
    parametros.parCaducidad = this.funcForm.get('parCaducidad').value;
    parametros.parCaducidadStr=this.funcForm.get('parCaducidadStr').value;
    parametros.parDescripcion=this.funcForm.get('parDescripcion').value;
    parametros.parNombre= this.funcForm.get('parNombre').value;
    parametros.parValTipo= this.funcForm.get('tipoValorCbo').value;
    parametros.parValor= this.funcForm.get('parValor').value;
    if(this.funcForm.valid){
      this.servicesParametros.saveParametros(parametros).subscribe(then => {
        this.mostrarMensaje("Operacion realizada con exito", 'info');
        this.funcForm.reset();
        this.onModoConsultaClick();
    });
    }
   
     


  }
   

  /**mETODO QUE OBTIENE EL REGISTRO DE LA TABLA  */
  onModoConsultaClick(){
      
    this.servicesParametros.findAllParametros().subscribe(
      then => {
        var parametro = new ABCParametrosVO;
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
 
 
  hasChenges() {
    this.submitted = true;
    this.acctionButtonsComponent.hasChenges();
    this.btnBuscarIf=false;
    this.btnDeshacerIf=false;
    
} 
modoDeshacerClick(){
  this.funcForm.reset();
  this.funcForm.get("parNombre").clearValidators();
  this.funcForm.get("parDescripcion").clearValidators();
  this.funcForm.get("tipoValorCbo").clearValidators();
  this.funcForm.get("parValor").clearValidators();
  this.funcForm.get("parCaducidad").clearValidators();
  this.funcForm.get("parCaducidadStr").clearValidators(); 
  this.funcForm.get("parNombre").disable();
  this.funcForm.get("parDescripcion").disable();
  this.funcForm.get("parValTipo").disable();
  this.funcForm.get("parValor").disable(); 
  this.funcForm.get("tipoValorCbo").disable();
}
onModoAltaClick() {
  this.funcForm.get("parNombre").enable();
  this.funcForm.get("parDescripcion").enable();
  this.funcForm.get("parValTipo").enable();
  this.funcForm.get("parValor").enable(); 
  this.funcForm.get("tipoValorCbo").enable(); 
    this.parametro = new ABCParametrosVO();
}
 


onModoActualizarClick(){
    this.servicesParametros.updateParametros(this.parametro).subscribe(then => {
        this.mostrarMensaje("Operacion realizada con exito", 'info');
        this.onModoConsultaClick();
    });
    this.parametro = new ABCParametrosVO();
}

/**Metdo para el envio del proceso de reiniciar informacion 
 * 
 */
reiniciaInfo(){
  
  this.servicesParametros.reiniciaInfo().subscribe(
    then => {
      let infoHro = new InfoFechaHabilVO;
      if(then==null){
        infoHro= then;
        Swal.fire('Envio Correcto','','info');
     }else{
      Swal.fire('Error en los Servicios de proceso','','error');
     }
     
    },
    error => console.error(error)
  )

}

/**Metodo que envia la generacion de motivos */
generaMotivos(){

  this.servicesParametros.generaMotivos().subscribe(
    then => {
      if(then==null){
        Swal.fire('Envio Correcto','','info');
     }else{
      Swal.fire('Error en los Servicios de proceso','','error');
     }
     
    },
    error => console.error(error)
  )

}
/**Metodo que envio d eOperaciones SPID */
envioSPID(){
  
  this.servicesParametros.envioSPID().subscribe(
    then => {
      if(then==null){
        Swal.fire('Envio Correcto','','info');
     }else{
      Swal.fire('Error en los Servicios de proceso','','error');
     }
     
    },
    error => console.error(error)
  )


}
/**Metodo que ejecuta el proceso de envio  */
ejecutaProceso(){
  this.servicesParametros.ejecutaProceso().subscribe(
    then => {
     if(then==null){
        Swal.fire('Envio Correcto','','info');
     }else{
      Swal.fire('Error en los Servicios de proceso','','error');
     }
     
    },
    error => console.error(error)
  )
}
selected(element: any) {
  console.log(element);
  this.selectedParam = element;
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

     }
  });
}

actualizacionParTipo(event:any){
  if(this.selectParametrosRow.parValTipo !== (event.target as HTMLInputElement).value && this._modalidad!== "alta"){
    this.btnGuardarIf=false;
    this.btnDeshacerIf=false;
     this._modalidad="modificacion";
    
  }else{
    this.btnGuardarIf=false;
    this.btnDeshacerIf=false;
    this._modalidad="alta"
  }
}
actualizacionParDesc(event:any){

}

actualizacionParValor(event:any){

}

actualizacionParNombre(event:any){

}
}