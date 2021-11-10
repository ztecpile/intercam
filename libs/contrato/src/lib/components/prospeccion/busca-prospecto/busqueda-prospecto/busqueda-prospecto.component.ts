import { DatePipe } from '@angular/common';
import { AfterContentInit, Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Const, EjecutivoAsistenteVO, PaisVO, PersonaFisicaVO, PersonaVO, ProspeccionUtil, TipoPersonaVO, UsuarioVO } from '@intercam/model';
import { CatContratoService } from 'libs/contrato/src/lib/services/cat-contrato.service';
import { CorporativoCommonsService } from 'libs/contrato/src/lib/services/corporativo-commons.service';
import { DireccionService } from 'libs/contrato/src/lib/services/direccion.service';
import { PersonaService } from 'libs/contrato/src/lib/services/persona.service';
import { ProspeccionService } from 'libs/contrato/src/lib/services/prospeccion.service';
import { UsuarioService } from 'libs/contrato/src/lib/services/usuario.service';
import { Prospeccion } from 'libs/contrato/src/lib/util/Prospeccion';
import Swal from 'sweetalert2';

@Component({
  selector: 'intercam-busqueda-prospecto',
  templateUrl: './busqueda-prospecto.component.html',
  styleUrls: ['./busqueda-prospecto.component.scss']
})
export class BusquedaProspectoComponent implements AfterContentInit {

  form: FormGroup;

  usuarioSesion = new UsuarioVO;

  listaEjeAsistente: EjecutivoAsistenteVO[] = [];
  
  ejeAsisteSelected: number;

  arrTipoPer: TipoPersonaVO[] = [];
  listaAsistente: EjecutivoAsistenteVO[]=[];
  arrPais: PaisVO[] = [];
  arrNegocio: any[];
  MAXIMO_NUM_CTES: number;
  _valLimiteProspectos:boolean;

  showID: boolean;
  showNSS: boolean;
  showFM3: boolean;
  showPF :boolean = true;
  showPM : boolean;
  lblNombRzSocial: string = 'Nombre(s)';

  /**
  * Mantiene una referencia de la fecha actual.
  */
  fechaActual:Date = new Date('01/01/' + new Date().getFullYear() );

  currentDate : Date = new Date();
  tpeSelected: string= "F";
  tnaSelected: number = NaN;
  fechaNacimiento : Date;
  
  rfcMod:Boolean = false;
  processRep:Boolean = false;

  /**
  *Almacenara el rfc generado con homoclave
  */
  rfcHomoClave : String;

  _rfc:String;

  promotorProspecta:UsuarioVO;

  _modalid : string;

  @Output() MOSTRAR_RESULTADO_BUSQUEDA = new EventEmitter<any>();
  
