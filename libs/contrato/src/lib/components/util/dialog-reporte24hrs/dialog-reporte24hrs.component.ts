import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Const, CriterioAnalisisVO, PersonaAnalisisVO, PersonaVO } from '@intercam/model';
import { CatContratoService } from '../../../services/cat-contrato.service';
import { PersonaService } from '../../../services/persona.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'intercam-dialog-reporte24hrs',
  templateUrl: './dialog-reporte24hrs.component.html',
  styleUrls: ['./dialog-reporte24hrs.component.scss']
})
export class DialogReporte24hrsComponent implements OnInit {

  /**
  * Almacena el contrato
  */ 
  conId : Number;
   
  /**
  * Almacema el id si viene de prospeccion
  */
  prpId : Number;
    
  /**
  * Almacena el cliente
  */ 
  cliente : PersonaVO;
 
  /**
  * Almance el nombre dueño ejecutivo del cliente en caso de que exista
  */ 
  perNomCortoEjec : String;

  lstCatCriterioAnalisis: CriterioAnalisisVO[] = [];

	lstCatCriterio1 : CriterioAnalisisVO[] = [];

	lstCatCriterio2 : CriterioAnalisisVO[] = [];
	
  lstCatCriterio3 : CriterioAnalisisVO[] = [];
	
  lstCatCriterio4 : CriterioAnalisisVO[] = [];
			
	personaAnalisisVO = new PersonaAnalisisVO;

  personaAnalisis : PersonaAnalisisVO;
  
  isEnabledCmb : Boolean = true;

  /**
  * Determina de donde es invocada la pantalla para saber si muestra los botones o no
  **/
  readOnly:Boolean = false;

  usuUsuario : String;
			
	isEditionComponentesSA : Boolean;

  estatusBtnDisabled : Boolean;

  craDescripcion1: String;
  craDescripcion2: String;
  craDescripcion3: String;
  craDescripcion4: String;

  host: string;

  funcForm: FormGroup;
  
  @ViewChild('btnAceptar') btnAceptar : ElementRef;

  constructor(private _catContratoService: CatContratoService,
    private _personaService: PersonaService,
    public dialogRef: MatDialogRef<DialogReporte24hrsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      if(data){
        this.prpId = this.data['prpId'];
        this.cliente = this.data['cliente'];
        this.usuUsuario = this.data['usuUsuario'];
        this.perNomCortoEjec = this.data['perNomCortoEjec'];
        this.isEditionComponentesSA = this.data['isEditionComponentesSA'];
      }
      this.cargaCatalogo();
  }

  ngOnInit(): void {
    this.getHost();
    this.createFunForm();
    this.estatusCampos(true);
  }

  getHost(){
    this._catContratoService.getHost().subscribe(
      ( result: string ) =>
      (this.host = result),
      (error: any) => console.log("error", error)
    )
  }

  createFunForm() {
    this.funcForm = new FormGroup({
      contrato: new FormControl(''),
      nombre: new FormControl(''),
      duenio: new FormControl(''),
      listaPerBloq: new FormControl(''),
      cmbListaPB: new FormControl(''),
      DocsSospechoso: new FormControl(''),
      cmbDocsS: new FormControl(''),
      InfoPersSospechoso: new FormControl(''),
      cmbInfoIPerS: new FormControl(''),
      AlertaRiesgoAperCuenta: new FormControl(''),
      cmbAlertaRiesgoAper: new FormControl(''),
      comentario: new FormControl('',[Validators.required])
    });
  }


  async cargaCatalogo() {
    this.lstCatCriterioAnalisis = await this._personaService.findAllCriterioAnalisis().toPromise();

    if(this.lstCatCriterioAnalisis != null && this.lstCatCriterioAnalisis.length > 0){
      this.initFiltroCriterioAnalisis();
    }

    this.cargaDatos();
  }

