import { DatePipe } from '@angular/common';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClavePromLegadoVO, Const, ContratoPersonaVO, DireccionVO, EjecutivoAsistenteVO, EstatusNegociosProspectoVO, 
  NegociosClienteProspectoVO, PerEmpleadoVO, Permisos, PersonaContratoVO, PersonaFisicaVO, PersonaVO, PipelineVO, 
  ProspeccionPersonaVO, ProspeccionUtil, ProspectoExcepcionesVO, TipoContratoVO, UsuarioUtil, UsuarioVO } from '@intercam/model';
import { CatContratoService } from 'libs/contrato/src/lib/services/cat-contrato.service';
import  {AfterContentInit } from '@angular/core';
import { PersonaService } from 'libs/contrato/src/lib/services/persona.service';
import { ProspeccionService } from 'libs/contrato/src/lib/services/prospeccion.service';
import { ReferenciacionService } from 'libs/contrato/src/lib/services/referenciacion.service';
import { UsuarioService } from 'libs/contrato/src/lib/services/usuario.service';
import { ContratoService } from 'libs/contrato/src/lib/services/contrato.service';
import { ProspeccionEvent } from 'libs/contrato/src/lib/util/ProspeccionEvent';
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';


@Component({
  selector: 'intercam-resultado-prospecto',
  templateUrl: './resultado-prospecto.component.html',
  styleUrls: ['./resultado-prospecto.component.scss']
})
export class ResultadoProspectoComponent implements AfterContentInit {

  @Output() MOSTRAR_BUSQUEDA = new EventEmitter<any>();
  
  usuarioSesion = new UsuarioVO;

  displayedColumns: string[] = ['perId', 'Nombre', 'RFC', 'Fondos de Inversion', 'Casa de Bolsa', 'Banco', 'Divisas Banco', 'Tarjeta de Credito', 'Fideicomiso', 'Banco Lumina'];

  dataSource: []=[];
  
  tconId= {
    FondosDeInversion:2,
    CasaDeBolsa:3,
    Banco:4,
    DivisasBanco:5,
    TarjetasDeCredito:6,
    Fideicomiso:7,
    BancoLumina:8
  };

  confirmacionEnviarSolicitudReferenciacion: boolean;

  _tipoContratoVO : TipoContratoVO;

  arrNegocio : any = [];

  clavesL : any = [];

  promotorProspecta:UsuarioVO;

  _prospectoSeleccionado : ProspeccionPersonaVO;
  direccionProspectoSelecc : DireccionVO;

  ejeAsisteSelected: number;

  ejeUsuario: number;

  _valLimiteProspectos:boolean;

  // Almancena la relacion de un cliente en prospeccion
  lstProspectoPipeline = [];
  

  _informacionProspecto : EstatusNegociosProspectoVO;

  // Almacena la persona due??o del cliente seleccionado
  
  _duenoCliente : PersonaVO;

  listaEjeAsistente: EjecutivoAsistenteVO[] = [];

  _cteSinContrato_MismoDueno : boolean;

  prospectoExcepcionesVO:ProspectoExcepcionesVO;
  
  existeContrato:Boolean = false;

  lstProspectoExcepcionesVO : ProspectoExcepcionesVO[];

  lstExcepcionProspeccionVO :any =[];

  arrClvLeg : any = [];

  isAsis:Boolean = false;

  perEmpleado:PerEmpleadoVO;

  laves:ClavePromLegadoVO;

  lstCertAsignacionVO: any = [];

  cveTipoPersona : string;

  listTiposContratoGral : any = [];

  _validaPoderes : boolean = false;

  personaDuenioCte:PersonaVO;

  perNom : string;

  apePaterno : string;

  apeMaterno : string;

  paisClave: number;

  @Output() MOSTRAR_ALTA_PROSPECTO = new EventEmitter<any>();
  
  @Input() resultBusquedaEvent: any;

