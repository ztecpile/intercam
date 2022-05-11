import { ApplicationRef, Component, ComponentFactoryResolver, EventEmitter, Injector, Input, OnInit, Output, Renderer2 } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActividadEconomicaVO, AvisoSolicitudVO, ClavePromLegadoVO, ClTipSocVO, ColoniaVO, ConstReferenciacion, ContratoPersonaVO, 
  CteReferenciadoVO, DireccionVO, EdoReferenciacionVO, EmailValidator, EntidadVO, ExcepcionesProspeccionVO, MunicipVO, NegociosClienteProspectoVO, 
  PaisVO, PerEmpleadoVO, Permisos, PersonaContratoVO, PersonaFisicaVO, PersonaMoralVO, PersonaVO, PipelineVO, ProspeccionPersonaVO, 
  ProspeccionUtil, ProspectoExcepcionesVO, SolicitudReferenciacionVO, TipoContratoVO, TipoDireccionVO, TipoPersonaVO, UsuarioUtil, UsuarioVO } from '@intercam/model';
import { ContratoService } from '../../../services/contrato.service';
import { DireccionService } from '../../../services/direccion.service';
import { PersonaService } from '../../../services/persona.service';
import { ProspeccionService } from '../../../services/prospeccion.service';

import { Const } from '@intercam/model';
import { CatContratoService } from '../../../services/cat-contrato.service';
import { GenerateService } from 'libs/shred-components/src/lib/form/validation/generate.service';
import { FormValidationService } from '@intercam/shred-components';
import { ReferenciacionService } from '../../../services/referenciacion.service';
import { ProspeccionResponse } from '../../../util/ProspeccionResponse';
import { DialogBusquedaCoincidenciasComponent } from '../../util/dialog-busqueda-coincidencias/dialog-busqueda-coincidencias.component';
import { DialogReporte24hrsComponent } from '../../util/dialog-reporte24hrs/dialog-reporte24hrs.component';
import { ProspeccionEvent } from '../../../util/ProspeccionEvent';
import { UsuarioService } from '../../../services/usuario.service';
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';

@Component({
  selector: 'intercam-alta-prospecto',
  templateUrl: './alta-prospecto.component.html',
  styleUrls: ['./alta-prospecto.component.scss']
})
export class AltaProspectoComponent implements OnInit {
  
  //--------------------------------------------------------------------------
  //
  //  Constants
  //
  //--------------------------------------------------------------------------
            
  /**
  * Constante <code>AltaProspecto.ALTA_PROSPECTO</code>.</br> 
  * Define el valor de la propiedad <code>modalidad</code> para la 
  * operacion Alta Prospecto.
  **/
  readonly ALTA_PROSPECTO:string = "alta";
  
  /**
  * Constante <code>AltaProspecto.MODIFICAR_PROSPECTO</code>.</br> 
  * Define el valor de la propiedad <code>modalidad</code> para la 
  * operacion Modificar Prospecto.
  **/
  readonly MODIFICAR_PROSPECTO:string = "modificar";
             
  /**
  * Constante <code>AltaProspecto.REFERENCIAR</code>.</br> 
  * Define el valor de la propiedad <code>modalidad</code> para la 
  * operacion Referenciar.
  **/
  readonly REFERENCIAR:string = "referenciar";
             
  /**
  * Constante <code>AltaProspecto.cteSinContrato</code>.</br> 
  * Define el valor de la propiedad <code>modalidad</code> para la 
  * operacion Cliente Sin Contrato.
  **/
  readonly cteSinContrato:string = "cteSinContrato";
  
  readonly DISALLOWED_LOCALNAME_CHARS:string = "()<>,;:\\\"[] `~!#$%^&*={}|/?'";
  readonly DISALLOWED_DOMAIN_CHARS:string ="()<>,;:\\\"[] `~!#$%^&*+={}|/?'";
  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  /**
  * Almacena clave Tipo Persona.
  * 
  * default "F".
  **/
  _cveTipoPersona: string = "F";

  /**
  * Almacena Usuario Sesion.
  **/
  usuarioSesion = new UsuarioVO;
  
  /**
  * Almacena la persona fisica
  **/ 
  _personaFisica:PersonaFisicaVO;

  /**
  * Almacena la lista de colonias
  **/
  arrColonia: ColoniaVO[] = [];

  /**
  * Almacena la lista de legadas de dueño o assistente
  **/
  arrClvlegadas: any[]=[];

  usuEjeAsistido: string;

  perEmplleado:PerEmpleadoVO;

  _pipelineVO : PipelineVO;

  _isExtran: boolean;
  
  /**
  * Etiqueta para FM3 o SSN
  **/
  textExtr:string;
  
  /**
  * Variable que almacena la clave de le entidad seleccionada
  */
  entClave: number;
  
  personaMoral:PersonaMoralVO;
  
  personaFisicaCoincidencias:PersonaFisicaVO;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
            
  //----------------------------------
  //  modalidad
  //----------------------------------
  
  _isBuscaPros: boolean = false;
  
  isPros: boolean = false;

  _modalidad = this.ALTA_PROSPECTO;

  _idPromByAsis = NaN;

  /**
  * Almacena la clave del pais que viene de BuscaProspecto
  */
  _paisClave = NaN;

  /**
  * Almacena la clave del pais de la dirección del prospecto
  */ 
  _paisClaveDir = NaN;

  _persona:PersonaVO;

  _personaFisicaPros:PersonaFisicaVO;

  /**
  * Almance el dueño del cliente en caso de que exista
  */ 
  _personaDuenioCte:PersonaVO;
  
  buscoRFC: boolean = false;

  /**
  * Determina si se va a validar si el promotor esta apodera para operar
  */ 
  _validaPoderes : boolean = false;
  
  /**
  * Especifica la longitud minima del rfc.
  */ 
  longMinRfc = 10;
  
  /**
  * Determina si se muestra el boton para dar de alta una nueva dirección
  */ 
  validaNuevaDireccion: boolean = false;
  
  /**
  *Almanena el promotro al cual sera asignado el prospecto, ya que puede ser el usuario de sesion o bien,
  * un promotor al cual esta asistiendo este. 
  */
  promotorProspecta:UsuarioVO;

  /*
  * Id Broxel
  **/
  colCityCodeBrx: string;
  entIsoCodeBrx: string;
  
  /**
  * Determinará que la direccion capturada será nueva
  */ 
  nuevaDireccion : boolean = false;
  
  isVisibleBtn : boolean;

  _prospectoSeleccionado : ProspeccionPersonaVO;

  /**
  * Almacena las credenciales del usuario al cual se le asignara el prospecto
  * , ya que el usuario en sesion puede ser un asistente
  */ 
  _promotorProspecta : UsuarioVO;

  //----------------------------------
  //  esReferenciado
  //----------------------------------
  
  _esReferenciado:boolean = false;

  //----------------------------------
  //  clienteReferenciado
  //----------------------------------

  /**
  * Almacena Cliente Referenciado.
  **/
  _clienteReferenciado:PersonaVO;

  //----------------------------------
  //  usuarioReferenciador
  //----------------------------------
            
  /**
  * Almacena usuario referenciador.
  **/
  _usuarioReferenciador:PersonaVO;

  //----------------------------------
  //  tipoNegocio
  //----------------------------------
            
  /**
  * Almacena tipo Negocio a prospectar.
  **/
  _tipoNegocio: TipoContratoVO;

  //----------------------------------
  //  Solicitud
  //----------------------------------
  
  /**
  * Alamcena la solicitud, para cuando la modalidad es REFERENCIAR
  **/
  _solicitudReferenciacionVO : SolicitudReferenciacionVO;

  /**
  * Almacena a la persona cuando la modalidad es cteSinContrato
  */ 
  _cteSinContrato : PersonaVO;

  arrPais: PaisVO[] = [];
  
  /**
  * Almacena los registros de la tabla de excepciones de prospeccion
  */
  arrExcepcionProspeccion: any[] = [];

  /**
  * Lista de Excepciones mostrada en el Dataprovider
  */
  arrExcepcionProspeccionAux: any[] = [];
  
  prospectoExcepcionesVO:ProspectoExcepcionesVO;

  /**
  * Arreglo de los tipos de sociedades disponibles para la PM.
  */
  arrTSociedad: ClTipSocVO[]=[];
  
  /**
  * Almacena lista de certificaciones de un promotor
  **/
  arrCertAsignacionVO: any[]=[];

  /**
  * Arreglo para llenar el combo de tipo de contrato para cuando sea Banco
  */
  arrOpcionBanco: any[] = [ {id: 1, data: 'CHEQUERA'}, {id: 2, data: 'CRÉDITO'} ];
  
  /**
  *Determina si se mostrará el combo para especificar que tipo de contrato será para cuando sea BANCO 
  */
  showTipoBanco: boolean;
  
  /**
  * Almacena lista en los negocios donde el prospecto ya existe
  **/
  arrNegociosProsp: any[] = [];

  isEditionComponentesSA : boolean;
            
  isVisibleBtnAnalisis : boolean;
  
  /**
  * Mantiene una referencia de la fecha actual.
  */
  fechaActual:Date = new Date();
  
  arrTipoPer: TipoPersonaVO[] = [];

  arrTipoContrato: TipoContratoVO[] = [];

  arrTipoContratoNoPsp: TipoContratoVO[] = [];
  
  arrCuidad: EntidadVO[] = [];

  arrPersonaContratos: any[]=[];
  
  /**
  * Almacena Nombre de la Ciudad por defecto.
  **/
  ciudadPorDefecto:string;
  
  /**
  * Almacena Nombre de la Colonia por defecto.
  **/
  coloniaPorDefecto:string;
 
  loadCiudad:boolean = false;
   
  ciudadName :string;
   
  existeCP:boolean = false;
   
  txtDirId:string;
   
  /**
  * Almacena confirmacion guardar Persona Prospecto;
  **/
  confirmacionPersonaProspecto: boolean;
 
  btnGuardarProspecto: boolean = true;
   
  //prospectoPersona:ProspeccionPersonaVO = new ProspeccionPersonaVO();
   
  lstClvlegadas : any[];
   
  //claves legadas del promotor al cual se está asistiendo
  arrClvLeg : ClavePromLegadoVO [];
  
  /**
  * Almacena Persona Prospecto a  guadado.
  **/
  prospectoSave:ProspeccionPersonaVO;
   
  /**
  * Almacena tipo tipo de persona seleccionada
  **/
  _tipoPersona: TipoPersonaVO;
 
  /**
  * Almacena lista tipo Direcciones
  **/
  arrTiposDir: TipoDireccionVO[] = [];

  /**
  * Almacena tipo direccion seleccionada
  **/
  _tipoDireccion: TipoDireccionVO;

  /**
  * Almacena el pais de la direccion
  **/
  _paisDireccion: PaisVO;
  
  listNegociosProsp: NegociosClienteProspectoVO [] = [];
  
  /**
  * Valida si es modificacion al prospecto
  * */
  esMod:boolean = false;

  /**
  * Almacena Persona Prospecto
  **/
  personaProspecto:ProspeccionPersonaVO;

  /**
	* Almacena confirmacion enviar Solicitud Referenciacion.
	**/
  confirmacionEnviarSolicitudReferenciacion:boolean = false;
  
  /**
  * Determina si ya existe una solicitud;
  */ 
  solicitudReferenciacionVO : SolicitudReferenciacionVO;
  
  modRfcExis:boolean;

  buscaCoincidencias:boolean = false;

  resultCoincidenca: Object;

  stsProspecto: string;

  stsProspectoVisible: boolean;

  showPF: boolean;
  showPM: boolean;
  showFideicomiso: boolean;
  showBtnBuscaCP: boolean;
  showDirMX: boolean;
  showDirExt: boolean;
  actEmpSelected: boolean;
  indexTipoBanco: number;
  indexTipoDir: number;
  indexTipoPer: number;
  
  titProspecto = 'Alta de Prospecto';
  subProspecto = 'No prospectar para los siguientes negocios';
  toolTipAyuda = Const.pais_origen_ayuda1 + '\n' + Const.pais_origen_ayuda2 + '\n' + Const.pais_origen_ayuda3 + '\n' + Const.pais_origen_ayuda4;
  lblRfcId:string = 'RFC';
  lblPiasPersona:string = 'País de Nacimiento';
  lblNomRSocial:string = 'Nombre(s)';
  _tconIdSelected:number;

  idPersona = NaN;
  
  min: number = 10;
  max: number = 12;

  @Input() altaProspectoEvent: ProspeccionEvent;

  @Output() MOSTRAR_BUSQUEDA_PROSPECTO = new EventEmitter<any>();

  @Output() saveInfoGeneral = new EventEmitter<any>();

  // estatus del resultado de la solicitud de revison
  estatusResult: boolean;

  enabled: boolean = true;

  //----------------------------------
  //  nombre del FormGroup que contiene los controles
  //----------------------------------

  funcForm: FormGroup;
  
  service : GenerateService;

  constructor(private formBuilder: FormBuilder,
    private _usuarioService: UsuarioService,
    private _prospeccionService: ProspeccionService,
    private _direccionService: DireccionService,
    private _personaService: PersonaService,
    private _contratoService: ContratoService,
    private _catContratoService: CatContratoService,
    private _referenciacionService: ReferenciacionService,
    private renderer : Renderer2,
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef,
    private formValidation : FormValidationService,
    public dialog: MatDialog,
    private alertasService:AlertasService
    ) {
    this._tconIdSelected = NaN;
    //this.showPF = true;
    //this.showPM = true;
    this.showBtnBuscaCP = true;
    this.showDirMX = true;
    this.btnGuardarProspecto = true;
  }
  
  ngOnInit(): void {
    this.getUsuario();
    this.cargaCatalogos();
    this.createFunForm();
    this.initVisibleBtn();
    this.enabledCompnentes();
  }
  
  async getUsuario() {
    const usuStr = sessionStorage.getItem('usuarioVO');
    if(usuStr) {
      this.usuarioSesion = JSON.parse(usuStr);
    }
  }

