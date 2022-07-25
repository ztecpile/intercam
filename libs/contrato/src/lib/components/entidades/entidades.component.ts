import { LiveAnnouncer } from '@angular/cdk/a11y';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EntidadVO, MunicipVO, PaisVO } from '@intercam/model';
import Swal from 'sweetalert2';
import { DireccionService } from '../../services/direccion.service';
import { EntidadServices } from '../../services/entidades.services';

@Component({
  selector: 'intercam-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.scss']
})
export class EntidadesComponent implements OnInit {
 //  nombre del FormGroup que contiene los controles
  //----------------------------------
  dataSourceConcidencia: MatTableDataSource<EntidadVO> = new MatTableDataSource();

  funcForm: FormGroup;
  displayedColumnsEntidades: string[] = ['Entidad','Clave'];
  dataSource = new MatTableDataSource<EntidadVO>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator ;
  @ViewChild(MatSort) sort: MatSort ;
  entidadVO = new EntidadVO;
  municipioVO = new MunicipVO;

  entidadesSelectd: EntidadVO;
  arrPais: PaisVO[] = [];
  listaEntidad : EntidadVO[]=[];
  codigoPostal : string;
  entidades : EntidadVO;
  entidadEdit : EntidadVO;
  delegacion : MunicipVO;
  btnGuardarIf:boolean;
  btnAltaIf: Boolean;
  btnBuscarIf:boolean;
  btnEliminarIf:boolean;
  btnDeshacerIf:boolean;
  arrPaisesFiscales: PaisVO[] = [];
  readonly ALTA_ENTIDADES= "alta";
  _modalidad = this.ALTA_ENTIDADES;
  readonly MODIFICACION_ENTIDADES :String= "modificacion";
  municipios: MunicipVO[]=[];
  logi: any;
  entidad:string;
  abreviatura:string;
  claveCNBV:string;
  codigBrox:string;
  nivelRiesgo:string;
  paginador: boolean;
  tableEnt: boolean;
  submitted: boolean=false;
  selectedEnt: any;
  constructor(private liveAnnouncer: LiveAnnouncer,private formBuilder: FormBuilder,private servicesEntidad: EntidadServices,private _direccionService: DireccionService) {
    this.btnGuardarIf=true;
    this.btnBuscarIf=true;
    this.btnEliminarIf=true;
    this.btnDeshacerIf=true;
    this.btnAltaIf=false;
    this. entidadEdit= new EntidadVO;
    this.tableEnt= false;
   }

  ngOnInit(): void {
    this._modalidad="";
    this.createFunForm();
    this.cargaCatalogos();
    this.funcForm.get('entidad').disable();
    this.funcForm.get('abreviatura').disable();
    this.funcForm.get('claveCNBV').disable();
    this.funcForm.get('codigoBroxel').disable();
    this.funcForm.get('nivelRiesgo').disable();
    this. entidadEdit= new EntidadVO;
    this.dataSource.filterPredicate = 
    (data: EntidadVO, filter: string) => data.entDescripcion.indexOf(filter) != -1; 
    this.submitted=false;
  }

  onSubmit() {
    this.submitted = true;
    console.log("Guardando...");
    this.funcForm.value;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

 
  createFunForm() {
    this.funcForm = this.formBuilder.group({
      pais: new FormControl('', [Validators.required]),
      entidad: new FormControl('', [Validators.required, Validators.pattern(/^[a-z\s]*$/i)]),
      abreviatura: new FormControl('', [Validators.pattern(/^[a-z\s]*$/i)]),
      claveCNBV: new FormControl('',  [Validators.pattern(/^[0-9]*$/i)]),
      codigoBroxel: new FormControl('', [Validators.pattern(/^([0-9])*$/)]),
      entClave: new FormControl('', ), 
      nivelRiesgo: new FormControl('', [Validators.pattern(/^([0-9])*$/)], ),
      cboPaisOr:['']
     });
  }

  
  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl 
    
    else return this.funcForm.controls[group].get(name) as FormControl
   }
  
 
  setValue(){

  }
  cargaCatalogos() {
    this._direccionService.findAllPaises().subscribe(
      then => {
        this.arrPais = then;
        for (let i = 0; i < this.arrPais.length; i++) {
          if(i == 0){
            this.funcForm.get('cboPaisOr').setValue(this.arrPais[i].paiClave);
            break;
          }
        }
        this.btnBuscarIf= true;
      },
      error => console.error(error)
    )
  }

  resetValidador():void{
    this.funcForm.reset();
    this.btnGuardarIf=true;
    this.btnBuscarIf=true;
    this.btnEliminarIf=true;
    this.btnDeshacerIf=true;
    this.btnAltaIf=false;
    this.funcForm.get("pais").clearValidators();
    this.funcForm.get("entidad").setValidators(Validators.required);
    this.funcForm.get("abreviatura").clearValidators();
    this.funcForm.get("claveCNBV").clearValidators();
    this.funcForm.get("codigoBroxel").clearValidators();
    this.funcForm.get("nivelRiesgo").clearValidators();
    this.funcForm.get("cboPaisOr").clearValidators();
      
    this.funcForm.get("entidad").disable();
    this.funcForm.get("abreviatura").disable();
    this.funcForm.get("claveCNBV").disable();
    this.funcForm.get("codigoBroxel").disable();
    this.funcForm.get("nivelRiesgo").disable();
    document.getElementById("paginadorDiv").setAttribute("hidden", "true");
     this.selectedEnt ="";
     this.funcForm.reset();
     this.submitted = true;
   
  }