  async cargaDatos() {
    this._personaService.findPersonaAnalisisbyPerId(this.cliente.perId).subscribe(
      then => {
        this.personaAnalisis = then;

        if(this.personaAnalisis != null && this.personaAnalisis.perId > 0){
					this.initCmbsCriterioAnalisis();
          this.btnAceptar_initializeHandler();
				}
      },
      error => console.error(error)
    );

    if(this.conId != undefined && !isNaN(this.conId.valueOf()) && this.conId > 0){
      this.funcForm.get("contrato").setValue(this.conId);
    }
    
    if(this.cliente != null && this.cliente.perNomCorto != null){
      this.funcForm.get("nombre").setValue(this.cliente.perNomCorto);
      this.personaAnalisisVO.perId = this.cliente.perId;
    }
    
    if(this.perNomCortoEjec != null){
      this.funcForm.get("duenio").setValue(this.perNomCortoEjec);
    }
  }

  initFiltroCriterioAnalisis(){
    if(this.lstCatCriterioAnalisis != null && this.lstCatCriterioAnalisis.length > 0){
      this.lstCatCriterio1.splice;
      this.lstCatCriterio1 = Object.assign([], this.lstCatCriterioAnalisis);
      this.lstCatCriterio1 = this.lstCatCriterio1.filter((item) => {
        return item.craIdId == Const.INT_1;
      });
      
      this.lstCatCriterio2.splice;
      this.lstCatCriterio2 = Object.assign([], this.lstCatCriterioAnalisis);
      this.lstCatCriterio2 = this.lstCatCriterio2.filter((item) => {
        return item.craIdId == Const.INT_2;
      });
      
      this.lstCatCriterio3.splice;
      this.lstCatCriterio3 = Object.assign([], this.lstCatCriterioAnalisis);
      this.lstCatCriterio3 = this.lstCatCriterio3.filter((item) => {
        return item.craIdId == Const.INT_3;
      });
      
      this.lstCatCriterio4.splice;
      this.lstCatCriterio4 = Object.assign([], this.lstCatCriterioAnalisis);
      this.lstCatCriterio4 = this.lstCatCriterio4.filter((item) => {
        return item.craIdId == Const.INT_4;
      });
      
      this.lstCatCriterioAnalisis.forEach(crit => {
        if(!isNaN(crit.craId.valueOf()) && crit.craId == Const.INT_1){
            this.funcForm.get("listaPerBloq").setValue(Const.criterio + crit.craNombre);
        } else 
          if(!isNaN(crit.craId.valueOf()) && crit.craId == Const.INT_2){
            this.funcForm.get("DocsSospechoso").setValue(Const.criterio + crit.craNombre);
        } else 
          if(!isNaN(crit.craId.valueOf()) && crit.craId == Const.INT_3){
            this.funcForm.get("InfoPersSospechoso").setValue(Const.criterio + crit.craNombre);
        } else 
          if(!isNaN(crit.craId.valueOf()) && crit.craId == Const.INT_4){
            this.funcForm.get("AlertaRiesgoAperCuenta").setValue(Const.criterio + crit.craNombre);
        }
      });
    }
  }

  initCmbsCriterioAnalisis():void {
    if(this.readOnly){
      this.isEditionComponentesSA = true;
    }
    if(this.isEditionComponentesSA){
      this.isEnabledCmb = false;
    }

    this.cmbListaPB_initializeHandler();
		this.cmbDocsS_initializeHandler();
		this.cmbInfoIPerS_initializeHandler()
		this.cmbAlertaRiesgoAper_initializeHandler();
		this.txtComentario_initializeHandler()
  }

  cmbListaPB_initializeHandler():void {
    if(!this.isEditionComponentesSA){
      this.funcForm.get("cmbListaPB").setValue('');
    } else {
      if(this.personaAnalisis != null && this.personaAnalisis.craId1 > 0){
        if (this.lstCatCriterio1 != null && this.lstCatCriterio1.length > 0) {
          for(var i= 0; i < this.lstCatCriterio1.length; i++){
            var critA:CriterioAnalisisVO = this.lstCatCriterio1[i] as CriterioAnalisisVO;
            if(critA.craId == this.personaAnalisis.craId1){
              this.funcForm.get("cmbListaPB").setValue(critA.craId);
              this.craDescripcion1 = critA.craDescripcion;
              break;
            }
          }
        }
      } else {
        this.funcForm.get("cmbListaPB").setValue('');
      }
    }
  }
  