  async cargaCatalogos() {
    if(this.arrPais.length == 0){
      this.arrPais = await this._direccionService.findAllPaises().toPromise();
      this.arrPais.sort((a, b) => 0 -(a.paiDescripcion > b.paiDescripcion ? -1 : 1));
    }

    if(this.arrTipoPer.length == 0){
      this.arrTipoPer = await this._personaService.findTipoPersona().toPromise();
    }

    if(this.arrTiposDir.length == 0){
      this.arrTiposDir = await this._personaService.findAllTipoDirecciones().toPromise();
    }

    if(this.arrTipoContrato.length == 0){
      this.arrTipoContrato = await this._catContratoService.findTipoContrato().toPromise();
      this.arrTipoContratoNoPsp = Object.assign([], this.arrTipoContrato);
      
        for (let i = 0; i < this.arrTipoContrato.length; i++) {
              if(this.arrTipoContrato[i].tconId == Const.TCON_CASA_CAMBIOS){
                this.arrTipoContrato.splice(i,1);
                break;
              }
        }
          
        var tipoNeg : TipoContratoVO = new TipoContratoVO;
        tipoNeg.tconId = 0;
        tipoNeg.tconDescripcion = 'Otros';
        this.arrTipoContratoNoPsp.push(tipoNeg);
    }

    if(this.arrExcepcionProspeccion.length == 0){
      this.arrExcepcionProspeccion = await this._prospeccionService.findAllExcepcionesProspeccion().toPromise();
      var excep: ExcepcionesProspeccionVO = new ExcepcionesProspeccionVO;
          excep.expId = 0;
          excep.expNombre = 'NO APLICA';
          this.arrExcepcionProspeccion.push(excep);
    }

    this.setDatosProspecto();
  }

  setDatosProspecto(){
    if(this.altaProspectoEvent != null && (this.altaProspectoEvent.modalidad === this.ALTA_PROSPECTO || 
      this.altaProspectoEvent.modalidad === this.cteSinContrato)){
        this._modalidad = this.altaProspectoEvent.modalidad;
        this.estatusControles();
        var persona = new PersonaVO;
        persona = this.altaProspectoEvent.persona;
        var personaF = new PersonaFisicaVO;
        personaF = this.altaProspectoEvent.personaFisica;
        this.isBuscaPros(this.altaProspectoEvent.isBuscaPros);
        if(this.altaProspectoEvent.tipoContratoVO != null){
          this.tipoNegocio(this.altaProspectoEvent.tipoContratoVO);
        }
        if(this.altaProspectoEvent.soyAsistenteId != undefined && this.altaProspectoEvent.soyAsistenteId > 0){
          this.idPromByAsis(this.altaProspectoEvent.soyAsistenteId);
        }
        if(this.altaProspectoEvent.paisClave != undefined && this.altaProspectoEvent.paisClave > 0){
          this._paisClave = this.altaProspectoEvent.paisClave;
        }
        if(this.altaProspectoEvent.prospectoSeleccionado != undefined){
          this._prospectoSeleccionado = this.altaProspectoEvent.prospectoSeleccionado;
        }
        this.mostrarDatosPersona(persona,personaF,this.altaProspectoEvent.promotorProspecta);
    } else if(this.altaProspectoEvent != null && this.altaProspectoEvent.modalidad === this.MODIFICAR_PROSPECTO){
      this._modalidad = this.altaProspectoEvent.modalidad;
      this.estatusControles();
      this.usuarioSesion = this.altaProspectoEvent.usuarioSesion;
      this.isEditionComponentesSA = this.isEditionComponentesSA;
      this.isVisibleBtnAnalisis = this.isVisibleBtnAnalisis;
      this._pipelineVO = this.altaProspectoEvent.pipelineVO;
      this.enabled = this.altaProspectoEvent.enabled;
      this.btnGuardarProspecto = this.altaProspectoEvent.enabled;

      if(this.altaProspectoEvent.tipoContratoVO != null){
        this.tipoNegocio(this.altaProspectoEvent.tipoContratoVO);
      }
      
      this.obtenerPersonaProspecto(this.altaProspectoEvent.perId,this.altaProspectoEvent.tconId,this.altaProspectoEvent.prpId);
    }
  }

  createFunForm() {
    this.funcForm = this.formBuilder.group({
      cboTipoPersona: ['', Validators.required],
      cboTipoNegocio: ['', Validators.required],
      cboTipoDireccion: [''],
      perNomOrRazonSocial: ['', Validators.required],
      perNombreComercial: [''],
      cboPaisOr: [''],
      cboTipoSociedad: [''],
      extr: [''],
      perRfc: [''],
      cboPaisPersona: [''],
      checkActEmpresarial: [''],
      calle: [''],
      numExt: [''],
      numInt: [''],
      cboPaisDireccion: [''],
      cp: [''],
      cboColonia: [''],
      ciudad: [''],
      alcMun: [''],
      entidad: [''],
      colonia: [''],
      cboCiudad: [''],
      telefono: ['', [Validators.required, Validators.pattern(/^([0-9])*$/), this.validatorTel()]],
      paginaWeb: [''],
      cboTpContratoNopros: [''],
      descripcionNopros: [''],
      cboMotivo: [''],
      contacto: [''],
      comentarios: [''],
      correo: ['',[Validators.required, EmailValidator.validatorEmail()]]
    });
  }

  isBuscaPros(value:boolean):void {
    this._isBuscaPros = value;
  }

  /**
  * Obtiene Persona Prospecto
  * 
  * idPersona Id Persona Prospecto.
  * idTipoNegocio Id Tipo Negocio.
  * prpId id prospecto
  **/
  obtenerPersonaProspecto(idPersona:number, idTipoNegocio:number, prpId:number):void {
      this._prospeccionService.findPersonaProspectoById(idPersona,idTipoNegocio,prpId).subscribe(
        then => {
          this.personaProspecto = then;
          this.mostrarInformacionPersonaProspecto(this.personaProspecto);
        },
        error => console.error(error)
      );
  }

  idPromByAsis(value:number):void {
    if(!isNaN(value)){
      this._idPromByAsis = value;
      this.getPromByAsis();
    }
  }

  getPromByAsis():void {
    if(this._idPromByAsis != 0){
      this._usuarioService.getClavesLegadas(this._idPromByAsis).subscribe(
      then => {
        this.arrClvLeg = then;
        this._personaService.getClvLegadasByIdPromotor(this._idPromByAsis).subscribe(
          then => {
            let perEmpleado = new PerEmpleadoVO;
            perEmpleado = then;
            this.usuEjeAsistido = perEmpleado.usuUsuario;
          },
          error => console.error(error)
        );
      },
      error => console.error(error)
      );
    }
  }

  tipoNegocio(value:TipoContratoVO):void {
    if(value == null){
      return;
    }
    this._tipoNegocio = value;
    this.mostrarTipoNegocio(this._tipoNegocio);
  }
  
  /**
  * Mostrar tipo Negocio.
  **/
  mostrarTipoNegocio(tipoNegocio:TipoContratoVO):void {
    if(this.arrTipoContrato == null) {
        return;
    }
    this.arrTipoContrato.forEach((item) => {
      if(item.tconId == tipoNegocio.tconId){
        this.getCtr('cboTipoNegocio').setValue(item.tconId);
      }
    });
  }

  //----- seteamos los valores que vienen de la buqueda de prospecto ----------//
  
  async mostrarDatosPersona(persona:PersonaVO, personaFisica:PersonaFisicaVO, promotorProspecta:UsuarioVO) {
    // tipo Persona
    this._cveTipoPersona = persona.tipoPersonaVO.tpeClave;

    if(this.arrTipoPer.length != 0){
      this.getCtr('cboTipoPersona').setValue(this._cveTipoPersona);
    }

    if(!isNaN(this._paisClave)){
      this.getCtr('cboPaisPersona').setValue('');
    }
    
    if(persona == null || persona.tipoPersonaVO == null) {
      return;
    }
    
    if(this._modalidad == this.cteSinContrato) {
      this.validaNuevaDireccion = true;

      //Validamos si el tipo contrato es DIVISAS BANCO
      if(this._tipoNegocio != null && this._tipoNegocio.tconId == Const.TIPO_CONTRATO_DIVISAS_BANCO) {
        //Consultamos los contratos del cliente donde sea TITULAR
        this._contratoService.findPersonasContratoByperId(persona.perId,Const.PERF_TITULAR_DESC).subscribe(
          then => {
            this.arrPersonaContratos = then;
          },
          error => console.error(error)
        )
      }
    }

    if(this._modalidad == this.ALTA_PROSPECTO){
      if(!isNaN(this._idPromByAsis)){
        this._usuarioService.findCertificadoById(this._idPromByAsis).subscribe(
        then => {
          this.arrCertAsignacionVO = then;
        },
          error => console.error(error)
        );
      } else {
        this._usuarioService.findCertificadoById(this.usuarioSesion.idPersona).subscribe(
          then => {
            this.arrCertAsignacionVO = then;
          },
          error => console.error(error)
          );
      }
    }
    
    //Verificamos si la persona es moral para poner los controles requeridos
    if(this._cveTipoPersona == Const.PERSONA_MORAL){
      this.getCtr('perNombreComercial').setValidators([Validators.required]);
      this.getCtr('perNombreComercial').updateValueAndValidity();
      this.getCtr('cboPaisPersona').setValidators([Validators.required]);
      this.getCtr('cboPaisPersona').updateValueAndValidity();
      this.getCtr('cboPaisOr').setValidators([Validators.required]);
      this.getCtr('cboPaisOr').updateValueAndValidity();
      this.getCtr('contacto').setValidators([Validators.required]);
      this.getCtr('contacto').updateValueAndValidity();
    }
    this._paisClave = NaN;

    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      this.getCtr('checkActEmpresarial').disable();
      if(this._modalidad == this.MODIFICAR_PROSPECTO){
        this.getCtr('contacto').setValidators([Validators.required]);
        this.getCtr('contacto').updateValueAndValidity();
      }
      if(persona.cpeId == Const.PERSONA_FISICA_CON_ACTIVIDAD) {
        this.getCtr('checkActEmpresarial').setValue(true);
      }
      this._paisClave = persona.paiClave !== undefined ? persona.paiClave : NaN;
      this.getCtr('perRfc').setValue(persona.perRfc != null ? persona.perRfc : null);
    } else {
      this.arrTSociedad = await this._personaService.findTipoSoc().toPromise();
      //this.personaMoral = persona as unknown as PersonaMoralVO;
      if((persona as unknown as PersonaMoralVO).pemTipoSoc){
        for(let sociedad of this.arrTSociedad){
          if(sociedad.tisNumero === (persona as unknown as PersonaMoralVO).pemTipoSoc){
            this.getCtr('cboTipoSociedad').setValue(sociedad.tisNumero);
            break;
          }
        }
      }
      
      this._paisClave = persona.paiClaveResidencia !== undefined ? persona.paiClaveResidencia : NaN;
      if(persona.paiClave !== undefined){
        this.getCtr('cboPaisOr').setValue(persona.paiClave);
      }
    }

    if(!isNaN(this._paisClave) && this._paisClave > 0){
      this.getCtr('cboPaisPersona').setValue(this._paisClave);
      //Valida la clave pais para poner la etiqueta correspondiente (rfc, fm3, ssn)
      this.validaEtiquetaNacionalidad(this._paisClave);
    }
    //se movio debido a que la carga de la nacionalidad borra el valor si esta antes
    if(this._cveTipoPersona == Const.PERSONA_MORAL){
      if(!isNaN(this._paisClave) &&  this._paisClave > 1 && (persona as unknown as PersonaMoralVO).pemIdShcp != null) {
        this.getCtr('perRfc').setValue((persona as unknown as PersonaMoralVO).pemIdShcp);
      } else {
        this.getCtr('perRfc').setValue(persona.perRfc != null ? persona.perRfc : null);
      }
    }

    //recibimos el parametro de personaFisica esto viene de BuscaProspecto
    this._personaFisica = personaFisica;
    
    //recibimos el paramero de promotorProspecta esto viene de BuscaProspecto
    this._promotorProspecta = promotorProspecta;
    
    //Esta asignacion sirve para guardar en modalidad "cteSinContrato"
    this._cteSinContrato = persona;
    