  /**Metodo que actualiza la entidad */
  updateEntidad(entidadesNew : EntidadVO, entidadesOld: EntidadVO): void{
     let entidadSave = new EntidadVO;
     entidadSave.entDescripcion= this.funcForm.get("entidad").value;
     entidadSave.entAbrv= this.funcForm.get("abreviatura").value;
     entidadSave.entCnbvClave= this.funcForm.get("claveCNBV").value;
     entidadSave.entIsoCodeBrx= this.funcForm.get("codigoBroxel").value;
     entidadSave.entRiesgo= this.funcForm.get("nivelRiesgo").value;
     entidadSave.paiClave= this.funcForm.get("cboPaisOr").value;
     //entidadSave.municipiosVO=;
     entidadSave.entClave= this.funcForm.get("entClave").value;
 
     if(this.funcForm.valid){
      this.servicesEntidad.updateEntidad(entidadSave).subscribe(
        then =>{
  
          //this.entidadVO = then;
          this.mostrarMensaje('Actualización Exitosa','info');
          this.resetValidador();
          this.btnBuscarIf = true;
          this.btnBuscarIf = true;
          this.btnBuscarIf = true;
          this.btnBuscarIf = true;
        },
        error => {
          console.error(error);
          //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
          this.btnBuscarIf = true;
          this.btnBuscarIf = true;
          this.btnBuscarIf = true;
          this.btnBuscarIf = true;
  
        });
     }
    
  }
    /**
    * 
    * Metodo que elimina la profesion seleccionada
   */
     eliminar(e:any){
     
      let mun : MunicipVO []=[];
      const entidadDelete = new EntidadVO;
      entidadDelete.entDescripcion= this.funcForm.get("entidad").value;
      entidadDelete.entAbrv= this.funcForm.get("abreviatura").value;
      entidadDelete.entCnbvClave= this.funcForm.get("claveCNBV").value;
      entidadDelete.entIsoCodeBrx= this.funcForm.get("codigoBroxel").value;
      entidadDelete.entRiesgo= this.funcForm.get("nivelRiesgo").value;
      entidadDelete.paiClave= this.funcForm.get("cboPaisOr").value;
      entidadDelete.entClave=this.funcForm.get("entClave").value;
       this.servicesEntidad.deleteEntidad(entidadDelete).subscribe(
        then =>{
           this.resetValidador();
          this.mostrarMensaje('Eliminación Exitosa','info');
        },
        error => {
          console.error(error);
          //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
          this.btnBuscarIf = true;
  
        });
    }
 
