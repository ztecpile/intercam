import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EjecutivoAsistenteVO, UsuarioVO, CatalogoManagerVO, ConsultaPipelineVO, FiltroPipelineVO, TipoContratoVO, PipelineVO, Const, EjecutivoSucursalVO } from '@intercam/model';

import { ProspeccionService } from '../../../services/prospeccion.service';
import { CorporativoCommonsService } from '../../../services/corporativo-commons.service';
import { CatContratoService } from '../../../services/cat-contrato.service';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'intercam-monitor-pipeline',
  templateUrl: './monitor-pipeline.component.html',
  styleUrls: ['./monitor-pipeline.component.scss']
})
export class MonitorPipelineComponent implements OnInit {
  usuarioVOMando : UsuarioVO;
  tconIdSelected:number;
  cboSucSelected :string;

  usuarioVO: UsuarioVO;
  btnBusqueda = false;
  displayedColumns = ['contratacion', 'visiatado', 'alta', 'cOperacion']
  lstTiponegocio =[];
  listaEjeAsistente: EjecutivoAsistenteVO[] = [];
  ejecutivosAsistidos: CatalogoManagerVO[] = []
  Const :  Const;
  arrOficinas = [];
  arrdrNegocio = [];
  arrdrAnjunto = [];
  arrEjecutivos = [];
  listaDatos =[];
  ejecutivoSucursalVO : EjecutivoSucursalVO;
  arrNegocio: TipoContratoVO[] = [];
  fechaActual:Date = new Date();

  pipelineVoSelected:PipelineVO;

  consulta: ConsultaPipelineVO;


  public findForm: FormGroup;

   @Input() ejecutivo : string;
   @Input() negocio : string;
   @Input() contrato : number;
   @Input() tipo : String;
   @Input() fechaProsp : Date;
   @Input() diasPros :number;
   @Input() diasPros1 : string;
   @Input() fechaCambiosFase: Date;
  constructor(private _prospeccionService: ProspeccionService,
    private corporativoService: CorporativoCommonsService,
    private _catContratoService: CatContratoService,
    private _usuarioService :UsuarioService,
    
  ) { }

