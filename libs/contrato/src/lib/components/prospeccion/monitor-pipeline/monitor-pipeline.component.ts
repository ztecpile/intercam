import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EjecutivoAsistenteVO, UsuarioVO, CatalogoManagerVO, ConsultaPipelineVO, FiltroPipelineVO, TipoContratoVO, 
  PipelineVO, Const, EjecutivoSucursalVO, Permisos, AreaVO, SubAreaVO, PersonaContratoVO, UsuarioUtil } from '@intercam/model';

import { ProspeccionService } from '../../../services/prospeccion.service';
import { CorporativoCommonsService } from '../../../services/corporativo-commons.service';
import { CatContratoService } from '../../../services/cat-contrato.service';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { SucursalVO } from 'libs/model/src/lib/com/intercam/corporativo/centrocostos/vo/SucursalVO';
import { MatDialog } from '@angular/material/dialog';
import { DialogPipelineBitacoraComponent } from '../../util/dialog-pipeline-bitacora/dialog-pipeline-bitacora.component';
import { DialogBuscaEjecutivoComponent } from 'libs/shred-components/src/lib/dialog/dialog-busca-ejecutivo/dialog-busca-ejecutivo.component';
import { PersonaService } from '../../../services/persona.service';
import { ProspeccionResponse } from '../../../util/ProspeccionResponse';
import { MatMenuTrigger } from '@angular/material/menu';
import { AltaProspectoEvent } from '../../../util/AltaProspectoEvent';
import { PersonaContService } from '../../../services/persona-cont.service';
import { ChildToParentService } from '../../../../../../../apps/ismart-pos/src/app/core/services/child-to-parent.service';
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';

@Component({
  selector: 'intercam-monitor-pipeline',
  templateUrl: './monitor-pipeline.component.html',
  styleUrls: ['./monitor-pipeline.component.scss']
})
export class MonitorPipelineComponent implements OnInit {
  usuarioVOMando : UsuarioVO;
  usuarioVO: UsuarioVO;

  horasProspecto:number; 
            
  horasAlert:number;

  perIdUsuConsultando:number;
  
  ejecutivoIdSelected:number;
  tconIdSelected:number;
  cboSucSelected :string;
  btnBusqueda = false;
  btnBuscaEjecutivo = false;
  lstTiponegocio =[];
  listaEjeAsistente: EjecutivoAsistenteVO[] = [];
  ejecutivosAsistidos: CatalogoManagerVO[] = []
  arrSucursales = [];
  arrAreas = [];
  arrSubAreas = [];
  arrEjecutivos = [];
  listaDatos =[];
  ejecutivoSucursalVO : EjecutivoSucursalVO;
  arrNegocio: TipoContratoVO[] = [];
  fechaActual:Date = new Date();

  temp:PipelineVO;
  tempId: number = NaN;

  consulta: ConsultaPipelineVO;

  public findForm: FormGroup;

  @Input() ejecutivo : string;
  @Input() negocio : string;
  @Input() contrato : string;
  @Input() tipo : string;
  @Input() fechaProsp : string;
  @Input() diasPros :string;
  @Input() fechaCambiosFase: string;
  @Input() diasFase :string;

  @Input() TotalEnProspeccion : String;
  @Input() TotalEnNegociacion : String;
  @Input() TotalClientes : String;
  @Input() TotalPipeline : String;
  @Input() TotalProspectosPM : String;

  searchText: string="";
  sucClaveSelect: number;
  areaClaveSelect: number;
  sarClaveSelect: number;
  indiceEje: number;

  //valores de la busqueda del usuario
  sucClaveEjeSucVO: number;

  /**
  * Variable que almacena el prospecto seleccionado
  */ 
  pipelineVONoProspero:PipelineVO = new PipelineVO();

  @ViewChild(MatMenuTrigger)  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  clientecontratos: PersonaContratoVO[];
  
  constructor(private _prospeccionService: ProspeccionService,
    private _personaService: PersonaService,
    private _personaContService: PersonaContService,
    private _commonsService : CorporativoCommonsService,
    private _catContratoService: CatContratoService,
    private _usuarioService :UsuarioService,
    private _datePipe: DatePipe,
    private dialog: MatDialog,
    private _childToParentService: ChildToParentService,
    private alertasService:AlertasService
  ) { }

  ngOnInit(): void {
    this.getUsuario();
    this.cargaParametros();
    this.cargaCatalogo();
    this.createPipelineForm();
    if (this.usuarioVO.listaEjecutivosSoyAsistente.length > 0) {
      //se agrega el ejecutivo en session a la lista
      const ejecutivoSession: EjecutivoAsistenteVO = new EjecutivoAsistenteVO();
      ejecutivoSession.ejecutivoId = this.usuarioVO.idPersona;
      ejecutivoSession.nombreEjecutivo = this.usuarioVO.perNomCorto;
      //se agregan todos los ejecutivos que asiste el promotor
      this.listaEjeAsistente = [].concat(this.usuarioVO.listaEjecutivosSoyAsistente);
      this.listaEjeAsistente.unshift(ejecutivoSession);
      
      const listaIdsAsis: number[] = [];
      this.listaEjeAsistente.forEach(ejecutivo => listaIdsAsis.push(ejecutivo.ejecutivoId))
      console.log("Buscando Asis: ", this.listaEjeAsistente);
      this.listaEjeAsistente
      this._prospeccionService.findDataUsuariosAsistente(listaIdsAsis).subscribe(
        then => {
          console.log("Asistentes: ", then);
          this.ejecutivosAsistidos = then;
        }, error => console.error(error)
      );
    }
    this.deshabilitaFiltros();
  }