  @Output() MOSTRAR_ALTA_PROSPECTO = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _personaService: PersonaService,
    private _direccionService: DireccionService,
    private _commonsService : CorporativoCommonsService,
    private _prospeccionService: ProspeccionService,
    private _catalogoService : CatContratoService,
    private _datePipe: DatePipe) { }
  
    ngAfterContentInit(): void {
    this.getUsuario();
    this.cargarCatalogos();
    this.obtenerParametros();
    this.createFunForm();
    this.mostrarEjecutivos();
  }

  async getUsuario() {
    const usuStr = sessionStorage.getItem('usuarioVO');
    if (usuStr) {
      this.usuarioSesion = JSON.parse(usuStr);
    }
  }

  cargarCatalogos(){
    this._personaService.findTipoPersona().subscribe(
      then => this.arrTipoPer = then,
      error => console.error(error)
    );
    
    this._direccionService.findAllPaises().subscribe(
      then => {
        this.arrPais = then;
      },
      error => console.error(error)
    );

    this._catalogoService.findTipoContrato().subscribe(
      then => {
        this.arrNegocio = then;
      },
      error => error.error(error)
    );
  }

  obtenerParametros(){
    this._commonsService.getCommonParameter('MAXIMO_NUM_CTES').subscribe(
       then => {
         this.MAXIMO_NUM_CTES = Number(then);
       }, error => console.error(error));
  }

  createFunForm() {
    this.form = this.formBuilder.group({
      tipoPersona: ['F', Validators.required],
      ejecutivosAsiste: [''],
      cboPais: [''],
      RFC : new FormControl(''),
      perNom: new FormControl('',Validators.required),
      apePaterno: new FormControl('',Validators.required),
      apeMaterno: new FormControl(''), 
      fNac: new FormControl(''),
      NSS: new FormControl(''),
      FM3: new FormControl(''),
      ID: new FormControl('')
    });
  }
  
  mostrarEjecutivos(){
    if(this.usuarioSesion.listaEjecutivosSoyAsistente.length > 0){
      //se agrega el ejecutivo en session a la lista
      const ejecutivoSession: EjecutivoAsistenteVO = new EjecutivoAsistenteVO();
      ejecutivoSession.asistenteId = this.usuarioSesion.idPersona;
      ejecutivoSession.ejecutivoId = this.usuarioSesion.idPersona;
      ejecutivoSession.nombreEjecutivo = this.usuarioSesion.perNomCorto;
      //se agregan todos los ejecutivos que asiste el promotor
      this.listaEjeAsistente = [].concat(this.usuarioSesion.listaEjecutivosSoyAsistente);
      this.listaEjeAsistente.unshift(ejecutivoSession);
      this.form.get('ejecutivosAsiste').setValue(ejecutivoSession.ejecutivoId);
    }
  }
  
  // eventos de formulario de la busqueda del prospecto //

  changeTipoPer(tpeClave: string) {
    this.resetValores();
    if (tpeClave && tpeClave === 'F') {
      this.lblNombRzSocial = 'Nombre(s)';
      this.form.get("apePaterno").setValidators([Validators.required]);
      this.form.get("apePaterno").updateValueAndValidity();
      this.form.get('RFC').enable();
      this.showPM = false;
      this.showPF = true;
     if(this.tnaSelected == 3){
       this.showNSS=true;
       this.showFM3 = false;
     }else if(this.tnaSelected ===2 || this.tnaSelected > 3){
       this.showFM3 = true;
       this.showNSS = false;
     }
    } else {
      //cuando la persona es moral
      this.form.get("apePaterno").clearValidators();
      this.form.get("apePaterno").updateValueAndValidity();
      this.lblNombRzSocial= 'Denominación o Razón Social';
      this.showPF = false;
      this.showPM = true;
      this.showNSS = false;
      this.showFM3 = false;
      if(this.tnaSelected.toString() != '' && this.tnaSelected !=1){
        this.form.get('RFC').disable();
        this.form.get('ID').enable();
      }else {
        this.form.get('RFC').enable();
        this.form.get('ID').disable();
      }
      this.showID = true;
     }
    this.tpeSelected = tpeClave;
  }

  changeEjeAsiste(ejeAsiste: number){
    this._valLimiteProspectos = false;
    this.ejeAsisteSelected = ejeAsiste;
    this.obtenerLimiteProspecto(this.ejeAsisteSelected,false);
    
    this._usuarioService.getUsuario(this.ejeAsisteSelected).subscribe(
      then =>{
        this.promotorProspecta = then;
      },
      error => console.error(error)
    );
  }

  changeNacionalidad(paiClave: number) {
    if (this.tpeSelected === 'F'){
      this.form.get('RFC').enable();
      if (paiClave === 1) { // si es nacional
        this.showNSS = false;
        this.showFM3 = false;
      } else if(paiClave ==3 && this.tpeSelected == 'F') {
        this.showNSS= true;
        this.showFM3=false;
      } else if (paiClave ===2 || paiClave > 3){
       this.showFM3= true;
       this.showNSS = false;
      }
      
    }else if(this.tpeSelected == 'M' ) { 
      this.showNSS = false;
      this.showFM3 = false;
      this.showID = true;
      if(!isNaN(this.tnaSelected) && paiClave !==1){
        this.form.get('ID').enable();
        this.form.get('RFC').disable();
      }else if(!isNaN(this.tnaSelected) && paiClave ==1){
        this.form.get('RFC').enable();
        this.form.get('ID').disable();
      }
    }
    this.tnaSelected = paiClave;
  }

  fechaSeleccionada(dateRecibe: Date): void {
    this.fechaNacimiento = dateRecibe;
  }

  textInputRFC(input:string){ //funcion para el rfc/ y que haga la busqueda por este medio, activa validadores si encuentra un caracter en el input
    if(input != null && input.length > 0){ //si el input tiene un caracter
      this.form.get("RFC").setValidators([this.validatorLogRFC(this.tpeSelected)]);// toma ese valor y lo manda este validador
      this.form.get("RFC").updateValueAndValidity(); //toma ese valor, lo actualiza y valida
      this.form.get('NSS').disable();// si hay algo en el RFC deshabilita el NSS
      this.form.get('FM3').disable(); // si hay algo en rfc deshabilita el FM3
    } else {
        if(input == null || input.length == 0 ){// aqui si no detecta nada le borra el validador que se agrego
          this.form.get("RFC").clearValidators(); //quita los validadores que se agregaron
          this.form.get('NSS').enable(); // habilira el NSS
          this.form.get('FM3').enable(); // habilita el FM3 
          this.form.get('RFC').disable(); // deshabilita el RFC
        }
        this.form.get('RFC').enable();
    }
  }

  textNSS(inputNSS:string){
    if(inputNSS != null && inputNSS.length > 0){ // si el NSS tiene un caractter
      this.form.get('NSS').setValidators([this.validatorSSN(this.tpeSelected)]);
      this.form.get('NSS').updateValueAndValidity();
      this.form.get("RFC").disable(); // entoces deshabilita el RFC
      this.form.get('NSS').enable(); // habilita el nss 
    
    } else {
      if(inputNSS == null || inputNSS.length > 0){ // si el NSS no tiene caracteres
        this.form.get('NSS').updateValueAndValidity();
        this.form.get('NSS').clearValidators();
        this.form.get('RFC').enable();// habilita el RFC
        this.form.get('NSS').enable();
  
      } this.form.get('NSS').enable();
      this.form.get('RFC').enable();
    }     
  }

  textFM3(inputFM3: string){
    if(inputFM3 != null && inputFM3.length > 0){ // si el  FM3 tiene un caracter
      this.form.get('RFC').disable(); // deshabilita el RFC
      this.form.get('FM3').enable(); // habilita el FM3
    }else {
      if( inputFM3 == null || inputFM3.length > 0 ){
        this.form.get('FM3').updateValueAndValidity();
        this.form.get('FM3').clearValidators();
  
      } this.form.get('FM3').enable();
        this.form.get('RFC').enable();
    }
  }
  
  validatorLogRFC(tpeClave: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      if (value != null && value.length > 0 && value.length < 10 && tpeClave == Const.PERSONA_FISICA) {
        return { 'longMinRFC': true };
      } else if (value != null && value.length > 0 && value.length < 12 && tpeClave == Const.PERSONA_MORAL) {
        return { 'longMinRFCPM': true };
      } else if(value != null && value.length > 0 && value.length > 13){
        return { 'longMaxRFC': true };
      }
      return null;
    };
  }

  validatorRFC(tpeClave: string):ValidatorFn{
    return(control: AbstractControl): { [key:string]: boolean} | null => {
      let value = control.value;
      let resultValidatorRFC = ProspeccionUtil.validaRFC(value, tpeClave);
      
      if(!resultValidatorRFC && tpeClave == 'F'){
        return {'rfcFormato' : true};
      } else if ( !resultValidatorRFC && tpeClave == 'M'){
        return {'rfcFormatoMoral' : true};
      }
      return null 
    };
  }
  
  validatorSSN(tpeClave: string):ValidatorFn{
    return(control: AbstractControl): { [key: string]:boolean } | null =>{
      let value = control.value;
      let resultValidatorSNN = ProspeccionUtil.validaSNN(value, tpeClave);
      if(!resultValidatorSNN && tpeClave =='F'){
        return {'longMaxSSN' : true};
      }
      return null
    }
  }

  onSubmit() {
    this.estatusCampos(true);

    if(this.form.invalid){
      return;
    }

    let valido:Boolean = true;
    if(this.tpeSelected == Const.PERSONA_MORAL) {
      //Validamos si escribieron algo en el rfc
      if (this.form.get('RFC').value.length > 0){
          //forzamos el validador sea requerido para que pueda validar la expresion regular 
          this.form.get("RFC").setValidators([this.validatorRFC(this.tpeSelected)]);
          this.form.get("RFC").updateValueAndValidity();
          valido = ProspeccionUtil.validaRFC(this.form.get('RFC').value, this.tpeSelected);
          this.rfcMod = true;
      }else {
          if((this.rfcMod)) {
            this.form.get("RFC").clearValidators();
            this.rfcMod = false;
          }
      }
      if(valido){
        this.btnBuscarProsp();
      }
  }
  else if(this.tpeSelected == Const.PERSONA_FISICA){
      let fechaNacimiento='';
      if(this.fechaNacimiento != undefined){
        fechaNacimiento = this._datePipe.transform(this.fechaNacimiento, 'dd/MM/yyyy');
      }
      if (fechaNacimiento.toString().trim() == ""){
          if(this.form.get('RFC').value.trim() != ""){
            this.form.get("RFC").setValidators([this.validatorRFC(this.tpeSelected)]);
            this.form.get("RFC").updateValueAndValidity();
            valido = ProspeccionUtil.validaRFC(this.form.get('RFC').value, this.tpeSelected);
          } else {
            this.form.get("RFC").clearValidators();
          }
      } else {
        this.form.get("RFC").clearValidators();
        //validaFormatoFecha
      }
      
      if(valido && this.fechaValidaRFC(this.tpeSelected)) {
          if(fechaNacimiento.toString().trim() != "" && this.form.get('RFC').value.trim() != "" && this.tpeSelected == Const.PERSONA_FISICA){
              if (ProspeccionUtil.validarFechaMenorHoy(this.fechaNacimiento, this.fechaActual) && this.validarCongruenciaFechas()){
                  this.generarRFC();
              }
          }else if(this.form.get('RFC').value.trim() == "" || this.tpeSelected != Const.PERSONA_FISICA){
              this.form.get("RFC").clearValidators();
              if (fechaNacimiento.toString().trim() != "") {
                  if (!ProspeccionUtil.validarFechaMenorHoy(this.fechaNacimiento, this.fechaActual)) {
                      return;
                  }
                  if(this.tpeSelected == Const.PERSONA_FISICA){
                      this.generarRFC();   
                  }else if (this.tnaSelected == Const.PAIS_CLAVE_US && this.form.get('NSS').value.trim() == ""){
                      this.generarRFC();
                  }else if ((this.tnaSelected ===2 || this.tnaSelected > 3) && this.form.get('FM3').value.trim() == ""){
                      this.generarRFC(); 
                  }else {
                      this.btnBuscarProsp();  
                  }
              }else {
                  this.btnBuscarProsp();  
              }
          }else if(fechaNacimiento.toString().trim() == "" && this.form.get('RFC').value.trim() != "") {
              this.btnBuscarProsp(); 
          }
      }
    }
    this.processRep = false;
  }

  generarRFC() {	
    if (this.form.get('RFC').value.trim() == "") {
      const latest_date = this._datePipe.transform(this.fechaNacimiento, 'dd/MM/yyyy');
      this._personaService.getRFC(this.form.get("perNom").value.trim().toUpperCase(),this.form.get("apePaterno").value.trim().toUpperCase(),
      this.form.get("apeMaterno").value.trim().toUpperCase(),latest_date).subscribe(
        then => {
          this.rfcHomoClave = then.substring(0,10);
          this.form.get('RFC').setValue(this.rfcHomoClave);
          this._rfc = this.rfcHomoClave;
          this.btnBuscarProsp();
        },
        error => error.error(error)
      );
    } else {
      this.btnBuscarProsp();
    }
  }

  validarCongruenciaFechas() : Boolean {
    var resValidacion : Boolean = true;
    const latest_date = this._datePipe.transform(this.fechaNacimiento, 'yyMMdd');
     if(this.form.get('RFC').value.substr(4, 6) != latest_date.toString()) {
        resValidacion = false;
    }
    return resValidacion;
  }

  /**
  * Metodo que valida que la fecha del RFC no sea mayor a la fecha actual
  * */
   fechaValidaRFC(tipoPersona : string):Boolean {
    
    var fechaValida : Boolean = true;
    var dateField :Date;
    
    if (this.form.get('RFC').value != "" && this.form.get('RFC').value.length >= 10){
      if (tipoPersona == Const.PERSONA_FISICA) {
        dateField = ProspeccionUtil.formatoFechaRFC(Number(this.form.get('RFC').value.substring(8,10)),
                            Number(this.form.get('RFC').value.substring(6,8)),
                            Number(this.form.get('RFC').value.substring(4,6)), this.fechaActual);
      } else if (tipoPersona == Const.PERSONA_MORAL){
        dateField = ProspeccionUtil.formatoFechaRFC(Number(this.form.get('RFC').value.substring(7,9)),
                            Number(this.form.get('RFC').value.substring(5,7)),
                            Number(this.form.get('RFC').value.substring(3,5)),this.fechaActual);
      }
      if (!dateField){
            fechaValida = false;
      } else if (!ProspeccionUtil.validarFechaMenorHoy(dateField,this.fechaActual)) {
            fechaValida = false;
      }
    }
    return fechaValida;                
  }

  btnBuscarProsp(){
    let paramsBusqueda = new Object;
    paramsBusqueda['TipoPersona'] = this.tpeSelected;
  
    var paramNomCorto;
  
    if(this.form.get('RFC').value.trim() != "" || (this.form.get('NSS').value.trim() != "") 
        || (this.form.get('FM3').value.trim() != "") || (this.form.get('ID').value.trim() != "")){
            if(this.form.get('RFC').value.trim() != "") {
                paramsBusqueda['RFC'] = this.form.get('RFC').value.trim() + "%";
            }
            if(this.form.get('NSS').value.trim() != "") {
                paramsBusqueda['NSS'] = this.form.get('NSS').value.trim() + "%";
            }  
            if(this.form.get('FM3').value.trim() != "") {
                paramsBusqueda['FM3'] = this.form.get('FM3').value.trim() + "%";
            }
            if(this.form.get('ID').value.trim() != "") {
                paramsBusqueda['FM0'] = this.form.get('ID').value.trim();
            }
    } else {
        if(this.form.get('cboPais').value != "") {
            paramsBusqueda['paisClave'] = this.form.get('cboPais').value;
        }
        if(paramsBusqueda['TipoPersona'] == Const.PERSONA_FISICA) {
          if(this.form.get('NSS').value.trim() != "") {
            paramsBusqueda['NSS'] = this.form.get('NSS').value.trim() + "%";
          }  
          if(this.form.get('FM3').value.trim() != "") {
            paramsBusqueda['FM3'] = this.form.get('FM3').value.trim() + "%";
          }
          paramNomCorto=  "*"+ this.form.get("perNom").value.toUpperCase() + "*" + this.form.get("apePaterno").value.toUpperCase() + "*";
          if(this.form.get("apePaterno").value != '' && this.form.get("apePaterno").value.length > 3){
            paramNomCorto += this.form.get("apeMaterno").value.toUpperCase() + "*";
          }
          paramsBusqueda['nomCorto'] = paramNomCorto; 
  
        } else if(paramsBusqueda['TipoPersona'] == Const.PERSONA_MORAL) {
          if(this.form.get('ID').value.trim() != "") {
            paramsBusqueda['FM0'] = this.form.get('ID').value.trim();
          }
          paramsBusqueda['nomCorto'] = "*" + this.form.get("perNom").value.toUpperCase() + "*";
        }
    }      
    this._personaService.getEstatusNegocioPersonaProspecto(paramsBusqueda,this.MAXIMO_NUM_CTES).subscribe(
      then=>{
        if(then != null){
          this.estatusCampos(false);
          let resultBusqueda = new Object;
          resultBusqueda['resultado'] = then;
          if(this.ejeAsisteSelected != undefined && this.ejeAsisteSelected > 0){
            resultBusqueda['ejeAsisteSelected'] = this.ejeAsisteSelected;
          } else if(this.form.get('ejecutivosAsiste').value != ''){
            resultBusqueda['ejeAsisteSelected'] = this.form.get('ejecutivosAsiste').value; 
          }
          if(this.promotorProspecta != undefined){
            resultBusqueda['promotorProspecta']= this.promotorProspecta;
          }
          resultBusqueda['cveTipoPersona'] = this.tpeSelected;
          resultBusqueda['perNom'] = this.form.get("perNom").value.toUpperCase();
          resultBusqueda['apePaterno'] = this.form.get("apePaterno").value.toUpperCase();
          resultBusqueda['apeMaterno'] = this.form.get("apeMaterno").value.toUpperCase();
          resultBusqueda['paisClave'] = this.tnaSelected;
  
          this.MOSTRAR_RESULTADO_BUSQUEDA.emit(resultBusqueda);
        } else {
          this.estatusCampos(false);
          this._modalid = "alta";
          this._valLimiteProspectos = false;
          this.obtenerLimiteProspecto((this.ejeAsisteSelected != undefined && this.ejeAsisteSelected > 0) ? this.ejeAsisteSelected: this.usuarioSesion.idPersona, true);
        }
      },
      error => {
        console.error(error)
      }
    );
  }
  
  obtenerLimiteProspecto(ejecutivoId:number, parametro:boolean){
    this._prospeccionService.obtenerLimiteProspectos(ejecutivoId).subscribe(
      then =>{
        this._valLimiteProspectos = then;
        if(parametro){
          if(!this._valLimiteProspectos){
            this.mostrarMensaje('Excediste el Número de Prospectos','warning');
            return;
           } else{
            this.mostrarMensajeNoExistenCoincidencias(Const.noExisteProspecto,'warning');
           }
        }
      },
      error => console.error(error)
    );
  }

  mostrarMensajeNoExistenCoincidencias(mensaje: string, tipoMensaje: any){
    const _this= this;
    Swal.fire({
      denyButtonText:'No',
      confirmButtonText: 'Si', 
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        denyButton: 'button button1',
        popup:'sweet-modal',
      },
      icon: tipoMensaje,
      showCloseButton: true,
      showDenyButton: true,
      showConfirmButton: true,
      text: mensaje,
      background: ' linear-gradient (rgba(0,0,0,.6), rgba(0,0,0,.6)'
  
    }).then(function(result){
      if(result.isConfirmed){
        _this.mostrarAltaProspectoHandler();
      }
    });
  }

  //llenado de los objetos para la alta del prospecto 
  mostrarAltaProspectoHandler(){
     var persona = new PersonaVO;
     var personaFisica: PersonaFisicaVO;
   
     //tipo Persona  
     persona.tipoPersonaVO = ProspeccionUtil.obtenerTipoPersona(this.tpeSelected, this.arrTipoPer);
     
     var nombreCompleto :String = this.form.get('perNom').value;
     if(this.form.get('apePaterno').value !== ''){
       nombreCompleto = nombreCompleto + " " +  this.form.get('apePaterno').value;
     }
     if(this.form.get('apeMaterno').value !== ''){
       nombreCompleto = nombreCompleto + " " + this.form.get('apeMaterno').value;
     }
   
     // 03/11/2013 se implementa el envío de persona fisica esto para solucion al bug 3861
     if(this.tpeSelected === Const.PERSONA_FISICA){
        personaFisica = new PersonaFisicaVO;
        personaFisica.pefNombre = this.form.get('perNom').value;
        personaFisica.pefPaterno = this.form.get('apePaterno').value;
        personaFisica.pefMaterno = this.form.get('apeMaterno').value;
   
        //gjesus Para guardar la fecha de nacimiento 
        const latest_date = this._datePipe.transform(this.fechaNacimiento, 'yyMMdd');
        if(latest_date != undefined && latest_date.length > 0){
          personaFisica.pefFNacimientoStr = this.fechaNacimiento.toString();
        }
        //guarda nacionalidad seleecionada
        if(this.tnaSelected === Const.PAIS_CLAVE_US){
           personaFisica.pefNss= this.form.get('NSS').value;
        } else if (this.tnaSelected === 2 && this.tnaSelected > 3){
           personaFisica.pefNoFm3 = this.form.get('FM3').value;
        }
     } else {
        if (this.tnaSelected !== null){
          persona.paiClaveResidencia = this.tnaSelected;
        }
     }
     
     //nombreCorto
     persona.perNomCorto =nombreCompleto.toUpperCase();
   
     if(this.form.get('RFC').value !== null){
        persona.perRfc = this.form.get('RFC').value;
     }
       
     if(this.tnaSelected !== null){  
       persona.paiClave = this.tnaSelected;
       if(this.tnaSelected == 1){
         persona.perNacionalidad = true;
       } else if(this.tnaSelected !=1){
         persona.perNacionalidad = false;
       } else {
            persona.perNacionalidad = true;
       }
     }
     //esta es la funcion que lleva a la alta de prospecto
     this.mostrarAltaProspecto(persona, personaFisica);
  }

  mostrarAltaProspecto(datosPersona: PersonaVO, personaFisica: PersonaFisicaVO ){
    let altaProspectoEvent = new Prospeccion;
    altaProspectoEvent.modalidad = this._modalid;

    //OCRUZ 03/11/2013 se implementa el envío de persona fisica esto para solucion al bug 3861
    altaProspectoEvent.personaFisica = personaFisica;
    
    if(this.tnaSelected!= null){
      altaProspectoEvent.paisClave = this.tnaSelected;
    }
    
    if(this.tpeSelected == 'M' && this.form.get('ID').value != '') { //si el tipo de persona es Moral
      datosPersona.perRfc = this.form.get('ID').value;
    }
    
    altaProspectoEvent.persona = datosPersona;
    altaProspectoEvent.isBuscaPros = true;
    
    //se implementa el envío(a Prospeccion.mxml) del usuario al que se le va asignar el prospecto
    //para poder realizar la validacion del bloqueo de divisas banco persona moral Reque - ME18-08-278
    altaProspectoEvent.promotorProspecta = this.promotorProspecta != null ? this.promotorProspecta : this.usuarioSesion;
    
    this.MOSTRAR_ALTA_PROSPECTO.emit(altaProspectoEvent);
  }

  //mostrar warnings
  mostrarMensaje(mensaje: string, tipoMensaje: any){
    const _this= this;
    Swal.fire({
      confirmButtonText: 'Aceptar', 
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title',
        confirmButton: 'button button1',
        popup:'sweet-modal',
      },
      icon: tipoMensaje,
      showConfirmButton: true,
      text: mensaje,
      background: ' linear-gradient (rgba(0,0,0,.6), rgba(0,0,0,.6)'
    });
  }
  
  estatusCampos(parametro:boolean){
    if(parametro){
      this.form.get('RFC').enable();
      this.form.get('NSS').enable();
      this.form.get('FM3').enable();
      this.form.get('RFC').enable();
      this.form.get('ID').enable();
    } else {
      if(this.tpeSelected === Const.PERSONA_FISICA){
        if(this.tnaSelected == 3) {
          if(this.form.get('RFC').value.trim() != ''){
            this.form.get('NSS').disable();
          } else if(this.form.get('NSS').value.trim() != ''){
            this.form.get('RFC').disable();
          }
        } else if (this.tnaSelected ===2 || this.tnaSelected > 3){
          if(this.form.get('RFC').value.trim() != ''){
          this.form.get('FM3').disable();
          } else if(this.form.get('FM3').value.trim() != ''){
          this.form.get('RFC').disable();
          }
        }
      } else if(this.tpeSelected === Const.PERSONA_MORAL){
        if(this.form.get('RFC').value.trim() != ''){
          this.form.get('ID').disable();
        } else if(this.form.get('ID').value.trim() != ''){
          this.form.get('RFC').enable();
        } else {
          this.form.get('ID').disable();
        }
      }
    }
  }

  resetValores(){
    this.form.get('cboPais').setValue('');
    this.form.get('perNom').setValue('');
    this.form.get('apePaterno').setValue('');
    this.form.get('apeMaterno').setValue('');
    this.form.get('RFC').setValue('');
    this.form.get('FM3').setValue('');
    this.form.get('NSS').setValue('');
    this.form.get('ID').setValue('');
    this.form.get('fNac').setValue('');
  }

  getCtr(name: string, group = ''): FormControl {
    if (group || group === '') {
        return this.form.get(name) as FormControl;
    }
    else {
        return this.form.get([group, name]) as FormControl
    }
  }

}