    // nombres Persona
    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      this.getCtr('perNomOrRazonSocial').setValue(persona.perNomCorto);
    } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
      this.getCtr('perNomOrRazonSocial').setValue(persona.perNomCorto);
      this.getCtr('perNombreComercial').setValue(persona.perNomComercial != null ? persona.perNomComercial : '');
    }
    
    // R.F.C.
    //Se asigna el nss o Nofm3 de la persona fisica dependiendo nacionalidad esto es cuando viene de Pipeline.mxml
    if((persona.paiClave !== undefined && (persona.paiClave == 0 || persona.paiClave == Const.PAIS_CLAVE_MEXICO || isNaN(persona.paiClave))) && 
      (this._cveTipoPersona == Const.PERSONA_FISICA)){
        this.getCtr('perRfc').setValue(persona.perRfc != null ? persona.perRfc : null);
    } else if(persona.paiClave == Const.PAIS_CLAVE_US && this._cveTipoPersona == Const.PERSONA_FISICA){
      if((persona as unknown as PersonaFisicaVO).pefNss != null){
        this.getCtr('extr').setValue((persona as unknown as PersonaFisicaVO).pefNss);
      }
    } else if(persona.paiClave == 2 || persona.paiClave > 3  
      && this._cveTipoPersona == Const.PERSONA_FISICA){
        if((persona as unknown as PersonaFisicaVO).pefNoFm3 != null){
          this.getCtr('extr').setValue((persona as unknown as PersonaFisicaVO).pefNoFm3);
        }
    }

    if(personaFisica != null){
      if(personaFisica.pefNoFm3 != null){
        this.getCtr('extr').setValue(personaFisica.pefNoFm3);
      } else if(personaFisica.pefNss != null){
        this.getCtr('extr').setValue(personaFisica.pefNss);
      }
    }

    //guardamos el objeto cuando venga del pipe para la busqueda de coincidencias
    if(persona.tipoPersonaVO?.tpeClave === Const.PERSONA_FISICA && this._pipelineVO){
      this.personaFisicaCoincidencias = persona as unknown as PersonaFisicaVO;
    }
    
    this.cambiaEstatusControles();

    if(this._modalidad == this.MODIFICAR_PROSPECTO || this._modalidad == this.cteSinContrato) {
      //Obtenemos la relacion prospecto vs excepciones
      this.obtenerRelacionProspectoExcepciones(persona.perId);
      
      //Esta validacion es para cuando viene
      if(this._prospectoSeleccionado != null){
        this.mostrarInformacionPersonaProspecto(this._prospectoSeleccionado);
      }
      
      //Si se va a modificar al prospecto y el estatus es PROPECTO se habilita el boton de NuevaDireccion
      if(this._modalidad == this.MODIFICAR_PROSPECTO && 
        this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO && 
        this._pipelineVO.slrTipo == Const.REFERENCIACION_TIP_SOLICITUD_CR) {
          this.validaNuevaDireccion = true;
      }
    }

    this.inicializaValidadorFrom();
  }

  /**
  * Mostrar informacion Persona Prospecto
  **/
  mostrarInformacionPersonaProspecto(value:ProspeccionPersonaVO):void {
    if(value == null) {
      return;
    }

    if(value.personaVO != null) {
      // datos Persona
      this.mostrarDatosPersona(value.personaVO, null,null);
    }
  
    // tipo Negocio
    if(value.tipoContratoVO != null){
      if(this._tipoNegocio == null){
        this.mostrarTipoNegocio(value.tipoContratoVO);
      }
      this._tipoNegocio = value.tipoContratoVO;
    }
    
    if(value.direccionVO != null) {
      // direccion
      this.mostrarDatosDireccion(value.direccionVO);
    }
    
    // nombre Contacto
    this.getCtr('contacto').setValue(value.prpContacto != undefined ? value.prpContacto:'');
    
    // pagina Web
    this.getCtr('paginaWeb').setValue(value.prpPaginaweb != undefined ? value.prpPaginaweb:'');
  
    // correo electronico
    this.getCtr('correo').setValue(value.prpEmail != undefined ? value.prpEmail:'');
  
    // comentarios
    this.getCtr('comentarios').setValue(value.prpComentarios != undefined ? value.prpComentarios:'');
    
    //Telefono de contacto
    this.getCtr('telefono').setValue(value.prpTelefono != undefined ? value.prpTelefono:'');
    
    if(value.personaVO != null) {
        this.validaEstatusConctado(value.personaVO.paiClave,value.personaVO.perRfc);
    }

    this.showTipoBanco = false;
    if(this._tipoNegocio.tconId == Const.TIPO_CONTRATO_BANCO) {
        if(value.prpEsCreditoBanco) {
          this.getCtr('cboOpBanco','permFormBanco').setValue(2);
        } else {
          this.getCtr('cboOpBanco','permFormBanco').setValue(1);
        }
        this.showTipoBanco = true;
    }
    
    //ME20-01-036 se valida ambos casos ya que depende de si viene directamente de la busqueda o de pipeline
    if((value.tipoContratoVO != null && value.tipoContratoVO.tconId == Const.TCON_FIDEICOMISO) 
    || (this._tipoNegocio && this._tipoNegocio.tconId == Const.TCON_FIDEICOMISO)){
      this.getCtr('fideicomiso','permFormFideicomiso').setValue(value.prpFideicomiso != undefined ? value.prpFideicomiso:'');
    }

    this.inicializaValidadorFrom();
  }
  
  /**
  * Mostrar datos Direccion.
  **/
  mostrarDatosDireccion(direccion:DireccionVO):void {
    if(direccion == null) {
      return;
    }
    
    // pais
    if(direccion.paisVO != null || !isNaN(direccion.paiClave)) {
      var cvePais:number = direccion.paisVO != null ? direccion.paisVO.paiClave : direccion.paiClave;
      
      /*Se asigna la clave del pais de la direccion a esta constante, ya que en este paso aun no se
      carga la lista de paises, y no lo seleccionaba*/
      this._paisClaveDir = cvePais;
      this.getCtr('cboPaisDireccion').setValue(cvePais);
    }
    
    //Aveces llega nullo este objeto
    if(direccion.tipoDireccionVO == null) {
        direccion.tipoDireccionVO = new TipoDireccionVO();
        direccion.tipoDireccionVO.tdiId = direccion.tdiId;
    }
    
    this.getCtr('cboTipoDireccion').setValue(direccion.tipoDireccionVO.tdiId);
    
    this.ciudadName = direccion.dirCiudad;
    
    // entidad Federativa
    this.getCtr('entidad').setValue(direccion.dirEntidadFed);
    
    // ciudad
    this.ciudadPorDefecto = direccion.dirCiudad;
    this.getCtr('ciudad').setValue(direccion.dirCiudad);
    
    // colonia
    this.coloniaPorDefecto = direccion.dirColonia != null ? direccion.dirColonia:null;
    this.getCtr('colonia').setValue(direccion.dirColonia);
    
    // municipio
    this.getCtr('alcMun').setValue(direccion.dirMunicipio);
    
    // codigo Postal
    this.getCtr('cp').setValue(direccion.dirCodigoPostal);
    this.obtenerColonias(direccion.dirCodigoPostal);
    
    // calle
    this.getCtr('calle').setValue(direccion.dirCalle);
    
    // numero Exterior
    this.getCtr('numExt').setValue(direccion.dirNumeroExt);
    
    // numero Interior
    this.getCtr('numInt').setValue(direccion.dirNumeroInt);
    
    if(!isNaN(direccion.dirId)) {
      this.txtDirId = direccion.dirId.toString(); 
    } else {
      this.txtDirId = "";
    }
  }

  /**
  * Obtiene la relacion entre prospecto y excepciones para los demas tipos de negocios
  */
   obtenerRelacionProspectoExcepciones(perId:number){
    this._prospeccionService.findObtenerExcepcionesProspectoByPerId(perId).subscribe(
      then => {
        this.prospectoExcepcionesVO = then[0];
        this.cambiaTipoNegocioNoProspectar();
      },
      error => console.error(error)
    );
  }

  //--------- eventos del formulario ------------------- //

  changeTipoPer(tpeClave: string) {
    if(tpeClave && tpeClave.length > 0) {
      this._cveTipoPersona = tpeClave;
      if(this._cveTipoPersona === Const.PERSONA_FISICA) {
        this.lblPiasPersona = 'País de Nacimiento';
        this.lblNomRSocial = 'Nombre(s)';
        this.indexTipoDir = 1;
        this.showPF = true;
        this.showPM = false;
        this.changeNacionalidad(this._paisClave);
      } else if(this._cveTipoPersona === Const.PERSONA_MORAL) {
        this.lblPiasPersona = 'País de Constituión';
        this.lblNomRSocial = 'Nombre de la Empresa';
        this._isExtran = false;
        this.textExtr = '';
        this.indexTipoDir = 0;
        this.showPF = false;
        this.showPM = true;
        this.changeNacionalidad(this._paisClave);
      }
      this._tipoPersona = ProspeccionUtil.obtenerTipoPersona(this._cveTipoPersona, this.arrTipoPer);
      this._tipoDireccion = ProspeccionUtil.obtenerTipoDireccion(this.indexTipoDir, this.arrTiposDir);
    }
  }
  
  changeTipoNeg(tconId: number) {
    this._tconIdSelected = tconId;
    if(tconId == Const.TCON_BANCO){
      this.showFideicomiso = false;
      this.showTipoBanco = true;
      this.funcForm.removeControl('permFormFideicomiso');
      this.funcForm.addControl('permFormBanco', this.createFunFormTipoBanco());
    } else if(tconId == Const.TCON_FIDEICOMISO){
      this.showTipoBanco = false;
      this.showFideicomiso = true;
      this.funcForm.removeControl('permFormBanco');
      this.funcForm.addControl('permFormFideicomiso', this.createFunFormFideicomiso());
    } else {
      this.showTipoBanco = false;
      this.showFideicomiso = false;
      this.funcForm.removeControl('permFormBanco');
      this.funcForm.removeControl('permFormFideicomiso');
    }
    this._tipoNegocio = ProspeccionUtil.obtenerTipoNegocio(this._tconIdSelected, this.arrTipoContrato);
  }

  createFunFormTipoBanco():FormGroup {
    return new FormGroup({
      cboOpBanco: new FormControl(1,Validators.required)
    });
  }

  createFunFormFideicomiso():FormGroup {
    return new FormGroup({
      fideicomiso: new FormControl('',Validators.required)
    });
  }

  textExtrInput(ext: string){
    if(ext.length > 0){
      this.buscaCoincidencias = false;

      this.inicializaValidadorRFC(this._cveTipoPersona,false);

      if(this.getCtr('extr').value.trim().length > 0){
          this.getCtr('perRfc').setValue('');
          this.getCtr('perRfc').disable();
          this.getCtr('extr').setValidators([Validators.required]);
          this.getCtr('extr').updateValueAndValidity();
          this.getCtr('perNomOrRazonSocial').disable();
          if(this._cveTipoPersona == Const.PERSONA_MORAL){
            this.getCtr('perNombreComercial').disable();
            this.getCtr('cboTipoSociedad').disable();
          }
      } else {
          this.getCtr('extr').clearValidators();
          this.getCtr('perRfc').enable();
          this.getCtr('perNomOrRazonSocial').enable();
          if(this._cveTipoPersona == Const.PERSONA_MORAL){
            this.getCtr('perNombreComercial').enable();
            this.getCtr('cboTipoSociedad').enable();
          }
      }
      if(this._pipelineVO != null && this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO){
          if(this.getCtr('extr').value.trim().length > 0){
              this.getCtr('extr').setValidators([Validators.required]);
              this.getCtr('extr').updateValueAndValidity();
          }else if(this.getCtr('extr').value.length == 0) {
            this.getCtr('perRfc').enable();
            this.inicializaValidadorRFC(this._cveTipoPersona,true);
          }
      } else {
        return;
      }
    } else {
      this.getCtr('extr').clearValidators();
      this.getCtr('extr').updateValueAndValidity();
      this.getCtr('perRfc').enable();
    }
  }
  
  txtInputChangeHandlerRFC(rfc:string){
    if(rfc.length > 0){
      this.buscaCoincidencias = false;
    
      this.inicializaValidadorRFC(this._cveTipoPersona,false);
      
      this.getCtr('extr').clearValidators();// Validar de la persona extranjera
      this.getCtr('extr').enable(); // habilita el control de SSN para cuando es persona FISICA EXTRANJERA
      this.getCtr('extr').setValue('');
  
      if(this.getCtr('perRfc').value.trim().length > 0) {
          //Se valida si es una persona moral y extranjera
          if(this.getCtr('cboPaisPersona') && this.getCtr('cboPaisPersona').value != 1 
              && this._cveTipoPersona == Const.PERSONA_MORAL) {
              //Aqui se inhabilitarían los validadores del RFC ya que es el ID en lugar del RFC, 
              //pero como ya estan desactivados
          } else {
              this.inicializaValidadorRFC(this._cveTipoPersona,true);
              if(this._cveTipoPersona == Const.PERSONA_FISICA) {
                this.inicializaValidadorRFC(this._cveTipoPersona,true);
                this.getCtr('extr').disable();
              } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
                this.inicializaValidadorRFC(this._cveTipoPersona,true);
              }
          }
      }
      
      if(this._pipelineVO != null && this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO){
            if(this.getCtr('perRfc').value.trim().length == 0 && this._paisClave > 1 && 
                this._cveTipoPersona == Const.PERSONA_FISICA) {
                  this.getCtr('extr').setValidators([Validators.required]);
                  this.getCtr('extr').updateValueAndValidity();
                  this.getCtr('extr').enable();
            }
      } else {
            return;
      }
    } else {
      this.getCtr('perRfc').clearValidators();
      this.getCtr('perRfc').updateValueAndValidity();
      this.getCtr('extr').enable();
    }
  }

  inicializaValidadorRFC(tpeClave:string, enabled:boolean):void {
    if(enabled) {
        this.getCtr('perRfc').setValidators([Validators.required,this.validatorRFC(tpeClave)]);
        this.getCtr('perRfc').updateValueAndValidity();
        this.getCtr('perRfc').enable();
    }
  }

  validatorRFC(tpeClave:string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      let resultaValidadorRFC = ProspeccionUtil.validaRFC(value,tpeClave);
      
      if(value != null && value.length > 0 && value.length < 10) {
        return { 'longMinRFC': true };
      } else if(value != null && value.length > 0 && value.length > 13 && tpeClave == Const.PERSONA_FISICA){
        return { 'longMaxRFC': true };
      } else if(value != null && value.length > 0 && value.length > 12 && tpeClave == Const.PERSONA_MORAL){
        return { 'longMaxRFCPM': true };
      } else if(!resultaValidadorRFC && tpeClave == Const.PERSONA_FISICA) {
        return { 'rfcFormato': true };
      } else if((!resultaValidadorRFC && tpeClave == Const.PERSONA_MORAL) || (value.length < 12 && tpeClave == Const.PERSONA_MORAL)){
        return { 'rfcFormatoMoral': true };
      }
      return null;
    };
  }

  changeNacionalidad(paiClave: number) {
    this._paisClave = paiClave;
    if(this._paisClave == Const.PAIS_CLAVE_MEXICO){
        this.getCtr('perRfc').enable();
        this.getCtr('extr').setValue('');
        this.getCtr('extr').clearValidators();
    }
    if(this.getCtr('cboPaisPersona').value ==='') {          
        return;
    }
    this.getCtr('cboPaisPersona').clearValidators();
    this.validaEtiquetaNacionalidad(this._paisClave);
    if(this._cveTipoPersona === Const.PERSONA_MORAL && this.lblRfcId != 'RFC'){
      this.getCtr('perRfc').setValue('');
      /* if(!isNaN(this._paisClave) &&  this._paisClave > 1 &&  this.personaMoral != null) {
        this.getCtr('perRfc').setValue((this.personaProspecto.personaVO as unknown as PersonaMoralVO).pemIdShcp != null ? 
          (this.personaProspecto.personaVO as unknown as PersonaMoralVO).pemIdShcp:'');
      } else {
        this.getCtr('perRfc').setValue('');
      } */
    }

    this.getCtr('extr').clearValidators();
  }
  
  validaEtiquetaNacionalidad(paiClv:number): void {
    this.inicializaValidadorRFC(this._cveTipoPersona, false);
    
    if(this._cveTipoPersona ==  Const.PERSONA_MORAL){
        if(paiClv > 1){
            this.lblRfcId = 'ID';
        }else {
          this.lblRfcId = 'RFC';
          if(this.getCtr('perRfc').value.length > 0) {
            this.inicializaValidadorRFC(this._cveTipoPersona, true);
          }
          if(this.getCtr("perRfc").value.length == 0 && this._paisClave > 0 
            && this._modalidad != this.ALTA_PROSPECTO){
              this.getCtr('perRfc').setValidators([Validators.required]);
              this.getCtr('perRfc').updateValueAndValidity();
          }
        }
    }
    if((paiClv == 0 || paiClv == 1) && this._cveTipoPersona ===  Const.PERSONA_FISICA) {
        this.lblRfcId = 'RFC';
        if(this.getCtr('perRfc').value.length > 0){
          this.inicializaValidadorRFC(this._cveTipoPersona, true);
        }
        if(this._isExtran){
            this._isExtran = false;
        }
    } else if(paiClv == 3 && this._cveTipoPersona ===  Const.PERSONA_FISICA) {
          this._isExtran = true;
          this.textExtr = 'SSN';
          this.lblRfcId = 'RFC';
    } else if((paiClv == 2 || paiClv > 3) && this._cveTipoPersona ===  Const.PERSONA_FISICA) {
          this._isExtran = true;
          this.textExtr = 'FM3';
          this.lblRfcId = 'RFC';
    }
  }

  changeCheckActEmpresarial(evet) {
    if(evet){
      this.actEmpSelected = true;
    } else {
      this.actEmpSelected = false;
    }
    if(this._cveTipoPersona === Const.PERSONA_FISICA && this.actEmpSelected){
      this.indexTipoDir = 0;
    } else if(this._cveTipoPersona === Const.PERSONA_FISICA && !this.actEmpSelected){
      this.indexTipoDir = 1;
    }
    this._tipoDireccion = ProspeccionUtil.obtenerTipoDireccion(this.indexTipoDir, this.arrTiposDir);
  }
  
  getNacionalidad(pai:PaisVO): string{
    if(pai.paiDescripcion === null){
      return pai.paiNacionalidad;
    } else {
      return pai.paiDescripcion;
    }
  }

  changePiasDireccion(paiClave: number) {
    this._paisClaveDir = paiClave;
    if(this._paisClaveDir == Const.PAIS_CLAVE_MEXICO){
      this.showBtnBuscaCP = true;
      this.showDirMX = true;
      this.showDirExt = false;
      this.getCtr('cp').setValue('');
      this.getCtr('colonia').setValue('');
      this.getCtr('cboCiudad').setValue('');
      this.getCtr('entidad').setValue('');
    } else if(this._paisClaveDir != Const.PAIS_CLAVE_MEXICO) {
      this.showBtnBuscaCP = false;
      this.showDirMX = false;
      this.showDirExt = true;
      this.getCtr('cp').setValue('');
      this.getCtr('cboColonia').setValue('');
      this.getCtr('ciudad').setValue('');
      this.getCtr('alcMun').setValue('');
      this.getCtr('entidad').setValue('');
      this.getCtr('colonia').setValue('');
    }
    this._paisDireccion = ProspeccionUtil.obtenerPais(this._paisClaveDir, this.arrPais);
    this.obtenerCiudadesPorClavePais(this._paisClaveDir);
  }
  
  obtenerCiudadesPorClavePais(paiClave:number){
    if(!isNaN(paiClave)){
      this._personaService.findAllEntidadByPaiClave(paiClave).subscribe(
        then => {
          this.arrCuidad = then;
          this.mostrarListaCiudad(this.arrCuidad);
        },
        error => console.error(error)
      )
    }
  }

  /**
  * Mostrar lista Ciudad.
  **/
   mostrarListaCiudad(value:EntidadVO[]):void {
    if(value == null) {
        return;
    }
    
    if(value.length == 0 || this.ciudadPorDefecto === null) {
        return;
    }
    
    // seleccionar ciudad por defecto
    this.getCtr('cboCiudad').setValue(ProspeccionUtil.obtenerEntClave(this.ciudadPorDefecto, value));
    this.loadCiudad = true;
  }

  buscarCP(event: Event) {
    if((this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir)) && (event.target as HTMLInputElement).value.length == 5){
      this.obtenerColonias(this.getCtr('cp').value);
    }
  }

  btnBuscarCP(e: any){
    if(this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir) && this.getCtr('cp').value !=''){
      this.obtenerColonias(this.getCtr('cp').value);
    }
  }

  obtenerColonias(cp:string){
    this._personaService.findAllColoniasByCodPost(cp).subscribe(
      then => {
        this.arrColonia = then;
        this.mostrarListaColonia();
      },
      error => console.error(error)
    )
  }

  /**
  * Mostrar lista Colonia.
  **/
  mostrarListaColonia():void {
    if(this.arrColonia == null || this.arrColonia.length == 0) {
        return;	
    }
    if(this.arrColonia.length == 0 && (this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir)) && (!this.existeCP) && this.getCtr('cp').value.length == 5){
      this.existeCP = true;
    }

    if(this.coloniaPorDefecto != null && this.coloniaPorDefecto.length > 0 && this.arrColonia.length > 0) {
      // seleccionar colonia por defecto
      this.getCtr('cboColonia').setValue(ProspeccionUtil.obtenerColClave(this.coloniaPorDefecto, this.arrColonia));
      this.coloniaPorDefecto = null;
    } else {
      this.funcForm.get('cboColonia').setValue(this.arrColonia[0].colClave);
    }
  }

  changeColonia(colClave: number) {
    if(colClave > 0 && 
      (this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || isNaN(this._paisClaveDir))){
        var coloniaSelected = new ColoniaVO;
        for (let i = 0; i < this.arrColonia.length; i++) {
          if(this.arrColonia[i].colClave == colClave){
            this.getCtr('ciudad').setValue(this.arrColonia[i].colCiudad);
            this.colCityCodeBrx = this.arrColonia[i].colCityCodeBrx;
            coloniaSelected = this.arrColonia[i];
            break;
          }
        }
        
        this._personaService.getMunicipoByMunClaveDeColonia(coloniaSelected.municipioVO.munClave).subscribe(
          then => {
            var municipio = new MunicipVO;
            municipio = then;
            this.getCtr('alcMun').setValue(municipio.munDescrip);
            
            this._personaService.getEntidadByEntClaveDeMunicip(municipio.entidadVO.entClave).subscribe(
              then => {
                var entidad = new EntidadVO;
                entidad = then;
                this.getCtr('entidad').setValue(entidad.entDescripcion);
                this.entClave = entidad.entClave;
                this.entIsoCodeBrx = entidad.entIsoCodeBrx;
              },
              error => console.error(error)
            )
  
          },
          error => console.error(error)
        )
    }
  }

  changeCboTpContratoNopros() {
    this.prospectoExcepcionesVO = null;
    this.cambiaTipoNegocioNoProspectar();
  }
  
  cambiaTipoNegocioNoProspectar(): void {
    if(this.enabled){
      this.getCtr('cboMotivo').enable();
    }
    this.getCtr('cboMotivo').setValue('');
    this.getCtr('descripcionNopros').setValue('');
    
    this.arrExcepcionProspeccionAux.splice;
    this.arrExcepcionProspeccionAux = Object.assign([], this.arrExcepcionProspeccion);
    
    this.arrExcepcionProspeccionAux = ProspeccionUtil.filtrarExpProspeccion(this.arrExcepcionProspeccionAux,this.getCtr('cboTpContratoNopros').value,this.prospectoExcepcionesVO);
    
    if(this.prospectoExcepcionesVO != null && this.getCtr('cboTpContratoNopros') && 
        this.prospectoExcepcionesVO.tconId == this.getCtr('cboTpContratoNopros').value){
        this.getCtr('cboMotivo').setValue(this.prospectoExcepcionesVO.expId);
    }
    
    this.muestraResumenExpeciones();
  }

  motivoNoProspectar(expId: number) {
    if(expId != 0 && expId > 0 && this.getCtr('cboTpContratoNopros')){
      this.prospectoExcepcionesVO = new ProspectoExcepcionesVO;
      this.prospectoExcepcionesVO.expId = expId;
      this.prospectoExcepcionesVO.tconId = this.getCtr('cboTpContratoNopros').value;
      this.muestraResumenExpeciones();
    } else {
      this.getCtr('descripcionNopros').setValue('');
    }
  }
  
  muestraResumenExpeciones():void {
    //En esta seccion se obtienen las excepciones para poder pintarlas en la parte "Resumen"
    var strResumen : string = '';
    if(this.getCtr('cboTpContratoNopros') && this.prospectoExcepcionesVO != null
      && this.arrExcepcionProspeccionAux != null && this.arrExcepcionProspeccionAux.length > 0){
      this.arrExcepcionProspeccionAux.forEach((item) => {
        this.arrTipoContratoNoPsp.forEach((negocio) => {
          if(item.expId == this.prospectoExcepcionesVO.expId && negocio.tconId == this.prospectoExcepcionesVO.tconId){
            strResumen = negocio.tconDescripcion + ': ' + item.expNombre + '\n';
          }
        });
      });
    }
    
    //Se pintan las excepciones de acuerdo al tipo de negocio
    this.getCtr('descripcionNopros').setValue(strResumen);
  }

  //--------- seccion para el guardado del prospecto a base -------------//

  onSubmit() {
    //ME20-01-036 Validacon para Fideicomiso y grupo Fiduciario
    if(this._tipoNegocio && this._tipoNegocio.tconId == Const.TCON_FIDEICOMISO 
      && (this._promotorProspecta && UsuarioUtil.hasGrupo([Permisos.GPO_FIDUCIARIO],this._promotorProspecta))) {
        this.btnGuardarProspectoMouseClickHandler();
        return;
    }
    
    if(this._modalidad == this.cteSinContrato){
      this._prospeccionService.findProspectosByPerIdContrato(this._cteSinContrato.perId, this._tipoNegocio.tconId).subscribe(
        then => {
          this.listNegociosProsp = then;
          let continuaProceso : boolean = true;
          if(this.listNegociosProsp.length > 0){
            this.listNegociosProsp.forEach((item) => {
              if(!isNaN(item.epiId) && item.epiId < Const.ID_ESTADO_PIPELINE_CLIENTE){
                if(this._idPromByAsis !=0){
                  if(this._idPromByAsis != item.idEjecutivo){
                    this.mostrarMensaje(Const.msjPersonaExisteProspectada + ' ' + item.ejecutivo + '.', 'error',true);
                    continuaProceso = false;
                  }
              }
              else {
                  if(this.usuarioSesion.idPersona != item.idEjecutivo){
                    this.mostrarMensaje(Const.msjPersonaExisteProspectada + ' ' + item.ejecutivo + '.', 'error',true);
                    continuaProceso = false;
                  }
              }
              }
            });
          }
          if(continuaProceso) {
            this.btnGuardarProspectoMouseClickHandler();
          }
        },
        error => {
          console.error(error);
        }
      );
    } else{
      this.btnGuardarProspectoMouseClickHandler(); 
    }
  }

  /** 
  * Guarda persona Prospecto.
  **/
  btnGuardarProspectoMouseClickHandler():void {
    this.btnGuardarProspecto = false;
    
    var isValidoRFC : boolean = false;
    var existeRFC : boolean = false;
    //Almacena la relaciones excepciones vs prospecto para los tipos de Negocio seleccionados
    var lstProspectoExcepciones : any [] = [];

    this.resetValidadores();
    
    //Validamos los datos de acuerdo a la modalidad
    //y ejecutamos el validador de los controles para quitar los warnig's
    //que ya cumplen con las condiciones
    if(!this.validaDatos()) {
      this.validaControles(this.funcForm);
      this.btnGuardarProspecto = true;
      return;
    }

    //validar controles obligatorios para que en caso de falta alguno
    //nos muestre el waring en el control
    if(this.validaControles(this.funcForm)) {
      this.btnGuardarProspecto = true;
      return;
    }
    
    if(this._cveTipoPersona == Const.PERSONA_FISICA && this.getCtr('perRfc').value.length > 0) {
      isValidoRFC = ProspeccionUtil.validaRFC(this.getCtr('perRfc').value, this._cveTipoPersona) 
        && ProspeccionUtil.validaLongRFC(this.getCtr('perRfc').value, this._cveTipoPersona);
      existeRFC = true;
    } else if(this._cveTipoPersona == Const.PERSONA_MORAL && this.getCtr('perRfc').value.length > 0 && 
        this.getCtr('cboPaisPersona') && this.getCtr('cboPaisPersona').value == 1) {
          isValidoRFC = ProspeccionUtil.validaRFC(this.getCtr('perRfc').value, this._cveTipoPersona) 
            && ProspeccionUtil.validaLongRFC(this.getCtr('perRfc').value, this._cveTipoPersona);
          existeRFC = true;
    }
    
    if(!isValidoRFC && existeRFC) {
      this.btnGuardarProspecto = true;
      console.log('formato invalido rfc');
      return;
    }
    
    //Valida que la fecha del RFC no sea mayor a la actual
    if(isValidoRFC && existeRFC && !ProspeccionUtil.fechaValidaRFC(this._cveTipoPersona, this.getCtr('perRfc').value.trim(),this.fechaActual)){
      this.btnGuardarProspecto = true;
      this.getCtr('perRfc').setValidators([this.validatorFechaRFC(this._cveTipoPersona)]);
      this.getCtr('perRfc').updateValueAndValidity();
      this.validaControles(this.funcForm);
      return;
    }

    // validar persona Fisica
    if(this._cveTipoPersona == Const.PERSONA_FISICA) { 
      if(this.getCtr('extr').value.trim() != '' && this.getCtr('extr').enabled){
        this.btnGuardarProspecto = true;
        this.getCtr('perRfc').disable();
      }
      
      if(this.getCtr('extr').value.trim() == '' && this.getCtr('extr').enabled){
        this.getCtr('perRfc').enable();
      }

      if(this.getCtr('perRfc').value.trim() != '' && this.getCtr('perRfc').enabled){
        this.btnGuardarProspecto = true;
        this.getCtr('extr').disable();
      }

      if(this.getCtr('perRfc').value.trim() == '' && this.getCtr('perRfc').enabled){
        this.getCtr('extr').enable();
      }
    }

    //popUp coincidencias
    if((this.getCtr('perRfc').value.trim().length > 0 || this.getCtr('extr').value.trim().length > 0) 
      && this._cveTipoPersona == Const.PERSONA_FISICA && !this.buscaCoincidencias && this.getCtr('perRfc').enabled) {
          var valorBusqueda:string = Number(this.getCtr('perRfc').value.trim().length) > 0 ? 
          this.getCtr('perRfc').value.trim().toUpperCase() : this.getCtr('extr').value.trim().toUpperCase();
        
        if(this.getCtr('cboPaisPersona').value > 0 && this.textExtr == 'SSN' && this.getCtr('extr').value.trim().length > 0) {
            this.buscarPersona('NSS', valorBusqueda);    
        }else if(this.getCtr('cboPaisPersona').value > 0 && this.textExtr == 'FM3' && this.getCtr('extr').value.trim().length > 0){
            this.buscarPersona('FM3', valorBusqueda);    
        }else {
            this.buscoRFC = true;
            this.buscarPersona('RFC', valorBusqueda); 
        }
        this.btnGuardarProspecto = true;
        return;
    }
    
    //----- llenamos el objeto de ProspectoPersonaVO --------//
    var prospectoPersona:ProspeccionPersonaVO;
    
    if(this._modalidad == this.ALTA_PROSPECTO) {
      prospectoPersona = new ProspeccionPersonaVO();
      prospectoPersona.ejecutivoVO = new PersonaVO();
      prospectoPersona.paisClave = !isNaN(this._paisClave) ? this._paisClave : 0;
      
      if(this._paisClave != 3 && this._paisClave !=1 &&
        this._cveTipoPersona == Const.PERSONA_FISICA){
        this._personaFisica.pefNoFm3 = this.getCtr('extr').value.toUpperCase();
      } else if(this._paisClave == 3 && this._cveTipoPersona == Const.PERSONA_FISICA) {
        this._personaFisica.pefNss = this.getCtr('extr').value.toUpperCase();
      }
                    
      // Se valida si el alta la esta realizando un asistente
      if(!isNaN(this._idPromByAsis)){
        prospectoPersona.ejecutivoVO.perId = this._idPromByAsis;
        prospectoPersona.ejecutivoVO.usuUsuario = this.usuEjeAsistido;
        prospectoPersona.paisClave = !isNaN(this._paisClave) ? this._paisClave : 0;
      }else{
        prospectoPersona.ejecutivoVO.perId = this.usuarioSesion.idPersona;
        //OCRUZ 7-08-2013 se envía el usuario ejecutivo, porque en el interceptor "ProspeccionAfterAdvice" hace referencia a él.
        prospectoPersona.ejecutivoVO.usuUsuario = this.usuarioSesion.usuClave;
      }
    } else if(this._modalidad == this.MODIFICAR_PROSPECTO) {
      this._personaFisica = new PersonaFisicaVO();
      prospectoPersona = this.personaProspecto;
      if(this._idPromByAsis != 0){
          prospectoPersona.ejecutivoVO.usuUsuario = this.usuEjeAsistido;
          prospectoPersona.paisClave = this._paisClave;
          if(this._paisClave == 2 && this._paisClave > 3 &&
            this._cveTipoPersona == Const.PERSONA_FISICA){
              (prospectoPersona.personaVO as unknown as PersonaFisicaVO).pefNoFm3 = this.getCtr('extr').value.toUpperCase();
            prospectoPersona.personaVO.perNacionalidad = false;
        }else if(this._paisClave == 3 && this._cveTipoPersona == Const.PERSONA_FISICA) {
          (prospectoPersona.personaVO as unknown as PersonaFisicaVO).pefNss = this.getCtr('extr').value.toUpperCase();
            prospectoPersona.personaVO.perNacionalidad = false;  
        }else if(this._paisClave == 1 || this._paisClave == 0 ||
            this._cveTipoPersona == Const.PERSONA_FISICA || 
            this._cveTipoPersona == Const.PERSONA_MORAL){
            prospectoPersona.personaVO.perNacionalidad = true;  
        }
      } else {
        //OCRUZ 7-08-2013 se envía el usuario ejecutivo, porque en el interceptor "ProspeccionAfterAdvice" hace referencia a él.
        prospectoPersona.ejecutivoVO.usuUsuario = this.usuarioSesion.usuClave;
        prospectoPersona.paisClave = this._paisClave;
        if((this._paisClave == 2 || this._paisClave > 3)&&
        this._cveTipoPersona == Const.PERSONA_FISICA){
            if(this.getCtr('extr').value.length > 0){
              (prospectoPersona.personaVO as unknown as PersonaFisicaVO).pefNoFm3 = this.getCtr('extr').value.toUpperCase();   
            }else {
                prospectoPersona.personaVO.perRfc = this.getCtr('perRfc').value.toUpperCase();   
            }
            prospectoPersona.personaVO.perNacionalidad = false;
        }else if(this._paisClave == 3 && this._cveTipoPersona == Const.PERSONA_FISICA) {
            if(this.getCtr('extr').value.length.length > 0){
              (prospectoPersona.personaVO as unknown as PersonaFisicaVO).pefNss = this.getCtr('extr').value.toUpperCase();  
            }else {
                prospectoPersona.personaVO.perRfc = this.getCtr('perRfc').value.toUpperCase();   
            }
            prospectoPersona.personaVO.perNacionalidad = false; 
        }else if((this._paisClave == 1 || this._paisClave == 0) ||
            (this._cveTipoPersona == Const.PERSONA_FISICA || 
              this._cveTipoPersona == Const.PERSONA_MORAL)){
            prospectoPersona.personaVO.perNacionalidad = true;  
        }
      }
    
    } else if(this._modalidad == this.REFERENCIAR || this._modalidad == this.cteSinContrato) {
      prospectoPersona = new ProspeccionPersonaVO();
      prospectoPersona.personaVO = this._clienteReferenciado;
    }

    // Persona
    if(prospectoPersona.personaVO == null) {
        prospectoPersona.personaVO = new PersonaVO();
        prospectoPersona.personaMoralVO = new PersonaMoralVO();
        if(!isNaN(this._idPromByAsis)){
            prospectoPersona.personaVO.usuUsuario  = this.usuEjeAsistido;
        }else {
            prospectoPersona.personaVO.usuUsuario = this.usuarioSesion.usuClave;  
        }
    }
    
    prospectoPersona.personaVO.tipoPersonaVO = this._tipoPersona;
    
    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      prospectoPersona.personaVO.perRfc = this.getCtr('perRfc').value.toUpperCase();
      prospectoPersona.personaVO.perNomCorto = this.getCtr('perNomOrRazonSocial').value.toUpperCase();
    } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
      prospectoPersona.personaVO.perRfc = this.getCtr('perRfc').value.toUpperCase();
      prospectoPersona.personaVO.perNomCorto =  this.getCtr('perNomOrRazonSocial').value.toUpperCase();
      prospectoPersona.personaVO.perNomComercial = this.getCtr('perNombreComercial').value.toUpperCase();
      prospectoPersona.personaMoralVO.pemTipoSoc = this.getCtr('cboTipoSociedad').value != '' ?  this.getCtr('cboTipoSociedad').value.toUpperCase() : '';
      (prospectoPersona.personaMoralVO as unknown as  PersonaVO).paiClave = this.getCtr('cboPaisOr').value != '' ?  this.getCtr('cboPaisOr').value : 0;
    }
    
    //Esta validacion se realiza para cuando el prospecto es creado o cuando se creo no fue dada de alta su dirección
    if(this.getCtr('cboPaisDireccion').value != '' && (this.getCtr('cboPaisDireccion').value as unknown as PaisVO).paiClave != -1 && (prospectoPersona.direccionVO == null ||	
      isNaN(prospectoPersona.direccionVO.dirId) || prospectoPersona.direccionVO.dirId == 0)) {
      
      prospectoPersona.direccionVO = new DireccionVO();
      prospectoPersona.direccionVO.usuUsuario = this.usuarioSesion.usuClave;
    }
    
    if(prospectoPersona.direccionVO != null) {
                    
      if(prospectoPersona.direccionVO.dirId == undefined && this.txtDirId != ""){
          prospectoPersona.direccionVO.dirId = Number(this.txtDirId);
      }
      prospectoPersona.direccionVO.paisVO = this._paisDireccion != null ? this._paisDireccion : null;
      prospectoPersona.direccionVO.dirEntidadFed = this.getCtr('entidad').value;
      prospectoPersona.personaVO.entClave = this.entClave;
      prospectoPersona.direccionVO.dirCiudad = this.getCtr('ciudad').value;
      prospectoPersona.direccionVO.dirMunicipio = this.getCtr('alcMun').value;
      prospectoPersona.direccionVO.dirCalle = this.getCtr('calle').value.toUpperCase();
      prospectoPersona.direccionVO.dirNumeroInt = this.getCtr('numInt').value;
      prospectoPersona.direccionVO.dirNumeroExt = this.getCtr('numExt').value;
      prospectoPersona.direccionVO.dirCodigoPostal = this.getCtr('cp').value;
      prospectoPersona.direccionVO.dirTelefono1 = this.getCtr('telefono').value;
      //broxel
      prospectoPersona.direccionVO.colCityCodeBrx = this.colCityCodeBrx;
      prospectoPersona.direccionVO.entIsoCodeBrx = this.entIsoCodeBrx;
      //GDEJESUS  si es extranjero se asigna la descripcion de la ciudad de comboCiudad
      if(this._paisDireccion != null && this._paisDireccion.paiClave == 1){
          prospectoPersona.direccionVO.dirCiudad = this.getCtr('ciudad').value;
          prospectoPersona.direccionVO.dirColonia = ProspeccionUtil.obtenerColDescrip(Number(this.getCtr('cboColonia').value),this.arrColonia);
      } else if(this._paisDireccion != null) {
          prospectoPersona.direccionVO.dirCiudad = ProspeccionUtil.obtenerEntDescripcion(Number(this.getCtr('cboCiudad').value),this.arrCuidad); 
          prospectoPersona.direccionVO.dirColonia = this.getCtr('colonia').value;
      }
      
      if(this.nuevaDireccion) {
          //Determina si la dirección capturada será nueva
          prospectoPersona.nuevaDireccion = this.nuevaDireccion;
          prospectoPersona.direccionVO.dirId = NaN;
      }
      
      prospectoPersona.direccionVO.tipoDireccionVO = this._tipoDireccion != null ? this._tipoDireccion : null;
    }

    // Tipo Negocio
    prospectoPersona.tipoContratoVO = this._tipoNegocio;
    if(this._tconIdSelected == Const.TCON_FIDEICOMISO){
       prospectoPersona.prpFideicomiso = this.getCtr('fideicomiso','permFormFideicomiso').value.toUpperCase();
    }
    
    //Validamos si el tipo de contrato seleccionado es BANCO
    if(prospectoPersona.tipoContratoVO.tconDescripcion == Const.OPCION_BANCO) {
      //Verificamos si selecciono del tipo Crédito
      if(this.getCtr('cboOpBanco','permFormBanco').value == 2) {
          prospectoPersona.prpEsCreditoBanco = true;
      } else {
          prospectoPersona.prpEsCreditoBanco = false;
      }
    }
  
    if(this._paisDireccion != null && this._paisDireccion.paiClave != -1){
      prospectoPersona.direccionVO.paiClave = this._paisDireccion.paiClave;
    }

    // Datos adicionales
    prospectoPersona.prpContacto = this.getCtr('contacto').value.toUpperCase();
    prospectoPersona.prpEmail = this.getCtr('correo').value;
    prospectoPersona.prpPaginaweb = this.getCtr('paginaWeb').value;
    prospectoPersona.prpComentarios = this.getCtr('comentarios').value;

    //Se valida que el control del telefono no este vacio y se asigna al objeto
    if(this.getCtr('telefono').value) {
      prospectoPersona.prpTelefono = this.getCtr('telefono').value;
    }

    //En esta seccion se almacenan las excepciones para los diferentes tipos de contrato
    if(this.prospectoExcepcionesVO != null && this.prospectoExcepcionesVO.pexId > 0){
      //Se agina el usuario
      this.prospectoExcepcionesVO.usuUsuario = this.usuarioSesion.usuClave;
      lstProspectoExcepciones.push(this.prospectoExcepcionesVO);
    }

    //Si existen excepciones para los demas tipos de contratos, se almacenan en el objeto prospectoPersona
    if(lstProspectoExcepciones.length > 0) {
      prospectoPersona.tpNegociosNoProspectar = lstProspectoExcepciones;
    }

    // Esta validacion es para saber si en la entrevista unica se muestra el formato de persona fisica con actividad empresarial
    if(this.actEmpSelected){
      prospectoPersona.personaVO.cpeId = Const.PERSONA_FISICA_CON_ACTIVIDAD;
    } else {
      prospectoPersona.personaVO.cpeId = 0;
    }


    this.lstClvlegadas = [];
    
    if(!isNaN(this._idPromByAsis)){
      //Obtiene Claves Legadas del promotor al cual se está asistiendo
      this.lstClvlegadas = ProspeccionUtil.filtrarClvLegadas(this.arrClvlegadas,prospectoPersona.tipoContratoVO.tconId);
    } else {
      //Obtiene Claves Legadas de la Session de Usuario
      this.lstClvlegadas = ProspeccionUtil.filtrarClvLegadas(this.usuarioSesion.clavesLegadas,prospectoPersona.tipoContratoVO.tconId);
    }

    // Alta Persona Prospecto
    if(this._modalidad == this.ALTA_PROSPECTO) {
        var msj:string;
        var parametros:Object = new Object();
        parametros['tconId'] = prospectoPersona.tipoContratoVO.tconId;
        if(!isNaN(this._idPromByAsis)){
            prospectoPersona.personaVO.ejecutivoId = this._idPromByAsis;
        } else {
            //Obtiene Claves Legadas de la Session de Usuario
            prospectoPersona.personaVO.ejecutivoId = this.usuarioSesion.idPersona;
        }
        parametros['clvLegadas'] = this.lstClvlegadas;
        if(this.lstClvlegadas.length == 0){
            this.mostrarMensaje(Const.promotorNoClaveLegada, 'error',true);
            this.btnGuardarProspecto = true;
            return;
        }
        //Valida si el promotor esta certificado y apoderado para este producto
        msj = ProspeccionUtil.validaPermisosCertificadoApoderado(this.arrCertAsignacionVO, 
            prospectoPersona.tipoContratoVO.tconId, this._validaPoderes);
        if(msj != "") {
            this.mostrarMensaje(msj, 'error',true);
            this.btnGuardarProspecto = true;
            return;
        }

        var rfc :string;
        if(prospectoPersona!= null){
            if(prospectoPersona.personaVO != null){
                if(prospectoPersona.personaVO.perRfc != null){
                    rfc =  prospectoPersona.personaVO.perRfc;  
                }
            }
        }
        
        if(this._personaFisica != null){
            if((this._personaFisica as unknown as PersonaVO).perRfc != null){
                rfc = (this._personaFisica as unknown as PersonaVO).perRfc;
            }
        }
        if(rfc != null){
            if(rfc != ""){
              this.validaExisteRFCBD(rfc,prospectoPersona);
            } else {
              this.guardarPersonaProspecto(prospectoPersona,this._personaFisica);
            }
        } else {
            //guarda el prospecto
            this.guardarPersonaProspecto(prospectoPersona,this._personaFisica);
        }
    }
    // Modificar Persona Prospecto
    else if(this._modalidad == this.MODIFICAR_PROSPECTO){
      if(!this.getCtr('perRfc').enabled){
          this.modRfcExis = true; 
      }
      this.modificarPersonaProspecto(prospectoPersona);
    }
    // Alta Cliente Referenciado
    else if(this._modalidad == this.REFERENCIAR) {
      let cteReferenciado:CteReferenciadoVO = new CteReferenciadoVO();
      cteReferenciado.prospectoPersonaVO = prospectoPersona;
      
      //04-08-2013 - ocruz Actualizar el estatus de la solicitud a TOMADO y enviar el usuario responsable
      if(this._solicitudReferenciacionVO != null) {
              this._solicitudReferenciacionVO.personaSolicitaVO.usuUsuario = this.usuarioSesion.usuClave;
              this._solicitudReferenciacionVO.edoReferenciacionVO.edrId = Const.REFERENCIACION_EDO_TOMADO;
              this._solicitudReferenciacionVO.slrEstatusProceso = Const.REFERENCIACION_PROCESADO;
              cteReferenciado.solicitaReferenVO = this._solicitudReferenciacionVO;
      }
      this.guardarClienteReferenciado(cteReferenciado);
    }
    //Alta Cliente Sin Contrato
    else if(this._modalidad == this.cteSinContrato) {
      prospectoPersona.ejecutivoVO = new PersonaVO();
      //Si el negocio para prospectar al cliente es Divisas Banco, se realiza una busqueda si este cliente
      //ya tiene un contrato para este negocio, y si esta en estatus dispobible (Estatus 6), esta variable
      //almacena dicho contrato para su reasignacion
      let contratoPersonaReasinacion : ContratoPersonaVO;
      
      if(!isNaN(this._idPromByAsis)){
        prospectoPersona.ejecutivoVO.perId = this._idPromByAsis;
        prospectoPersona.ejecutivoVO.usuUsuario = this.usuEjeAsistido;
      }else {
        prospectoPersona.ejecutivoVO.perId = this.usuarioSesion.idPersona;
        //OCRUZ 7-08-2013 se envía el usuario ejecutivo, porque en el interceptor "ProspeccionAfterAdvice" hace referencia a él.
        prospectoPersona.ejecutivoVO.usuUsuario = this.usuarioSesion.usuClave; 
      }
      prospectoPersona.personaVO = this._cteSinContrato;
          
      //Validamos si el arreglo tiene informacion
      if(this.arrPersonaContratos != null && this.arrPersonaContratos.length > 0) {
        //Recorremos los contratos del cliente
        for (let i = 0; i < this.arrPersonaContratos.length; i++) {
          //Validamos que sea una contrato de Divisas Banco en estatus 6 (Disponibles)
          if(this.arrPersonaContratos[i].tipContrato == Const.TIPO_CONTRATO_DIVISAS_BANCO 
            && this.arrPersonaContratos[i].idVO.contratoVO.contratoEstatusVO.cesId == 6){
              contratoPersonaReasinacion = this.arrPersonaContratos[i];
              break;
          }
        }
      }
          
      //Validamos si el tipo contrato es DIVISAS BANCO y si el cliente ya tiene un contrato para este negocio en estatus 6
      if(this._tipoNegocio.tconId == Const.TIPO_CONTRATO_DIVISAS_BANCO && contratoPersonaReasinacion != null &&
          contratoPersonaReasinacion.idVO.contratoVO.tmpCveLegada != null) {
            prospectoPersona.conId = contratoPersonaReasinacion.idVO.contratoVO.conId;
            //Validamos si el promotor tiene claves legadas para operar este negocio
            if(this.lstClvlegadas.length > 0) {
                //Enviamos la reasignacion del contrato
                this.reasignarContratoDivisasBanco(prospectoPersona, this.lstClvlegadas[0].tostring(), contratoPersonaReasinacion);
              } else {
                this.mostrarMensaje(Const.promotorNoClaveLegada, 'error',true);
            }
      } else {
          //OCRUZ 03/11/2013 se implementa el envío de persona fisica esto para solucion al bug 3861
          this.guardarPersonaProspecto(prospectoPersona,this._personaFisica);
      }
    }
    
  }

  modificarPersonaProspecto(prospectoPersona:ProspeccionPersonaVO):void{
    let rfc:string = prospectoPersona.personaVO.perRfc;
    if(rfc.trim() !="" ){
      this.esMod=true;
      this.validaExisteRFCBD(rfc,prospectoPersona);
    } else {
      this.actualizaPersonaProspecto(prospectoPersona);
    }
  }

  validaExisteRFCBD(rfc:string, prospectoPersona:ProspeccionPersonaVO){
    var existeRfc: PersonaVO [] = [];
    this._personaService.validaExisteRFC(rfc).subscribe(
      then => {
        existeRfc = then;
          //Validamos si es para alto o modificacion
          if(!this.esMod){
              if(existeRfc != null && existeRfc.length > 0){
                this.mostrarExiste(true, rfc);
              } else {
                  //guarda el prospecto
                  this.guardarPersonaProspecto(prospectoPersona,this._personaFisica);
              }  
          }else {
              if(existeRfc != null && existeRfc.length > 0 && (!this.modRfcExis)){
                  this.mostrarExiste(true, rfc);
              } else {
                  //Actualiza el prospecto
                  this.actualizaPersonaProspecto(prospectoPersona); 
              }
          }
      },
      error => console.error(error)
    );
  }

  mostrarExiste(value:boolean, rfc:string):void{
    if(value){
      if(this.buscoRFC){
        this.btnGuardarProspecto = true;
        this.buscoRFC = false;
        this.buscaCoincidencias = false;
      } else {
        this.mostrarMensaje(Const.rfcExistente + " " + rfc, 'error',true);
        this.btnGuardarProspecto = true;
      }
    }
  }

  /**
  * Guarda Persona Prospecto.
  **/
  guardarPersonaProspecto(prospectoPersona:ProspeccionPersonaVO, personaFisica:PersonaFisicaVO):void {
    let prospecto = new  ProspeccionResponse();
    prospecto.prospecto = prospectoPersona;
    if(prospecto.prospecto.personaVO.actividadVO == null){
      prospecto.prospecto.personaVO.actividadVO = new ActividadEconomicaVO()
    }
    prospecto.perF = personaFisica;
      this._prospeccionService.savePersonaProspecto(prospecto).subscribe(
        then => {
          this.prospectoSave = then;
          this.confirmacionPersonaProspecto = true;
          this.mostrarMensajeAltaProspectoExitoso(this.confirmacionPersonaProspecto);
        },
        error => {
          console.error(error);
          this.btnGuardarProspecto = true;
        } 
      );
  }
  
  /**
  * actualizar el Persona Prospecto.
  **/
  actualizaPersonaProspecto(prospectoPersona:ProspeccionPersonaVO):void {
    let prospecto = new  ProspeccionResponse();
    prospecto.prospecto = prospectoPersona;
    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      prospecto.perF = prospectoPersona.personaVO as unknown as PersonaFisicaVO;
    } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
      prospecto.perM = prospectoPersona.personaVO as unknown as PersonaMoralVO;
    }
    
    this._prospeccionService.updatePersonaProspecto(prospecto).subscribe(
      then => {
        this.prospectoSave = then;
        this.confirmacionPersonaProspecto = true;
        this.mostrarMensajeAltaProspectoExitoso(this.confirmacionPersonaProspecto);
      },
      error => {
        console.error(error);
        this.btnGuardarProspecto = true;
      } 
    );
  }

  /**
  * Guarda Cliente Referenciado.
  **/
  guardarClienteReferenciado(cteReferenciado:CteReferenciadoVO){
    let prospecto = new  ProspeccionResponse();
    prospecto.cteReferenciado = cteReferenciado;
    this._prospeccionService.saveClienteReferenciado(prospecto).subscribe(
      then => {
        this.prospectoSave = then;
        this.confirmacionPersonaProspecto = true;
        this.mostrarMensajeAltaProspectoExitoso(this.confirmacionPersonaProspecto);
      },
      error => {
        console.error(error);        
        this.btnGuardarProspecto = true;
      } 
    );
  }

  /**
  * Proceso de reasignacion de un cliente de Divisas Banco cuando su contrato esta en estatus 6
  */
  reasignarContratoDivisasBanco(prospectoPersona: ProspeccionPersonaVO,Clvlegada : string, contratoPersonaReasinacion:ContratoPersonaVO){
    let arrConEjecutivo : any [];
    let personaContratoVO : PersonaContratoVO = new PersonaContratoVO();
    
    personaContratoVO.tipoContratoId = prospectoPersona.tipoContratoVO.tconId;
    personaContratoVO.ejecutivoIdNew = prospectoPersona.ejecutivoVO.perId;
    personaContratoVO.usuUsuario = this.usuarioSesion.usuClave;
    personaContratoVO.contratoEjecutivoEstatus = Const.ESTATUS_SUSPENDIDO;
    personaContratoVO.statusContratoDescripcion = Const.ESTATUS_ACTIVO;
    personaContratoVO.contratoEjecutivoEstatusNew = Const.ESTATUS_ACTIVO;
    personaContratoVO.newTmpSucCveLegada = Const.SUC_MATRIZ;
    personaContratoVO.usuarioId = this.usuarioSesion.usuId;
    personaContratoVO.cveSuc = Const.SUC_MATRIZ;
    personaContratoVO.staContrato = "promSinMigrado";
    personaContratoVO.newCveLegadPromotor = Clvlegada;
    personaContratoVO.tmpCveLegada = contratoPersonaReasinacion.idVO.contratoVO.tmpCveLegada;
    personaContratoVO.cesId = Const.ID_ESTADO_CONTRATO_REV_PROMOTOR; // Estatus del contrato REVISION PROMOTOR...
    //Al llegar a la reasignacion este se cambia por estatus 0 del contrato (Prospecto)....
    //ya que sica solo acepta 1 digito

    arrConEjecutivo.push(personaContratoVO);
    
    let contratos :any [];
    this._contratoService.reasignaContratosLegados(arrConEjecutivo,personaContratoVO.tipoContratoId, Const.STR_EMPTY).subscribe(
      then => {
        contratos = then;
        // Si el arriglo no tiene items, quiere decir que la reasignacion se hizo correctamente
        if(contratos.length > 0) {
          this.mostrarMensaje('No fue posible reasignar el contrato ' + 
          (prospectoPersona as ProspeccionPersonaVO).conId + ' al promotor', 'info',true);
          return;
        }
        //Una vez realizada la reasignacion, ejecutamos el proceso para guardar en prospeccion
        this.guardarPersonaProspecto(prospectoPersona,this._personaFisica);
      },
      error => {
        console.error(error);
      } 
    );
  }
  
  /**
  *  Mostrar mensaje Alta Prospecto Exitoso.
  **/
   mostrarMensajeAltaProspectoExitoso(value:boolean):void {
    if(value) {
      if(this._modalidad == this.ALTA_PROSPECTO) {
        this.mostrarMensaje(Const.confirmacionRegistroProspecto, 'info',true);
        this.mostrarBusquedaProspecto();
      }
        
      if(this._modalidad == this.MODIFICAR_PROSPECTO) {
        this.validaEstatusConctado(this._paisClave, this.getCtr('perRfc').value.trim());
        this.mostrarMensaje(Const.modificacionExitosa, 'info',true);
        this.saveInfoGeneral.emit(true);
      }
      
      //Validmos si se enviara notificaion
      if(this._modalidad == this.cteSinContrato) {
        this.mostrarMensaje(Const.confirmacionRegistroProspecto, 'info',true);

        //Si la variable no es null, quiere decir que el cliente pertenece a otro Ejecutivo
        //Si la variable es null, quiere decir que el cliente pertenece al mismo Ejecutivo
        if(null != this._personaDuenioCte) {
          //Se envia la notificacion al dueño de que su cliente ha sido prospectado
          this.notificarDuenio(this._cteSinContrato);
        } else {
          this.mostrarBusquedaProspecto();
        }
      }
      
      this.confirmacionPersonaProspecto = false;
    }
    
    if(this._modalidad == this.MODIFICAR_PROSPECTO) {
      this.btnGuardarProspecto = false;
    }
  }

  notificarDuenio(cliente:PersonaVO):void{
    if(cliente == null) {
        return;
    }
    var solicitudReferenciacion:SolicitudReferenciacionVO = new SolicitudReferenciacionVO();
    
    // cliente
    solicitudReferenciacion.personaClienteVO = new PersonaVO();
    solicitudReferenciacion.personaClienteVO.perId = cliente.perId;
    solicitudReferenciacion.personaClienteVO.perNomCorto = cliente.perNomCorto;
    
    // solicitante
    solicitudReferenciacion.personaSolicitaVO = new PersonaVO();
    if(this._idPromByAsis != 0){
        solicitudReferenciacion.personaSolicitaVO.perId = this._idPromByAsis;
        solicitudReferenciacion.personaSolicitaVO.perNomCorto = this.usuEjeAsistido;
    } else {
        solicitudReferenciacion.personaSolicitaVO.perId = this.usuarioSesion.idPersona;
        solicitudReferenciacion.personaSolicitaVO.perNomCorto = this.usuarioSesion.perNomCorto;
    }
    // dueno
    solicitudReferenciacion.avisosSolicitudVO = [];
    var avisoSolicitud:AvisoSolicitudVO = new AvisoSolicitudVO();
    avisoSolicitud.personaDuenoVO = new PersonaVO();
    avisoSolicitud.personaDuenoVO.perId = this._personaDuenioCte.perId;
    avisoSolicitud.personaDuenoVO.perNomCorto = this._personaDuenioCte.perNomCorto;
    solicitudReferenciacion.avisosSolicitudVO.push(avisoSolicitud);
    
    // negocio
    solicitudReferenciacion.tipoContratoVO = this._tipoNegocio;
    solicitudReferenciacion.slrTipoSol = ConstReferenciacion.TIPO_SOLICITUD_REFERENCIACION_CLIENTE;
    solicitudReferenciacion.edoReferenciacionVO = new EdoReferenciacionVO();
    solicitudReferenciacion.edoReferenciacionVO.edrId = Const.REFERENCIACION_EDO_SOLICITUD_RC;
    
    this._referenciacionService.notificarDuenioCliente(solicitudReferenciacion).subscribe(
      then => {
        this.confirmacionEnviarSolicitudReferenciacion = true;
        this.solicitudReferenciacionVO = then;
      },
      error => {
        console.error(error);
      } 
    );
  }

  async mostrarMensaje(mensaje: string, tipoMensaje: any,parametro:boolean) {
    const { value: aceptar } = await this.alertasService.onlyConfirm(mensaje, tipoMensaje, '');
    if(aceptar && parametro){
      this.estatusControles();
    }
  }

  buscarPersona(tipo:string, valor: string):void{
    let nombre:string;
    let apPaterno:string;
    let apMaterno:string;
    if(this._pipelineVO && this.personaFisicaCoincidencias){
      nombre = this.personaFisicaCoincidencias.pefNombre;
      apPaterno = this.personaFisicaCoincidencias.pefPaterno;
      apMaterno = this.personaFisicaCoincidencias.pefMaterno;
    }else {
      nombre = this._personaFisica.pefNombre;
      apPaterno = this._personaFisica.pefPaterno;
      apMaterno = this._personaFisica.pefMaterno;
    }
    
    const dialogRef = this.dialog.open(DialogBusquedaCoincidenciasComponent, {
      width: '800px',
      disableClose:true,
      autoFocus:true,
      data: { usuarioVO: this.usuarioSesion, valor: valor, tipo: tipo, nombre: nombre, apPaterno: apPaterno, apMaterno: apMaterno }
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if(result !== undefined) {
        this.resultCoincidenca = result['data']; 
        this.coincidenciasEvent();
      }
    });
  }

  async coincidenciasEvent(){
    this.buscaCoincidencias = true;
    if(this.resultCoincidenca != undefined && !this.resultCoincidenca['existe']){
      if(this.buscoRFC){
        var existeRfc: PersonaVO [] = [];
        this._personaService.validaExisteRFC(this.getCtr('perRfc').value.trim()).subscribe(
          then => {
            existeRfc = then;
              //Validamos si es para alto o modificacion
              if(!this.esMod){
                  if(existeRfc != null && existeRfc.length > 0){
                    this.mostrarExiste(true, this.getCtr('perRfc').value.trim());
                  } else {
                      this.btnGuardarProspectoMouseClickHandler();
                  }  
              } else {
                  if(existeRfc != null && existeRfc.length > 0 && (!this.modRfcExis)){
                      this.mostrarExiste(true, this.getCtr('perRfc').value.trim());
                  } else {
                    this.btnGuardarProspectoMouseClickHandler();
                  }
              }
          },
          error => console.error(error)
        );
      } else {
        this.btnGuardarProspectoMouseClickHandler();
      }
    } else {
      this.mostrarBusquedaProspecto();
    }
  }
  
  /**
  * Muestra pantalla Busqueda Prospecto.
  * 
  * Lanza evento tipo MOSTRAR_BUSQUEDA_PROSPECTO
  **/
  mostrarBusquedaProspecto():void {
    this.MOSTRAR_BUSQUEDA_PROSPECTO.emit();
  }

  solicitudRevision(){
    const dialogRef = this.dialog.open(DialogReporte24hrsComponent, {
      width: '580px',
      disableClose:true,
      autoFocus:true,
      data: { prpId: this.personaProspecto.prpId, cliente: this.personaProspecto.personaVO, usuUsuario: this._pipelineVO.usuUsuario, 
      perNomCortoEjec: this.personaProspecto.ejecutivoVO.perNomCorto, isEditionComponentesSA: true }
    });
    
    dialogRef.afterClosed().subscribe((result) => {
      if(result !== undefined) {
        this.estatusResult = result;
        this.boqueoBotones();
      }
    });
  }

  //-- Seccion de validaciones para los botones y controles del FormGroup --\\
  initVisibleBtn():void {
    if((this._modalidad == this.MODIFICAR_PROSPECTO || this._modalidad == this.REFERENCIAR 
      || this._modalidad == this.cteSinContrato) && this.isVisibleBtnAnalisis){
        this.isVisibleBtn = true;
    }
  }

  enabledCompnentes():void {
    if(this.isEditionComponentesSA){
        this.funcForm.disable();
        this.btnGuardarProspecto = false;
        
        this.stsProspecto = "PROSPECTO EN ESTATUS: REVISIÓN ANALISIS";
        this.stsProspectoVisible = true;
    } else {
        this.stsProspecto = "";
        this.stsProspectoVisible = false;
    }
  }

  validatorFechaRFC(tpeClave:string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      if(!ProspeccionUtil.fechaValidaRFC(tpeClave, control.value.trim(),this.fechaActual)) {
        return { 'rfcFechaInvalida': true };
      }
      return null;
    };
  }

  /**
  * Activa los validadores cuando el prospecto este en estado 3 y no tenga rfc ni nacionalidad ni telefono
  */
   validaEstatusConctado(paiClv:number,rfc:string):void {
    var res:boolean = true;
    var msgBody:string = "Ingrese los datos de los campos en rojo para proceder a Entrevista Personal";
    
    if(this._pipelineVO != null) {
        if(this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO) {
            
            if(paiClv == 0 || (rfc == null && this.getCtr('perRfc').enabled) || ((rfc != null && rfc.length == 0) && this.getCtr('perRfc').enabled) 
              || this.getCtr('calle').value.length == 0 || this.getCtr('contacto').value.length == 0 || 
              (paiClv > 1 && this.getCtr('extr').value.length == 0 && this.getCtr('extr').enabled) && this._isExtran) {
                if(this._modalidad == this.ALTA_PROSPECTO){
                    if(this.getCtr('numExt').value.trim() == '') {
                        this.getCtr('numExt').setValidators([Validators.required]);
                        this.getCtr('numExt').updateValueAndValidity();
                        res = false; 
                    }
                }
                this.mostrarMensaje(msgBody,'error',false);
            }
            this.validaDatos();
            return ;
        }
    } else{ 
      return;
      //this.resetValidadores();
    }
  }

  //ejecutamos el validador para indicar los controles requeridos
  inicializaValidadorFrom(){
    //valida los controles
    this.validaControles(this.funcForm);

    if(!this.enabled){
      for (var control in this.funcForm.controls) {
        this.funcForm.controls[control].disable();
      }
    }
    else {
      if((this.getCtr("perRfc").value.length > 0 || this.getCtr("extr").value.length > 0) && 
        this._paisClave > 0 && this._modalidad != this.ALTA_PROSPECTO){
        this.getCtr("perRfc").disable();
        this.getCtr("extr").disable();
        this.getCtr("cboPaisPersona").disable();
      } else {
        this.getCtr("perRfc").value.trim().length == 0 ? this.getCtr("perRfc").enable():this.getCtr("perRfc").disable();
        this.getCtr("extr").value.trim().length == 0 ? this.getCtr("extr").enable():this.getCtr("extr").disable();
        (this.getCtr("perRfc").value.length > 0 || this.getCtr("extr").value.length > 0) ? this.getCtr("cboPaisPersona").disable : this.getCtr("cboPaisPersona").enable();
        (this.getCtr("perRfc").value.length > 0 || this.getCtr("extr").value.length > 0) ? this.getCtr("cboPaisOr").disable : this.getCtr("cboPaisOr").enable();
        this.getCtr("perRfc").value.trim().length == 0 ? this.getCtr("perNomOrRazonSocial").enable():this.getCtr("perNomOrRazonSocial").disable();
        if(this._cveTipoPersona == Const.PERSONA_MORAL){
          if(this._modalidad == this.ALTA_PROSPECTO){
            this.getCtr("perNomOrRazonSocial").enable();
            this.getCtr("perNombreComercial").enable();
          } else {
            this.getCtr("perRfc").value.trim().length == 0 ? this.getCtr("perNomOrRazonSocial").enable():this.getCtr("perNomOrRazonSocial").disable();
            this.getCtr("perRfc").value.trim().length == 0 ? this.getCtr("perNombreComercial").enable():this.getCtr("perNombreComercial").disable();
          }
          this.getCtr("cboTipoSociedad").value.trim().length == 0 ? this.getCtr('cboTipoSociedad').enable():this.getCtr('cboTipoSociedad').disable();
          if(this._paisClave > 1 && this.getCtr("perRfc").value.trim().length == 0 && this._modalidad != this.ALTA_PROSPECTO){
            this.getCtr('perRfc').setValidators([Validators.required]);
            this.getCtr('perRfc').updateValueAndValidity();
            this.validaControles(this.funcForm);
          }
        }
      }
    }
  }

  //valida de los controles que contenga el FormGroup
  validaControles(funcForm: FormGroup) {
    let estatus:boolean = true;
    Object.keys(funcForm.controls).forEach(nameControl => {
      const control: AbstractControl = funcForm.controls[nameControl];
      const statusControl:boolean = control.enabled;
      if(control instanceof FormGroup) {
        this.validaControles(control as FormGroup);
      } else {
        control.enable();
        this.service = new GenerateService(this.renderer, this.resolver,this.injector, 
          this.app,control as FormControl, this.formValidation);
        
        if(this.service.validacionCampo()){
          statusControl ? control.enable():control.disable();
        } else {
          statusControl ? control.enable():control.disable();
          estatus = false;
        }
      }
    });
    return estatus;
  }

  //cambia el estado de los controles especificados
  estatusControles(){
    this.getCtr('cboTipoPersona').disable();
    this.getCtr('cboTipoDireccion').disable();
    this.getCtr('cboMotivo').disable();
    this.getCtr('descripcionNopros').disable();
    this.getCtr('ciudad').disable();
    this.getCtr('alcMun').disable();
    this.getCtr('entidad').disable();
      
    if(this._modalidad != this.ALTA_PROSPECTO){
      this.getCtr('cboTipoNegocio').disable();
      if(this.showTipoBanco){
        this.getCtr('cboOpBanco','permFormBanco').disable();
      }
      this.getCtr('perNomOrRazonSocial').disable();
      this.getCtr('perRfc').disable();
      /* if(this.getCtr('perRfc').value.trim().length > 0 && this.lblRfcId == 'RFC'
        && ProspeccionUtil.validaRFC(this.getCtr('perRfc').value, this._cveTipoPersona) 
        && ProspeccionUtil.fechaValidaRFC(this._cveTipoPersona, this.getCtr('perRfc').value.trim(),this.fechaActual)){
        this.getCtr('perRfc').disable();
      } */
      this.getCtr('cboPaisPersona').disable();
      if(this._cveTipoPersona == Const.PERSONA_FISICA){
        if(this.getCtr('extr').value.length > 0 && this._isExtran){
          this.getCtr('extr').disable();
        }
        this.getCtr('checkActEmpresarial').disable();
      } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
        this.getCtr('cboPaisOr').disable();
        this.getCtr('perNombreComercial').disable();
        this.getCtr('cboTipoSociedad').disable();
      }
    } else {
      if(this.getCtr('perRfc').value.length > 0 && this.lblRfcId == 'RFC'
        && ProspeccionUtil.validaRFC(this.getCtr('perRfc').value, this._cveTipoPersona) 
        && ProspeccionUtil.fechaValidaRFC(this._cveTipoPersona, this.getCtr('perRfc').value.trim(),this.fechaActual)){
          this.getCtr('extr').disable();
      }
      if(this.getCtr('extr').value.length > 0 && this._isExtran){
        this.getCtr('perRfc').disable();
      }
    }
  }

  /**
  * Metodo mediante el cual se modifica el estatus "enable" de los campos de captura de datos generales, esto
  * segun sea el caso:
  * MODIFICAR y REFERCIAR --> enable = false para los controles que ya tenga valor
  * ALTA --> enable = true
  */
  cambiaEstatusControles():void {
    if(this._modalidad == this.MODIFICAR_PROSPECTO || this._modalidad == this.REFERENCIAR 
      || this._modalidad == this.cteSinContrato){
      this.getCtr('cboTipoNegocio').disable();
      if(this.showTipoBanco){
        this.getCtr('cboOpBanco','permFormBanco').disable();
      }
      this.getCtr('perRfc').disable();
      this.getCtr('perNomOrRazonSocial').disable();
      if(this._cveTipoPersona == Const.PERSONA_FISICA){
        this.getCtr('extr').disable();
        this.getCtr('checkActEmpresarial').disable();
      } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
        this.getCtr('perNombreComercial').disable();
        this.getCtr('cboTipoSociedad').disable();
      }
    } else {
      this.getCtr('cboTipoNegocio').enable();
      if(this.showTipoBanco){
        this.getCtr('cboOpBanco','permFormBanco').enable();
      }
      this.getCtr('perRfc').enable();
      this.getCtr('perNomOrRazonSocial').enable();
      if(this._cveTipoPersona == Const.PERSONA_FISICA){
        this.getCtr('extr').enable();
        this.getCtr('checkActEmpresarial').enable();
      } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
        this.getCtr('perNombreComercial').enable();
        this.getCtr('cboTipoSociedad').enable();
      }
    }
  }

  //Valido los controles de acuerdo a la modalidad
  validaDatos():boolean {
    var datosValida : boolean = true;
    this.resetValidadores();

    if(this._modalidad == this.ALTA_PROSPECTO && this._cveTipoPersona == Const.PERSONA_FISICA){
        if(Number(this.getCtr('cboTipoNegocio').value) == 0){
          this.getCtr('cboTipoNegocio').enable();
          this.getCtr('cboTipoNegocio').setValidators([Validators.required]);
          this.getCtr('cboTipoNegocio').updateValueAndValidity();
          datosValida = false;
        }

        if(this.getCtr('perNomOrRazonSocial').value.trim() == ''){
          this.getCtr('perNomOrRazonSocial').enable()
          this.getCtr('perNomOrRazonSocial').setValidators([Validators.required]);
          this.getCtr('perNomOrRazonSocial').updateValueAndValidity();
          datosValida = false;
        }

        if(this.getCtr('correo').value.trim() == '' ){
          this.getCtr('correo').enable();
          this.getCtr('correo').setValidators([Validators.required,EmailValidator.validatorEmail()]);
          this.getCtr('correo').updateValueAndValidity();
          datosValida = false;
        } else if(!ProspeccionUtil.validaEmail(this.getCtr('correo').value)){
          this.getCtr('correo').enable();
          this.getCtr('correo').setValidators([EmailValidator.validatorEmail()]);
          this.getCtr('correo').updateValueAndValidity();
          datosValida = false;
        }

        if(this.getCtr('perRfc').value.length > 0 && this.getCtr('cboPaisPersona').value == ''){
          this.getCtr('cboPaisPersona').enable();
          this.getCtr('cboPaisPersona').setValidators([Validators.required]);
          this.getCtr('cboPaisPersona').updateValueAndValidity();
          datosValida = false;
        }

        if(this.getCtr('telefono').value.trim() == ''){
          this.getCtr('telefono').enable();
          this.getCtr('telefono').setValidators([Validators.required, Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
          this.getCtr('telefono').updateValueAndValidity();
          datosValida = false;
        } else if(this.getCtr('telefono').value.trim().length < 10){
          this.getCtr('telefono').enable();
          this.getCtr('telefono').setValidators([Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
          this.getCtr('telefono').updateValueAndValidity();
        }
    }

    if(this._modalidad == this.ALTA_PROSPECTO && this._cveTipoPersona == Const.PERSONA_MORAL){
      if(Number(this.getCtr('cboTipoNegocio').value) == 0){
        this.getCtr('cboTipoNegocio').enable();
        this.getCtr('cboTipoNegocio').setValidators([Validators.required]);
        this.getCtr('cboTipoNegocio').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('perNomOrRazonSocial').value.trim() == ''){
        this.getCtr('perNomOrRazonSocial').enable();
        this.getCtr('perNomOrRazonSocial').setValidators([Validators.required]);
        this.getCtr('perNomOrRazonSocial').updateValueAndValidity();
        datosValida = false;
      }
      
      if(this.getCtr('perNombreComercial').value.trim() == ''){
        this.getCtr('perNombreComercial').enable();
        this.getCtr('perNombreComercial').setValidators([Validators.required]);
        this.getCtr('perNombreComercial').updateValueAndValidity();
        datosValida = false;
      }

      if(Number(this.getCtr('cboPaisPersona').value) == 0){
        this.getCtr('cboPaisPersona').enable();
        this.getCtr('cboPaisPersona').setValidators([Validators.required]);
        this.getCtr('cboPaisPersona').updateValueAndValidity();
        datosValida = false;
      }

      if(Number(this.getCtr('cboPaisOr').value) == 0){
        this.getCtr('cboPaisOr').enable();
        this.getCtr('cboPaisOr').setValidators([Validators.required]);
        this.getCtr('cboPaisOr').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('telefono').value.trim() == ''){
        this.getCtr('telefono').enable();
        this.getCtr('telefono').setValidators([Validators.required, Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
        this.getCtr('telefono').updateValueAndValidity();
        datosValida = false;
      } else if(this.getCtr('telefono').value.trim().length < 10){
        this.getCtr('telefono').enable();
        this.getCtr('telefono').setValidators([Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
        this.getCtr('telefono').updateValueAndValidity();
      }

      if(this.getCtr('contacto').value.trim() == ''){
        this.getCtr('contacto').enable();
        this.getCtr('contacto').setValidators([Validators.required]);
        this.getCtr('contacto').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('correo').value.trim() == '' ){
        this.getCtr('correo').enable();
        this.getCtr('correo').setValidators([Validators.required,EmailValidator.validatorEmail()]);
        this.getCtr('correo').updateValueAndValidity();
        datosValida = false;
      } else if(!ProspeccionUtil.validaEmail(this.getCtr('correo').value)){
        this.getCtr('correo').enable();
        this.getCtr('correo').setValidators([EmailValidator.validatorEmail()]);
        this.getCtr('correo').updateValueAndValidity();
        datosValida = false;
      }
    }

    if(this._modalidad == this.MODIFICAR_PROSPECTO && this._cveTipoPersona == Const.PERSONA_FISICA){
      if(this.getCtr('perNomOrRazonSocial').value.trim() == ''){
        this.getCtr('perNomOrRazonSocial').enable();
        this.getCtr('perNomOrRazonSocial').setValidators([Validators.required]);
        this.getCtr('perNomOrRazonSocial').updateValueAndValidity();
        datosValida = false;
      }
      
      if(this.getCtr('perRfc').value.trim() == ''){
        this.getCtr('perRfc').enable();
        this.getCtr('perRfc').setValidators([Validators.required]);
        this.getCtr('perRfc').updateValueAndValidity();
        datosValida = false;
        if(this.getCtr('extr').value !=''){
          this.getCtr('perRfc').disable();
          this.getCtr('perRfc').clearValidators();
          datosValida = true;
        }
      }

      if(this.getCtr('extr').value == '' && this._isExtran) {
        this.getCtr('extr').enable();
        this.getCtr('extr').setValidators([Validators.required]);
        this.getCtr('extr').updateValueAndValidity();
        datosValida = false;
        if(this.getCtr('perRfc').value !=''){
          this.getCtr('extr').disable();
          this.getCtr('extr').clearValidators();
          datosValida = true;
        }
      }

      if(Number(this.getCtr('cboPaisPersona').value) == 0){
        this.getCtr('cboPaisPersona').enable();
        this.getCtr('cboPaisPersona').setValidators([Validators.required]);
        this.getCtr('cboPaisPersona').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('calle').value == '') {
        this.getCtr('calle').enable();
        this.getCtr('calle').setValidators([Validators.required]);
        this.getCtr('calle').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('cp').value.length != 5) {
        this.getCtr('cp').enable();
        this.getCtr('cp').setValidators([Validators.required]);
        this.getCtr('cp').updateValueAndValidity();
        datosValida=false;
      }

      if(this.getCtr('numExt').value == '') {
        this.getCtr('numExt').enable();
        this.getCtr('numExt').setValidators([Validators.required]);
        this.getCtr('numExt').updateValueAndValidity();
        datosValida=false;
      }

      if(this.getCtr('cboPaisDireccion').value == '') {
        this.getCtr('cboPaisDireccion').enable();
        this.getCtr('cboPaisDireccion').setValidators([Validators.required]);
        this.getCtr('cboPaisDireccion').updateValueAndValidity();
        datosValida=false;
      }

      if(this.getCtr('telefono').value.trim() == ''){
        this.getCtr('telefono').enable();
        this.getCtr('telefono').setValidators([Validators.required, Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
        this.getCtr('telefono').updateValueAndValidity();
        datosValida = false;
      } else if(this.getCtr('telefono').value.trim().length < 10){
        this.getCtr('telefono').enable();
        this.getCtr('telefono').setValidators([Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
        this.getCtr('telefono').updateValueAndValidity();
      }

      if(this.getCtr('contacto').value.trim() == ''){
        this.getCtr('contacto').enable();
        this.getCtr('contacto').setValidators([Validators.required]);
        this.getCtr('contacto').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('correo').value.trim() == '' ){
        this.getCtr('correo').enable();
        this.getCtr('correo').setValidators([Validators.required,EmailValidator.validatorEmail()]);
        this.getCtr('correo').updateValueAndValidity();
        datosValida = false;
      } else if(!ProspeccionUtil.validaEmail(this.getCtr('correo').value)){
        this.getCtr('correo').enable();
        this.getCtr('correo').setValidators([EmailValidator.validatorEmail()]);
        this.getCtr('correo').updateValueAndValidity();
        datosValida = false;
      }
    }
    if(this._modalidad == this.MODIFICAR_PROSPECTO && this._cveTipoPersona == Const.PERSONA_MORAL){
      if(this.getCtr('perNomOrRazonSocial').value.trim() == ''){
        this.getCtr('perNomOrRazonSocial').enable();
        this.getCtr('perNomOrRazonSocial').setValidators([Validators.required]);
        this.getCtr('perNomOrRazonSocial').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('perNombreComercial').value.trim() == ''){
        this.getCtr('perNombreComercial').enable();
        this.getCtr('perNombreComercial').setValidators([Validators.required]);
        this.getCtr('perNombreComercial').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('cboTipoSociedad').value == ''){
        this.getCtr('cboTipoSociedad').enable();
        this.getCtr('cboTipoSociedad').setValidators([Validators.required]);
        this.getCtr('cboTipoSociedad').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('perRfc').value.trim().length == 0){
        this.getCtr('perRfc').enable();
        this.getCtr('perRfc').setValidators([Validators.required]);
        this.getCtr('perRfc').updateValueAndValidity();
        datosValida = false;
      }

      if(Number(this.getCtr('cboPaisPersona').value) == 0){
        this.getCtr('cboPaisPersona').enable();
        this.getCtr('cboPaisPersona').setValidators([Validators.required]);
        this.getCtr('cboPaisPersona').updateValueAndValidity();
        datosValida = false;
      }

      if(Number(this.getCtr('cboPaisOr').value) == 0){
        this.getCtr('cboPaisOr').enable();
        this.getCtr('cboPaisOr').setValidators([Validators.required]);
        this.getCtr('cboPaisOr').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('calle').value == '') {
        this.getCtr('calle').enable();
        this.getCtr('calle').setValidators([Validators.required]);
        this.getCtr('calle').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('cp').value.length != 5) {
        this.getCtr('cp').enable();
        this.getCtr('cp').setValidators([Validators.required]);
        this.getCtr('cp').updateValueAndValidity();
        datosValida=false;
      }

      if(this.getCtr('numExt').value == '') {
        this.getCtr('numExt').enable();
        this.getCtr('numExt').setValidators([Validators.required]);
        this.getCtr('numExt').updateValueAndValidity();
        datosValida=false;
      }

      if(this.getCtr('cboPaisDireccion').value == '') {
        this.getCtr('cboPaisDireccion').enable();
        this.getCtr('cboPaisDireccion').setValidators([Validators.required]);
        this.getCtr('cboPaisDireccion').updateValueAndValidity();
        datosValida=false;
      }

      if(this.getCtr('telefono').value.trim() == ''){
        this.getCtr('telefono').enable();
        this.getCtr('telefono').setValidators([Validators.required, Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
        this.getCtr('telefono').updateValueAndValidity();
        datosValida = false;
      } else if(this.getCtr('telefono').value.trim().length < 10){
        this.getCtr('telefono').enable();
        this.getCtr('telefono').setValidators([Validators.pattern(/^([0-9])*$/), this.validatorTel()]);
        this.getCtr('telefono').updateValueAndValidity();
      }

      if(this.getCtr('contacto').value.trim() == ''){
        this.getCtr('contacto').enable();
        this.getCtr('contacto').setValidators([Validators.required]);
        this.getCtr('contacto').updateValueAndValidity();
        datosValida = false;
      }

      if(this.getCtr('correo').value.trim() == '' ){
        this.getCtr('correo').enable();
        this.getCtr('correo').setValidators([Validators.required,EmailValidator.validatorEmail()]);
        this.getCtr('correo').updateValueAndValidity();
        datosValida = false;
      } else if(!ProspeccionUtil.validaEmail(this.getCtr('correo').value)){
        this.getCtr('correo').enable();
        this.getCtr('correo').setValidators([EmailValidator.validatorEmail()]);
        this.getCtr('correo').updateValueAndValidity();
        datosValida = false;
      }
    }
    return datosValida;
  }
  
  resetValidadores():void {
    this.getCtr('cboPaisDireccion').clearValidators();
    this.getCtr('cboTipoNegocio').clearValidators();
    this.getCtr('perNomOrRazonSocial').clearValidators();
    if(this._cveTipoPersona == Const.PERSONA_MORAL){
      this.getCtr('cboPaisOr').clearValidators();
      this.getCtr('cboTipoSociedad').clearValidators();
      this.getCtr('perNombreComercial').clearValidators();
    }
    this.getCtr('cboPaisPersona').clearValidators();
    this.getCtr('calle').clearValidators();
    this.getCtr('numExt').clearValidators();
    this.getCtr('cp').clearValidators();
    this.getCtr('contacto').clearValidators();
    this.getCtr('perRfc').clearValidators();
    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      this.getCtr('extr').clearValidators();
    }
    this.getCtr('telefono').clearValidators();
    this.getCtr('correo').clearValidators();
  }

  boqueoBotones() {
    this.btnGuardarProspecto = this.estatusResult;
    this.isEditionComponentesSA = true;
  }

  //validador para el telefono
  validatorTel(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      let phone = new RegExp('^([0-9]){15}$');

      if(!phone.test(value) && value.length < 10) {
        return { 'telNoValidoMin': true };
      }
      return null;
    };
  }

  getCtr(name: string, group= ''): FormControl { 
    if(group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }
}