  constructor(private _personaService: PersonaService,
    private _prospeccionService: ProspeccionService,
    private _datePipe: DatePipe,
    private _catalogoService: CatContratoService,
    private _referenciacionService: ReferenciacionService,
    private _usuarioService: UsuarioService,
    private _contratoService: ContratoService,
    private alertasService:AlertasService) { }

    ngAfterContentInit(): void {
    this.getUsuario();
    
    if(this.resultBusquedaEvent != null){
      this.dataSource = this.resultBusquedaEvent['resultado'] as any;
      if(this.resultBusquedaEvent['ejeAsisteSelected'] != null){
        this.ejeAsisteSelected = this.resultBusquedaEvent['ejeAsisteSelected'] as number;
      }

      if(this.resultBusquedaEvent['promotorProspecta'] != null){
        this.promotorProspecta = this.resultBusquedaEvent['promotorProspecta'] as UsuarioVO;
      }
      this.cveTipoPersona = this.resultBusquedaEvent['cveTipoPersona'] as string;
      this.perNom = this.resultBusquedaEvent['perNom'] as string;
      this.apePaterno = this.resultBusquedaEvent['apePaterno'] as string;
      this.apeMaterno = this.resultBusquedaEvent['apeMaterno'] as string;
      this.paisClave = this.resultBusquedaEvent['paisClave'] as number;

      this.obtenerLimiteProspecto((this.ejeAsisteSelected != undefined && this.ejeAsisteSelected > 0) ? this.ejeAsisteSelected: this.usuarioSesion.idPersona);
      
    }
    this.cargarCatalogos();
  }

  async getUsuario() {
    const usuStr = sessionStorage.getItem('usuarioVO');
    if (usuStr) {
      this.usuarioSesion = JSON.parse(usuStr);
    }
  }
  
  cargarCatalogos(){
    this._catalogoService.findTipoContrato().subscribe(
      then => {
        this.arrNegocio = then;
      },
      error => error.error(error)
    );
    this._prospeccionService.findAllExcepcionesProspeccion().subscribe(
      then=>{
        this.lstExcepcionProspeccionVO = then;
      },error => console.error(error)
    );
  }

  obtenerLimiteProspecto(ejecutivoId:number){
    this._prospeccionService.obtenerLimiteProspectos(ejecutivoId).subscribe(
      then =>{
        this._valLimiteProspectos = then;
      },
      error => console.error(error)
    );
  }


  obtenerNegocios(negocio:EstatusNegociosProspectoVO, tconId:number){
    let listaNegocios = [];
    negocio.negocios.forEach(item => {
      if(item.tconId == tconId){
        listaNegocios.push(item);
      }
    });

    //si la lista no tiene elementos se agrega uno con el negocio libre
    if(listaNegocios.length == 0) {
      var negocioLibre:NegociosClienteProspectoVO = new NegociosClienteProspectoVO();
      negocioLibre.estatus = Const.ESTATUS_NEGOCIO_LIBRE;
      negocioLibre.perId = negocio.perId;
      negocioLibre.tconId = tconId;
      listaNegocios.push(negocioLibre);
    }
    
    return listaNegocios;
  }

  toolTip(negocio:NegociosClienteProspectoVO){ 
    let toolTip = '';

    if (negocio && negocio.estatus != Const.ESTATUS_NEGOCIO_LIBRE) {
      toolTip += negocio.ejecutivo ? "Ejecutivo"
          + ": " + negocio.ejecutivo + "\n" : ""; 
      toolTip += negocio.sucursal ? "Sucursal"
          + ": " + negocio.sucursal + "\n": "";
      if (negocio.tconId == Const.TIPO_CONTRATO_BANCO) {
          if (negocio.prpEsCreditoBanco){
              toolTip += "Tipo: " + "Credito" + "\n";
          } else if (!negocio.prpEsCreditoBanco){
              toolTip += "Tipo: "+ "Chequera" + "\n";
          }
      }
      if (negocio.epiDescripcion != null) {
          toolTip += "estatus: " + 
              negocio.epiDescripcion + "\n";
      }
      if (negocio.pipFecha != null) {
          toolTip += "altaProspecto: " + this._datePipe.transform(negocio.pipFecha, 'dd/MM/yyyy') + "\n";
      }
      if (negocio.tipoCuentaDesc != null && negocio.tipoCuentaDesc != "") {
          toolTip += "Tipo Cuenta: " + 
              negocio.tipoCuentaDesc + "\n";
      }
      
      if (negocio.prpFideicomiso != null && negocio.prpFideicomiso != "") {
          toolTip += "Nombre/Referencia: " + 
              negocio.prpFideicomiso + "\n";
      }
    }

    return toolTip;
  }

