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
import { ProspeccionEvent } from 'libs/contrato/src/lib/util/ProspeccionEvent';
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';

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
  lblNombRzSocial: string = 'Nombre';
  lblPais: string = 'País de Nacimiento';

  /**
  * Mantiene una referencia de la fecha actual.
  */
  fechaActual:Date = new Date();

  currentDate : Date = new Date();
  tpeSelected: string= "F";
  tnaSelected: number = NaN;
  fechaNacimiento : Date;
  
  rfcMod:boolean = false;
  processRep:boolean = false;

  /**
  *Almacenara el rfc generado con homoclave
  */
  rfcHomoClave : string;

  _rfc:string;

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
    private _datePipe: DatePipe,
    private alertasService:AlertasService) { }
  
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
      this.getCtr('ejecutivosAsiste').setValue(ejecutivoSession.ejecutivoId);
    }
  }
  
  // eventos de formulario de la busqueda del prospecto //

  changeTipoPer(tpeClave: string) {
    this.resetValores();
    if (tpeClave && tpeClave === 'F') {
      this.lblNombRzSocial = 'Nombre(s)';
      this.lblPais = 'País de Nacimiento';
      this.getCtr('apePaterno').setValidators([Validators.required]);
      this.getCtr('apePaterno').updateValueAndValidity();
      this.getCtr('RFC').enable();
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
      this.getCtr('apePaterno').clearValidators();
      this.getCtr('apePaterno').updateValueAndValidity();
      this.lblNombRzSocial= 'Nombre de la Empresa / Nombre Comercial / Razón Social';
      this.lblPais = 'País';
      this.showPF = false;
      this.showPM = true;
      this.showNSS = false;
      this.showFM3 = false;
      if(this.tnaSelected.toString() != '' && this.tnaSelected !=1){
        this.getCtr('RFC').disable();
        this.getCtr('ID').enable();
      }else {
        this.getCtr('RFC').enable();
        this.getCtr('ID').disable();
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

  getNacionalidad(item : PaisVO):string{
    var nacionalidad : string;
    if(item != null && item.paiDescripcion != null){
        nacionalidad = item.paiDescripcion;
    } else if (item !=null){
        nacionalidad = item.paiNacionalidad;
    }
    return nacionalidad;
  }

  changeNacionalidad(paiClave: number) {
    if (this.tpeSelected === 'F'){
      this.getCtr('RFC').enable();
      this.getCtr('NSS').enable();
      this.getCtr('FM3').enable();
      this.getCtr('FM3').setValue('');
      this.getCtr('NSS').setValue('');
      if (paiClave == 1) { // si es nacional
        this.showNSS = false;
        this.showFM3 = false;
      } else if(paiClave == 3) {
        this.getCtr('RFC').clearValidators();
        this.getCtr('RFC').updateValueAndValidity();
        this.showNSS= true;
        this.showFM3=false;
      } else if (paiClave == 2 || paiClave > 3){
        this.getCtr('RFC').clearValidators();
        this.getCtr('RFC').updateValueAndValidity();
       this.showFM3= true;
       this.showNSS = false;
      }
      
    } else if(this.tpeSelected == 'M' ) {
      this.getCtr('RFC').clearValidators();
      this.getCtr('RFC').updateValueAndValidity();
      this.getCtr('RFC').setValue('');
      this.getCtr('ID').setValue('');
      this.showNSS = false;
      this.showFM3 = false;
      this.showID = true;
      if(!isNaN(this.tnaSelected) && paiClave !==1){
        this.getCtr('ID').enable();
        this.getCtr('RFC').disable();
      }else if(!isNaN(this.tnaSelected) && paiClave ==1){
        this.getCtr('RFC').enable();
        this.getCtr('ID').disable();
      }
    }
    this.tnaSelected = paiClave;
  }

  fechaSeleccionada(dateRecibe: Date): void {
    this.fechaNacimiento = dateRecibe;
    this.getCtr('RFC').setValue('');
  }

  textInputRFC(input:string){ //funcion para el rfc/ y que haga la busqueda por este medio, activa validadores si encuentra un caracter en el input
    if(input != null && input.length > 0){
      this.getCtr('RFC').setValidators([this.validatorLogRFC(this.tpeSelected)]);
      //this.getCtr('RFC').updateValueAndValidity();
      if(this.tpeSelected == 'F'){
        this.getCtr('NSS').setValue('');
        this.getCtr('FM3').setValue('');
      }
    } else {
      if(input == null || input.length == 0 ){
        this.getCtr('RFC').clearValidators();
        this.getCtr('RFC').updateValueAndValidity();
      }
    }
  }

  textNSS(inputNSS:string){
    if(inputNSS != null && inputNSS.length > 0){
      if(this.getCtr('RFC').value.length > 0){
        this.getCtr('RFC').setValue('');
        this.getCtr('RFC').clearValidators();
        this.getCtr('RFC').updateValueAndValidity();
      }
      if(this.getCtr('FM3').value.length > 0){
        this.getCtr('FM3').setValue('');
      }
    }
  }

  textFM3(inputFM3: string){
    if(inputFM3 != null && inputFM3.length > 0){
      if(this.getCtr('RFC').value.length > 0){
        this.getCtr('RFC').setValue('');
        this.getCtr('RFC').clearValidators();
        this.getCtr('RFC').updateValueAndValidity();
      }
      if(this.getCtr('NSS').value.length > 0){
        this.getCtr('NSS').setValue('');
      }
    }
  }
  
  validatorLogRFC(tpeClave: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      if (value != null && value.length > 0 && value.length < 10) {
        return { 'longMinRFC': true };
      } else if (value != null && value.length > 0 && value.length > 12 && tpeClave == Const.PERSONA_MORAL) {
        return { 'longMaxRFCPM': true };
      } else if(value != null && value.length > 0 && value.length > 13 && tpeClave == Const.PERSONA_FISICA){
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

    let valido:boolean = true;
    if(this.tpeSelected == Const.PERSONA_MORAL) {
      //Validamos si escribieron algo en el rfc
      if (this.getCtr('RFC').value.length > 0){
          //forzamos el validador sea requerido para que pueda validar la expresion regular 
          this.getCtr('RFC').setValidators([this.validatorRFC(this.tpeSelected)]);
          this.getCtr('RFC').updateValueAndValidity();
          valido = ProspeccionUtil.validaRFC(this.getCtr('RFC').value, this.tpeSelected);
          this.rfcMod = true;
      }else {
          if((this.rfcMod)) {
            this.getCtr('RFC').clearValidators();
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
          if(this.getCtr('RFC').value.trim() != ""){
            this.getCtr('RFC').setValidators([this.validatorRFC(this.tpeSelected)]);
            this.getCtr('RFC').updateValueAndValidity();
            valido = ProspeccionUtil.validaRFC(this.getCtr('RFC').value, this.tpeSelected);
          } else {
            this.getCtr('RFC').clearValidators();
          }
      } else {
        this.getCtr('RFC').clearValidators();
        //validaFormatoFecha
      }
      
      if(valido && this.fechaValidaRFC(this.tpeSelected)) {
          if(fechaNacimiento.toString().trim() != "" && this.getCtr('RFC').value.trim() != "" && this.tpeSelected == Const.PERSONA_FISICA){
              if (ProspeccionUtil.validarFechaMenorHoy(this.fechaNacimiento, this.fechaActual) && this.validarCongruenciaFechas()){
                  this.generarRFC();
              }
          }else if(this.getCtr('RFC').value.trim() == "" || this.tpeSelected != Const.PERSONA_FISICA){
              this.getCtr('RFC').clearValidators();
              if (fechaNacimiento.toString().trim() != "") {
                  if (!ProspeccionUtil.validarFechaMenorHoy(this.fechaNacimiento, this.fechaActual)) {
                      return;
                  }
                  if(this.tpeSelected == Const.PERSONA_FISICA){
                      this.generarRFC();   
                  }else if (this.tnaSelected == Const.PAIS_CLAVE_US && this.getCtr('NSS').value.trim() == ""){
                      this.generarRFC();
                  }else if ((this.tnaSelected ===2 || this.tnaSelected > 3) && this.getCtr('FM3').value.trim() == ""){
                      this.generarRFC(); 
                  }else {
                      this.btnBuscarProsp();  
                  }
              }else {
                  this.btnBuscarProsp();  
              }
          }else if(fechaNacimiento.toString().trim() == "" && this.getCtr('RFC').value.trim() != "") {
              this.btnBuscarProsp(); 
          }
      }
    }
    this.processRep = false;
  }

  generarRFC() {	
    if (this.getCtr('RFC').value.trim() == "") {
      const latest_date = this._datePipe.transform(this.fechaNacimiento, 'dd/MM/yyyy');
      this._personaService.getRFC(this.getCtr('perNom').value.trim().toUpperCase(),this.getCtr('apePaterno').value.trim().toUpperCase(),
      this.getCtr('apeMaterno').value.trim().toUpperCase(),latest_date).subscribe(
        then => {
          this.rfcHomoClave = then.substring(0,10);
          this.getCtr('RFC').setValue(this.rfcHomoClave);
          this._rfc = this.rfcHomoClave;
          this.btnBuscarProsp();
        },
        error => error.error(error)
      );
    } else {
      this.btnBuscarProsp();
    }
  }

  validarCongruenciaFechas() : boolean {
    var resValidacion : boolean = true;
    const latest_date = this._datePipe.transform(this.fechaNacimiento, 'yyMMdd');
     if(this.getCtr('RFC').value.substr(4, 6) != latest_date.toString()) {
        resValidacion = false;
    }
    return resValidacion;
  }

  /**
  * Metodo que valida que la fecha del RFC no sea mayor a la fecha actual
  * */
   fechaValidaRFC(tipoPersona : string):boolean {
    
    var fechaValida : boolean = true;
    var dateField :Date;
    
    if (this.getCtr('RFC').value != "" && this.getCtr('RFC').value.length >= 10){
      if (tipoPersona == Const.PERSONA_FISICA) {
        dateField = ProspeccionUtil.formatoFechaRFC(Number(this.getCtr('RFC').value.substring(8,10)),
                            Number(this.getCtr('RFC').value.substring(6,8)),
                            Number(this.getCtr('RFC').value.substring(4,6)), this.fechaActual);
      } else if (tipoPersona == Const.PERSONA_MORAL){
        dateField = ProspeccionUtil.formatoFechaRFC(Number(this.getCtr('RFC').value.substring(7,9)),
                            Number(this.getCtr('RFC').value.substring(5,7)),
                            Number(this.getCtr('RFC').value.substring(3,5)),this.fechaActual);
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
  
    if(this.getCtr('RFC').value.trim() != "" || (this.getCtr('NSS').value.trim() != "") 
        || (this.getCtr('FM3').value.trim() != "") || (this.getCtr('ID').value.trim() != "")){
            if(this.getCtr('RFC').value.trim() != "") {
                paramsBusqueda['RFC'] = this.getCtr('RFC').value.trim().toUpperCase() + "%";
            }
            if(this.getCtr('NSS').value.trim() != "") {
                paramsBusqueda['NSS'] = this.getCtr('NSS').value.trim().toUpperCase() + "%";
            }  
            if(this.getCtr('FM3').value.trim() != "") {
                paramsBusqueda['FM3'] = this.getCtr('FM3').value.trim().toUpperCase() + "%";
            }
            if(this.getCtr('ID').value.trim() != "") {
                paramsBusqueda['FM0'] = this.getCtr('ID').value.trim().toUpperCase();
            }
    } else {
        if(this.getCtr('cboPais').value != "") {
            paramsBusqueda['paisClave'] = this.getCtr('cboPais').value;
        }
        if(paramsBusqueda['TipoPersona'] == Const.PERSONA_FISICA) {
          if(this.getCtr('NSS').value.trim() != "") {
            paramsBusqueda['NSS'] = this.getCtr('NSS').value.trim().toUpperCase() + "%";
          }  
          if(this.getCtr('FM3').value.trim() != "") {
            paramsBusqueda['FM3'] = this.getCtr('FM3').value.trim().toUpperCase() + "%";
          }
          paramNomCorto=  "*"+ this.getCtr('perNom').value.toUpperCase() + "*" + this.getCtr('apePaterno').value.toUpperCase() + "*";
          if(this.getCtr('apePaterno').value != '' && this.getCtr('apePaterno').value.length > 3){
            paramNomCorto += this.getCtr('apeMaterno').value.toUpperCase() + "*";
          }
          paramsBusqueda['nomCorto'] = paramNomCorto; 
  
        } else if(paramsBusqueda['TipoPersona'] == Const.PERSONA_MORAL) {
          if(this.getCtr('ID').value.trim() != "") {
            paramsBusqueda['FM0'] = this.getCtr('ID').value.trim().toUpperCase();
          }
          paramsBusqueda['nomCorto'] = "*" + this.getCtr('perNom').value.toUpperCase() + "*";
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
          } else if(this.getCtr('ejecutivosAsiste').value != ''){
            resultBusqueda['ejeAsisteSelected'] = this.getCtr('ejecutivosAsiste').value; 
          }
          if(this.promotorProspecta != undefined){
            resultBusqueda['promotorProspecta']= this.promotorProspecta;
          }
          resultBusqueda['cveTipoPersona'] = this.tpeSelected;
          resultBusqueda['perNom'] = this.getCtr('perNom').value.toUpperCase();
          resultBusqueda['apePaterno'] = this.getCtr('apePaterno').value.toUpperCase();
          resultBusqueda['apeMaterno'] = this.getCtr('apeMaterno').value.toUpperCase();
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
            this.alertasService.mostrarMensaje('Excediste el Número de Prospectos','warning','');
            return;
           } else{
            this.mostrarMensajeNoExistenCoincidencias(Const.noExisteProspecto,'warning');
           }
        }
      },
      error => console.error(error)
    );
  }

  async mostrarMensajeNoExistenCoincidencias(mensaje: string, tipoMensaje: any){
    const { value: aceptar } = await this.alertasService.confirmAlert(mensaje, tipoMensaje, '','Si','No');
    if(aceptar){
      this.mostrarAltaProspectoHandler();
    }
  }

  //llenado de los objetos para la alta del prospecto 
  mostrarAltaProspectoHandler(){
     var persona = new PersonaVO;
     var personaFisica: PersonaFisicaVO;
   
     //tipo Persona  
     persona.tipoPersonaVO = ProspeccionUtil.obtenerTipoPersona(this.tpeSelected, this.arrTipoPer);
     
     var nombreCompleto :string = this.getCtr('perNom').value.toUpperCase();
     if(this.getCtr('apePaterno').value !== ''){
       nombreCompleto = nombreCompleto + " " +  this.getCtr('apePaterno').value.toUpperCase();
     }
     if(this.getCtr('apeMaterno').value !== ''){
       nombreCompleto = nombreCompleto + " " + this.getCtr('apeMaterno').value.toUpperCase();
     }
   
     // 03/11/2013 se implementa el envío de persona fisica esto para solucion al bug 3861
     if(this.tpeSelected === Const.PERSONA_FISICA){
        personaFisica = new PersonaFisicaVO;
        personaFisica.pefNombre = this.getCtr('perNom').value.toUpperCase();
        personaFisica.pefPaterno = this.getCtr('apePaterno').value.toUpperCase();
        personaFisica.pefMaterno = this.getCtr('apeMaterno').value.toUpperCase();
   
        //gjesus Para guardar la fecha de nacimiento 
        const latest_date = this._datePipe.transform(this.fechaNacimiento, 'yyMMdd');
        if(latest_date != undefined && latest_date.length > 0){
          personaFisica.pefFNacimientoStr = this.fechaNacimiento.toString();
        }
        //guarda nacionalidad seleecionada
        if(this.tnaSelected === Const.PAIS_CLAVE_US){
           personaFisica.pefNss= this.getCtr('NSS').value.toUpperCase();
        } else if (this.tnaSelected === 2 || this.tnaSelected > 3){
           personaFisica.pefNoFm3 = this.getCtr('FM3').value.toUpperCase();
        }
     } else {
        if (this.tnaSelected !== null){
          persona.paiClaveResidencia = this.tnaSelected;
        }
     }
     
     //nombreCorto
     persona.perNomCorto =nombreCompleto.toUpperCase();
   
     if(this.getCtr('RFC').value !== null){
        persona.perRfc = this.getCtr('RFC').value.toUpperCase();
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
    let altaProspectoEvent = new ProspeccionEvent;
    altaProspectoEvent.modalidad = this._modalid;

    //OCRUZ 03/11/2013 se implementa el envío de persona fisica esto para solucion al bug 3861
    altaProspectoEvent.personaFisica = personaFisica;
    
    if(this.tnaSelected!= null){
      altaProspectoEvent.paisClave = this.tnaSelected;
    }
    
    if(this.tpeSelected == 'M' && this.getCtr('ID').value != '') { //si el tipo de persona es Moral
      datosPersona.perRfc = this.getCtr('ID').value.toUpperCase();
    }
    
    altaProspectoEvent.persona = datosPersona;
    altaProspectoEvent.isBuscaPros = true;
    
    //se implementa el envío(a Prospeccion.mxml) del usuario al que se le va asignar el prospecto
    //para poder realizar la validacion del bloqueo de divisas banco persona moral Reque - ME18-08-278
    altaProspectoEvent.promotorProspecta = this.promotorProspecta != null ? this.promotorProspecta : this.usuarioSesion;
    
    this.MOSTRAR_ALTA_PROSPECTO.emit(altaProspectoEvent);
  }
  
  estatusCampos(parametro:boolean){
    if(parametro){
      this.getCtr('RFC').enable();
      this.getCtr('NSS').enable();
      this.getCtr('FM3').enable();
      this.getCtr('RFC').enable();
      this.getCtr('ID').enable();
    } else {
      if(this.tpeSelected === Const.PERSONA_FISICA){
        if(this.tnaSelected == 3) {
          if(this.getCtr('RFC').value.trim() != ''){
            this.getCtr('NSS').disable();
          } else if(this.getCtr('NSS').value.trim() != ''){
            this.getCtr('RFC').disable();
          }
        } else if (this.tnaSelected ===2 || this.tnaSelected > 3){
          if(this.getCtr('RFC').value.trim() != ''){
          this.getCtr('FM3').disable();
          } else if(this.getCtr('FM3').value.trim() != ''){
          this.getCtr('RFC').disable();
          }
        }
      } else if(this.tpeSelected === Const.PERSONA_MORAL){
        if(this.getCtr('RFC').value.trim() != ''){
          this.getCtr('ID').disable();
        } else if(this.getCtr('ID').value.trim() != ''){
          this.getCtr('RFC').enable();
        } else {
          this.getCtr('ID').disable();
        }
      }
    }
  }

  resetValores(){
    this.getCtr('cboPais').setValue('');
    this.getCtr('perNom').setValue('');
    this.getCtr('apePaterno').setValue('');
    this.getCtr('apeMaterno').setValue('');
    this.getCtr('RFC').setValue('');
    this.getCtr('FM3').setValue('');
    this.getCtr('NSS').setValue('');
    this.getCtr('ID').setValue('');
    this.getCtr('fNac').setValue('');
  }

  getCtr(name: string, group = ''): FormControl {
    if (group === '') return this.form.get(name) as FormControl
    else return this.form.controls[group].get(name) as FormControl

  }

}
