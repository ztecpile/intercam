import { ApplicationRef, Component, ComponentFactoryResolver, EventEmitter, Injector, Input, OnInit, Output, Renderer2 } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { ActividadEconomicaVO, AvisoSolicitudVO, ClavePromLegadoVO, ClTipSocVO, ColoniaVO, ConstReferenciacion, ContratoPersonaVO, ContratoVO, CteReferenciadoVO, DireccionVO, EdoReferenciacionVO, EntidadVO, ExcepcionesProspeccionVO, MunicipVO, NegociosClienteProspectoVO, PaisVO, PerEmpleadoVO, Permisos, 
        PersonaContratoVO, 
        PersonaFisicaVO, PersonaMoralVO, PersonaVO, PipelineVO, ProspeccionPersonaVO, ProspeccionUtil, ProspectoExcepcionesVO, 
        SolicitudReferenciacionVO, 
        TipoContratoVO, TipoDireccionVO, TipoPersonaVO, UsuarioVO } from '@intercam/model';
import { ContratoService } from '../../../services/contrato.service';
import { DireccionService } from '../../../services/direccion.service';
import { PersonaService } from '../../../services/persona.service';
import { ProspeccionService } from '../../../services/prospeccion.service';

import { Const } from '@intercam/model';
import { CatContratoService } from '../../../services/cat-contrato.service';
import Swal from 'sweetalert2';
import { GenerateService } from 'libs/shred-components/src/lib/form/validation/generate.service';
import { FormValidationService } from '@intercam/shred-components';
import { ReferenciacionService } from '../../../services/referenciacion.service';
import { ProspeccionResponse } from '../../../util/ProspeccionResponse';
import { DialogBusquedaCoincidenciasComponent } from '../../util/dialog-busqueda-coincidencias/dialog-busqueda-coincidencias.component';
import { DialogReporte24hrsComponent } from '../../util/dialog-reporte24hrs/dialog-reporte24hrs.component';
import { Prospeccion } from '../../../util/Prospeccion';
import { UsuarioService } from '../../../services/usuario.service';

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
  readonly ALTA_PROSPECTO = "alta";
  
  /**
  * Constante <code>AltaProspecto.MODIFICAR_PROSPECTO</code>.</br> 
  * Define el valor de la propiedad <code>modalidad</code> para la 
  * operacion Modificar Prospecto.
  **/
  readonly MODIFICAR_PROSPECTO:String = "modificar";
             
  /**
  * Constante <code>AltaProspecto.REFERENCIAR</code>.</br> 
  * Define el valor de la propiedad <code>modalidad</code> para la 
  * operacion Referenciar.
  **/
  readonly REFERENCIAR:String = "referenciar";
             
  /**
  * Constante <code>AltaProspecto.cteSinContrato</code>.</br> 
  * Define el valor de la propiedad <code>modalidad</code> para la 
  * operacion Cliente Sin Contrato.
  **/
  readonly cteSinContrato:String = "cteSinContrato";
  
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
  entClave: Number;
  
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
  
  _isBuscaPros: Boolean = false;
  
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
  colCityCodeBrx: String;
  entIsoCodeBrx: String;
  
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
  fechaActual:Date = new Date('01/01/' + new Date().getFullYear() );
  
  arrTipoPer: TipoPersonaVO[] = [];

  arrTipoContrato: TipoContratoVO[] = [];

  arrTipoContratoNoPsp: TipoContratoVO[] = [];
  
  arrCuidad: EntidadVO[] = [];

  arrPersonaContratos: any[]=[];
  
  /**
  * Almacena Nombre de la Ciudad por defecto.
  **/
  ciudadPorDefecto:String;
  
  /**
  * Almacena Nombre de la Colonia por defecto.
  **/
  coloniaPorDefecto:String;
 
  loadCiudad:Boolean = false;
   
  ciudadName :String;
   
  existeCP:Boolean = false;
   
  txtDirId:String;
   
  /**
  * Almacena confirmacion guardar Persona Prospecto;
  **/
  confirmacionPersonaProspecto: boolean;
 
  btnGuardarProspecto: Boolean = true;
   
  prospectoPersona:ProspeccionPersonaVO = new ProspeccionPersonaVO();
   
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
  * Variable que define el status "enable" del form con los datos generales
  */
  statusPanelDatosGral : boolean;
  
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

  @Input() altaProspectoEvent: Prospeccion;

  @Output() MOSTRAR_BUSQUEDA_PROSPECTO = new EventEmitter<any>();

  // estatus del resultado de la solicitud de revison
  estatusResult: Boolean;

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
    public dialog: MatDialog
    ) {
    this._tconIdSelected = NaN;
    this.showPF = true;
    this.showPM = true;
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
    if (usuStr) {
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
    
    if(this.altaProspectoEvent != null){
      if(this.arrTSociedad.length == 0 && this.altaProspectoEvent.persona.tipoPersonaVO.tpeClave.toString() === Const.PERSONA_MORAL){
        this.arrTSociedad = await this._personaService.findTipoSoc().toPromise();
      }
    }

    this.setDatosProspecto();
  }

  setDatosProspecto(){
    if(this.altaProspectoEvent != null){
      var persona = new PersonaVO;
      persona = this.altaProspectoEvent.persona;
      var personaF = new PersonaFisicaVO;
      personaF = this.altaProspectoEvent.personaFisica;
      this._modalidad = this.altaProspectoEvent.modalidad;
      this.isBuscaPros(this.altaProspectoEvent.isBuscaPros);
      if(this.altaProspectoEvent.tipoContratoVO != null){
        this.tipoNegocio(this.altaProspectoEvent.tipoContratoVO);
      }
      if(this.altaProspectoEvent.soyAsistenteId != undefined && this.altaProspectoEvent.soyAsistenteId > 0){
        this.idPromByAsis(this.altaProspectoEvent.soyAsistenteId.valueOf());
      }
      if(this.altaProspectoEvent.paisClave != undefined && this.altaProspectoEvent.paisClave > 0){
        this._paisClave = this.altaProspectoEvent.paisClave.valueOf();
      }
      if(this.altaProspectoEvent.prospectoSeleccionado != undefined){
        this._prospectoSeleccionado = this.altaProspectoEvent.prospectoSeleccionado;
      }
      this.mostrarDatosPersona(persona,personaF,this.altaProspectoEvent.promotorProspecta);
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
      correo: ['',[Validators.required, Validators.email]]
    });
  }
  
  validatorLogRFC(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      if (value != null && value.length > 0 && value.length < 10) {
        return { 'longMinRFC': true };
      } else if(value != null && value.length > 0 && value.length > 13){
        return { 'longMaxRFC': true };
      }
      return null;
    };
  }

  validatorTel(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      let phone = new RegExp("^([0-9]){10}$");

      if (!phone.test(value) && value.length < 10) {
        return { 'telNoValidoMin': true };
      } else if(!phone.test(value) && value.length > 13){
        return { 'telNoValidoMax': true };
      }
      return null;
    };
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
  
  estatusCampos(parametro:boolean){
    if(parametro){
      this.funcForm.get("cboTipoPersona").disable();
      this.funcForm.get("cboTipoDireccion").disable();
      this.funcForm.get("cboMotivo").disable();
      this.funcForm.get("descripcionNopros").disable();
      this.funcForm.get("ciudad").disable();
      this.funcForm.get("alcMun").disable();
      this.funcForm.get("entidad").disable();
      
      if(this._modalidad != this.ALTA_PROSPECTO){
        this.funcForm.get("cboTipoNegocio").disable();
        if(this.funcForm.get("permFormBanco.cboOpBanco")){
          this.funcForm.get("permFormBanco.cboOpBanco").disable();
        }
        this.funcForm.get("perNomOrRazonSocial").disable();
        this.funcForm.get("perRfc").disable();
        this.funcForm.get("cboPaisPersona").disable();
        if(this._cveTipoPersona == Const.PERSONA_FISICA){
          this.funcForm.get("extr").disable();
          this.funcForm.get("checkActEmpresarial").disable();
        } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
          this.funcForm.get("cboPaisOr").disable();
          this.funcForm.get("perNombreComercial").disable();
          this.funcForm.get("cboTipoSociedad").disable();
        }
      } else {
        if(this.funcForm.get("perRfc") && this.funcForm.get("perRfc").value.length > 0){
          this.funcForm.get("extr").disable();
        }
        if(this.funcForm.get("extr") && this.funcForm.get("extr").value.length > 0){
          this.funcForm.get("perRfc").disable();
        }
      }
      
    } else {
      this.funcForm.get("cboTipoPersona").enable();
      this.funcForm.get("cboTipoDireccion").enable();
      this.funcForm.get("cboMotivo").enable();
      this.funcForm.get("descripcionNopros").enable();
      this.funcForm.get("ciudad").enable();
      this.funcForm.get("alcMun").enable();
      this.funcForm.get("entidad").enable();

      if(this._modalidad != this.ALTA_PROSPECTO){
        this.funcForm.get("cboTipoNegocio").enable();
        if(this.funcForm.get("permFormBanco.cboOpBanco")){
          this.funcForm.get("permFormBanco.cboOpBanco").enable();
        }
        this.funcForm.get("perNomOrRazonSocial").enable();
        this.funcForm.get("perRfc").enable();
        this.funcForm.get("cboPaisPersona").enable();
        if(this._cveTipoPersona == Const.PERSONA_FISICA){
          this.funcForm.get("extr").enable();
          this.funcForm.get("checkActEmpresarial").enable();
        } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
          this.funcForm.get("cboPaisOr").enable();
          this.funcForm.get("perNombreComercial").enable();
          this.funcForm.get("cboTipoSociedad").enable();
        }
      } else {
        if(this.funcForm.get("perRfc") && this.funcForm.get("perRfc").value.length > 0){
          this.funcForm.get("extr").enable();
        }
        if(this.funcForm.get("extr") && this.funcForm.get("extr").value.length > 0){
          this.funcForm.get("perRfc").enable();
        }
      }
    }
  }

  isBuscaPros(value:Boolean):void {
    this._isBuscaPros = value;
  }

  /**
  * Obtiene Persona Prospecto
  * 
  * idPersona Id Persona Prospecto.
  * idTipoNegocio Id Tipo Negocio.
  * prpId id prospecto
  **/
  obtenerPersonaProspecto(idPersona:Number, idTipoNegocio:Number, prpId:Number):void {
      this._prospeccionService.findPersonaProspectoById(idPersona,idTipoNegocio,prpId).subscribe(
        then => {
          this.personaProspecto = then;
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
            this.usuEjeAsistido = perEmpleado.usuUsuario.toString();
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
    if (this.arrTipoContrato == null) {
        return;
    }
    this.arrTipoContrato.forEach((item) => {
      if(item.tconId == tipoNegocio.tconId){
        this.funcForm.get("cboTipoNegocio").setValue(item.tconId);
      }
    });
  }

  //----- seteamos los valores que vienen de la buqueda de prospecto ----------//
  
  mostrarDatosPersona(persona:PersonaVO, personaFisica:PersonaFisicaVO, promotorProspecta:UsuarioVO) {
    // tipo Persona
    this._cveTipoPersona = persona.tipoPersonaVO.tpeClave.toString();

    if(this.arrTipoPer.length != 0){
      this.funcForm.get("cboTipoPersona").setValue(this._cveTipoPersona);
    }
    
    // generamos los validadores para los campos de persona moral a requeridos
    if(this._cveTipoPersona == Const.PERSONA_MORAL){
      this.funcForm.controls['perNombreComercial'].setValidators([Validators.required]);
      this.funcForm.controls['perNombreComercial'].updateValueAndValidity();
      this.funcForm.controls['cboPaisPersona'].setValidators([Validators.required]);
      this.funcForm.controls['cboPaisPersona'].updateValueAndValidity();
      this.funcForm.controls['cboPaisOr'].setValidators([Validators.required]);
      this.funcForm.controls['cboPaisOr'].updateValueAndValidity();
      this.funcForm.controls['contacto'].setValidators([Validators.required]);
      this.funcForm.controls['contacto'].updateValueAndValidity();
    }

    if(!isNaN(this._paisClave)){
      this.funcForm.get("cboPaisPersona").setValue('');
    }
    
    if (persona == null || persona.tipoPersonaVO == null) {
      return;
    }
    
    if (this._modalidad == this.cteSinContrato) {
      this.validaNuevaDireccion = true;

      //Validamos si el tipo contrato es DIVISAS BANCO
      if (this._tipoNegocio != null && this._tipoNegocio.tconId == Const.TIPO_CONTRATO_DIVISAS_BANCO) {
        //Consultamos los contratos del cliente donde sea TITULAR
        this._contratoService.findPersonasContratoByperId(persona.perId.valueOf(),Const.PERF_TITULAR_DESC).subscribe(
          then => {
            this.arrPersonaContratos = then;
          },
          error => console.error(error)
        )
      }
    }

    if (this._modalidad == this.ALTA_PROSPECTO){
      if (!isNaN(this._idPromByAsis)){
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

    this._paisClave = NaN;
    
    if (this._cveTipoPersona == Const.PERSONA_FISICA){
      this.funcForm.get("checkActEmpresarial").disable();
      if (persona.cpeId == Const.PERSONA_FISICA_CON_ACTIVIDAD) {
        this.funcForm.get("checkActEmpresarial").setValue(true);
      }
      this._paisClave = persona.paiClave !== undefined ? persona.paiClave.valueOf() : NaN;
      this.funcForm.get("perRfc").setValue(persona.perRfc != null ? persona.perRfc.toString() : '');
    } else {
      this.personaMoral = persona as unknown as PersonaMoralVO;
      if(this.personaMoral != null){
        this.arrTSociedad.forEach((sociedad) => {
        if(sociedad.tisNumero == this.personaMoral.pemTipoSoc){
            this.funcForm.get("cboTipoSociedad").setValue(sociedad.tisNumero);
          }
        });
      }
      
      this._paisClave = persona.paiClaveResidencia !== undefined ? persona.paiClaveResidencia.valueOf() : NaN;
      if(persona.paiClave !== undefined){
        this.funcForm.get("cboPaisOr").setValue(persona.paiClave);
      }
      
      if (!isNaN(this._paisClave) &&  this._paisClave > 1 &&  this.personaMoral != null) {
        this.funcForm.get("perRfc").setValue((persona as unknown as PersonaMoralVO).pemIdShcp);
      } else {
        if (this._cveTipoPersona == Const.PERSONA_FISICA){
        this.funcForm.get("perRfc").setValue(persona.perRfc.toString());
        } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
          this.funcForm.get("perRfc").setValue(persona.perRfc !== undefined ? persona.perRfc.toString() : '');
        }
      }
    }

    if(!isNaN(this._paisClave) && this._paisClave > 0){
      this.funcForm.get("cboPaisPersona").setValue(this._paisClave);
      //Valida la clave pais para poner la etiqueta correspondiente (rfc, fm3, ssn)
      this.changeNacionalidad(this._paisClave);
    }
    
    //recibimos el parametro de personaFisica esto viene de BuscaProspecto
    this._personaFisica = personaFisica;
    
    //recibimos el paramero de promotorProspecta esto viene de BuscaProspecto
    this._promotorProspecta = promotorProspecta;
    
    //Esta asignacion sirve para guardar en modalidad "cteSinContrato"
    this._cteSinContrato = persona;
    
    // nombres Persona
    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      this.funcForm.get("perNomOrRazonSocial").setValue(persona.perNomCorto.toString());
    } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
      this.funcForm.get("perNomOrRazonSocial").setValue(persona.perNomCorto.toString());
      this.funcForm.get("perNombreComercial").setValue(persona.perNomComercial != null ? persona.perNomComercial.toString() : '');
    }
    
    // R.F.C.
    //Se asigna el nss o Nofm3 de la persona fisica dependiendo nacionalidad esto es cuando viene de Pipeline.mxml
    if (( persona.paiClave !== undefined && (persona.paiClave == 0 || persona.paiClave == Const.PAIS_CLAVE_MEXICO || isNaN(persona.paiClave.valueOf()))) && 
      (this._cveTipoPersona == Const.PERSONA_FISICA)){
      this.funcForm.get("perRfc").setValue(persona.perRfc.toString());
    } else if (persona.paiClave == Const.PAIS_CLAVE_US && this._cveTipoPersona == Const.PERSONA_FISICA){
      if((persona as unknown as PersonaFisicaVO).pefNss != null){
        this.funcForm.get("extr").setValue((persona as unknown as PersonaFisicaVO).pefNss);
      }
    } else if (persona.paiClave == 2 || persona.paiClave > 3  
      && this._cveTipoPersona == Const.PERSONA_FISICA){
        if((persona as unknown as PersonaFisicaVO).pefNoFm3 != null){
          this.funcForm.get("extr").setValue((persona as unknown as PersonaFisicaVO).pefNoFm3);
        }
    }

    if(personaFisica != null){
      if(personaFisica.pefNoFm3 != null){
        this.funcForm.get("extr").setValue(personaFisica.pefNoFm3);
      } else if(personaFisica.pefNss != null){
        this.funcForm.get("extr").setValue(personaFisica.pefNss);
      }
    }
    
    //guardamos el objeto cuando venga del pipe para la busqueda de coincidencias
    if((persona as unknown as PersonaFisicaVO) && this._pipelineVO){
      this.personaFisicaCoincidencias = persona as unknown as PersonaFisicaVO;
    }
    
    this.cambiaEstatusControles();
    
    if (this._modalidad == this.MODIFICAR_PROSPECTO || this._modalidad == this.cteSinContrato) {
      //Obtenemos la relacion prospecto vs excepciones
      this.obtenerRelacionProspectoExcepciones(persona.perId);
      
      //Esta validacion es para cuando viene
      if(this._prospectoSeleccionado != null){
        this.mostrarInformacionPersonaProspecto(this._prospectoSeleccionado);
      }
      
      //Si se va a modificar al prospecto y el estatus es PROPECTO se habilita el boton de NuevaDireccion
      if (this._modalidad == this.MODIFICAR_PROSPECTO && 
        this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO && 
        this._pipelineVO.slrTipo == Const.REFERENCIACION_TIP_SOLICITUD_CR) {
          this.validaNuevaDireccion = true;
        }
    }
    
    //ejecutamos el validador para indicar los campos requeridos
    this.estatusCampos(false);
    this.validaControles(this.funcForm);
    //desabilitamos los campos que no son modificables
    this.estatusCampos(true);

    if ((this.funcForm.get("perRfc").value.length > 0 || this.funcForm.get("extr").value.length > 0) && 
      persona.paiClave > 0 && this._modalidad != this.ALTA_PROSPECTO){
        this.funcForm.get("perRfc").disable();
        this.funcForm.get("extr").disable();
        this.funcForm.get("cboPaisPersona").disable();
    } else {
      this.funcForm.get("perRfc").value.trim().length == 0 ? this.funcForm.get("perRfc").enable():this.funcForm.get("perRfc").disable();
      this.funcForm.get("extr").value.trim().length == 0 ? this.funcForm.get("extr").enable():this.funcForm.get("extr").disable();
      (this.funcForm.get("perRfc").value.length > 0 || this.funcForm.get("extr").value.length > 0) ? this.funcForm.get("cboPaisPersona").disable : this.funcForm.get("cboPaisPersona").enable();
      (this.funcForm.get("perRfc").value.length > 0 || this.funcForm.get("extr").value.length > 0) ? this.funcForm.get("cboPaisOr").disable : this.funcForm.get("cboPaisOr").enable();
    }
  }
  
  validaControles(funcForm: FormGroup): void {
    Object.keys(funcForm.controls).forEach(nameControl => {
      const control: AbstractControl = funcForm.controls[nameControl];
      if(control instanceof FormGroup) {
        this.validaControles(control as FormGroup);
      } else {
        this.service = new GenerateService(this.renderer, this.resolver,this.injector, 
          this.app,control as FormControl, this.formValidation);
        this.service.validacionCampo();
      }
    });
  }

  /**
  * Mostrar informacion Persona Prospecto
  **/
  mostrarInformacionPersonaProspecto(value:ProspeccionPersonaVO):void {
    if (value == null) {
      return;
    }

    if (value.personaVO != null) {
      // datos Persona
      this.mostrarDatosPersona(value.personaVO, null,null);
    }
  
    // tipo Negocio
    if(value.tipoContratoVO != null){
      this._tipoNegocio = value.tipoContratoVO;
    }
    
    if (value.direccionVO != null) {
      // direccion
      this.mostrarDatosDireccion(value.direccionVO);
    }
    
    // nombre Contacto
    this.funcForm.get("contacto").setValue(value.prpContacto != undefined ? value.prpContacto:'');
    
    // pagina Web
    this.funcForm.get("paginaWeb").setValue(value.prpPaginaweb != undefined ? value.prpPaginaweb:'');
  
    // correo electronico
    this.funcForm.get("correo").setValue(value.prpEmail != undefined ? value.prpEmail:'');
  
    // comentarios
    this.funcForm.get("comentarios").setValue(value.prpComentarios != undefined ? value.prpComentarios:'');
    
    //Telefono de contacto
    this.funcForm.get("telefono").setValue(value.prpTelefono != undefined ? value.prpTelefono:'');
    
    if (value.personaVO != null) {
        this.validaEstatusConctado(value.personaVO.paiClave.valueOf(),value.personaVO.perRfc.toString());
    }

    this.showTipoBanco = false;
    if (this._tipoNegocio.tconId == Const.TIPO_CONTRATO_BANCO) {
        if (value.prpEsCreditoBanco) {
            //cmbTipoBanco.selectedIndex = 1;
        } else {
            //cmbTipoBanco.selectedIndex = 0;
        }
        this.showTipoBanco = true;
    }
    
    //ME20-01-036 se valida ambos casos ya que depende de si viene directamente de la busqueda o de pipeline
    if ((value.tipoContratoVO != null && value.tipoContratoVO.tconId == Const.TCON_FIDEICOMISO) 
    || (this._tipoNegocio && this._tipoNegocio.tconId == Const.TCON_FIDEICOMISO)){
      this.funcForm.get("permFormFideicomiso.fideicomiso").setValue(value.prpFideicomiso != undefined ? value.prpFideicomiso:'');
    }
  }
  
  /**
  * Mostrar datos Direccion.
  **/
  mostrarDatosDireccion(direccion:DireccionVO):void {
    if (direccion == null) {
      return;
    }
    
    // pais
    if (direccion.paisVO != null || !isNaN(direccion.paiClave.valueOf())) {
      var cvePais:Number = direccion.paisVO != null ? direccion.paisVO.paiClave : direccion.paiClave;
      
      /*Se asigna la clave del pais de la direccion a esta constante, ya que en este paso aun no se
      carga la lista de paises, y no lo seleccionaba*/
      this._paisClaveDir = cvePais.valueOf();
      this.funcForm.get("cboPaisDireccion").setValue(cvePais);
    }
    
    //Aveces llega nullo este objeto
    if (direccion.tipoDireccionVO == null) {
        direccion.tipoDireccionVO = new TipoDireccionVO();
        direccion.tipoDireccionVO.tdiId = direccion.tdiId;
    }
    
    this.funcForm.get("cboTipoDireccion").setValue(direccion.tipoDireccionVO.tdiId);
    
    this.ciudadName = direccion.dirCiudad;
    
    // entidad Federativa
    this.funcForm.get("entidad").setValue(direccion.dirEntidadFed);
    
    // ciudad
    this.ciudadPorDefecto = direccion.dirCiudad;
    this.funcForm.get("ciudad").setValue(direccion.dirCiudad);
    
    // colonia
    this.coloniaPorDefecto = direccion.dirColonia;
    this.funcForm.get("colonia").setValue(direccion.dirColonia);
    
    // municipio
    this.funcForm.get("alcMun").setValue(direccion.dirMunicipio);
    
    // codigo Postal
    this.funcForm.get("cp").setValue(direccion.dirCodigoPostal);
    this.obtenerColonias(direccion.dirCodigoPostal.toString());
    
    // calle
    this.funcForm.get("calle").setValue(direccion.dirCalle);
    
    // numero Exterior
    this.funcForm.get("numExt").setValue(direccion.dirNumeroExt);
    
    // numero Interior
    this.funcForm.get("numInt").setValue(direccion.dirNumeroInt);
    
    if (!isNaN(direccion.dirId.valueOf())) {
      this.txtDirId = direccion.dirId.toString(); 
    } else {
      this.txtDirId = "";
    }
  }

  /**
  * Metodo mediante el cual se modifica el estatus "enable" de los campos de captura de datos generales, esto
  * segun sea el caso:
  * MODIFICAR y REFERCIAR --> enable = false
  * ALTA --> enable = true
  */
   cambiaEstatusControles():void {
    if (this._modalidad == this.MODIFICAR_PROSPECTO || this._modalidad == this.REFERENCIAR || this._modalidad == this.cteSinContrato){
      this.statusPanelDatosGral = false;
      this.funcForm.get("cboTipoNegocio").disable();
      if(this.funcForm.get("permFormBanco.cboOpBanco")){
        this.funcForm.get("permFormBanco.cboOpBanco").disable();
      }
      this.funcForm.get("perRfc").disable();
      this.funcForm.get("perNomOrRazonSocial").disable();
      if(this._cveTipoPersona == Const.PERSONA_FISICA){
        this.funcForm.get("extr").disable();
        this.funcForm.get("checkActEmpresarial").disable();
      } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
        this.funcForm.get("perNombreComercial").disable();
        this.funcForm.get("cboTipoSociedad").disable();
      }
    } else {
      this.statusPanelDatosGral = true;
      this.funcForm.get("cboTipoNegocio").enable();
      if(this.funcForm.get("permFormBanco.cboOpBanco")){
        this.funcForm.get("permFormBanco.cboOpBanco").enable();
      }
      this.funcForm.get("perRfc").enable();
      this.funcForm.get("perNomOrRazonSocial").enable();
      if(this._cveTipoPersona == Const.PERSONA_FISICA){
        this.funcForm.get("extr").enable();
        this.funcForm.get("checkActEmpresarial").enable();
      } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
        this.funcForm.get("perNombreComercial").enable();
        this.funcForm.get("cboTipoSociedad").enable();
      }
    }
  }

  /**
  * Obtiene la relacion entre prospecto y excepciones para los demas tipos de negocios
  */
   obtenerRelacionProspectoExcepciones(perId:Number){
    this._prospeccionService.findObtenerExcepcionesProspectoByPerId(perId).subscribe(
      then => {
        this.prospectoExcepcionesVO = then[0];
        //this.funcForm.get("cboTpContratoNopros").setValue(this.prospectoExcepcionesVO.tconId);
        this.cambiaTipoNegocioNoProspectar();
      },
      error => console.error(error)
    );
  }

  //--------- eventos del formulario ------------------- //

  changeTipoPer(tpeClave: string) {
    if (tpeClave && tpeClave.length > 0) {
      this._cveTipoPersona = tpeClave;
      if (this._cveTipoPersona === Const.PERSONA_FISICA) {
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
      this.funcForm.addControl("permFormBanco", this.createFunFormTipoBanco());
    } else if(tconId == Const.TCON_FIDEICOMISO){
      this.showTipoBanco = false;
      this.showFideicomiso = true;
      this.funcForm.removeControl('permFormBanco');
      this.funcForm.addControl("permFormFideicomiso", this.createFunFormFideicomiso());
    } else {
      this.showTipoBanco = false;
      this.showFideicomiso = false;
      this.funcForm.removeControl('permFormBanco');
      this.funcForm.removeControl('permFormFideicomiso');
    }
    this._tipoNegocio = ProspeccionUtil.obtenerTipoNegocio(this._tconIdSelected, this.arrTipoContrato);
  }

  textExtrInput(ext: string){
    if(ext.length > 0){
      this.buscaCoincidencias = false;

      this.inicializaValidadorRFC(this._cveTipoPersona,false);

      if(this.funcForm.get("extr").value.trim().length > 0){
          this.funcForm.controls['perRfc'].setValue('');
          this.funcForm.controls['perRfc'].disable();
          this.funcForm.controls['extr'].setValidators([Validators.required]);
          this.funcForm.controls['extr'].updateValueAndValidity();
          this.funcForm.get("perNomOrRazonSocial").disable();
          if(this._cveTipoPersona == Const.PERSONA_MORAL){
            this.funcForm.get("perNombreComercial").disable();
            this.funcForm.get("cboTipoSociedad").disable();
          }
      } else {
          this.funcForm.controls['extr'].clearValidators();
          this.funcForm.controls['perRfc'].enable();
          this.funcForm.get("perNomOrRazonSocial").enable();
          if(this._cveTipoPersona == Const.PERSONA_MORAL){
            this.funcForm.get("perNombreComercial").enable();
            this.funcForm.get("cboTipoSociedad").enable();
          }
      }
      if (this._pipelineVO != null && this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO){
          if (this.funcForm.get("extr").value.trim().length > 0){
              this.funcForm.controls['extr'].setValidators([Validators.required]);
              this.funcForm.controls['extr'].updateValueAndValidity();
          }else if (this.funcForm.get("extr").value.length == 0) {
            this.funcForm.controls['perRfc'].enable();
            this.inicializaValidadorRFC(this._cveTipoPersona,true);
          }
      } else {
        return;
      }
    } else {
      this.funcForm.controls['extr'].clearValidators();
      this.funcForm.controls['extr'].updateValueAndValidity();
      this.funcForm.controls['perRfc'].enable();
    }
  }
  
  txtInputChangeHandlerRFC(rfc:string){
    if(rfc.length > 0){
      this.buscaCoincidencias = false;
    
      this.inicializaValidadorRFC(this._cveTipoPersona,false);
      
      this.funcForm.controls['extr'].clearValidators();// Validar de la persona extranjera
      this.funcForm.controls['extr'].enable(); // habilita el campo de SSN para cuando es persona FISICA EXTRANJERA
      this.funcForm.controls['extr'].setValue('');
  
      if (this.funcForm.get("perRfc").value.trim().length > 0) {
          //Se valida si es una persona moral y extranjera
          if (this.funcForm.get("cboPaisPersona") && this.funcForm.get("cboPaisPersona").value != 1 
              && this._cveTipoPersona == Const.PERSONA_MORAL) {
              //Aqui se inhabilitarían los validadores del RFC ya que es el ID en lugar del RFC, 
              //pero como ya estan desactivados
          } else {
              this.inicializaValidadorRFC(this._cveTipoPersona,true);
              if (this._cveTipoPersona == Const.PERSONA_FISICA) {
                this.inicializaValidadorRFC(this._cveTipoPersona,true);
                this.funcForm.controls['extr'].disable();
              } else if (this._cveTipoPersona == Const.PERSONA_MORAL){
                this.inicializaValidadorRFC(this._cveTipoPersona,true);
              }
          }
      }
      
      if (this._pipelineVO != null && this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO){
            if (this.funcForm.get("perRfc").value.trim().length == 0 && this._paisClave > 1 && 
                this._cveTipoPersona == Const.PERSONA_FISICA) {
                  this.funcForm.controls['extr'].setValidators([Validators.required]);
                  this.funcForm.controls['extr'].updateValueAndValidity();
                  this.funcForm.controls['extr'].enable();
            }
      } else {
            return;
      }
    } else {
      this.funcForm.controls['perRfc'].clearValidators();
      this.funcForm.controls['perRfc'].updateValueAndValidity();
      this.funcForm.controls['extr'].enable();
    }
  }

  inicializaValidadorRFC(tpeClave:string, enabled:Boolean):void {
    if(enabled) {
        this.funcForm.controls['perRfc'].setValidators([this.validatorRFC(tpeClave)]);
        this.funcForm.controls['perRfc'].updateValueAndValidity();
        this.funcForm.get("perRfc").enable();
    }
  }

  validatorRFC(tpeClave:string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean} | null => {
      let value = control.value;
      let resultaValidadorRFC = ProspeccionUtil.validaRFC(value,tpeClave);
      
      if (value.length > 0 && !resultaValidadorRFC && tpeClave == Const.PERSONA_FISICA) {
        return { 'rfcFormato': true };
      } else if(value.length > 0 && !resultaValidadorRFC && tpeClave == Const.PERSONA_MORAL){
        return { 'rfcFormatoMoral': true };
      }
      return null;
    };
  }

  changeNacionalidad(paiClave: number) {
    this._paisClave = paiClave;
    if(this._paisClave == Const.PAIS_CLAVE_MEXICO){
        this.funcForm.get("perRfc").enable();
        this.funcForm.get("extr").setValue('');
        this.funcForm.controls['extr'].clearValidators();
    }
    if (this.funcForm.get("cboPaisPersona").value ==='') {          
        return;
    }
    this.funcForm.controls['cboPaisPersona'].clearValidators();
    this.validaEtiquetaNacionalidad(this._paisClave);
    if(this._cveTipoPersona === Const.PERSONA_MORAL && this.lblRfcId != 'RFC'){
      this.funcForm.get("perRfc").setValue('');
    }

    this.funcForm.controls['extr'].clearValidators();
  }
  
  validaEtiquetaNacionalidad(paiClv:number): void {
    this.inicializaValidadorRFC(this._cveTipoPersona, false);
    
    if(this._cveTipoPersona ==  Const.PERSONA_MORAL){
        if (paiClv > 1){
            this.lblRfcId = 'ID';
        }else {
          this.lblRfcId = 'RFC';
            if(this.funcForm.get("perRfc").value.length > 0) {
                this.inicializaValidadorRFC(this._cveTipoPersona, true);
            }
        }
    }
    if ((paiClv == 0 || paiClv == 1) && this._cveTipoPersona ===  Const.PERSONA_FISICA) {
        this.lblRfcId = 'RFC';
        if(this.funcForm.get("perRfc").value.length > 0){
          this.inicializaValidadorRFC(this._cveTipoPersona, true);
        }
        if (this._isExtran){
            this._isExtran = false;
        }
    } else if (paiClv == 3 && this._cveTipoPersona ===  Const.PERSONA_FISICA) {
          this._isExtran = true;
          this.textExtr = 'SSN';
          this.lblRfcId = 'RFC';
    } else if ((paiClv == 2 || paiClv > 3) && this._cveTipoPersona ===  Const.PERSONA_FISICA) {
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
  
  getNacionalidad(pai:PaisVO): String{
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
      this.funcForm.get("cp").setValue('');
      this.funcForm.get("colonia").setValue('');
      this.funcForm.get("cboCiudad").setValue('');
      this.funcForm.get("entidad").setValue('');
    } else if(this._paisClaveDir != Const.PAIS_CLAVE_MEXICO) {
      this.showBtnBuscaCP = false;
      this.showDirMX = false;
      this.showDirExt = true;
      this.funcForm.get("cp").setValue('');
      this.funcForm.get("cboColonia").setValue('');
      this.funcForm.get("ciudad").setValue('');
      this.funcForm.get("alcMun").setValue('');
      this.funcForm.get("entidad").setValue('');
      this.funcForm.get("colonia").setValue('');
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
    if (value == null) {
        return;
    }
    
    if (value.length == 0 || this.ciudadPorDefecto === null) {
        return;
    }
    
    // seleccionar ciudad por defecto
    this.funcForm.get("cboCiudad").setValue(ProspeccionUtil.obtenerIndiceCiudad(this.ciudadPorDefecto, value));
    this.loadCiudad = true;
  }

  buscarCP(event: Event) {
    if((this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir)) && (event.target as HTMLInputElement).value.length == 5){
      this.obtenerColonias(this.funcForm.get("cp").value);
    }
  }

  btnBuscarCP(e: any){
    if(this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir) && this.funcForm.get("cp").value !=''){
      this.obtenerColonias(this.funcForm.get("cp").value);
    }
  }

  obtenerColonias(cp:string){
    this._personaService.findAllColoniasByCodPost(cp).subscribe(
      then => {
        this.arrColonia = then;

        for (let i = 0; i < this.arrColonia.length; i++) {
          if(i == 0){
            this.funcForm.get('cboColonia').setValue(this.arrColonia[i].colClave);
            break;
          }
        }
      },
      error => console.error(error)
    )
  }

  /**
  * Mostrar lista Colonia.
  **/
  mostrarListaColonia(value:ColoniaVO[]):void {
    if (value == null) {
        return;	
    }
    if (value.length == 0 && (this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || 
      isNaN(this._paisClaveDir)) && (!this.existeCP) && this.funcForm.get("cp").value.length == 5){
      this.existeCP = true;
    }
    
    if (this.coloniaPorDefecto == null && this.funcForm.get('cboColonia').value.dataProvider.length > 0) {
      // seleccionar el primer elemento
      //this.funcForm.get('cboColonia').setValue(0);
    }
    else {
      // seleccionar colonia por defecto
      this.funcForm.get('cboColonia').setValue(ProspeccionUtil.obtenerIndiceColonia(this.coloniaPorDefecto, value));
      this.coloniaPorDefecto = null;
    }
  }

  changeColonia(colClave: number) {
    if(colClave > 0 && 
      (this._paisClaveDir == Const.PAIS_CLAVE_MEXICO || isNaN(this._paisClaveDir))){
        var coloniaSelected = new ColoniaVO;
        for (let i = 0; i < this.arrColonia.length; i++) {
          if(this.arrColonia[i].colClave == colClave){
            this.funcForm.get("ciudad").setValue(this.arrColonia[i].colCiudad);
            this.colCityCodeBrx = this.arrColonia[i].colCityCodeBrx;
            coloniaSelected = this.arrColonia[i];
            break;
          }
        }
        
        this._personaService.getMunicipoByMunClaveDeColonia(coloniaSelected.municipioVO.munClave).subscribe(
          then => {
            var municipio = new MunicipVO;
            municipio = then;
            this.funcForm.get("alcMun").setValue(municipio.munDescrip);
            
            this._personaService.getEntidadByEntClaveDeMunicip(municipio.entidadVO.entClave).subscribe(
              then => {
                var entidad = new EntidadVO;
                entidad = then;
                this.funcForm.get("entidad").setValue(entidad.entDescripcion);
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
    this.funcForm.get("cboMotivo").enable();
    this.funcForm.get("cboMotivo").setValue('');
    this.funcForm.get("descripcionNopros").setValue('');
    
    this.arrExcepcionProspeccionAux.splice;
    this.arrExcepcionProspeccionAux = Object.assign([], this.arrExcepcionProspeccion);
    
    this.arrExcepcionProspeccionAux = ProspeccionUtil.filtrarExpProspeccion(this.arrExcepcionProspeccionAux,this.funcForm.get("cboTpContratoNopros").value,this.prospectoExcepcionesVO);
    
    if(this.prospectoExcepcionesVO != null && this.funcForm.get("cboTpContratoNopros") && 
        this.prospectoExcepcionesVO.tconId == this.funcForm.get("cboTpContratoNopros").value){
        this.funcForm.get("cboMotivo").setValue(this.prospectoExcepcionesVO.expId);
    }
    
    this.muestraResumenExpeciones();
  }

  motivoNoProspectar(expId: number) {
    if(expId != 0 && expId > 0 && this.funcForm.get("cboTpContratoNopros")){
      this.prospectoExcepcionesVO = new ProspectoExcepcionesVO;
      this.prospectoExcepcionesVO.expId = expId;
      this.prospectoExcepcionesVO.tconId = this.funcForm.get("cboTpContratoNopros").value;
      this.muestraResumenExpeciones();
    } else {
      this.funcForm.get("descripcionNopros").setValue('');
    }
  }
  
  muestraResumenExpeciones():void {
    //En esta seccion se obtienen las excepciones para poder pintarlas en la parte "Resumen"
    var strResumen : String = '';
    if(this.funcForm.get("cboTpContratoNopros") && this.prospectoExcepcionesVO != null
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
    this.funcForm.get("descripcionNopros").setValue(strResumen);
  }

  //--------- seccion para el guardado del prospecto a base -------------//

  onSubmit() {
    //se ocupa para activar los campos que estan bloquedado desde un inicio
    //para que el validador los tome en cuenta para el guardado el prospecto
    this.estatusCampos(false);
    this.validaNoProspectado();
  }
  
  validaNoProspectado():void {
    //ME20-01-036 Validacon para Fideicomiso y grupo Fiduciario
    if (this._tipoNegocio && this._tipoNegocio.tconId == Const.TCON_FIDEICOMISO 
      && (this._promotorProspecta && ProspeccionUtil.isInGrupoPermisos(Permisos.GPO_FIDUCIARIO,this._promotorProspecta.gruposVO))) {
        this.btnGuardarProspectoMouseClickHandler();
        return;
    }
    
    if(this._modalidad == this.cteSinContrato){
      this._prospeccionService.findProspectosByPerIdContrato(this._cteSinContrato.perId, this._tipoNegocio.tconId).subscribe(
        then => {
          this.listNegociosProsp = then;
          let continuaProceso : Boolean = true;
          if(this.listNegociosProsp.length > 0){
            this.listNegociosProsp.forEach((item) => {
              if(!isNaN(item.epiId) && item.epiId < Const.ID_ESTADO_PIPELINE_CLIENTE){
                if(this._idPromByAsis !=0){
                  if(this._idPromByAsis != item.idEjecutivo){
                    this.mostrarMensaje(Const.msjPersonaExisteProspectada + ' ' + item.ejecutivo + '.', 'error');
                    continuaProceso = false;
                  }
              }
              else {
                  if(this.usuarioSesion.idPersona != item.idEjecutivo){
                    this.mostrarMensaje(Const.msjPersonaExisteProspectada + ' ' + item.ejecutivo + '.', 'error');
                    continuaProceso = false;
                  }
              }
              }
            });
          }
          if (continuaProceso) {
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
    
    var isValidoRFC : Boolean = false;
    var existeRFC : Boolean = false;
    
    this.resetValidadores();
    
    //Validamos los datos de acuerdo a la modalidad
    if(!this.validaDatos()) {
      this.btnGuardarProspecto = true;
      return;
    }

    // validar campos obligatorios
    if (this.funcForm.invalid) {
      this.btnGuardarProspecto = true;
      return;
    }
    
    if (this._cveTipoPersona == Const.PERSONA_FISICA && this.funcForm.get("perRfc").value.length > 0) {
      isValidoRFC = ProspeccionUtil.validaRFC(this.funcForm.get("perRfc").value, this._cveTipoPersona);
      existeRFC = true;
    } else if (this._cveTipoPersona == Const.PERSONA_MORAL && this.funcForm.get("perRfc").value.length > 0 && 
        this.funcForm.get("cboPaisPersona") && this.funcForm.get("cboPaisPersona").value == 1) {
          isValidoRFC = ProspeccionUtil.validaRFC(this.funcForm.get("perRfc").value, this._cveTipoPersona);
          existeRFC = true;
    }
    
    if (!isValidoRFC && existeRFC) {
      this.btnGuardarProspecto = true;
      console.log('formato invalido rfc');
      return;
    }
    
    //Valida que la fecha del RFC no sea mayor a la actual
    if (isValidoRFC && existeRFC && !ProspeccionUtil.fechaValidaRFC(this._cveTipoPersona, this.funcForm.get("perRfc").value.trim(),this.fechaActual)){
      this.btnGuardarProspecto = true;
      console.log('la fecha del rfc no debe ser mayor al fecha actual');
      return;
    }

    // validar persona Fisica
    if (this._cveTipoPersona == Const.PERSONA_FISICA) { 
      if(this.funcForm.get("extr").value.trim() != '' && this.statusPanelDatosGral){
        this.btnGuardarProspecto = true;
        this.funcForm.get("perRfc").disable();
      }
      
      if(this.funcForm.get("extr").value.trim() == '' && this.statusPanelDatosGral){
        this.funcForm.get("perRfc").enable();
      }

      if(this.funcForm.get("perRfc").value.trim() != '' && this.statusPanelDatosGral){
        this.btnGuardarProspecto = true;
        this.funcForm.get("extr").disable();
      }

      if(this.funcForm.get("perRfc").value.trim() == '' && this.statusPanelDatosGral){
        this.funcForm.get("extr").enable();
      }
    }

    //popUp coincidencias
    if ((this.funcForm.get("perRfc").value.trim().length > 0 || this.funcForm.get("extr").value.trim().length > 0) 
      && this._cveTipoPersona == Const.PERSONA_FISICA && !this.buscaCoincidencias && this.statusPanelDatosGral) {
          var valorBusqueda:String = Number(this.funcForm.get("perRfc").value.trim().length) > 0 ? 
          this.funcForm.get("perRfc").value.trim() : this.funcForm.get("extr").value.trim();
        
        if (this.funcForm.get("cboPaisPersona").value > 0 && this.textExtr == 'SSN' && this.funcForm.get("extr").value.trim().length > 0) {
            this.buscarPersona('NSS', valorBusqueda);    
        }else if (this.funcForm.get("cboPaisPersona").value > 0 && this.textExtr == 'FM3' && this.funcForm.get("extr").value.trim().length > 0){
            this.buscarPersona('FM3', valorBusqueda);    
        }else {
            this.buscoRFC = true;
            this.buscarPersona('RFC', valorBusqueda); 
        }
        this.btnGuardarProspecto = true;
        return;
    }
    
    //----- llenamos el objeto de ProspectoPersonaVO --------//
    this.llenarObject();

    this.lstClvlegadas = [];
    
    if (!isNaN(this._idPromByAsis)){
      //Obtiene Claves Legadas del promotor al cual se está asistiendo
      this.lstClvlegadas = ProspeccionUtil.filtrarClvLegadas(this.arrClvlegadas,this.prospectoPersona.tipoContratoVO.tconId);
    } else {
      //Obtiene Claves Legadas de la Session de Usuario
      this.lstClvlegadas = ProspeccionUtil.filtrarClvLegadas(this.usuarioSesion.clavesLegadas,this.prospectoPersona.tipoContratoVO.tconId);
    }

    // Alta Persona Prospecto
    if (this._modalidad == this.ALTA_PROSPECTO) {
        var msj:String;
        var parametros:Object = new Object();
        parametros['tconId'] = this.prospectoPersona.tipoContratoVO.tconId;
        if (!isNaN(this._idPromByAsis)){
            this.prospectoPersona.personaVO.ejecutivoId = this._idPromByAsis;
        } else {
            //Obtiene Claves Legadas de la Session de Usuario
            this.prospectoPersona.personaVO.ejecutivoId = this.usuarioSesion.idPersona;
        }
        parametros['clvLegadas'] = this.lstClvlegadas;
        if (this.lstClvlegadas.length == 0){
            this.mostrarMensaje(Const.promotorNoClaveLegada, 'error');
            this.btnGuardarProspecto = true;
            return;
        }
        //Valida si el promotor esta certificado y apoderado para este producto
        msj = ProspeccionUtil.validaPermisosCertificadoApoderado(this.arrCertAsignacionVO, 
            this.prospectoPersona.tipoContratoVO.tconId, this._validaPoderes);
        if (msj != "") {
            this.mostrarMensaje(msj.toString(), 'error');
            this.btnGuardarProspecto = true;
            return;
        }

        var rfc :String;
        if (this.prospectoPersona!= null){
            if(this.prospectoPersona.personaVO != null){
                if (this.prospectoPersona.personaVO.perRfc != null){
                    rfc =  this.prospectoPersona.personaVO.perRfc;  
                }
            }
        }
        
        if(this._personaFisica != null){
            if((this._personaFisica as unknown as PersonaVO).perRfc != null){
                rfc = (this._personaFisica as unknown as PersonaVO).perRfc;
            }
        }
        if (rfc != null){
            if (rfc != ""){
              this.validaExisteRFCBD(rfc);
            } else {
              this.guardarPersonaProspecto(this.prospectoPersona,this._personaFisica);
            }
        } else {
            //guarda el prospecto
            this.guardarPersonaProspecto(this.prospectoPersona,this._personaFisica);
        }
    }
    // Modificar Persona Prospecto
    else if (this._modalidad == this.MODIFICAR_PROSPECTO){
      if (!this.statusPanelDatosGral){
          this.modRfcExis = true; 
      }
      this.modificarPersonaProspecto();
    }
    // Alta Cliente Referenciado
    else if (this._modalidad == this.REFERENCIAR) {
      let cteReferenciado:CteReferenciadoVO = new CteReferenciadoVO();
      cteReferenciado.prospectoPersonaVO = this.prospectoPersona;
      
      //04-08-2013 - ocruz Actualizar el estatus de la solicitud a TOMADO y enviar el usuario responsable
      if (this._solicitudReferenciacionVO != null) {
              this._solicitudReferenciacionVO.personaSolicitaVO.usuUsuario = this.usuarioSesion.usuClave;
              this._solicitudReferenciacionVO.edoReferenciacionVO.edrId = Const.REFERENCIACION_EDO_TOMADO;
              this._solicitudReferenciacionVO.slrEstatusProceso = Const.REFERENCIACION_PROCESADO;
              cteReferenciado.solicitaReferenVO = this._solicitudReferenciacionVO;
      }
      this.guardarClienteReferenciado(cteReferenciado);
    }
    //Alta Cliente Sin Contrato
    else if (this._modalidad == this.cteSinContrato) {
      this.prospectoPersona.ejecutivoVO = new PersonaVO();
      //Si el negocio para prospectar al cliente es Divisas Banco, se realiza una busqueda si este cliente
      //ya tiene un contrato para este negocio, y si esta en estatus dispobible (Estatus 6), esta variable
      //almacena dicho contrato para su reasignacion
      let contratoPersonaReasinacion : ContratoPersonaVO;
      
      if(!isNaN(this._idPromByAsis)){
        this.prospectoPersona.ejecutivoVO.perId = this._idPromByAsis;
        this.prospectoPersona.ejecutivoVO.usuUsuario = this.usuEjeAsistido;
      }else {
        this.prospectoPersona.ejecutivoVO.perId = this.usuarioSesion.idPersona;
        //OCRUZ 7-08-2013 se envía el usuario ejecutivo, porque en el interceptor "ProspeccionAfterAdvice" hace referencia a él.
        this.prospectoPersona.ejecutivoVO.usuUsuario = this.usuarioSesion.usuClave; 
      }
      this.prospectoPersona.personaVO = this._cteSinContrato;
          
      //Validamos si el arreglo tiene informacion
      if (this.arrPersonaContratos != null && this.arrPersonaContratos.length > 0) {
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
      if (this._tipoNegocio.tconId == Const.TIPO_CONTRATO_DIVISAS_BANCO && contratoPersonaReasinacion != null &&
          contratoPersonaReasinacion.idVO.contratoVO.tmpCveLegada != null) {
            this.prospectoPersona.conId = contratoPersonaReasinacion.idVO.contratoVO.conId.valueOf();
            //Validamos si el promotor tiene claves legadas para operar este negocio
            if (this.lstClvlegadas.length > 0) {
                //Enviamos la reasignacion del contrato
                this.reasignarContratoDivisasBanco(this.prospectoPersona, this.lstClvlegadas[0].toString(), contratoPersonaReasinacion);
              } else {
                this.mostrarMensaje(Const.promotorNoClaveLegada, 'error');
            }
      } else {
          //OCRUZ 03/11/2013 se implementa el envío de persona fisica esto para solucion al bug 3861
          this.guardarPersonaProspecto(this.prospectoPersona,this._personaFisica);
      }
    }
    
  }
  
  llenarObject(){
    //Almacena la relaciones excepciones vs prospecto para los tipos de Negocio seleccionados
    var lstProspectoExcepciones : any [] = [];
    
    if (this._modalidad == this.ALTA_PROSPECTO) {
      this.prospectoPersona = new ProspeccionPersonaVO();
      this.prospectoPersona.ejecutivoVO = new PersonaVO();
      this.prospectoPersona.paisClave = !isNaN(this._paisClave) ? this._paisClave : 0;
      
      if(this._paisClave != 3 && this._paisClave !=1 &&
        this._cveTipoPersona == Const.PERSONA_FISICA){
        this._personaFisica.pefNoFm3 = this.funcForm.get("extr").value;
      } else if (this._paisClave == 3 && this._cveTipoPersona == Const.PERSONA_FISICA) {
        this._personaFisica.pefNss = this.funcForm.get("extr").value;
      }
                    
      // Se valida si el alta la esta realizando un asistente
      if (!isNaN(this._idPromByAsis)){
        this.prospectoPersona.ejecutivoVO.perId = this._idPromByAsis;
        this.prospectoPersona.ejecutivoVO.usuUsuario = this.usuEjeAsistido;
        this.prospectoPersona.paisClave = !isNaN(this._paisClave) ? this._paisClave : 0;
      }else{
        this.prospectoPersona.ejecutivoVO.perId = this.usuarioSesion.idPersona;
        //OCRUZ 7-08-2013 se envía el usuario ejecutivo, porque en el interceptor "ProspeccionAfterAdvice" hace referencia a él.
        this.prospectoPersona.ejecutivoVO.usuUsuario = this.usuarioSesion.usuClave;
      }
    } else if (this._modalidad == this.MODIFICAR_PROSPECTO) {
      this._personaFisica = new PersonaFisicaVO();
      this.prospectoPersona = this.personaProspecto;
      if (this._idPromByAsis != 0){
          this.prospectoPersona.ejecutivoVO.usuUsuario = this.usuEjeAsistido;
          this.prospectoPersona.paisClave = this._paisClave;
          if(this._paisClave == 2 && this._paisClave > 3 &&
            this._cveTipoPersona == Const.PERSONA_FISICA){
              (this.prospectoPersona as unknown as PersonaFisicaVO).pefNoFm3 = this.funcForm.get("extr").value;
            this.prospectoPersona.personaVO.perNacionalidad = false;
        }else if (this._paisClave == 3 && this._cveTipoPersona == Const.PERSONA_FISICA) {
          (this.prospectoPersona as unknown as PersonaFisicaVO).pefNss = this.funcForm.get("extr").value;
            this.prospectoPersona.personaVO.perNacionalidad = false;  
        }else if (this._paisClave == 1 || this._paisClave == 0 ||
            this._cveTipoPersona == Const.PERSONA_FISICA || 
            this._cveTipoPersona == Const.PERSONA_MORAL){
            this.prospectoPersona.personaVO.perNacionalidad = true;  
        }
      } else {
        //OCRUZ 7-08-2013 se envía el usuario ejecutivo, porque en el interceptor "ProspeccionAfterAdvice" hace referencia a él.
        this.prospectoPersona.ejecutivoVO.usuUsuario = this.usuarioSesion.usuClave;
        this.prospectoPersona.paisClave = this._paisClave;
        if((this._paisClave == 2 || this._paisClave > 3)&&
        this._cveTipoPersona == Const.PERSONA_FISICA){
            if(this.funcForm.get("extr").value.length > 0){
              (this.prospectoPersona as unknown as PersonaFisicaVO).pefNoFm3 = this.funcForm.get("extr").value;   
            }else {
                this.prospectoPersona.personaVO.perRfc = this.funcForm.get("perRfc").value;   
            }
            this.prospectoPersona.personaVO.perNacionalidad = false;
        }else if (this._paisClave == 3 && this._cveTipoPersona == Const.PERSONA_FISICA) {
            if(this.funcForm.get("extr").value.length.length > 0){
              (this.prospectoPersona as unknown as PersonaFisicaVO).pefNss = this.funcForm.get("extr").value;  
            }else {
                this.prospectoPersona.personaVO.perRfc = this.funcForm.get("perRfc").value;   
            }
            this.prospectoPersona.personaVO.perNacionalidad = false; 
        }else if ((this._paisClave == 1 || this._paisClave == 0) ||
            (this._cveTipoPersona == Const.PERSONA_FISICA || 
              this._cveTipoPersona == Const.PERSONA_MORAL)){
            this.prospectoPersona.personaVO.perNacionalidad = true;  
        }
      }
    
    } else if (this._modalidad == this.REFERENCIAR || this._modalidad == this.cteSinContrato) {
      this.prospectoPersona = new ProspeccionPersonaVO();
      this.prospectoPersona.personaVO = this._clienteReferenciado;
    }

    // Persona
    if (this.prospectoPersona.personaVO == null) {
        this.prospectoPersona.personaVO = new PersonaVO();
        this.prospectoPersona.personaMoralVO = new PersonaMoralVO();
        if (!isNaN(this._idPromByAsis)){
            this.prospectoPersona.personaVO.usuUsuario  = this.usuEjeAsistido;
        }else {
            this.prospectoPersona.personaVO.usuUsuario = this.usuarioSesion.usuClave;  
        }
    }
    
    this.prospectoPersona.personaVO.tipoPersonaVO = this._tipoPersona;
    
    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      this.prospectoPersona.personaVO.perRfc = this.funcForm.get("perRfc").value;
      this.prospectoPersona.personaVO.perNomCorto = this.funcForm.get("perNomOrRazonSocial").value;
    } else if(this._cveTipoPersona == Const.PERSONA_MORAL){
      this.prospectoPersona.personaVO.perRfc = this.funcForm.get("perRfc").value;
      this.prospectoPersona.personaVO.perNomCorto =  this.funcForm.get("perNomOrRazonSocial").value;
      this.prospectoPersona.personaVO.perNomComercial = this.funcForm.get("perNombreComercial").value;
      this.prospectoPersona.personaMoralVO.pemTipoSoc = this.funcForm.get("cboTipoSociedad").value != '' ?  this.funcForm.get("cboTipoSociedad").value : '';
      (this.prospectoPersona.personaMoralVO as unknown as  PersonaVO).paiClave = this.funcForm.get("cboPaisOr").value != '' ?  this.funcForm.get("cboPaisOr").value : 0;
    }
    
    //Esta validacion se realiza para cuando el prospecto es creado o cuando se creo no fue dada de alta su dirección
    if (this.funcForm.get("cboPaisDireccion").value != '' && (this.funcForm.get("cboPaisDireccion").value as unknown as PaisVO).paiClave != -1 && (this.prospectoPersona.direccionVO == null ||	
      isNaN(this.prospectoPersona.direccionVO.dirId.valueOf()) || this.prospectoPersona.direccionVO.dirId == 0)) {
      
      this.prospectoPersona.direccionVO = new DireccionVO();
      this.prospectoPersona.direccionVO.usuUsuario = this.usuarioSesion.usuClave;
    }
    
    if (this.prospectoPersona.direccionVO != null) {
                    
      if (this.prospectoPersona.direccionVO.dirId == undefined && this.txtDirId != ""){
          this.prospectoPersona.direccionVO.dirId = Number(this.txtDirId);
      }
      this.prospectoPersona.direccionVO.paisVO = this._paisDireccion != null ? this._paisDireccion : null;
      this.prospectoPersona.direccionVO.dirEntidadFed = this.funcForm.get("entidad").value;
      this.prospectoPersona.personaVO.entClave = this.entClave;
      this.prospectoPersona.direccionVO.dirCiudad = this.funcForm.get("ciudad").value;
      this.prospectoPersona.direccionVO.dirMunicipio = this.funcForm.get("alcMun").value;
      this.prospectoPersona.direccionVO.dirCalle = this.funcForm.get("calle").value;
      this.prospectoPersona.direccionVO.dirNumeroInt = this.funcForm.get("numInt").value;
      this.prospectoPersona.direccionVO.dirNumeroExt = this.funcForm.get("numExt").value;
      this.prospectoPersona.direccionVO.dirCodigoPostal = this.funcForm.get("cp").value;
      this.prospectoPersona.direccionVO.dirTelefono1 = this.funcForm.get("telefono").value;
      //broxel
      this.prospectoPersona.direccionVO.colCityCodeBrx = this.colCityCodeBrx;
      this.prospectoPersona.direccionVO.entIsoCodeBrx = this.entIsoCodeBrx;
      //GDEJESUS  si es extranjero se asigna la descripcion de la ciudad de comboCiudad
      if (this._paisDireccion != null && this._paisDireccion.paiClave == 1){
          this.prospectoPersona.direccionVO.dirCiudad = this.funcForm.get("ciudad").value;
          this.prospectoPersona.direccionVO.dirColonia = this.funcForm.get("cboColonia").value;
      } else if (this._paisDireccion != null) {
          this.prospectoPersona.direccionVO.dirCiudad = this.funcForm.get("cboCiudad").value; 
          this.prospectoPersona.direccionVO.dirColonia = this.funcForm.get("colonia").value;
      }
      
      if (this.nuevaDireccion) {
          //Determina si la dirección capturada será nueva
          this.prospectoPersona.nuevaDireccion = this.nuevaDireccion;
          this.prospectoPersona.direccionVO.dirId = NaN;
      }
      
      this.prospectoPersona.direccionVO.tipoDireccionVO = this._tipoDireccion != null ? this._tipoDireccion : null;
    }

    // Tipo Negocio
    this.prospectoPersona.tipoContratoVO = this._tipoNegocio;
    if (this._tconIdSelected == Const.TCON_FIDEICOMISO){
       this.prospectoPersona.prpFideicomiso = this.funcForm.get("permFormFideicomiso.fideicomiso").value;
    }
    
    //Validamos si el tipo de contrato seleccionado es BANCO
    if (this.prospectoPersona.tipoContratoVO.tconDescripcion == Const.OPCION_BANCO) {
      //Verificamos si selecciono del tipo Crédito
      if (this.funcForm.get("permFormBanco.cboOpBanco").value == 2) {
          this.prospectoPersona.prpEsCreditoBanco = true;
      } else {
          this.prospectoPersona.prpEsCreditoBanco = false;
      }
    }
  
    if (this._paisDireccion != null && this._paisDireccion.paiClave != -1){
      this.prospectoPersona.direccionVO.paiClave = this._paisDireccion.paiClave;
    }

    // Datos adicionales
    this.prospectoPersona.prpContacto = this.funcForm.get("contacto").value;
    this.prospectoPersona.prpEmail = this.funcForm.get("correo").value;
    this.prospectoPersona.prpPaginaweb = this.funcForm.get("paginaWeb").value;
    this.prospectoPersona.prpComentarios = this.funcForm.get("comentarios").value;

    //Se valida que el campo del telefono no este vacio y se asigna al objeto
    if (this.funcForm.get("telefono").value) {
      this.prospectoPersona.prpTelefono = this.funcForm.get("telefono").value;
    }

    //En esta seccion se almacenan las excepciones para los diferentes tipos de contrato
    if(this.prospectoExcepcionesVO != null && this.prospectoExcepcionesVO.pexId > 0){
      //Se agina el usuario
      this.prospectoExcepcionesVO.usuUsuario = this.usuarioSesion.usuClave;
      lstProspectoExcepciones.push(this.prospectoExcepcionesVO);
    }

    //Si existen excepciones para los demas tipos de contratos, se almacenan en el objeto prospectoPersona
    if (lstProspectoExcepciones.length > 0) {
      this.prospectoPersona.tpNegociosNoProspectar = lstProspectoExcepciones;
    }

    // Esta validacion es para saber si en la entrevista unica se muestra el formato de persona fisica con actividad empresarial
    if (this.actEmpSelected){
      this.prospectoPersona.personaVO.cpeId = Const.PERSONA_FISICA_CON_ACTIVIDAD;
    } else {
      this.prospectoPersona.personaVO.cpeId = 0;
    }
  }

  modificarPersonaProspecto():void{
    let rfc:String = this.prospectoPersona.personaVO.perRfc;
    if(rfc.trim() !="" ){
      this.esMod=true;
      this.validaExisteRFCBD(rfc);
    } else {
      this.actualizaPersonaProspecto(this.prospectoPersona);
    }
  }

  validaExisteRFCBD(rfc:String){
    var existeRfc: PersonaVO [] = [];
    this._personaService.validaExisteRFC(rfc).subscribe(
      then => {
        existeRfc = then;
          //Validamos si es para alto o modificacion
          if(!this.esMod){
              if (existeRfc != null && existeRfc.length > 0){
                this.mostrarExise(true, rfc);
              } else {
                  //guarda el prospecto
                  this.guardarPersonaProspecto(this.prospectoPersona,this._personaFisica);
              }  
          }else {
              if (existeRfc != null && existeRfc.length > 0 && (!this.modRfcExis)){
                  this.mostrarExise(true, rfc);
              } else {
                  //Actualiza el prospecto
                  this.actualizaPersonaProspecto(this.prospectoPersona); 
              }
          }
      },
      error => console.error(error)
    );
  }

  mostrarExise(value:Boolean, rfc:String):void{
    if(value){
      if(this.buscoRFC){
        this.btnGuardarProspecto = true;
        this.buscoRFC = false;
        this.buscaCoincidencias = false;
      } else {
        this.mostrarMensaje(Const.rfcExistente + " " + rfc, 'error');
        this.btnGuardarProspecto = true;
      }
    }
  }

  validaDatos():Boolean {
    var datosValida : Boolean = true;
    this.resetValidadores();

    if (this._modalidad == this.ALTA_PROSPECTO && this._cveTipoPersona == Const.PERSONA_FISICA){
        if(this.funcForm.get("cboTipoNegocio").value == null){
          this.funcForm.get("cboTipoNegocio").setValidators([Validators.required]);
          this.funcForm.get("cboTipoNegocio").updateValueAndValidity();
          datosValida = false;
        }

        if(this.funcForm.get("perNomOrRazonSocial").value.trim() == ''){
          this.funcForm.get("perNomOrRazonSocial").setValidators([Validators.required]);
          this.funcForm.get("perNomOrRazonSocial").updateValueAndValidity();
          datosValida = false;
        }

        if(this.funcForm.get("correo").value.trim() == '' ){
          this.funcForm.get("correo").setValidators([Validators.required]);
          this.funcForm.get("correo").updateValueAndValidity();
          datosValida = false;
        } else if(!ProspeccionUtil.validaEmail(this.funcForm.get("correo").value)){
          this.funcForm.get("correo").setValidators([Validators.email]);
          this.funcForm.get("correo").updateValueAndValidity();
          datosValida = false;
        }

        if(this.funcForm.get("perRfc").value.length > 0 && this.funcForm.get("cboPaisPersona").value == ''){
          this.funcForm.get("cboPaisPersona").setValidators([Validators.required]);
          this.funcForm.get("cboPaisPersona").updateValueAndValidity();
          datosValida = false;
        }

        if(this.funcForm.get("telefono").value.trim() == ''){
          this.funcForm.get("telefono").setValidators([Validators.required]);
          this.funcForm.get("telefono").updateValueAndValidity();
          datosValida = false;
        } else if (this.funcForm.get("telefono").value.trim().length < 10){
          this.funcForm.get("telefono").setValidators([Validators.minLength(10)]);
          this.funcForm.get("telefono").updateValueAndValidity();
        }
    }

    if(this._modalidad == this.ALTA_PROSPECTO && this._cveTipoPersona == Const.PERSONA_MORAL){
      if(this.funcForm.get("cboTipoNegocio").value == null){
        this.funcForm.get("cboTipoNegocio").setValidators([Validators.required]);
        this.funcForm.get("cboTipoNegocio").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("perNomOrRazonSocial").value.trim() == ''){
        this.funcForm.get("perNomOrRazonSocial").setValidators([Validators.required]);
        this.funcForm.get("perNomOrRazonSocial").updateValueAndValidity();
        datosValida = false;
      }
      
      if(this.funcForm.get("perNombreComercial").value.trim() == ''){
        this.funcForm.get("perNombreComercial").setValidators([Validators.required]);
        this.funcForm.get("perNombreComercial").updateValueAndValidity();
        datosValida = false;
      }

      if(isNaN(this.funcForm.get("cboPaisPersona").value)){
        this.funcForm.get("cboPaisPersona").setValidators([Validators.required]);
        this.funcForm.get("cboPaisPersona").updateValueAndValidity();
        datosValida = false;
      }

      if(isNaN(this.funcForm.get("cboPaisOr").value)){
        this.funcForm.get("cboPaisOr").setValidators([Validators.required]);
        this.funcForm.get("cboPaisOr").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("telefono").value.trim() == ''){
        this.funcForm.get("telefono").setValidators([Validators.required]);
        this.funcForm.get("telefono").updateValueAndValidity();
        datosValida = false;
      } else if (this.funcForm.get("telefono").value.trim().length < 10){
        this.funcForm.get("telefono").setValidators([Validators.minLength(10)]);
        this.funcForm.get("telefono").updateValueAndValidity();
      }

      if(this.funcForm.get("contacto").value.trim() == ''){
        this.funcForm.get("contacto").setValidators([Validators.required]);
        this.funcForm.get("contacto").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("correo").value.trim() == '' ){
        this.funcForm.get("correo").setValidators([Validators.required]);
        this.funcForm.get("correo").updateValueAndValidity();
        datosValida = false;
      } else if(!ProspeccionUtil.validaEmail(this.funcForm.get("correo").value)){
        this.funcForm.get("correo").setValidators([Validators.email]);
        this.funcForm.get("correo").updateValueAndValidity();
        datosValida = false;
      }
    }

    if (this._modalidad == this.MODIFICAR_PROSPECTO && this._cveTipoPersona == Const.PERSONA_FISICA){
      if(this.funcForm.get("perNomOrRazonSocial").value.trim() == ''){
        this.funcForm.get("perNomOrRazonSocial").setValidators([Validators.required]);
        this.funcForm.get("perNomOrRazonSocial").updateValueAndValidity();
        datosValida = false;
      }
      
      if(this.funcForm.get("perRfc").value.trim() == '' && this.statusPanelDatosGral){
        this.funcForm.get("perRfc").setValidators([Validators.required]);
        this.funcForm.get("perRfc").updateValueAndValidity();
        if(this.funcForm.get("extr").value !=""){
          this.funcForm.get("perRfc").clearValidators();
        }
        datosValida = false;
      }

      if (this.funcForm.get("extr").value == '' && this.statusPanelDatosGral) {
        this.funcForm.get("extr").setValidators([Validators.required]);
        this.funcForm.get("extr").updateValueAndValidity();
        if(this.funcForm.get("perRfc").value !=""){
          this.funcForm.get("extr").clearValidators();
        }
        datosValida = false;
      }

      if(isNaN(this.funcForm.get("cboPaisPersona").value)){
        this.funcForm.get("cboPaisPersona").setValidators([Validators.required]);
        this.funcForm.get("cboPaisPersona").updateValueAndValidity();
        datosValida = false;
      }

      if (this.funcForm.get("calle").value == '') {
        this.funcForm.get("calle").setValidators([Validators.required]);
        this.funcForm.get("calle").updateValueAndValidity();
        datosValida = false;
      }

      if (this.funcForm.get("cp").value.length != 5) {
        this.funcForm.get("cp").setValidators([Validators.required]);
        this.funcForm.get("cp").updateValueAndValidity();
        datosValida=false;
      }

      if (this.funcForm.get("numExt").value == '') {
        this.funcForm.get("numExt").setValidators([Validators.required]);
        this.funcForm.get("numExt").updateValueAndValidity();
        datosValida=false;
      }

      if (this.funcForm.get("cboPaisDireccion").value == '') {
        this.funcForm.get("cboPaisDireccion").setValidators([Validators.required]);
        this.funcForm.get("cboPaisDireccion").updateValueAndValidity();
        datosValida=false;
      }

      if(this.funcForm.get("telefono").value.trim() == ''){
        this.funcForm.get("telefono").setValidators([Validators.required]);
        this.funcForm.get("telefono").updateValueAndValidity();
        datosValida = false;
      } else if (this.funcForm.get("telefono").value.trim().length < 10){
        this.funcForm.get("telefono").setValidators([Validators.minLength(10)]);
        this.funcForm.get("telefono").updateValueAndValidity();
      }

      if(this.funcForm.get("contacto").value.trim() == ''){
        this.funcForm.get("contacto").setValidators([Validators.required]);
        this.funcForm.get("contacto").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("correo").value.trim() == '' ){
        this.funcForm.get("correo").setValidators([Validators.required]);
        this.funcForm.get("correo").updateValueAndValidity();
        datosValida = false;
      } else if(!ProspeccionUtil.validaEmail(this.funcForm.get("correo").value)){
        this.funcForm.get("correo").setValidators([Validators.email]);
        this.funcForm.get("correo").updateValueAndValidity();
        datosValida = false;
      }
    }
    if (this._modalidad == this.MODIFICAR_PROSPECTO && this._cveTipoPersona == Const.PERSONA_MORAL){
      if(this.funcForm.get("perNomOrRazonSocial").value.trim() == ''){
        this.funcForm.get("perNomOrRazonSocial").setValidators([Validators.required]);
        this.funcForm.get("perNomOrRazonSocial").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("perNombreComercial").value.trim() == ''){
        this.funcForm.get("perNombreComercial").setValidators([Validators.required]);
        this.funcForm.get("perNombreComercial").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("cboTipoSociedad").value == ''){
        this.funcForm.get("cboTipoSociedad").setValidators([Validators.required]);
        this.funcForm.get("cboTipoSociedad").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("perRfc").value.trim() == ''){
        this.funcForm.get("perRfc").setValidators([Validators.required]);
        this.funcForm.get("perRfc").updateValueAndValidity();
        datosValida = false;
      }

      if(isNaN(this.funcForm.get("cboPaisPersona").value)){
        this.funcForm.get("cboPaisPersona").setValidators([Validators.required]);
        this.funcForm.get("cboPaisPersona").updateValueAndValidity();
        datosValida = false;
      }

      if(isNaN(this.funcForm.get("cboPaisOr").value)){
        this.funcForm.get("cboPaisOr").setValidators([Validators.required]);
        this.funcForm.get("cboPaisOr").updateValueAndValidity();
        datosValida = false;
      }

      if (this.funcForm.get("calle").value == '') {
        this.funcForm.get("calle").setValidators([Validators.required]);
        this.funcForm.get("calle").updateValueAndValidity();
        datosValida = false;
      }

      if (this.funcForm.get("cp").value.length != 5) {
        this.funcForm.get("cp").setValidators([Validators.required]);
        this.funcForm.get("cp").updateValueAndValidity();
        datosValida=false;
      }

      if (this.funcForm.get("numExt").value == '') {
        this.funcForm.get("numExt").setValidators([Validators.required]);
        this.funcForm.get("numExt").updateValueAndValidity();
        datosValida=false;
      }

      if (this.funcForm.get("cboPaisDireccion").value == '') {
        this.funcForm.get("cboPaisDireccion").setValidators([Validators.required]);
        this.funcForm.get("cboPaisDireccion").updateValueAndValidity();
        datosValida=false;
      }

      if(this.funcForm.get("telefono").value.trim() == ''){
        this.funcForm.get("telefono").setValidators([Validators.required]);
        this.funcForm.get("telefono").updateValueAndValidity();
        datosValida = false;
      } else if (this.funcForm.get("telefono").value.trim().length < 10){
        this.funcForm.get("telefono").setValidators([Validators.minLength(10)]);
        this.funcForm.get("telefono").updateValueAndValidity();
      }

      if(this.funcForm.get("contacto").value.trim() == ''){
        this.funcForm.get("contacto").setValidators([Validators.required]);
        this.funcForm.get("contacto").updateValueAndValidity();
        datosValida = false;
      }

      if(this.funcForm.get("correo").value.trim() == '' ){
        this.funcForm.get("correo").setValidators([Validators.required]);
        this.funcForm.get("correo").updateValueAndValidity();
        datosValida = false;
      } else if(!ProspeccionUtil.validaEmail(this.funcForm.get("correo").value)){
        this.funcForm.get("correo").setValidators([Validators.email]);
        this.funcForm.get("correo").updateValueAndValidity();
        datosValida = false;
      }
    }
    return datosValida;
  }
  
  resetValidadores():void {
    this.funcForm.get("cboPaisDireccion").clearValidators();
    this.funcForm.get("cboTipoNegocio").clearValidators();
    this.funcForm.get("perNomOrRazonSocial").clearValidators();
    if(this._cveTipoPersona == Const.PERSONA_MORAL){
      this.funcForm.get("cboPaisOr").clearValidators();
      this.funcForm.get("cboTipoSociedad").clearValidators();
      this.funcForm.get("perNombreComercial").clearValidators();
    }
    this.funcForm.get("cboPaisPersona").clearValidators();
    this.funcForm.get("calle").clearValidators();
    this.funcForm.get("numExt").clearValidators();
    this.funcForm.get("cp").clearValidators();
    this.funcForm.get("contacto").clearValidators();
    this.funcForm.get("perRfc").clearValidators();
    if(this._cveTipoPersona == Const.PERSONA_FISICA){
      this.funcForm.get("extr").clearValidators();
    }
    this.funcForm.get("telefono").clearValidators();
    this.funcForm.get("correo").clearValidators();
  }

  /**
  * Guarda Persona Prospecto.
  **/
  guardarPersonaProspecto(prospectoPersona:ProspeccionPersonaVO, personaFisica:PersonaFisicaVO):void {
    let prospecto = new  ProspeccionResponse;
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
          //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
          this.btnGuardarProspecto = true;
        } 
      );
  }
  
  /**
  * actualizar el Persona Prospecto.
  **/
  actualizaPersonaProspecto(prospectoPersona:ProspeccionPersonaVO):void {
    this._prospeccionService.updatePersonaProspecto(prospectoPersona).subscribe(
      then => {
        this.prospectoSave = then;
        this.confirmacionPersonaProspecto = true;
        this.mostrarMensajeAltaProspectoExitoso(this.confirmacionPersonaProspecto);
      },
      error => {
        console.error(error);
        //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
        this.btnGuardarProspecto = true;
      } 
    );
  }

  /**
  * Guarda Cliente Referenciado.
  **/
  guardarClienteReferenciado(cteReferenciado:CteReferenciadoVO){
    let prospecto = new  ProspeccionResponse;
    prospecto.cteReferenciado = cteReferenciado;
    this._prospeccionService.saveClienteReferenciado(prospecto).subscribe(
      then => {
        this.prospectoSave = then;
        this.confirmacionPersonaProspecto = true;
        this.mostrarMensajeAltaProspectoExitoso(this.confirmacionPersonaProspecto);
      },
      error => {
        console.error(error);
        //this.mostrarMensaje(Const.errorRegistroProspecto, 'error');
        this.btnGuardarProspecto = true;
      } 
    );
  }

  /**
  * Proceso de reasignacion de un cliente de Divisas Banco cuando su contrato esta en estatus 6
  */
  reasignarContratoDivisasBanco(prospectoPersona: ProspeccionPersonaVO,Clvlegada : String, contratoPersonaReasinacion:ContratoPersonaVO){
    let arrConEjecutivo : any [];
    let personaContratoVO : PersonaContratoVO = new PersonaContratoVO();
    
    personaContratoVO.tipoContratoId = prospectoPersona.tipoContratoVO.tconId;
    personaContratoVO.ejecutivoIdNew = prospectoPersona.ejecutivoVO.perId.valueOf();
    personaContratoVO.usuUsuario = this.usuarioSesion.usuClave;
    personaContratoVO.contratoEjecutivoEstatus = Const.ESTATUS_SUSPENDIDO;
    personaContratoVO.statusContratoDescripcion = Const.ESTATUS_ACTIVO;
    personaContratoVO.contratoEjecutivoEstatusNew = Const.ESTATUS_ACTIVO;
    personaContratoVO.newTmpSucCveLegada = Const.SUC_MATRIZ;
    personaContratoVO.usuarioId = this.usuarioSesion.usuId;
    personaContratoVO.cveSuc = Const.SUC_MATRIZ;
    personaContratoVO.staContrato = "promSinMigrado";
    personaContratoVO.newCveLegadPromotor = Clvlegada.toString();
    personaContratoVO.tmpCveLegada = contratoPersonaReasinacion.idVO.contratoVO.tmpCveLegada.toString();
    personaContratoVO.cesId = Const.ID_ESTADO_CONTRATO_REV_PROMOTOR; // Estatus del contrato REVISION PROMOTOR...
    //Al llegar a la reasignacion este se cambia por estatus 0 del contrato (Prospecto)....
    //ya que sica solo acepta 1 digito

    arrConEjecutivo.push(personaContratoVO);
    
    let contratos :any [];
    this._contratoService.reasignaContratosLegados(arrConEjecutivo,personaContratoVO.tipoContratoId, Const.STR_EMPTY).subscribe(
      then => {
        contratos = then;
        // Si el arriglo no tiene items, quiere decir que la reasignacion se hizo correctamente
        if (contratos.length > 0) {
          this.mostrarMensaje('No fue posible reasignar el contrato ' + 
          (prospectoPersona as ProspeccionPersonaVO).conId + ' al promotor', 'info');
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
    if (value) {
      if (this._modalidad == this.ALTA_PROSPECTO) {
        this.mostrarMensaje(Const.confirmacionRegistroProspecto, 'info');
        this.mostrarBusquedaProspecto();
      }
        
      if (this._modalidad == this.MODIFICAR_PROSPECTO) {
        this.validaEstatusConctado(this._paisClave, this.funcForm.get("perRfc").value.trim());
        this.mostrarMensaje(Const.modificacionExitosa, 'info');
      }
      
      //Validmos si se enviara notificaion
      if (this._modalidad == this.cteSinContrato) {
        this.mostrarMensaje(Const.confirmacionRegistroProspecto, 'info');

        //Si la variable no es null, quiere decir que el cliente pertenece a otro Ejecutivo
        //Si la variable es null, quiere decir que el cliente pertenece al mismo Ejecutivo
        if (null != this._personaDuenioCte) {
          //Se envia la notificacion al dueño de que su cliente ha sido prospectado
          this.notificarDuenio(this._cteSinContrato);
        } else {
          this.mostrarBusquedaProspecto();
        }
      }
      
      this.confirmacionPersonaProspecto = false;
    }
    
    if (this._modalidad == this.MODIFICAR_PROSPECTO) {
      this.btnGuardarProspecto = false;
    }
  }

  /**
  * Activa los validadores cuando el prospecto este en estado 3 y no tenga rfc ni nacionalidad ni telefono
  */
  validaEstatusConctado(paiClv:number,rfc:string):void {
    var res:Boolean = true;
    var msgBody:String = "Ingrese los datos de los campos en rojo para proceder a Entrevista Personal";
    
    if(this._pipelineVO != null) {
        
        if(this._pipelineVO.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO) {
            
            if (paiClv == 0 || (rfc == null && this.statusPanelDatosGral) || ((rfc != null && rfc.length == 0) && this.statusPanelDatosGral) 
                || this.funcForm.get("calle").value.length == 0 || this.funcForm.get("contacto").value.length == 0 || 
                (paiClv > 1 && this.funcForm.get("extr").value.length == 0 && this.statusPanelDatosGral)) {
                
                if (this._modalidad == this.ALTA_PROSPECTO){
                    if (this.funcForm.get("numExt").value.trim() == '') {
                        this.funcForm.get("numExt").setValidators([Validators.required]);
                        this.funcForm.get("numExt").updateValueAndValidity();
                        res = false; 
                    }
                }
                this.mostrarMensaje(msgBody.toString(),'error');
            }
            this.validaDatos();
            return ;
        }
        
    } else{ 
        return;
        //this.resetValidadores();
    }
  }

  notificarDuenio(cliente:PersonaVO):void{
    if (cliente == null) {
        return;
    }
    var solicitudReferenciacion:SolicitudReferenciacionVO = new SolicitudReferenciacionVO();
    
    // cliente
    solicitudReferenciacion.personaClienteVO = new PersonaVO();
    solicitudReferenciacion.personaClienteVO.perId = cliente.perId;
    solicitudReferenciacion.personaClienteVO.perNomCorto = cliente.perNomCorto;
    
    // solicitante
    solicitudReferenciacion.personaSolicitaVO = new PersonaVO();
    if (this._idPromByAsis != 0){
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

  buscarPersona(tipo:String, valor: String):void{
    let nombre:String;
    let apPaterno:String;
    let apMaterno:String;
    if (this._pipelineVO && this.personaFisicaCoincidencias){
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
        this._personaService.validaExisteRFC(this.funcForm.get("perRfc").value.trim()).subscribe(
          then => {
            existeRfc = then;
              //Validamos si es para alto o modificacion
              if(!this.esMod){
                  if (existeRfc != null && existeRfc.length > 0){
                    this.mostrarExise(true, this.funcForm.get("perRfc").value.trim());
                  } else {
                      this.btnGuardarProspectoMouseClickHandler();
                  }  
              } else {
                  if (existeRfc != null && existeRfc.length > 0 && (!this.modRfcExis)){
                      this.mostrarExise(true, this.funcForm.get("perRfc").value.trim());
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

  boqueoBotones() {
    this.btnGuardarProspecto = this.estatusResult;
    this.isEditionComponentesSA = true;
  }

  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }
}