  enviarSolicitudReferenciacionResultHandler(negocio:NegociosClienteProspectoVO, negocios : NegociosClienteProspectoVO[],  estNegProspVO:EstatusNegociosProspectoVO){
    //muestra un mensaje donde Excedio el N??mero de Prospectos para dar un Alta, si sobrepaso los Limites de Prospectos
    if(!this._valLimiteProspectos){
      this.alertasService.mostrarMensaje(Const.valLimiteProspectos,'warning','');
      return;
    }
    //Almacenamos la informacion del tipo Negocio para el cual se quiere prospectar
    this._tipoContratoVO = ProspeccionUtil.obtenerTipoNegocio(negocio.tconId, this.arrNegocio);
    if(negocio != null){
      this.promotorProspecta =  this.promotorProspecta != null ? this.promotorProspecta : this.usuarioSesion ; 
      this._prospectoSeleccionado = new ProspeccionPersonaVO();
      //Consultamos si hay informacion en prospeccion de la persona seleccionada
      this.obtenerProspectosByPerId(negocio.perId);
      //Consutamos si la persona seleccionada ya tiene una direccion
      this._personaService.findDireccionesByPersona(negocio.perId).subscribe(
        then => {
            let lstDirCliente = [];
            lstDirCliente = then;
            if(lstDirCliente == null || lstDirCliente.length == 0) {
              return;
            }
            if(lstDirCliente.length > 1) {
              lstDirCliente.forEach(dir =>{
                if (dir.tdiId == Const.DIRECCION_FISCAL) {
                    this.direccionProspectoSelecc = Object.assign(DireccionVO, dir);
                }
              }); //termina forEach
            }
            if(this.direccionProspectoSelecc == null) { //cuando encuentra una sola coincidencia
                this.direccionProspectoSelecc = lstDirCliente[0] as DireccionVO;
            }
            //Se almacena la direccion
            this._prospectoSeleccionado.direccionVO = this.direccionProspectoSelecc; 
        },
        error =>console.error(error)
      );

      //Almacenamos la infromacion del prospecto seleccionado
      this._informacionProspecto = estNegProspVO;
      //Valida que la persona no se encuentre en analisis de reporte de 24 hrs
      if(this._informacionProspecto.perAnalisis) {
        this.alertasService.mostrarMensaje(Const.solicitudPersonaBloqueada,'warning','');
        return;
      }
      //ME20-01-036 Validacon para Fideicomiso
      if(negocio.tconId == Const.TCON_FIDEICOMISO 
        && (this.promotorProspecta && UsuarioUtil.hasGrupo([Permisos.GPO_FIDUCIARIO],this.promotorProspecta))) {
          //Buscamos quien es el Due??o del cliente seleccionado.
          this.obtenerDuenoClienteSeleccionado(negocio.perId);
          return;
      }
      if(this.validaProspectoContrato(negocios)){
        //Buscamos quien es el Due??o del cliente seleccionado.
        this.tipoNegocioSeleccionado(negocio)
      } else {
      this.alertasService.mostrarMensaje(Const.esProspecto,'warning','');
      }
    }
  }
  