  private getUsuario() {
    const usuStr = sessionStorage.getItem('usuarioVO');
    if (usuStr) {
      this.usuarioVO = JSON.parse(usuStr);
      this.usuarioVOMando = this.usuarioVO;
    }
  }

  createPipelineForm() {
    this.findForm = new FormGroup({
      ejecutivosAsiste: new FormControl(this.usuarioVO.idPersona, [Validators.required]),
      cbxSuc: new FormControl(''), //sucursal
      cbxArea: new FormControl(''), //lblMarshall y area 
      cbxSubArea: new FormControl(''), // subarea
      cbxEjecutivo: new FormControl(''), //ejecutivos 
      cbxNegocio: new FormControl(-1, [Validators.required]) // tipo de negocios
    });
  }

  getCtr(name: string): FormControl { return this.findForm.get(name) as FormControl }

  cargaParametros() {
    this._commonsService.getCommonParameterText('DIAS_PROSPECCION').subscribe(
      then => {
        this.horasProspecto = Number((then as String).split(",")[0]);
        this.horasAlert = Number((then as String).split(",")[3]);
        this.perIdUsuConsultando = this.usuarioVOMando.idPersona;
      },
      error => console.error(error)
    );
       // this.corporativoService.getCommonParameter("CRM_BTN_ESTATUS").subscribe(
    //   then =>
    // )
  }

  async cargaCatalogo() {
    //negocio
    this.arrNegocio = await this._catContratoService.findTipoContrato().toPromise();
    //sucursal
    this._usuarioService.getSucPromsDirector(this.usuarioVO.idPersona).subscribe(
      then =>{
        this.arrSucursales = then;
        this.resultSucPromsDirector();
      }, error => console.error(error)
    );
  }

  resultSucPromsDirector(){
    if(this.arrSucursales != null && this.arrSucursales.length >0){
      this.getCtr('cbxSuc').enable();
      //Se consultan los prospecto del usuario en sesion para que no tenga que buscarse en los combos y hay ocasiones que no esta configurado dentro de la jerarquia
      var filtro:FiltroPipelineVO = new FiltroPipelineVO();
      filtro.usuUsuario = new Array(this.usuarioVOMando.usuClave);
      this._prospeccionService.findPipeline(filtro).subscribe(
        then =>{
          this.consulta= then;
          this.resultPipeline();

        }, error => console.error(error)
      );
      //Habilitamos la busqueda del Ejecutivo por nombre
      this.btnBuscaEjecutivo = true;
    }else {
      this.getCtr('cbxSuc').disable();
      this.getCtr('cbxArea').disable();
      this.getCtr('cbxNegocio').enable();
      //Habilitamos la busqueda del Ejecutivo por nombre
      this.btnBuscaEjecutivo = false;
    }
  }

  onSubmit(): void {
    if(this.findForm.invalid){
      return;
    }
    if(this.tconIdSelected && this.tconIdSelected >= 0) {
      this.buscar_Handler();
    }
  }

  changeCbxEjeAsistentes(e) {
    this.ejecutivoIdSelected = e;
    this.getCtr('cbxNegocio').setValue(-1);
    //Verificamos si fue seleccionado un promotor a los cuales se asiste
    if (this.ejecutivoIdSelected != null && this.ejecutivoIdSelected > 0) {
      //Consultamos la informacion de este promotor seleccionada para poder obtener sus claves legadas
      this._usuarioService.getUsuario(this.ejecutivoIdSelected).subscribe(
        then => {
          this.usuarioVOMando = then;
          this._usuarioService.getSucPromsDirector(this.usuarioVOMando.idPersona).subscribe(
            then =>{
              this.arrSucursales = then;
              this.resultSucPromsDirector();
            }, error => console.error(error)
          );
          this.deshabilitaFiltros();
        },
        error => console.error(error)
      );
    }
  }

  changeCbxSuc(e) {
    if(e != null && e > 0) {
      this.sucClaveSelect = e;
      this.deshabilitaFiltros();
      this.getAreasPromsDirector();
    }
  }

  changeCbxArea(e) {
    if(e != null && e > 0) {
      this.areaClaveSelect = e;
      this.deshabilitaFiltros();
      this.getSubArPromsDirector();
    }
  }

  changeCbxSubArea(e) {
    if(e != null && e > 0) {
      this.sarClaveSelect = e;
      if(!isNaN(this.sucClaveEjeSucVO) != null && this.sucClaveEjeSucVO > 0){
        this.getUsuPromDirectorBySucClaveAndSubAr();
      } else {
        this.getFindUsuarioBySucAreaSubArea();
      }
  
      this.getCtr('cbxNegocio').disable();
      this.getCtr('cbxNegocio').setValue(-1);
      this.btnBusqueda = false;
      //Limpiamos las listas
      this.consulta.listaProspecto = null;
      this.consulta.listaVisitado = null;
      this.consulta.listaAlta = null;
      this.consulta.listaCerro = null;
  
      //Obtenemos las estadisticas de acuerdo a la sucursal y sub area seleccionadas
      var filtro:FiltroPipelineVO = new FiltroPipelineVO();
      filtro.sucClave = this.sucClaveSelect;
  		filtro.areClave = this.areaClaveSelect;
      filtro.sarClave = this.sarClaveSelect;
  
      this._prospeccionService.findEstadisticaPipeline(filtro).subscribe(
        then => {
          const objeto: ConsultaPipelineVO = then;
          this.setEstadisticas(objeto.numProspectos != null && !isNaN(objeto.numProspectos) ? objeto.numProspectos : 0,
          objeto.numNegocios != null && !isNaN(objeto.numNegocios) ? objeto.numNegocios : 0,
          objeto.numClientes != null && !isNaN(objeto.numClientes) ? objeto.numClientes : 0,
          objeto.numPipeline != null && !isNaN(objeto.numPipeline) ? objeto.numPipeline : 0,
          objeto.numProspectosPM != null && !isNaN(objeto.numProspectosPM) ? objeto.numProspectosPM : 0);
        },
        error => console.error(error)
      );
    }
  }