  cmbDocsS_initializeHandler():void {
    if(!this.isEditionComponentesSA){
      this.funcForm.get("cmbDocsS").setValue('');
    } else {
      if(this.personaAnalisis != null && this.personaAnalisis.craId2 > 0){
        if (this.lstCatCriterio2 && this.lstCatCriterio2.length > 0) {
          for(var i = 0; i < this.lstCatCriterio2.length; i++){
            var critA:CriterioAnalisisVO = this.lstCatCriterio2[i] as CriterioAnalisisVO;
            if(critA.craId == this.personaAnalisis.craId2){
              this.funcForm.get("cmbDocsS").setValue(critA.craId);
              this.craDescripcion2 = critA.craDescripcion;
              break;
            }
          }
        }
      } else {
        this.funcForm.get("cmbDocsS").setValue('');
      }
    }
  }
  
  cmbInfoIPerS_initializeHandler():void {
    if(!this.isEditionComponentesSA){
      this.funcForm.get("cmbInfoIPerS").setValue('');
    } else {
      if(this.personaAnalisis != null && this.personaAnalisis.craId3 > 0){
        if (this.lstCatCriterio3 && this.lstCatCriterio3.length > 0) {
          for(var i = 0; i < this.lstCatCriterio3.length; i++){
            var critA:CriterioAnalisisVO = this.lstCatCriterio3[i] as CriterioAnalisisVO;
            if(critA.craId == this.personaAnalisis.craId3){
              this.funcForm.get("cmbInfoIPerS").setValue(critA.craId);
              this.craDescripcion3 = critA.craDescripcion;
              break;
            }
          }
        }
      } else {
        this.funcForm.get("cmbInfoIPerS").setValue('');
      }
    }
  }
  
  cmbAlertaRiesgoAper_initializeHandler():void {
    if(!this.isEditionComponentesSA){
      this.funcForm.get("cmbAlertaRiesgoAper").setValue('');
    } else {
      if(this.personaAnalisis != null && this.personaAnalisis.craId4 > 0){
        if (this.lstCatCriterio4 && this.lstCatCriterio4.length > 0) {
          for(var i = 0; i < this.lstCatCriterio4.length; i++){
            var critA:CriterioAnalisisVO = this.lstCatCriterio4[i] as CriterioAnalisisVO;
            if(critA.craId == this.personaAnalisis.craId4){
              this.funcForm.get("cmbAlertaRiesgoAper").setValue(critA.craId);
              this.craDescripcion4 = critA.craDescripcion;
              break;
            }
          }
        }
      } else {
        this.funcForm.get("cmbAlertaRiesgoAper").setValue('');
      }
    }
  }
  
  txtComentario_initializeHandler():void {
    if(!this.isEditionComponentesSA){
      this.funcForm.get("comentario").setValue('');
    } else {
      if(this.personaAnalisis != null && this.personaAnalisis.peaComentario != null){
        this.funcForm.get("comentario").setValue(this.personaAnalisis.peaComentario);
      }
    }
  }

  cmbListaPB_changeHandler(craId:Number){
    this.lstCatCriterio1.forEach(crit => {
      if(crit.craId == craId){
        this.craDescripcion1 = crit.craDescripcion;
      }
    });
    this.personaAnalisisVO.craId1 = craId;
    this.btnAceptar_initializeHandler();
  }

  cmbDocsS_changeHandler(craId:Number){
    this.lstCatCriterio2.forEach(crit => {
      if(crit.craId == craId){
        this.craDescripcion2 = crit.craDescripcion;
      }
    });
    this.personaAnalisisVO.craId2 = craId;
    this.btnAceptar_initializeHandler();
  }

  cmbInfoIPerS_changeHandler(craId:Number){
    this.lstCatCriterio3.forEach(crit => {
      if(crit.craId == craId){
        this.craDescripcion3 = crit.craDescripcion;
      }
    });
    this.personaAnalisisVO.craId3 = craId;
    this.btnAceptar_initializeHandler();
  }

  cmbAlertaRiesgoAper_changeHandler(craId:Number){
    this.lstCatCriterio4.forEach(crit => {
      if(crit.craId == craId){
        this.craDescripcion4 = crit.craDescripcion;
      }
    });
    this.personaAnalisisVO.craId4 = craId;
    this.btnAceptar_initializeHandler();
  }