  obtenerProspectosByPerId(perId: number):void {
    this._prospeccionService.findPipelinebyFiltro(perId).subscribe(
      then =>{
        this.lstProspectoPipeline = then;
        if(this.lstProspectoPipeline != null && this.lstProspectoPipeline.length > 0){
          var pipelineVO : PipelineVO = this.lstProspectoPipeline[0] as PipelineVO;
          this._prospectoSeleccionado.prpTelefono = pipelineVO.prospectoPersonaVO.prpTelefono;
          this._prospectoSeleccionado.prpPaginaweb = pipelineVO.prospectoPersonaVO.prpPaginaweb;
          this._prospectoSeleccionado.prpContacto = pipelineVO.prospectoPersonaVO.prpContacto;
          this._prospectoSeleccionado.prpEmail = pipelineVO.prospectoPersonaVO.prpEmail;
          this._prospectoSeleccionado.prpComentarios = pipelineVO.prospectoPersonaVO.prpComentarios;
        }
      },error => error.error(error)
    );
  }

  validaProspectoContrato(negocios : NegociosClienteProspectoVO[]): boolean{
    this.existeContrato = false;
    var prospecto:boolean;
    negocios.forEach(
      negocio => {
        if(negocio.esProspecto){
          prospecto= true;
       } else if (!isNaN(negocio.conId)) {
         this.existeContrato = true;
       }
      }
    );
    return !prospecto;
  }

  tipoNegocioSeleccionado(negocio:NegociosClienteProspectoVO){
    //Validamos si el usuario tiene privilegios para prospectar cualquier tipo de contrato
    if (this.promotorProspecta != undefined && UsuarioUtil.hasGrupo([Permisos.GPO_TIPOCONTRATOALL],this.promotorProspecta)) {
      //Buscamos quien es el Due??o del cliente seleccionado.
      this.obtenerDuenoClienteSeleccionado(negocio.perId);
    }
    //En caso contrato, validamos si de un negocio de Banco y para persona moral
    else if (negocio.tconId == Const.TIPO_CONTRATO_DIVISAS_BANCO && this.cveTipoPersona == Const.PERSONA_MORAL){
      var contratoCuentaEnlace : NegociosClienteProspectoVO;
      //Recorremos la lista de negocios en las cuales el cliente tiene contratos
      this._informacionProspecto.negocios.forEach(item =>{
      //validamos si es un contrato de banco y tiene contrato, si la cuenta es 07 CUENTA ENLACE y tiene legada
      if ((item.tconId == Const.TIPO_CONTRATO_BANCO && item.conId > 0) && 
          (item.tipoCuenta ==  Const.TIPO_NUM_CENTA_ENLACE && item.cveLegada != "")) {
             //Obtenemos la relacion del contrato
             contratoCuentaEnlace = item;
        }
      });

      //Consultamos los contratos del cliente donde sea TITULAR
      this._contratoService.findPersonasContratoByperId(negocio.perId, Const.PERF_TITULAR_DESC).subscribe(
        then=>{
          //Almacena el contrato de DIVISAS BANCO ESTATUS 6
          var contratoPersonaReasinacion : ContratoPersonaVO;
          //Determinara si el cliente tiene por lo menos un contrato de Divisas BANCO
          var tieneContratoDB : boolean = false;     
          then.forEach(item=>{
            //Validamos que sea una contrato de Divisas Banco
            if (item.tipContrato == Const.TIPO_CONTRATO_DIVISAS_BANCO) {                              
              //Especificamos que el cliente tiene ya un contrato de DB
              tieneContratoDB = true;
              //Validamos si est?? en estatus 6 (Disponibles) para cuando el cliente no tiene un contrato de banco cuenta ENLACE
              if (item.idVO.contratoVO.contratoEstatusVO.cesId == Const.ESTATUS_CONTRATO_DISPOBIBLE && 
                  item.idVO.contratoVO.tmpCveLegada != null) {
                    contratoPersonaReasinacion = item; 
              }
            }
          });
          //Validamos si el cliente tiene una contrato de BANCO ENLACE y que NO tenga uno de DB
          if (contratoCuentaEnlace && !tieneContratoDB) {
            //Verificamos si la CUENTA ENLACE esta ACTIVA
            this.validaEstatusCuentaEnlace(contratoCuentaEnlace);                                        
          } else if (contratoPersonaReasinacion) {
            //Buscamos quien es el Due??o del cliente seleccionado.
            this.obtenerDuenoClienteSeleccionado(negocio.perId);
          } else {
            this.alertasService.mostrarMensaje(Const.noContratoDB,'warning','');
          }
        },
        error => console.error(error)
      );

    } else if (this.validaPermiteContratacion(negocio.tconId)){
      //Buscamos quien es el Due??o del cliente seleccionado.
      this.obtenerDuenoClienteSeleccionado(negocio.perId);
    } else {
      //Se muestra mensaje de negocio no valido
      this.alertasService.mostrarMensaje(Const.contratoNoPermitido,'warning','');
    }
  }