  changeCbxEjecutivo(e) {
    if(e.perNomCorto == '--Todos--' || e instanceof Object){
      if(e.perNomCorto != '--Todos--'){
        this.perIdUsuConsultando = e.idPersona;
      } else {
        this.perIdUsuConsultando = this.usuarioVOMando.idPersona;
      }
      this.getCtr('cbxNegocio').enable();
      this.getCtr('cbxNegocio').setValue(-1);
      this.btnBusqueda = false;
      this.limpiaResultados();
    } else {
      this.getCtr('cbxNegocio').disable();
      this.getCtr('cbxNegocio').setValue(-1);
    }
  }

  buscaEjecutivo(){
    const dialogRef = this.dialog.open(DialogBuscaEjecutivoComponent,{
      disableClose:true,
      autoFocus:true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result !== undefined) {
        this.buscaEjecutivoResult(result['data']);
      }
    });

    this.getCtr('cbxSuc').setValue(-1);
    this.deshabilitaFiltros();
  }

  /**
  * Metodo que ejecuta la accion de seleccion en los combos, del ejecutivo seleccionado en la busqueda por nombre
  */ 
   buscaEjecutivoResult(ejecutivoSucursalVO:EjecutivoSucursalVO):void{
    if(ejecutivoSucursalVO == null){
        return;
    }
    
    //Alamcena el indice a seleccionar
    var existe:boolean = false;
    //Guardamos en nuestra variable al ejecutivo seleccionado
    this.ejecutivoSucursalVO = ejecutivoSucursalVO;
    
    //Enviamos la sucursal donde se encuentra el Ejecutivo seleccionado y la lista de sucursales. Para obtener 
    //en caso de que exista
    existe = this.obtenerEstatusSucursal_or_SubArea(ejecutivoSucursalVO.sucClave, this.arrSucursales);
    
    //Verificamos el estatus, esto quere decir que si se encontro la sucursal
    if(existe) {
      //Seleccionamos la sucursal del combo se sucursales
      this.getCtr('cbxSuc').setValue(ejecutivoSucursalVO.sucClave);
    } else {
      //Si la sucursal no fue encontrada, igualamos a null nuestra variable de ejecutivo
      ejecutivoSucursalVO = null;
      //Mensaje de que el ejecutivo no esta configurado en la jerarquia
      this.enviaMensajeEjecutivoNoEncontrado();
    }
  }

  changeCbxNegocio(tconId: number): void {
    if(tconId && tconId >= 0) {
      this.limpiaResultados();
      this.tconIdSelected= tconId;
      this.buscar_Handler();
    }
  }

  noProspero(){
    if(!this.temp){
      this.alertasService.mostrarMensaje(' Seleccione un Prospecto/Cliente ', 'warning','');
      return;
    }

    this._prospeccionService.finPipelineByPPId(this.temp.prpId).subscribe(
      then => {
        var pipelineVO : PipelineVO = then;
        //Validamos si el estatus del prospecto ya es mayor a visitado
        if(pipelineVO.edoPipelineVO.epiId > Const.ID_ESTADO_PIPELINE_VISITADO) {
          this.alertasService.mostrarMensaje('El prospecto NO se puede eliminar ya cuenta con un contrato ', 'warning','');
          this.buscar_Handler();
          return;
      }
      pipelineVO = Object.assign(PipelineVO, this.temp);
      
      pipelineVO.edoPipelineVO.epiId = Const.ID_ESTADO_PIPELINE_NO_PROSPERO;
      this.cambiaestado(pipelineVO);
      },
      error => console.error(error)
    );
  }

  cambiaestado(pln:PipelineVO):void{
    if(pln != null) {
        //Si es estado es diferente a "No prospero" se actualiza aun estado mas el epiId del prospecto
        if(pln.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_CLIENTE) {
          let prospecto = new  ProspeccionResponse;
          prospecto.updateEdoProspecto = {
            pipId: pln.pipId,
            epiId: pln.edoPipelineVO.epiId + 1,
            pipObservaciones: 'Cambiar estatus'
          };
          this._prospeccionService.updateEdoPipeline(prospecto).subscribe(
            then => {
              if(then){
                console.log('El cambio de estatus ha sido realizado');
                this.temp = null;
                //Se actualiza la lista del pipeline
                this.buscar_Handler();
              } else {
                console.log('No se puedo realizar el cambio de estatus');
              }
            },
            error => console.error(error)
          );
        }
        else if (pln.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_NO_PROSPERO) { //Si el epiId es "No prospero"
            //Se muestra la modal para pedir confirmacion y algun comentario
            this.cambiaEstatusProspectoNoProspero('¿Esta usted seguro de cancelar el proceso para este prospecto?','Comentarios');
            this.pipelineVONoProspero = pln;
        }
    }
  }

  cambiaEstatusProspectoNoProspero(title: string, mensaje: string){
    const _this= this;
    Swal.fire({
      denyButtonText:'No',
      confirmButtonText: 'Si', 
      buttonsStyling: false,
      customClass: {
        title: 'sweet-title-p',
        input: 'sweet-input',
        confirmButton: 'button button1',
        denyButton: 'button button1',
        popup:'sweet-modal',
      },
      showCloseButton: true,
      showDenyButton: true,
      showConfirmButton: true,
      title: title,
      text: mensaje,
      input: 'text',
      background: ' linear-gradient (rgba(0,0,0,.6), rgba(0,0,0,.6)'
      
    }).then(function(result){
      if(result.isConfirmed){
        _this.confirmacionUpdateEdoPipeline(result.value);
      }
    });
  }

  confirmacionUpdateEdoPipeline(observaciones:string){
    let prospecto = new  ProspeccionResponse;
    prospecto.updateEdoProspecto = {
      pipId: this.pipelineVONoProspero.pipId,
      epiId: this.pipelineVONoProspero.edoPipelineVO.epiId,
      pipObservaciones: 'Cambiar estatus' + ": " + observaciones
    };
    
    this._prospeccionService.updateEdoPipeline(prospecto).subscribe(
      then => {
        if(then){
          console.log('El cambio de estatus ha sido realizado');
          this.temp = null;
          //Se actualiza la lista del pipeline
          this.buscar_Handler();
        } else {
          console.log('No se puedo realizar el cambio de estatus');
        }
      },
      error => console.error(error)
    );
    
    //validamos si la eliminacion fue de un prospecto para Divisas Banco y si este ya tenia contrato,
    //ya que esto significa que viene de una reasignacion.
    if(this.pipelineVONoProspero.tipContrato == Const.TCON_DIVISAS_BANCO_DESC && 
      !isNaN(this.pipelineVONoProspero.prospectoPersonaVO.conId) && 
      this.pipelineVONoProspero.prospectoPersonaVO.conId > 0) {
      
      this.cambiaEstatusClienteReasignacion(this.pipelineVONoProspero);
    }
  }

  cambiaEstatusClienteReasignacion(prospectoNoProspero : PipelineVO){
    //Al eliminar un prospecto de una reasignacion de Divias Banco, se tiene que cambiar el estatus
    // del contrato que se reasigno a DISPONIBLE, para que lo puedan volver a tomar
    this._personaService.updateEdoContratoDB(prospectoNoProspero.prospectoPersonaVO.conId,
      Const.ESTATUS_CONTRATO_DISPOBIBLE).subscribe(
        then => {
          if(then){
            console.log('El cambio de estatus ha sido realizado');
          } else {
            console.log('No se puedo realizar el cambio de estatus');
          }
        },
        error => console.error(error)
    );
  }

  onContextMenu(event: MouseEvent, item: PipelineVO) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

  buscar_Handler(){
    var validar:any[]=[];
    if(validar.length == 0 ) {
      var filtro:FiltroPipelineVO = new FiltroPipelineVO();
      
      if(this.tconIdSelected != null && this.tconIdSelected >= 0){
        filtro.idtipoNegocio = this.tconIdSelected != 0 ? this.tconIdSelected:NaN;
      }

      var usuarios:Array<string> = new Array;

      //Validamos si el combo esta deshabiltado esto quiere decir que el usuario en sesion es un Ejecutivo sin subordinados
      if(!this.cboSucSelected == null || this.getCtr('cbxSuc').value == ''){
        //Agragamos al Ejecutivo al arreglo
        usuarios.push(this.usuarioVOMando.usuClave);
        //agregamos el ejecutivo al filtro de consulta
        filtro.idEjecutivo = this.usuarioVOMando.idPersona;
      } else {
        //Si esta habilitada la sucursal esto quiere decir que el usuario en sesion o al que se esta asistienedo es un director (Regional, de Sucursal, de Negocios, Adjunto)
        //Validamos si del combo de ejecutivos, se seleccionó "TODOS"
        if(this.getCtr('cbxEjecutivo') != null && (this.getCtr('cbxEjecutivo').value as UsuarioVO).perNomCorto =='--Todos--'){
          //Recorremos la lista de promotores para agregarlo a la consulta
          this.arrEjecutivos.forEach(usuario =>{
            //Validamos que la posicion sea diferente de "TODOS"
            if (usuario.perNomCorto != '--Todos--') {
              usuarios.push(usuario.usuClave);
            }
          });

          filtro.sucClave = this.sucClaveSelect;
					filtro.areClave = this.areaClaveSelect;
          filtro.sarClave = this.sarClaveSelect;
        } else {
          //Si no se seleccionó "TODOS" entonces solo agregamos al Ejecutivo seleccionado
          usuarios.push((this.getCtr('cbxEjecutivo').value as UsuarioVO).usuClave);
          //agregamos el ejecutivo al filtro de consulta
          filtro.idEjecutivo = Number((this.getCtr('cbxEjecutivo').value as UsuarioVO).idPersona);
        }
      }
    }

    if(!usuarios || usuarios.length == 0){
      return;
    }
    
    //Asignamos el arreglo de usuarios al filtro de consulta
    filtro.usuUsuario = this.uniqueArray(usuarios);

    //ME20-01-036 Validacon para Fideicomiso y grupo Fiduciario
    if(filtro.idtipoNegocio == Const.TCON_FIDEICOMISO  && 
      (this.usuarioVOMando && UsuarioUtil.hasGrupo([Permisos.GPO_FIDUCIARIO], this.usuarioVOMando))) {
      //De acuerdo al requerimiento, cualquier usuario parte del grupo "GRUPOFIDUCIARIO" puede ver todos los prospectos de fideicomiso, sin importar si es su dieño
      filtro.usuUsuario = null;
    }
    
    this.clickBuscarHandler(filtro);
  }

  clickBuscarHandler(filtro:FiltroPipelineVO){
    this.temp = null;
    this.tempId = NaN;
    this._prospeccionService.findPipeline(filtro).subscribe(
      then => {
        this.consulta = then;
        this.resultPipeline();
      },
      error => console.error(error)
    );
  }

  /**
  * Funcion mediante la cual se concatena el nombre del prospecto y del promotor que lo dio de alta
  */
   contatenaProspectoPromotor(item:PipelineVO):String {
    if(item.slrTipo == null) {
      return item.nombreCorto + " / " + item.usuUsuario;
    } else {
      return item.nombreCorto + " / " + item.usuUsuario + " ("+ item.nomDueno + ")";
    }
  }

  /**
  * Funcion mediante la cual se concatena el nombre del prospecto y del promotor que lo dio de alta
  */
  toolTipProspectoPromotor(item:PipelineVO):String {
    //Si el negocio es de tipo Fideicomiso, asignamos el nombre del fideicomiso al toolTip
    if (item.tipContrato == Const.OPCION_FIDEICOMISO){
      return  item.prospectoPersonaVO.prpFideicomiso != null ? item.prospectoPersonaVO.prpFideicomiso : Const.STRING_EMPTY;
    } else if(item.slrTipo == null) {
      return item.nombreCorto + " / " + item.usuUsuario;
    } else {
      return item.nombreCorto + " / " + item.usuUsuario + " ("+ item.nomDueno + ")";
    }
  }

  chooseColor(item:PipelineVO){
    let color:String;
    if(item.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_FISICA){
      color = '#4AA5FF !important';
    } else if(item.slrTipo == 'CR' && item.perIdSolicita == this.perIdUsuConsultando){
      color = '#9B84B6 !important';
    } else if(item.slrTipo == 'RC' && item.perIdSolicita == this.perIdUsuConsultando){
      color = '#FFFF99 !important'; 
    } else {
      color = '#FFFFFF !important';
    }
    if(this.calcProspectoWarning(item)){
      color = '#FF4D4D !important';
    }
    return color;
  }

  /**
  * Calcula si el prospecto esta por salir de prospeccion
  **/
  calcProspectoWarning(prospecto:PipelineVO):Boolean{
    var result:Boolean = false;
    if (prospecto.pipFecha && this.fechaActual && !isNaN(this.horasProspecto) && 
        prospecto.edoPipelineVO.epiId < Const.ID_ESTADO_PIPELINE_CERRO) {
        
        var fechaFin:Date = new Date();
        var difHoras:Number;
        
        //Si el prospecto tiene un estatus menor al Alta (3) entonces la validacion de la fecha sera con respecto 
        //al limite que viene de parametros
        if (prospecto.edoPipelineVO.epiId < Const.ID_ESTADO_PIPELINE_CLIENTE) {
            //Obtenermos la fecha limite de los 90 días
            fechaFin.setTime(new Date(this._datePipe.transform(prospecto.pipFecha, 'yyyy/MM/dd')).getTime() + (this.horasProspecto*60*60*1000));
            
            //calcula la diferencia en horas de la fecha actual al limite que tiene para dar de alta como cliente al prospecto (contrato)
            //si le faltan 30 días (días en horas Alert) entonces se marca la alerta
            difHoras= Math.floor(((fechaFin.getTime()-(this.horasAlert*60*60*1000))-this.fechaActual.getTime())/(1000*60*60));

        } else if (prospecto.edoPipelineVO.epiId == Const.ID_ESTADO_PIPELINE_CLIENTE) {
            //Si el prospecto tiene estatus de Alta (3) entonces se verifica si el periodo que no ha cerrado operacion (4)
            //aun esta dentro de sos 60 días 
            
            if (prospecto.hpiFecha != null) {
                //Obtenemos la fecha limite, sumando la fecha en que lo dieron de alta como cliente + los 60 días
                //que tiene para cerrar una operacion //solo que sera en horas 60 (días) * 24 (hrs) = 1440
                fechaFin.setTime(new Date(this._datePipe.transform(prospecto.hpiFecha, 'yyyy/MM/dd')).getTime() + (1440*60*60*1000));
            } else {
                return false;
            }
            
            //calcula la diferencia en horas de la fecha actual al limite que tiene para cerrar para cerrar una operacion
            //si le faltan 30 días (días en horas Alert) entonces se marca la alerta
            difHoras= Math.floor(((fechaFin.getTime()-(this.horasAlert*60*60*1000))-this.fechaActual.getTime())/(1000*60*60));
        }
        
        //si su fecha limite es menor o igual a la actual
        if (fechaFin.getTime() <= this.fechaActual.getTime()){
            return true;
        }
        
        if(difHoras < 0){
            result = true;
        }
    }
    return result;
  }

  resultPipeline(){
     //Esta validacion se puso para cuando el ejecutivo se le habilita el combo se sucursales, para que no tenga
     //que buscarse en los combos, en el metodo resultSucPromsDirector se ejecuta los prospectos del usuario en sesion
     //pero no se habilita el botn de busqueda hasta que seleccione los combos
     if(this.getCtr('cbxNegocio').value != -1){
        this.btnBusqueda = true;
        //Si las listas vienen vacias enviamos un mensaje
        if(this.consulta.listaProspecto.length == 0 && this.consulta.listaVisitado.length == 0 
          && this.consulta.listaAlta.length == 0 && this.consulta.listaCerro.length == 0){
          //muestra mensaje no existen coincidencias
          this.alertasService.mostrarMensaje('No existen coincidencias para los parámetros de búsqueda.','warning','');
          return;
        }
     }

     this.setEstadisticas(this.consulta.listaProspecto != null ? Number(this.consulta.listaProspecto.length) : 0,
     (this.consulta.listaVisitado != null && this.consulta.listaAlta != null) ? Number(this.consulta.listaVisitado.length + this.consulta.listaAlta.length) : 0,
      this.consulta.listaCerro != null ? Number(this.consulta.listaCerro.length) : 0,
			(this.consulta.listaProspecto != null && this.consulta.listaVisitado != null && this.consulta.listaAlta != null) ? 
      Number(this.consulta.listaProspecto.length + this.consulta.listaVisitado.length + this.consulta.listaAlta.length) : 0,
      this.consulta.numProspectosPM = this.totalProspectosPM(this.consulta.listaProspecto,this.consulta.listaVisitado,this.consulta.listaAlta));
  }

  /**
  * Estadisticas
  **/
  setEstadisticas(prospeccion:number=0, negociacion:number=0,
    clientes:number=0,pipeline:number=0,prospectosPM:number=0):void{
    this.TotalEnProspeccion = isNaN(prospeccion) ? "0" :prospeccion.toString();
    this.TotalEnNegociacion = isNaN(negociacion) ? "0" :negociacion.toString();
    this.TotalClientes = isNaN(clientes) ? "0" :clientes.toString();
    this.TotalPipeline = isNaN(pipeline) ? "0" :pipeline.toString();
    this.TotalProspectosPM = isNaN(prospectosPM) ? "0" :prospectosPM.toString();
  }

  totalProspectosPM(listaProspecto:PipelineVO[],listaVisitado:PipelineVO[],listaAlta:PipelineVO[]):number{
    var total:number=0;
    var tmpLista: PipelineVO[];
    if((listaProspecto != null && listaProspecto.length > 0) || 
    (listaVisitado != null && listaVisitado.length > 0) || 
    (listaAlta != null && listaAlta.length > 0)){
      tmpLista = [].concat(listaProspecto).concat(listaVisitado).concat(listaAlta);
    }
    
    if(tmpLista != null && tmpLista.length > 0){
      tmpLista.forEach(item => {
        if(item.prospectoPersonaVO != null && 
          item.prospectoPersonaVO.personaVO != null && 
          item.prospectoPersonaVO.personaVO.tipoPersonaVO != null && 
          item.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_MORAL){
          total +=1;
        }
      });
    }
    return total;
  }

  getAreasPromsDirector(){
    this._usuarioService.getAreasPromsDirector(this.usuarioVOMando.idPersona, this.sucClaveSelect).subscribe(
      then=>{
        this.arrAreas = then;
        this.getCtr('cbxArea').enable();
        //Validamos si la variable es diferente de null, esto quiere decir la consulta se ejecutÃ³ de la 
				//busqueda del promotor por nombre
				if(this.ejecutivoSucursalVO != null) {
					//Ejecutamos el metodo de seleccion del area en el combo
					this.seleccionEjecutivo(this.ejecutivoSucursalVO.areClave, this.arrAreas);
				}
      }, error=> console.error(error)
    );
  }

  getSubArPromsDirector(){
    this._usuarioService.getSubArPromsDirector(this.usuarioVOMando.idPersona, this.sucClaveSelect, this.areaClaveSelect).subscribe(
      then => {
        this.arrSubAreas = then;
        this.resultSubArPromsDirector();
      }, error => console.error(error)
    );
  }

  getFindUsuarioBySucAreaSubArea(){
    this._usuarioService.findUsuarioBySucAreaSubArea(this.sucClaveSelect, this.areaClaveSelect, this.sarClaveSelect).subscribe(
      then=>{
        this.arrEjecutivos= then;
        this.resultUsuPromDirectorBySubAr();
      }, error =>console.error(error)
    );
  }

  resultUsuPromDirectorBySubAr(){
    if(this.arrEjecutivos != null && this.arrEjecutivos.length >0){
      var object: any = new Object();
      object.perNomCorto = '--Todos--';
      this.arrEjecutivos.unshift(object);
  
      this.getCtr('cbxEjecutivo').enable();
  
       //Validamos si la variable es diferente de null, esto quiere decir la consulta se ejecutó de la busqueda del promotor por nombre
       if(this.ejecutivoSucursalVO != null){
         //Ejecutamos el metodo de seleccion del Ejecutivo
         this.seleccionEjecutivo(this.ejecutivoSucursalVO.perIdEjecutivo,this.arrEjecutivos);
       }
    } else {
      this.getCtr('cbxEjecutivo').disable();
      this.alertasService.mostrarMensaje('No existen ejecutivos', 'warning','');
    }
  }
  
  seleccionEjecutivo(clave: number, lista: any){
    if(lista != null && lista.length > 0){
      var existe = false;
      //Validamos si los objetos que trae la lista son de tipo AreaVO

      if ((lista[0]  as unknown as AreaVO).areaClave > 0){
        //Obtenemos un true si existe la clave del Area
			  existe = this.obtenerEstatusSucursal_or_SubArea(clave, lista);
        //Validamos el estatus, esto quiere decir que si esta el Area en el combo
        if(existe){
          //Seleccionamos el area
          this.getCtr('cbxArea').setValue(clave);
        } else {
          //Igualamos a null la valiable para no causar conflicto en las busquedas mediante los combos
  				this.ejecutivoSucursalVO = null;
          //Mensaje de que el ejecutivo no esta configurado en la jerarquia
          this.enviaMensajeEjecutivoNoEncontrado();
        }
      }

      //Validamos si los objetos que trae la lista son de tipo SubAreaVO
      if ((lista[0] as unknown as SubAreaVO).sarClave > 0) {
        //Obtenemos un true si encuentra la clave de la subarea
        existe = this.obtenerEstatusSucursal_or_SubArea(clave, lista);
        //Validamos el estatus, esto quiere decir que si esta la sub area en el combo
        if(existe){
            this.sucClaveEjeSucVO = this.ejecutivoSucursalVO.sucClave;
            //Seleccionamos la sub area
            this.getCtr('cbxSubArea').setValue(clave);
        } else {
            //Igualamos a null la valiable para no causar conflicto en las busquedas mediante los combos
            this.ejecutivoSucursalVO = null;
            //Mensaje de que el ejecutivo no esta configurado en la jerarquia
            this.enviaMensajeEjecutivoNoEncontrado();
        }
      }

      //Validamos si los objetos que trae la lista son de tipo UsuarioVO
      if (lista.length > 1 && (lista[1] as unknown as UsuarioVO).idPersona > 0) {
        //Obtenemos el usuario
        var usu = this.obtenerUsuario(clave, lista);
        //Validamos el valor, esto quiere decir que si esta el ejecutivo en el combo
        if (usu != null){
            //Seleccionamos el ejecutivo
            this.getCtr('cbxEjecutivo').setValue(usu);
        } else {
            //Mensaje de que el ejecutivo no esta configurado en la jerarquia
            this.enviaMensajeEjecutivoNoEncontrado();
        }
        
        //Al ya no usar la variable la igualamos a null
        this.ejecutivoSucursalVO = null;
      }
    } else {
      //Igualamos a null la valiable para no causar conflicto en las busquedas mediante los combos
      this.ejecutivoSucursalVO = null;
    }
  }

  resultSubArPromsDirector(){
    if(this.arrSubAreas != null && this.arrSubAreas.length > 0){
      this.getCtr('cbxSubArea').enable();
      //Validamos si la variable es diferente de null, esto quiere decir la consulta se ejecutó de la 
      //busqueda del promotor por nombre
      if(this.ejecutivoSucursalVO != null) {
        this.seleccionEjecutivo(this.ejecutivoSucursalVO.sarClave,this.arrSubAreas);
      }
    }
  }

  getUsuPromDirectorBySucClaveAndSubAr(){
    this._usuarioService.getUsuPromDirectorBySucClaveAndSubAr(this.sucClaveEjeSucVO, this.sarClaveSelect).subscribe(
      then => {
        this.arrEjecutivos = then;

        var object: any = new Object();
        object.perNomCorto = '--Todos--';
        this.arrEjecutivos.unshift(object);
        this.getCtr('cbxEjecutivo').enable();

        //Validamos si la variable es diferente de null, esto quiere decir la consulta se ejecutó de la 
        //busqueda del promotor por nombre
        if(this.ejecutivoSucursalVO != null) {
        this.seleccionEjecutivo(this.ejecutivoSucursalVO.perIdEjecutivo,this.arrEjecutivos);
        }
        this.sucClaveEjeSucVO = NaN;
      },
      error => console.error(error)
    );
  }

  enviaMensajeEjecutivoNoEncontrado():void {
    this.getCtr('cbxSuc').setValue(-1);
    this.deshabilitaFiltros();
    //Mensaje de que el ejecutivo no esta configurado en la jerarquia
    this.alertasService.mostrarMensaje('El ejecutivo no está configurado en la jerarquía','warning','')
  }

  deshabilitaFiltros(){
    this.arrSubAreas = null;
    this.arrEjecutivos = null;

    this.getCtr('cbxSubArea').disable();
    this.getCtr('cbxEjecutivo').disable();
    this.getCtr('cbxNegocio').disable();
    this.btnBusqueda = false;

    this.limpiaResultados();
  }

  limpiaResultados(): void {
    this.consulta = new ConsultaPipelineVO();
    this.temp = null;
    this.tempId = NaN;
    //Limpiamos los indicadores de estadisticas
    this.setEstadisticas(0,0,0,0,0);
    this.searchText = '';
  }

  selectPipeList(item: PipelineVO): void {
    let isConsulta:Boolean = false;
    if(this.temp == null){
      isConsulta = true;
    } else if(this.temp != null && this.temp.pipId != item.pipId){
      isConsulta = true;
    } else {
      isConsulta = false;
    }
    if(isConsulta){
      this.temp = item;
      this.tempId = this.temp.prospectoPersonaVO.personaVO.perId;
      console.log(this.temp);
      this._prospeccionService.findHPipelinebyId(item.pipId).subscribe(
        then=>{
          this.listaDatos= then;
          this.detalleProspecto();
        },
        error =>console.error(error)
      );
    }
  }

  detalleProspecto(){
    //ejecutivo
    this.ejecutivo = this.temp.usuUsuario;
    //negocio
    this.negocio = this.temp.tipContrato;
    // tipo persona 
    this.tipo = this.getTipoPersona();
    //contrato
    this.contrato = this.getNumContrato();
    //fecha Prospeccion
    //this.fechaProsp = this.temp.hpiFecha;
    this.fechaProsp = this.fechaProspeccion();
    //dias Prosp
    this.diasPros = this.calcucloDiasPros();
    //fecha cambio fase
    this.fechaCambiosFase = this._datePipe.transform(this.temp.hpiFecha, 'dd/MM/yyyy');
    //dias fase
    this.diasFase = this.calcDiasFase();
  }

  btnShowBitacora(){
    this.dialog.open(DialogPipelineBitacoraComponent,{
      disableClose:true,
      autoFocus:true,
      data: { pipeline: this.temp}
    });
  }
  
  getTipoPersona():string {
    let tipoPers:string;
    if(this.temp.prospectoPersonaVO != null && 
      this.temp.prospectoPersonaVO.personaVO != null && 
      this.temp.prospectoPersonaVO.personaVO.tipoPersonaVO && 
      this.temp.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave != null){
      
      tipoPers = (this.temp.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_MORAL)
        ?  Const.OPCION_PERSONA_MORAL : (this.temp.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave == Const.PERSONA_FISICA)
        ?  Const.OPCION_PERSONA_FISICA : '';
    }
    return tipoPers;
  }
  
  getNumContrato():string {
    let numContrato:string = '-';
    if(this.temp != null && this.temp.prospectoPersonaVO != null && 
      !isNaN(this.temp.prospectoPersonaVO.conId) && this.temp.prospectoPersonaVO.conId > 0){
      numContrato = this.temp.prospectoPersonaVO.conId.toString();
    }
    return numContrato;
  }

  fechaProspeccion():string {
    let fechaProsp:string;
    if(this.listaDatos != null && this.listaDatos.length > 0){
      this.listaDatos.forEach(item => {
        if(item != null && item.epiId.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO){
          fechaProsp = this._datePipe.transform(item.hpiFecha, 'dd/MM/yyyy');
        }
      });
    }
    return fechaProsp;
  }

  calcucloDiasPros(): string{
    let dias:string;
    if(this.listaDatos != null && this.listaDatos.length >0){
      this.listaDatos.forEach(
        obj => {
          if(obj != null && obj.epiId.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO){
            dias = Math.floor(((this.fechaActual.getTime() - 
            new Date(this._datePipe.transform(obj.hpiFecha, 'yyyy/MM/dd')).getTime())/86400000)).toString();
          }
        }
      );
    }
    return dias;
  }
  
  calcDiasFase():string {
    let diasFase:string = Math.floor(((this.fechaActual.getTime() - 
    new Date(this._datePipe.transform(this.temp.hpiFecha, 'yyyy/MM/dd')).getTime())/86400000)).toString();
    return diasFase;
  }

  uniqueArray(array:Array<string>):Array<string> {
    var uniqueVal:Array<string> = [];

    array.forEach(item =>{
      if (uniqueVal.indexOf(item) < 0) {
        uniqueVal.push(item);
      }
    });
    
    return uniqueVal;
  }

  /**
  * Obtiene un true si existe la Sucursal, Area o  Sub area, segun la lista de objetos que se envíe.
  * -Si la lista es de sucursales la clave a buscar sera sucClave
  * -Si la lista es de Areas la clave a buscar sera areClave
  * -Si la lista es de SubAreas la clave a buscar sera sarClave
  **/
  obtenerEstatusSucursal_or_SubArea(clave:Number, lst:any[]):boolean {
    var existe:boolean = false;
    
    if (lst != null && lst.length > 0) {
        var obj:any;
        for (var i:number = 0; i < lst.length; i++) {
            obj = lst[i];
            
            //Validamos si se trata de Sucursal
            if (obj as SucursalVO && obj.sucClave == clave) {
              existe = true;
                break;
            }
            
            //Validamos si se trata de Area
            if (obj as AreaVO && obj.areaClave == clave) {
              existe = true;
                break;
            }
            
            //Validamos si se trata de SubArea
            if (obj as SubAreaVO && obj.sarClave == clave) {
              existe = true;
                break;
            }
        }
    }
    return existe;
  }

  /**
  * Obtiene el usuario
  **/
   obtenerUsuario(idPersona:Number, lstUsuarios:any[]):UsuarioVO {
    if (lstUsuarios != null && lstUsuarios.length > 0) {
        var usuarioVO:UsuarioVO;
        for (var i:number = 0; i < lstUsuarios.length; i++) {
            usuarioVO = lstUsuarios[i] as UsuarioVO;
            if (usuarioVO.idPersona == idPersona) {
                break;
            }
        }
    }
    return usuarioVO;
  }

  getClassBtnBuscar(parametro: boolean) {
    if(!parametro){
      return 'btn-img buscar-btn-des'
    } else {
      return 'btn-img buscar-btn'
    }
  }
}