  txtComentario_changeHandler(comentario:String):void {
    if(comentario != null){
      this.personaAnalisisVO.peaComentario = comentario;
    }
    this.btnAceptar_initializeHandler();
  }
  
  btnAceptar_initializeHandler() {
    this.estatusBtnDisabled = true;
    
    if(this.personaAnalisisVO != null && !isNaN(this.personaAnalisisVO.perId.valueOf()) &&
      (
        (this.personaAnalisisVO.craId1 != undefined && !isNaN(this.personaAnalisisVO.craId1.valueOf())) 
      || (this.personaAnalisisVO.craId2 != undefined && !isNaN(this.personaAnalisisVO.craId2.valueOf()))
      || (this.personaAnalisisVO.craId3 != undefined && !isNaN(this.personaAnalisisVO.craId3.valueOf())) 
      || (this.personaAnalisisVO.craId4 != undefined && !isNaN(this.personaAnalisisVO.craId4.valueOf()))
      ) &&
      (this.personaAnalisisVO.peaComentario != undefined && this.personaAnalisisVO.peaComentario != '')){
        this.estatusBtnDisabled = false;
    }
  }

  onSubmit(){
    this.estatusCampos(false);
    this.estatusBtnDisabled = true;
    this.validaDatos();
  }

  validaDatos(){
    //Validamos datos
    if(this.funcForm.invalid) {
      this.estatusBtnDisabled = false;
      return;
    }

    if(this.personaAnalisisVO != null){
      this.personaAnalisisVO.peaComentario = this.funcForm.get("comentario").value.trim();
      this.personaAnalisisVO.conId = this.conId;
      this.personaAnalisisVO.prpId = this.prpId;
      this.personaAnalisisVO.usuUsuario = this.usuUsuario;
      this.personaAnalisisVO.peaBloqueada = true;
      
      this._personaService.saveOrUpdatePersonaAnalisis(this.personaAnalisisVO).subscribe(
        then =>{
            let result: Boolean = then as unknown as Boolean;
            if(result){
              this.mostrarMensaje(Const.confirmacionRegistroProspecto, 'info');
            }
        },
        error => console.error(error)
      );
    }
  }

  mostrarMensaje(mensaje: string, tipoMensaje: any) {
    const _this = this;
    Swal.fire({
      confirmButtonText: 'Si',
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        popup: 'sweet-modal',
      },
      icon: tipoMensaje,
      allowOutsideClick : false,
      showCloseButton: true,
      showConfirmButton: true,
      text: mensaje,
      background: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))',
    }).then(function(result){
      if(result.isConfirmed){
        _this.enviarResultadoBoqueoBtns(false);
      }
    });
  }

  enviarResultadoBoqueoBtns(estatus : Boolean){
    this.dialogRef.close({data: estatus});
  }

  cancelar(){
    this.reset();
    this.dialogRef.close();
  }

  verDetalles(){
    let url = "";
    url = this.host+'/pos/CriterioAnalisisSuspensionServlet';
    window.open(url,'CriterioAnalisisSuspension');
  }

  estatusCampos(parametro:boolean){
    if(parametro){
      this.funcForm.get("contrato").disable();
      this.funcForm.get("nombre").disable();
      this.funcForm.get("duenio").disable();
      this.funcForm.get("listaPerBloq").disable();
      this.funcForm.get("DocsSospechoso").disable();
      this.funcForm.get("InfoPersSospechoso").disable();
      this.funcForm.get("AlertaRiesgoAperCuenta").disable();
    } else {
      this.funcForm.get("contrato").enable();
      this.funcForm.get("nombre").enable();
      this.funcForm.get("duenio").enable();
      this.funcForm.get("listaPerBloq").enable();
      this.funcForm.get("DocsSospechoso").enable();
      this.funcForm.get("InfoPersSospechoso").enable();
      this.funcForm.get("AlertaRiesgoAperCuenta").enable();
    }
  }

  /**
	* Regresa el componente a su estado inicial.
  **/
  reset():void {
    this.personaAnalisisVO = null;
    this.lstCatCriterioAnalisis = null;
    this.lstCatCriterio1 = null;
    this.lstCatCriterio2 = null;
    this.lstCatCriterio3 = null;
    this.lstCatCriterio4 = null;
  }

  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }

}