 validaPermiteContratacion(tipoContSeleccionado : Number):Boolean{
  var permiteContratacion : boolean = false;
  var auxlistTiposContratoGral : any[] = [];

  var campo:string;

  //Filtramos los negocios permitidos en el catalogo i00tipo_contrato.tpe_clave
  auxlistTiposContratoGral = Object.assign([], this.arrNegocio);
  auxlistTiposContratoGral =  auxlistTiposContratoGral.filter((item)=>{
    campo = item.tpeClave !=null ? item.tpeClave : Const.STRING_EMPTY;
    if(campo.indexOf(this.cveTipoPersona) != -1){
      return item;
    } else {
      return false;
    }
  });

  auxlistTiposContratoGral.forEach(element=>{
    if(element.tconId == tipoContSeleccionado){
      permiteContratacion = true;
    }
  });
  return permiteContratacion;
  }


  
  validaEstatusCuentaEnlace(contratoCuentaEnlace : NegociosClienteProspectoVO){
    this._personaService.isCuentaActiva(contratoCuentaEnlace.cveLegada).subscribe(then =>{
      if (then && (then as String) == "A") {
        this.obtenerDuenoClienteSeleccionado(contratoCuentaEnlace.perId);
    } else {
        this.alertasService.mostrarMensaje("LA CUENTA ENLACE [" + contratoCuentaEnlace.cveLegada + "] NO ESTA ACTIVA", 'warning','');
    }
    }, error => console.error(error)
    );
  }

 

  obtenerDuenoClienteSeleccionado(perId: number){
    this._personaService.findEjeDuenoById(perId).subscribe(
      then=>{
        this.obtenerDuenoClienteSeleccionadoResult(then);
      }, error => console.error(error)
    );
  }

  // Valida Estatus Negocio Persona Prospecto.
  obtenerDuenoClienteSeleccionadoResult(personaVO:PersonaVO):void {     
    if(personaVO != null) {
        this._duenoCliente = personaVO;
        this.personaDuenioCliente(this._duenoCliente.ejecutivoId);
        var tieneContratos : boolean = false;
        //Se recorren los negocio en los cuales tiene puede tener contrato el cliente)
        this._informacionProspecto.negocios.forEach(contrato =>{
          if (contrato.conId && contrato.conId > 0){
            tieneContratos = true;
            }
           //Validamos si el tipo de contrato para el cual se quiere prospectar, ya se encuentra dentro de los tipos de contrato con los que cuenta el cliente
           if (this._tipoContratoVO.tconId == contrato.tconId){ 
            if (contrato.idEjecutivo == this.promotorProspecta.idPersona){
              //asignamos al ejecutivo como due??o del cliente para ese negocio
              this._duenoCliente.ejecutivoId = this.promotorProspecta.idPersona;
            }
           }
        });
       
        if (this.ejeAsisteSelected !== undefined  && this.ejeAsisteSelected > 0){
           if (!tieneContratos || this.ejeAsisteSelected == this._duenoCliente.ejecutivoId) {
                this._cteSinContrato_MismoDueno = true;
                //validaPermisoEspecialistas(); Se comento por la linea de abajo
                this.obtenerRelacionProspectoExcepciones(this._informacionProspecto.perId);
            } else {
                //Validamos que el due??o del cliente seleccionado sea diferente al usuario de sesion
                if (this.ejeAsisteSelected != this._duenoCliente.ejecutivoId){  
                    //Se valida que la solicitud no exista
                    this.validaExisteSolicitud(this.ejeAsisteSelected,this._informacionProspecto.perId,
                        this._tipoContratoVO.tconId);
                }
            }  
        } else {
            if (!tieneContratos ||  ( this.promotorProspecta != null && this.promotorProspecta.idPersona == this._duenoCliente.ejecutivoId)) {
                this._cteSinContrato_MismoDueno = true;
                //validaPermisoEspecialistas(); Se comento por la linea de abajo
                
                //Buscamos si el prospecto tiene alguna excepcion para este tipo de negocio
                this.obtenerRelacionProspectoExcepciones(this._informacionProspecto.perId);
            } else {
                //Validamos que el due??o del cliente seleccionado sea diferente al usuario de sesion
                if (this.promotorProspecta.idPersona != this._duenoCliente.ejecutivoId) 
                {  
                    //Se valida que la solicitud no exista
                    this.validaExisteSolicitud(this.promotorProspecta.idPersona,this._informacionProspecto.perId,
                        this._tipoContratoVO.tconId);
                }
            }
        }
    }
  }
  