  validaDatos(e:any):Boolean{
    if(this._modalidad=="modificacion"){
      this.updateEntidad(this.entidadEdit,this.entidadVO);
      this.resetValidador(); 
    }else{
    this.guardarEntidades(this.entidadVO);
    this.resetValidador();   
    }
    return true;
  }
  guardarEntidades(entidades : EntidadVO): void{
    const entidadSave  = new EntidadVO;
   
      entidadSave.entDescripcion= this.funcForm.get("entidad").value;
      entidadSave.entAbrv= this.funcForm.get("abreviatura").value;
      entidadSave.entCnbvClave= this.funcForm.get("claveCNBV").value;
      entidadSave.entIsoCodeBrx= this.funcForm.get("codigoBroxel").value;
      entidadSave.entRiesgo= this.funcForm.get("nivelRiesgo").value;
      entidadSave.paiClave= this.funcForm.get("cboPaisOr").value;
     if(this.funcForm.valid){
      this.servicesEntidad.saveEntidad(entidadSave).subscribe(
        then =>{
          this.entidadVO = then;
          this.mostrarMensaje('Alta Exitosa','info');
          this._modalidad="";
          this.funcForm.reset();
        },
        error => {
          console.error(error);
          //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
          this.btnBuscarIf = true;
          this.funcForm.reset();
          
        });
        
    }
     
   
      
  }
  obtenerEntidades(e: any){
    this._modalidad="";
    let pais =this.funcForm.get("cboPaisOr").value;
     
    this.servicesEntidad.findAllEntidadByPaiClave(pais).subscribe(
      then => {
        var entidad = new EntidadVO;
        // console.log(then);
        this.dataSource = new MatTableDataSource(then);
        this.dataSource.paginator = this.paginator;
        this.paginador=true;
        this.dataSource.sort = this.sort;
        document.getElementById('paginadorDiv').removeAttribute('hidden');
      },
      error => console.error(error) 
    )
  }
  changePais(e: any){
    this.btnBuscarIf=false;
    this.btnGuardarIf=false;
    this.funcForm.get('entidad').enable();
    this.funcForm.get('abreviatura').enable();
    this.funcForm.get('claveCNBV').enable();
    this.funcForm.get('codigoBroxel').enable();
    this.funcForm.get('nivelRiesgo').enable();
   
  }
   /**
  * En caso de estar un valor seleccionado envia el resultado.
  */
    enviarResultadoItem(item: EntidadVO) {
     }
     buscarCoincidencias () : void {
     
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
        this.funcForm.get("entidad").setValue('');
        this.funcForm.get("abreviatura").setValue(''); 
        this.funcForm.get("claveCNBV").setValue('');
        this.funcForm.get("codigoBroxel").setValue(''); 
        this.funcForm.get("nivelRiesgo").setValue('');
          
      }
  }
  habilitaCampos():void{
    this.funcForm.get('entidad').enable();
    this.funcForm.get('abreviatura').enable();
    this.funcForm.get('claveCNBV').enable();
    this.funcForm.get('codigoBroxel').enable();
    this.funcForm.get('nivelRiesgo').enable();
    this._modalidad="alta";
    this.tableEnt=true;
    var table =document.getElementById('tablaEntidad');
    table.setAttribute("style","disable: true");
    this.submitted= true;

  }

  selectEntidades(row : EntidadVO){
    console.log("selected: ", row); 
       this.entidadEdit.entDescripcion=this.entidadEdit.entDescripcion=row.entDescripcion;
      this.entidadEdit.entAbrv=this.entidadEdit.entAbrv=row.entAbrv;
      this.entidadEdit.entCnbvClave=this.entidadEdit.entCnbvClave=row.entCnbvClave;
      this.entidadEdit.entIsoCodeBrx=this.entidadEdit.entIsoCodeBrx=row.entIsoCodeBrx;
      this.entidadEdit.entRiesgo=this.entidadEdit.entRiesgo=row.entRiesgo;
      this.funcForm.get("entClave").setValue(row.entClave);
      this.funcForm.get("entidad").setValue(this.entidadEdit.entDescripcion);
      this.funcForm.get("abreviatura").setValue(this.entidadEdit.entAbrv ); 
      this.funcForm.get("claveCNBV").setValue(this.entidadEdit.entCnbvClave);
      this.funcForm.get("codigoBroxel").setValue( this.entidadEdit.entIsoCodeBrx); 
      this.funcForm.get("nivelRiesgo").setValue(this.entidadEdit.entRiesgo);
      this.funcForm.get('entidad').enable();
      this.funcForm.get('abreviatura').enable();
      this.funcForm.get('claveCNBV').enable();
      this.funcForm.get('codigoBroxel').enable();
      this.funcForm.get('nivelRiesgo').enable();
      this._modalidad="modificacion";
      this.btnEliminarIf=false;
      this.btnDeshacerIf= false;

     

   
  }
  actualizacionRiesgo(event: Event){
    this.submitted = true;
    let riesgo = event.target as unknown as HTMLInputElement["valueOf"];
    if((this.entidadEdit.entRiesgo!==this.funcForm.get('nivelRiesgo').value) && this.entidadEdit.entRiesgo!== undefined ){
        this._modalidad="modificacion";
    }else{  
      this.habilitaBotones();
      this._modalidad="alta";
    }

  }
  habilitaBotones():void{
    this.btnGuardarIf = false;
    this.btnEliminarIf = false;
    this.btnDeshacerIf = false;
   }
    deshabilitaBotones():void{
      this.btnGuardarIf = true;
      this.btnDeshacerIf = true;
      this.btnEliminarIf = true;
    }
  actualizacionCodigoBrx(event: Event){
    this.submitted = true;
    if(this.entidadEdit.entIsoCodeBrx!==((event.target as HTMLInputElement).value)&& this.entidadEdit.entIsoCodeBrx!== undefined){
        this._modalidad="modificacion";
        this.habilitaBotones();
    }else{
      this.habilitaBotones();
      this._modalidad="alta";
    }

  }
  actualizacionEntidad(event: Event){
    this.submitted = true;
    if(this.entidadEdit.entDescripcion!==((event.target as HTMLInputElement).value) && this.entidadEdit.entDescripcion!== undefined){
        this._modalidad="modificacion";
        this.habilitaBotones();
        
    }else{
      this.habilitaBotones();
      this._modalidad="alta";
    }

  }
  actualizacionClaveCBNV(event: Event){
    this.submitted = true;
    if(this.entidadEdit.entCnbvClave!==((event.target as HTMLInputElement).value)&& this.entidadEdit.entCnbvClave!== undefined){
        this._modalidad="modificacion";
        this.habilitaBotones();
    }else{
      this.habilitaBotones();
      this._modalidad="alta";
    }

  }
  actualizacionAbrev(event: Event){
    this.submitted = true;
    if(this.entidadEdit.entAbrv!==((event.target as HTMLInputElement).value)&& this.entidadEdit.entAbrv!== undefined){
        this._modalidad="modificacion";
        this.habilitaBotones();
    }else{
      this.habilitaBotones();
      this._modalidad="alta";
    }

  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this.liveAnnouncer.announce('Sorting cleared');
    }
  }
  selected(element: any) {
    console.log(element);
    this.selectedEnt = element;
  }
}
export class EntidadResponse{

}