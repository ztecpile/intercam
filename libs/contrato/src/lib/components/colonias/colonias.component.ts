import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ColoniaVO, Const, EntidadVO, MunicipVO, PaisVO } from '@intercam/model';
import Swal from 'sweetalert2';
import { ColoniasServices } from '../../services/colonias.services';
import { PersonaService } from '../../services/persona.service';
import { DialogBusquedaCpComponent } from '../util/dialog-busqueda-cp/dialog-busqueda-cp.component';

@Component({
  selector: 'intercam-colonias',
  templateUrl: './colonias.component.html',
  styleUrls: ['./colonias.component.scss']
})
export class ColoniasComponent implements OnInit {
  
  public static readonly confirmacionRegistroProspectoColonia:string = 'Registro Exitoso.';
  public static readonly errorRegistroColonia:string = 'No se realizo el registro.';
  public static readonly modificacionExitosa:string = 'Modificaci\u00F3n exitosa.';
 /**
  * Almacena la clave del pais que viene de BuscaProspecto
  */
  _paisClave = NaN;
  /**
  * Variable que almacena la clave de le entidad seleccionada
  */
   entClave: Number;
   arrCuidad: EntidadVO[] = [];
  /**
  * Almacena la clave del pais de la dirección del prospecto
  */ 
  _paisClaveDir = NaN;

 /**
  * Almacena la lista de colonias
  **/
  arrColonia: ColoniaVO[] = [];

  displayedColumns: string[] = ['Colonia'];
  funcForm: FormGroup;
  dataSource = new MatTableDataSource();
  colonias = new ColoniaVO;
  confirmacionColonia: boolean;
  showDirMX: boolean;
  listaColoniasVo : ColoniaVO[]=[];
  codigoPostal : string;
  entidadesVo : EntidadVO;
  municipioVo : MunicipVO;
  showBtnBuscaCP: true;
  disabledCol: true;
  btnGuardarIf:Boolean;
  btnAltaIf:Boolean;
  btnBuscarIf:Boolean;
  btnEliminarIf:Boolean;
  btnDeshacerIf:Boolean;
  updateColonia:string;
  modalida: string;
  munDialogo:string;
  coloniaDialog:string;
  entidadDialog:string;
  ciudadDialog:string;
  submitted: boolean=false;
  constructor(private dialog: MatDialog,private coloniaServices :ColoniasServices,
    private _personaService: PersonaService,private formBuilder: FormBuilder
  ) {
    this.btnGuardarIf=true;
    this.btnBuscarIf=true;
    this.btnEliminarIf=true;
    this.btnDeshacerIf=true;
    this.btnAltaIf=true;
    
   }