  ngOnInit(): void {
    // this.corporativoService.getCommonParameter("CRM_BTN_ESTATUS").subscribe(
    //   then =>

    // )
    this.getUsuario();
    this.cargaCatalogo();
    // console.log('Usuario Session:', this.usuarioVO);
    this.createPipelineForm();
    if (this.usuarioVO.listaEjecutivosSoyAsistente.length > 0) {
      //se agrega el ejecutivo en session a la lista
      const ejecutivoSession: EjecutivoAsistenteVO = new EjecutivoAsistenteVO();
      ejecutivoSession.ejecutivoId = this.usuarioVO.idPersona;
      ejecutivoSession.nombreEjecutivo = this.usuarioVO.perNomCorto;
      //se agregan todos los ejecutivos que asiste el promotor
      this.listaEjeAsistente = [].concat(this.usuarioVO.listaEjecutivosSoyAsistente);
      this.listaEjeAsistente.unshift(ejecutivoSession);

      //filtros.ejecutivosAsistidos.addEventListener(ListEvent.CHANGE,ejecutivosAsistidos_changeHandler);

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
  }
  createPipelineForm() {
    this.findForm = new FormGroup({
      ejecutivosAsiste: new FormControl(this.usuarioVO.idPersona, [Validators.required]),
      oficina: new FormControl( {value:'',disable:true}), //sucursal
      drNegocio: new FormControl(''), //lblMarshall y area 
      dradjunto: new FormControl(''), // subarea
      ejecutivos: new FormControl(''), //ejecutivos 
      negocio: new FormControl(-1, [Validators.required]), // tipo de negocios

    });
  }
  private getUsuario() {
    const usuStr = sessionStorage.getItem('usuarioVO');
    if (usuStr) {
      this.usuarioVO = JSON.parse(usuStr);
      this.usuarioVOMando = this.usuarioVO;
    }
  }

  async cargaCatalogo() {
    //negocio
    this.arrNegocio = await this._catContratoService.findTipoContrato().toPromise();
    //sucursal
    this._usuarioService.getSucPromsDirector(this.usuarioVO.idPersona).subscribe(
      then =>{
        this.arrOficinas = then;
        if(this.arrOficinas != null && this.arrOficinas.length > 0){
          this.resultSucPromsDirector(); 

        }
      }, error => console.error(error)
    )
    //
  }

  resultSucPromsDirector(){
    if(this.arrOficinas != null && this.arrOficinas.length >0){
      this.findForm.get('oficina').enable();
      //Se consultan los prospecto del usuario en sesion para que no tenga que buscarse en los combos y hay ocasiones que no esta configurado dentro de la jerarquia
      var filtro:FiltroPipelineVO = new FiltroPipelineVO();
      filtro.usuUsuario = new Array(this.usuarioVOMando.usuClave);
      this._prospeccionService.findDPipeline(filtro).subscribe(
        then =>{
          this.consulta= then;
          this.resultPipeline();

        }, error => console.error(error)
      );
    }else {
      this.findForm.get('oficina').disable();
    }
  }

  resultPipeline(){
     //Esta validacion se puso para cuando el ejecutivo se le habilita el combo se sucursales, para que no tenga
     //que buscarse en los combos, en el metodo resultSucPromsDirector se ejecuta los prospectos del usuario en sesion
     //pero no se habilita el botn de busqueda hasta que seleccione los combos
     if(this.findForm.get('negocio').value != -1){
        this.btnBusqueda = true;
        //Si las listas vienen vacias enviamos un mensaje
        if(this.consulta.listaProspecto.length ==0 && this.consulta.listaVisitado.length ==0 
        && this.consulta.listaAlta.length ==0 && this.consulta.listaCerro.length ==0){
 //muestra mensaje no existen coincidencias
         this.mostrarMensaje('No existen coincidencias para los parámetros de búsqueda.','warning');
         return;
        }
     }
  }
  getEjecutivos(){
    this._usuarioService.findUsuarioBySucAreaSubArea(this.findForm.get('oficina').value, this.findForm.get('drNegocio').value, this.findForm.get('dradjunto').value).subscribe(
      then=>{
        this.arrEjecutivos= then;
      }, error =>console.error(error)
    );
  }
  getAreasPromsDirector(){
    this._usuarioService.getAreasPromsDirector(this.usuarioVO.idPersona, this.findForm.get('oficina').value).subscribe(
      then=>{
        this.arrdrNegocio= then;
      }, error=> console.error(error)
    )
  }

  getSubArPromsDirector(){
    this._usuarioService.getSubArPromsDirector(this.usuarioVOMando.idPersona, this.findForm.get('oficina').value, this.findForm.get('drNegocio').value).subscribe(
      then => {
        this.arrdrAnjunto = then;
      }, error => console.error(error)
    )
  }

  resultUsuPromDirectorBySubAr(){
  if(this.consulta != null && this.arrOficinas.length >0){
    var lstEjecutivo : [];
    this.findForm.get('ejecutivos').enable();
     //Validamos si la variable es diferente de null, esto quiere decir la consulta se ejecutó de la busqueda del promotor por nombre
     if(this.ejecutivoSucursalVO != null){
       //Ejecutamos el metodo de seleccion del Ejecutivo
       this.seleccionEjecutivo(this.ejecutivoSucursalVO.perIdEjecutivo,[]);
     }
  }else {
    this.findForm.get('ejecutivos').disable();
    //aqui va un mensaje de que no existen ejecutivos
    }
  }

  resultSubArPromsDirector(){
    if(this.consulta != null ){
      this.findForm.get('drNegocio').enable;
      //Validamos si la variable es diferente de null, esto quiere decir la consulta se ejecutó de la 
      //busqueda del promotor por nombre
      if (this.ejecutivoSucursalVO != null) {
        this.seleccionEjecutivo(this.ejecutivoSucursalVO.perIdEjecutivo,this.consulta);
      }
    }
  }
  
  seleccionEjecutivo(clave: number, lista: any){
    if(lista != null && lista.length >0 ){
      var index = 0;
      //Validamos si los objetos que trae la lista son de tipo AreaVO
      if (lista.getItemAt(0)){
      //   //Obtenemos el indice en el que se encuentra la clave del Area
			// 	//index = Util.obtenerIndiceSucursal_or_SubArea(clave, lista);
      //   //Validamos que el index sea diferente de -1, esto quiere decir que si esta el Area en el combo
      if (index != -1){
        //Seleccionamos la sub area   
        this.findForm.get('drNegocios').value ;
        //Ejecutamos la consulta para obtener los ejecutivos relacionados a la sucursal y sub area
        this._usuarioService.getSubArPromsDirector(this.usuarioVOMando.idPersona, this.ejecutivoSucursalVO.sucClave,clave).subscribe(
          then => {
            //no se a que se asigna
          }, error => console.error(error)
        )
       }else {
         //Igualamos a null la valiable para no causar conflicto en las busquedas mediante los combos
				this.ejecutivoSucursalVO = null;
        //Mensaje de que el ejecutivo no esta configurado en la jerarquia
        this.enviaMensajeEjecutivoNoEncontrado();
       }
      }
    }
  }

  enviaMensajeEjecutivoNoEncontrado():void {
     this.findForm.get('oficina').setValue(-1);
    // filtros.cbxSuc.selectedIndex = -1;
    this.deshabilitaFiltros();
    //Mensaje de que el ejecutivo no esta configurado en la jerarquia
    this.mostrarMensaje('El ejecutivo no está configurado en la jerarquía','warning')
    this.findForm.get('oficina').enable();
}

deshabilitaFiltros(){
  this.findForm.get('oficina').disable();
  this.findForm.get('drNegocio').disable();
  this.findForm.get('dradjunto').disable();
  this.findForm.get('ejecutivos').disable();
  this.findForm.get('negocio').disable();
}
 



  getCntr(name: string): FormControl { return this.findForm.get(name) as FormControl }

  onSubmit(): void {
    console.log("Subiendo");
  }

  changeoficina(e) {
    this.getAreasPromsDirector();
    console.log("e");
  }
  changedrNegocio(e) {
    console.log("e");
    this.getSubArPromsDirector();
  }
  changedradjunto(e) {
    console.log("e");
    this.getEjecutivos();
  }
  changeejecutivos(e) {
    console.log("e");
  }
  changenegocio(tconId: number): void {
    console.log("Tipo Contrato: ", tconId);
    if (tconId && tconId >= 0) {
      this.limpiaResultados();
      const filtro = new FiltroPipelineVO();
      filtro.usuUsuario = [this.usuarioVO.usuClave];
      if (tconId > 0) {
        filtro.idtipoNegocio = tconId;
      }
      this._prospeccionService.findDPipeline(filtro).toPromise().then(res => this.consulta = res);
    }
    this.tconIdSelected= tconId;
  }

  limpiaResultados(): void {
    this.consulta = new ConsultaPipelineVO();
  }

  selectPipeList(item: PipelineVO): void {
    console.log("selected: ", item);
    this.pipelineVoSelected = item;
    //seteando los valores en el formulario
    this.ejecutivo = item.usuUsuario;
    //negocio
    this.negocio = item.tipContrato;
    // tipo persona 
    if(item.prospectoPersonaVO.personaVO.tipoPersonaVO.tpeClave == 'F'){
      this.tipo = 'FISICA';
    }else {
      this.tipo = 'MORAL'
    }
    //contrato
    this.contrato = item.prospectoPersonaVO.conId;
    //fecha Prospeccion
    this.fechaProsp = item.hpiFecha;
    //dias Prosp
    //traemos la lista de donde ha estado el prospecto
    this._prospeccionService.findHPipelinebyId(item.pipId).subscribe(
      then=>{
        this.listaDatos= then;
      this.calcucloDiasPros();
      },  error =>console.error(error)
    );
    //fecha cambio fase
    this.fechaCambiosFase = item.hpiFecha;
  }
calcucloDiasPros(){
//calculo de los dias prospectados
if(this.listaDatos != null && this.listaDatos.length >0){
  this.listaDatos.forEach(
    obj => {
      if(obj != null && obj.epiId.epiId == Const.ID_ESTADO_PIPELINE_PROSPECTO){
        //formateo de fecha
        this.diasPros = (this.fechaActual.getTime() -  new Date (obj.hpiFecha).getTime())/86400000;
        this.diasPros1 = this.diasPros.toString().split('.')[0];
        var x =this.diasPros.toString().split('.')[0]
        console.log(x)
      }
    }
  )
}
}




filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    if(this.consulta.listaProspecto.length >0){
      if(filtro.length >2){
        this.consulta.listaProspecto = this.consulta.listaProspecto.filter((item) => {
          let name = new RegExp("[^]*"+filtro+"[^]*", "i");
          return name.test(item.nombreCorto);
        });
        this.consulta.listaVisitado = this.consulta.listaVisitado.filter((item) => {
          let name = new RegExp("[^]*"+filtro+"[^]*", "i");
          return name.test(item.nombreCorto);
        });
        this.consulta.listaAlta = this.consulta.listaAlta.filter((item) => {
          let name = new RegExp("[^]*"+filtro+"[^]*", "i");
          return name.test(item.nombreCorto);
        });
        this.consulta.listaCerro = this.consulta.listaCerro.filter((item) => {
          let name = new RegExp("[^]*"+filtro+"[^]*", "i");
          return name.test(item.nombreCorto);
        });
      } 
      this.limpiaResultados();
    }

  } 
  