  personaDuenioCliente(perId:Number){
    this._personaService.findPersonaById(perId).subscribe(
      then => {
        this.personaDuenioCte = then;
      },
      error => console.error(error)
    );
  }
  
  validaExisteSolicitud(perIdSolicita:number,perIdCliente:number,IdTipoNegocio:number){
    this._referenciacionService.validaExisteSolicitud(perIdSolicita, perIdCliente, IdTipoNegocio, Const.REFERENCIACION_EDO_NO_PROSPERO).subscribe(
      then =>{
        if(then != null){
          this._cteSinContrato_MismoDueno = false;
          this.obtenerRelacionProspectoExcepciones(this._informacionProspecto.perId);
        }
      }, error => {
        console.error(error);
      }
     );
  }

  obtenerRelacionProspectoExcepciones(perId:number){
    this._prospeccionService.findObtenerExcepcionesProspectoByPerId(perId).subscribe(
      then => {
        this.obtenerRelacionProspectoExcepcionesResult(then)
      },
      error => console.error(error)
    );
  }

  obtenerRelacionProspectoExcepcionesResult(value: any){
    if(value == null){
      return;
    }
    this.lstProspectoExcepcionesVO = value;
    //Almacena el nombre de la excepcion
    var strExcepcionNoProspectra : string = "NO APLICA";
    //Verificamos si existen excepciones para algun tipo contrato para este prospecto
    if (this.lstProspectoExcepcionesVO.length > 0){
      this.lstProspectoExcepcionesVO.forEach(item =>{
        //Validamos que corresponda al mismo tconId
        if (item.tconId == this._tipoContratoVO.tconId) {
           //Recorremos el cat??logo de Excepciones
           this.lstExcepcionProspeccionVO.forEach(element => {
             //Validamos que corresponda al mismo expId
             if (element.expId == this.prospectoExcepcionesVO.expId){
               //Alamcenamos la excepcione
               var df:Date = new Date("DD/MM/YYYY");
               strExcepcionNoProspectra= element.expNombre + "\n" + 'emision' + ':'+ item.pexFecha +  "\n\r";
             }
           });

        }
      })
    }
    //Validamos si la variable de excepcion es diferente a NO APLICA
    if(strExcepcionNoProspectra != "NO APLICA"){
      //Se muestra la excepcion y se pregunta si desa continuar
      this.alertasService.mostrarMensaje('??Desea Continuar ','warning',''); //concatena strExcepcionNoProspectra
    } else {
      this.validaPermisoEspecialistas()
    }
  }