  ngOnInit(): void {
    this.createFunForm();
     this.funcForm.get("updateColonia").disable();
     this.funcForm.get("entidad").disable();
     this.funcForm.get("alcMun").disable();
     this.funcForm.get("ciudad").disable();
  }
 buscarCodigoCP(e:any){
   this.showGetCP();
 }
 onSubmit() {
  this.submitted = true;
  console.log("Guardando...");
  this.funcForm.value;
}
  createFunForm() {
    this.funcForm = this.formBuilder.group({
      codigoPostal: new FormControl('', [Validators.required,Validators.pattern(/^[a-z\s]*$/i)]),
      entidad: new FormControl(''),
      alcMun: new FormControl(''),
      ciudad: new FormControl(''),
      updateColonia: new FormControl('', [Validators.required]),
      cp: [''],
      cboColonia:['']
     });
  }

  
  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
   }
   
   habilitaGuardar(event: Event) {
    if((this.funcForm.get("updateColonia").value != null || 
    this.funcForm.get("updateColonia").value != '')){
      this.btnGuardarIf= true;
     }
  }



 
  guardaColonia(e:any){
    this.validaModificación();
    let saveColonia = new  ColoniaVO;
    let municipio = new MunicipVO;
    let entidad = new EntidadVO;
    let listaColonias:  ColoniaVO[];

    
    //saveColonia.colClave=1;
    entidad=this.entidadesVo;
    municipio.entidadVO=entidad;
    
    saveColonia.municipioVO = this.municipioVo;
    saveColonia.colDescrip=this.funcForm.get("updateColonia").value;
    saveColonia.colCPostal=this.funcForm.get("cp").value;
    saveColonia.colAsentami="Colonia";
    saveColonia.colCiudad=this.funcForm.get("ciudad").value;
 
    if(this.funcForm.valid){
      this.coloniaServices.saveColonia(saveColonia).subscribe(
        then => {
          this.colonias = then;
          this.confirmacionColonia = true;
          this.mostrarMensaje('Registro Exitos', 'info');
        },
        error => {
          console.error(error);
          //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
          this.btnGuardarIf = true;
        });
    }
    
  
}
  buscarCP(event: Event) {
    this.submitted=true;
    if((this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir)) && (event.target as HTMLInputElement).value.length == 5){
        //this.obtenerColoniasHard();
     this.obtenerColonias(this.funcForm.get("cp").value);
    }
  }


  btnBuscarCP(e: any){
    this.submitted = true;
    if(this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir) && this.funcForm.get("cp").value !=''){
      this.obtenerColonias(this.funcForm.get("cp").value);
    }
    this.btnAltaIf=false;
    this.btnDeshacerIf=false;
  }
 /** Obtienen colonias por codigo postal */
  obtenerColonias(cp){
    var cps = new Array;
    cps.push(cp)
    let lista =JSON.parse(cp);
    
    //lista.push(cp);
    this.coloniaServices.findAllColoniasByCodPost(cps).subscribe(
      then => {
        this.arrColonia = then;
       
        for (let i = 0; i < this.arrColonia.length; i++) {
          if(i == 0){
            this.funcForm.get('cboColonia').setValue(this.arrColonia[i].colClave);
            this.listaColoniasVo = this.arrColonia;
            break;
          }
        }
      },
      error => console.error(error)
    )
  }
  
  changeColonia(colClave: number) {
    this.funcForm.get('updateColonia').setValue('');
               
    if(colClave > 0 && 
      (this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || isNaN(this._paisClaveDir))){
        var coloniaSelected = new ColoniaVO;
        for (let i = 0; i < this.arrColonia.length; i++) {
          if(this.arrColonia[i].colClave == colClave){
            this.funcForm.get("ciudad").setValue(this.arrColonia[i].colCiudad);
      //      this.colCityCodeBrx = this.arrColonia[i].colCityCodeBrx;
            coloniaSelected = this.arrColonia[i];
            break;
          }
        }
        
        this._personaService.getMunicipoByMunClaveDeColonia(coloniaSelected.municipioVO.munClave).subscribe(
          then => {
            var municipio = new MunicipVO;
          
            municipio = then;
            this.municipioVo=municipio;
            this.funcForm.get("alcMun").setValue(municipio.munDescrip);
            
            this._personaService.getEntidadByEntClaveDeMunicip(municipio.entidadVO.entClave).subscribe(
              then => {
                var entidad = new EntidadVO;
                
                entidad = then;
                this.entidadesVo=entidad;
                this.funcForm.get("entidad").setValue(entidad.entDescripcion);
                this.entClave = entidad.entClave;
                //this.entIsoCodeBrx = entidad.entIsoCodeBrx;
               
                
              },
              error => console.error(error)
            )
  
          },
          error => console.error(error)
        )
    }
    this.btnAltaIf=false;
  }
  validaDatos(e:any):Boolean {
    var datosValida : Boolean = true;
    this.resetValidadores();
    if (this.funcForm.get("cp").value.length != 5) {
      this.funcForm.get("cp").setValidators([Validators.required]);
      this.funcForm.get("cp").updateValueAndValidity();
      datosValida=false;
    }
    return datosValida;
  }
  resetValidadores():void {
    this.funcForm.get("cp").clearValidators();
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
      this.funcForm.get("cp").setValue('');
      this.funcForm.get("entidad").setValue('');
      this.funcForm.get("alcMun").setValue('');
      this.funcForm.get("ciudad").setValue('');
      this.funcForm.get("cboColonia").setValue('');
      this.funcForm.get("updateColonia").setValue('');
        
    }
  }

  habilitaCampos():void{
    this.funcForm.get("updateColonia").enable();
    this.btnAltaIf = false;
    this.btnGuardarIf=true;
  }
  
  limpiaCampos(e:any){
       this.funcForm.get("cp").setValue('');
      this.funcForm.get("entidad").setValue('');
      this.funcForm.get("alcMun").setValue('');
      this.funcForm.get("ciudad").setValue('');
      this.funcForm.get("cboColonia").setValue('');
      this.funcForm.get("updateColonia").setValue('');
      this.funcForm.get("updateColonia").disable();
      this.btnGuardarIf=true;
      this.btnDeshacerIf=true;
     
}
actualizacion(event: Event){
  this.submitted= true;
  if(this.updateColonia !== (event.target as HTMLInputElement).value){
    this.btnGuardarIf=false;
    this.btnDeshacerIf=false;
    this.btnEliminarIf=false;
    this.modalida="modificacion";
    
  }else{
    this.btnGuardarIf=true;
    this.btnDeshacerIf=true;
    this.btnEliminarIf=true;
  }
}

validaModificación():void{
  if(this.funcForm.get('updateColonia').value !== this.funcForm.get('cboColonia').value){

    this.modalida="modificacion";
  }
  if(this.funcForm.get('updateColonia').value !== '' && (this.funcForm.get('cboColonia').value == ''|| this.funcForm.get('cboColonia').value == null)){
    this.modalida="alta";

  }
}
/**Metodo que muestra la busqyeda de cp */
showGetCP(){
  const dialogRef = this.dialog.open(DialogBusquedaCpComponent,{
    width: '990px',
    disableClose:true,
    autoFocus:true,
    data: { cp: this.codigoPostal, 
            municipio:this.munDialogo,
            colonia: this.coloniaDialog}
  });

  dialogRef.afterClosed().subscribe((result) => {
    if(result !== undefined) {
      this.buscaCpHeader(result['data']);
    }
  });
}
  buscaCpHeader(result: any) {
    this.funcForm.get('cp').setValue(result.cp);
    this.obtenerColonias(result.cp);
    this.funcForm.get('cboColonia').setValue(result.colonia);
    this.changeColonia(result.colonia);
    this.btnAltaIf=false;
    this.funcForm.get("updateColonia").enable();
  }


}