  buscar_Handler(){
    var validar :[];
    if(validar.length ==0 ) {// ||catalogo utils 
      var filtro:FiltroPipelineVO = new FiltroPipelineVO();

      filtro.idEjecutivo = NaN;
      filtro.sucClave = NaN;
      filtro.sarClave = NaN;
      if(this.tconIdSelected != null || this.tconIdSelected !=0){
        filtro.idtipoNegocio = this.tconIdSelected
      }
      var usuarios:any;
      var sucursales:[];
      //Validamos si el combo esta deshabiltado esto quiere decir que el usuario en sesion es un Ejecutivo sin subordinados
      if(!this.cboSucSelected == null){
        //Agragamos al Ejecutivo al arreglo
        usuarios.push(this.usuarioVOMando.usuClave);
        //agregamos el ejecutivo al filtro de consulta
        filtro.idEjecutivo = this.usuarioVOMando.idPersona;
      }else {
        //Si esta habilitada la sucursal esto quiere decir que el usuario en sesion o al que se esta asistienedo es un director (Regional, de Sucursal, de Negocios, Adjunto)
        //Validamos si del combo de ejecutivos, se seleccionó "TODOS" 
        if(this.listaEjeAsistente){//que sea igual al catalogosTOdos pero no lo encuentro
          //Recorremos la lista de promotores para agregarlo a la consulta
          this.listaEjeAsistente.forEach(
            usuario =>{
            if (usuario.idVO.nombreEjecutivo  )  {
              usuarios.push(usuario.idVO.ejecutivoId);
          }
          })

        }

      }
    }
  }

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
}