  validaPermisoEspecialistas(){
    //Validamos que sea asistente y que haya seleccionado en el combo
    if(this.usuarioSesion.listaEjecutivosSoyAsistente.length  > 0 && (this.ejeAsisteSelected != undefined && this.ejeAsisteSelected != this.usuarioSesion.idPersona)){
      this.getClvLegadasByIdPromotor(this.promotorProspecta.idPersona)
    } else {
      //Se valida si el PROMOTOR tiene claves legadas para operar el tipo de negocio seleccionado
      this.clavesL = ProspeccionUtil.filtrarClvLegadas(this.promotorProspecta.clavesLegadas, this._tipoContratoVO.tconId);
      if(this.clavesL.length > 0){
        var parametros:Object = new Object();
        parametros["tconId"] = this._tipoContratoVO.tconId;
        parametros["clvLegadas"] = this.clavesL;
         /*VALIDAR SOLICITUD DE CLAVES LEGADAS*/
         this.getValidaCertificacionPoder(this.promotorProspecta);
         return;
      } else {
        this.alertasService.mostrarMensaje(' PROMOTOR NO TIENE CLAVE LEGADA', 'warning','');
      }
    }
  }
  
  getClvLegadasByIdPromotor(perId: number){
    this._usuarioService.getClavesLegadas(perId).subscribe(
      then =>{
      this.arrClvLeg = then;
      this._personaService.getClvLegadasByIdPromotor(perId).subscribe(
        then =>{
          this.isAsis = true;
          this.perEmpleado = then;
          this.validaPermisos();
        },
        error => console.error(error)
      );
    },
    error => console.error(error)
    );
  }
  
  validaPermisos():void{
    if (this.isAsis){
        if (this.arrClvLeg.length > 0){
            this.clavesL = ProspeccionUtil.filtrarClvLegadas(this.arrClvLeg,this._tipoContratoVO.tconId);
            if (this.clavesL.length > 0){
                var parametros:Object = new Object();
                parametros["tconId"] = this._tipoContratoVO.tconId;
                parametros["clvLegadas"] = this.clavesL;
                /*VALIDAR SOLICITUD DE CLAVES LEGADAS*/
                this.getValidaCertificacionPoder(this.promotorProspecta);
                return;
            } else {
              this.alertasService.mostrarMensaje(Const.promotorNoClaveLegada, 'warning','');
            }
        }
    } else {
        return;
    }
  }

  getValidaCertificacionPoder(usuPromotor:UsuarioVO){
    this._usuarioService.findCertificadoById(usuPromotor.idPersona).subscribe(then=>{
      this.lstCertAsignacionVO = then;
      this.validaCertificacionPoder();
    }, error => console.error(error)
    );
  }
  
  validaCertificacionPoder(){
    if(this.lstCertAsignacionVO == null){
      return;
    }

    var msj : string;
    var perIdEjecutivo : number;
    if(this.usuarioSesion.listaEjecutivosSoyAsistente.length > 0 && this.ejeAsisteSelected != this.usuarioSesion.idPersona){
      perIdEjecutivo = this.ejeAsisteSelected;
    } else{
      perIdEjecutivo = this.usuarioSesion.idPersona;
    }

    msj =  ProspeccionUtil.validaPermisosCertificadoApoderado(this.lstCertAsignacionVO,this._tipoContratoVO.tconId, this._validaPoderes);
    if(msj != "") {
      this.alertasService.mostrarMensaje(msj,'warning','');
      return;
    }

    if(this._cteSinContrato_MismoDueno && this.existeContrato) {
      this.generaContratoMismoNegocio();
    } else {            
      if(this.existeContrato) {
          //Se consulta si el ejecutivo ya tiene contratos aperturados con el cliente para el mismo negocio
          //aqui se conecta al servicio de findContratosbyEjeID
          this._contratoService.findContratosByCliIdTconIdEjeId(this._tipoContratoVO.tconId, this._informacionProspecto.perId, perIdEjecutivo).subscribe(then =>
            {
              //Se valida si hay resulttado
              if (then == null || (then as []).length == 0) {
                this.alertasService.mostrarMensaje(Const.noDueno,'warning','');
                return;
            }
            //Se procese a prospectar para le mismo negocio
            this.generaContratoMismoNegocio();
            }, error => console.error(error)
          );
      } else {
        //Deshabilita el item seleccionado
        this.prospectarCliente();
      }
    }
  }

  generaContratoMismoNegocio(){
    if ((this._tipoContratoVO.tconId == Const.TIPO_CONTRATO_DIVISAS_BANCO && this.cveTipoPersona == Const.PERSONA_MORAL) && 
       (this.promotorProspecta && !UsuarioUtil.hasGrupo([Permisos.GPO_TIPOCONTRATOALL],this.promotorProspecta))) {
          this.alertasService.mostrarMensaje('NO PUEDE SER PROSPECTADO PARA DIVISAS BANCO','warning','')
          return;
    }
    this.mostrarMensajeConfirmacion('Desea aperturar un nuevo contrato','info');
  }

  prospectarCliente(){
    //Enviamos al alta de prospecto
    let altaProspectoEvent = new ProspeccionEvent;
    altaProspectoEvent.tipoContratoVO = this._tipoContratoVO; //Tipo de contrato
    altaProspectoEvent.modalidad = 'cteSinContrato';//Modalidad para el Alta de Cliente
    altaProspectoEvent.prospectoSeleccionado = this._prospectoSeleccionado;//Si la persona seleccionada ha sido prospecto, enviamos la informacion
    altaProspectoEvent.isBuscaPros = true;

    if(this.ejeAsisteSelected != undefined && this.ejeAsisteSelected != this.usuarioSesion.idPersona){
      altaProspectoEvent.soyAsistenteId = this.ejeAsisteSelected;
    }
    
    if(this.paisClave != undefined && this.paisClave > 0){
      altaProspectoEvent.paisClave = this.paisClave;
    }

    //Verificamos si el usuario que va a tomar el cliente, es diferente al due??o
    if(this.personaDuenioCte && this.promotorProspecta && this.promotorProspecta.idPersona != this.personaDuenioCte.perId){
      altaProspectoEvent.personaDuenioCte = this.personaDuenioCte;
    }
    //OCRUZ 03/11/2013 se implementa el env??o de persona fisica esto para solucion al bug 3861
    var personaFisica= new PersonaFisicaVO;
    
    if (this.cveTipoPersona == Const.PERSONA_FISICA) {
        personaFisica = new PersonaFisicaVO();
        personaFisica.pefNombre = this.perNom.trim();
        personaFisica.pefPaterno = this.apePaterno.trim();
        personaFisica.pefMaterno = this.apeMaterno.trim();
    }
    
    altaProspectoEvent.persona =this._duenoCliente;
    altaProspectoEvent.personaFisica = personaFisica;
    altaProspectoEvent.promotorProspecta = this.promotorProspecta != null ? this.promotorProspecta : this.usuarioSesion;
    this.MOSTRAR_ALTA_PROSPECTO.emit(altaProspectoEvent);
  }

  async mostrarMensajeConfirmacion(mensaje: string, tipoMensaje: any){
    const { value: aceptar } = await this.alertasService.confirmAlert(mensaje, tipoMensaje, '','Si','No');
    if(aceptar){
      var contrato:PersonaContratoVO = new PersonaContratoVO();
      
      contrato.perId = this._duenoCliente.perId;
      contrato.nombreCorto = this._duenoCliente.perNomCorto;
      contrato.tipoContratoId = this._tipoContratoVO.tconId;
      contrato.descripcionTipocontrato = this._tipoContratoVO.tconDescripcion;
      var args:any = [];
          
      let evento=  new ProspeccionEvent;
      args.push(this._duenoCliente.perId);
      contrato.prpId = 0; 
      contrato.contratoId = 0;
          
      if(this.usuarioSesion.listaEjecutivosSoyAsistente.length > 0 && this.ejeAsisteSelected > 0){
              contrato.ejecutivoId =  this.ejeAsisteSelected;
      }
      else{
          contrato.ejecutivoId = this.usuarioSesion.idPersona;
      }
          
      evento.contratoPersonaVO = contrato;
      evento.argumentos = args;
      //_this.MOSTRAR_ALTA_PROSPECTO.emit(evento);
    }
  }

  regresarBusquedaProspecto(){
    this.MOSTRAR_BUSQUEDA.emit();
  }
}