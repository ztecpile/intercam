import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Const, PersonaContratoVO, PersonaVO, TipoPersonaVO, UsuarioVO, Util } from '@intercam/model';
import { PersonaContService } from 'libs/contrato/src/lib/services/persona-cont.service';
import { AltaProspectoEvent } from 'libs/contrato/src/lib/util/AltaProspectoEvent';
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';
import { DialogBuscaPersonaComponent } from 'libs/shred-components/src/lib/dialog/dialog-busca-persona/dialog-busca-persona.component';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { ChildToParentService } from '../../core/services/child-to-parent.service';
import { TokenService } from '../../core/services/token.service';
import { ContenedorComponent } from '../contenedor/contenedor.component';
import { DialogPreciosComponent } from '../dialog-precios/dialog-precios.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'intercam-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [AuthService]
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  usuarioVO: UsuarioVO;
  
  itemMenu: any = null;
  urlTmp:string;
  event:any;

  pipe:boolean = false;
  urlTmpPipe:string = null;

  urlRetorno:string = null;

  @ViewChild('menu') menu: MenuComponent;
  @ViewChild('contenedor') contenedor: ContenedorComponent;
  
  DOUBLE_CLICK_ALTA_PROSPECTO: Subscription;
  numMaxTabs:number = 2;

  constructor(
    private _authService: AuthService,
    private tokenService: TokenService,
    private dialog: MatDialog,
    private _personaContService:PersonaContService,
    private _childToParentService: ChildToParentService,
    private alertasService:AlertasService
  ) {
    this.DOUBLE_CLICK_ALTA_PROSPECTO = this._childToParentService.DOUBLE_CLICK_ALTA_PROSPECTO.subscribe($event => {
      this.continuarAltaProspecto($event);
    });
  }

  ngAfterViewInit(): void {
    if(sessionStorage.getItem('url')){
      this.getInfoUsuario();
    } else {
      this.usuarioVO = JSON.parse(sessionStorage.getItem("usuarioVO")) as UsuarioVO;
    }
  }

  async getInfoUsuario(){
    try {
      this.usuarioVO = await this._authService.getUsuario(sessionStorage.getItem("usuUsuario")).toPromise();

      this.tokenService.setUsuarioVO(this.usuarioVO);
      this.menu.usuarioVO = this.usuarioVO;
      let item = new Object;
      item['url'] = sessionStorage.getItem('url');
      if(sessionStorage.getItem("porCliente") != null && sessionStorage.getItem("porCliente") != '' 
        && sessionStorage.getItem("porCliente").replace(/["]/g,'') == '1'){
          item['porCliente'] = true;
          item['perIdCliente'] = sessionStorage.getItem("perId");
      }
      if(sessionStorage.getItem("rolId") != null && sessionStorage.getItem("rolId") != ''){
        item['rolId'] = Number(sessionStorage.getItem("rolId").replace(/[;]/g,''));
        this.getRolByRolId(item);
      } else {
        this.routerLink(item);
      }

    } catch (e) {
      console.log('error en el servicio', e);
    }
  }

  showOpenRouter(e:any){
    this.routerLink(e.item);
  }

  buscarCliente(e:any){
    this.showGetPerson();
  }

  mostrarPrecios(e:any){
    this.showGetPrecios();
  }

  continuarAltaProspecto(e:AltaProspectoEvent){
    this.urlRetorno = document.URL.replace(document.baseURI, "");
    this.itemMenu = null;
    this.pipe = true;
    this.urlTmpPipe = e.ruta;
    this.menu.isCloseClte = true;
    this.menu.isVisibleCliente = true;
    this.buscarPersonaHandler(e.contratoPersonaVO);
  }
  
  async getRolByRolId(item:any) {
    try {
      var rol = await this._authService.getRolVO(item.rolId).toPromise();
      if(rol != null){
        item.url = rol.prcUrl;
        item.tconId = rol.tconId;
        item.rolDejaLog = rol.rolDejaLog;
        item.reqCuestioSeguri = rol.reqCuestioSeguri;
      }
      this.routerLink(item);
    } catch (e) {
      console.log('error en el servicio', e);
    }
  }

  routerLink(item:any) {
    this.itemMenu = item;
    this.urlTmp = item.url;
    
    sessionStorage.setItem('porCliente', JSON.stringify(item.porCliente ? "1" : "0"));
    if(item.porCliente){
      this.menu.isCliente = true;
      this.menu.isPromotror = false;
      if(!isNaN(item.perIdCliente)){
        sessionStorage.setItem('perId', JSON.stringify(item.perIdCliente));
        this.getPersonaContrato(item.url, item.perIdCliente);
        return;
      } else {
        const dialogRef = this.dialog.open(DialogBuscaPersonaComponent,{
          width: '990px',
          disableClose:true,
          autoFocus:true,
          data: { usuarioVO: this.usuarioVO, tconId: item.tconId}
        });
        
        dialogRef.afterClosed().subscribe((result) => {
          if(result !== undefined) {
            this.buscarPersonaByParmetroHandler(result['data'],item.url);
          }
        });
      }

    } else {
      this.menu.isCliente = false;
      this.menu.isPromotror = true;
      if(this.itemMenu.rolId){
        this.manejadorDragDrop(this.itemMenu, null, null, item.url);
      } else {
        this.contenedor.openRouter(item.url);
      }
    }
  }

  /**
  * Obtiene el contrato del cliente.
  */
  async getPersonaContrato(url:string, perIdCliente:number){
    try {
      var lstResult = await this._personaContService.fill(
        [1,null,'','',0,0,null,-999,Number(sessionStorage.getItem("conId").replace(/[;]/g,'')),
        sessionStorage.getItem("conId").replace(/[;]/g,''),null,null]).toPromise();
      var results: any[] = [];
      if(lstResult.length > 1){
        results = lstResult.filter((result) => {
          return result.perId == perIdCliente && 
            result.contratoId == Number(sessionStorage.getItem("conId").replace(/[;]/g,''));
        });
      } else {
        results = lstResult;
      }
      this.buscarPersonaByParmetroHandler(results[0], url);
    } catch (e) {
      console.log('error en el servicio', e);
    }
  }

  buscarPersonaByParmetroHandler(result:PersonaContratoVO,url:string,rolId:number = 0, opeId:number = 0){
    if(result != null){
      this.buscarContratos(result, rolId, opeId, url);
    }
  }

  showGetPerson(){
    const dialogRef = this.dialog.open(DialogBuscaPersonaComponent,{
      width: '990px',
      disableClose:true,
      autoFocus:true,
      data: { usuarioVO: this.usuarioVO, tconId: 0}
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result !== undefined) {
        this.itemMenu = null;
        this.buscarPersonaHandler(result['data']);
      }
    });
  }

  showGetPrecios(){
    const dialogRef =  this.dialog.open(DialogPreciosComponent,{
      disableClose:true,
      autoFocus:true,
      data: { usuarioVO: this.usuarioVO}
    });

    dialogRef.afterClosed();
  }

  buscarPersonaHandler(result:PersonaContratoVO,rolId:number = 0, opeId:number = 0){
    if(result != null){
      this.buscarContratos(result, rolId, opeId, null);
    }
  }

  /**
  * Obtiene los contratos del cliente.
  */
  async buscarContratos(personaContratoVO:PersonaContratoVO, rolId:number = 0, opeId:number = 0, url:string) {
    try {
      var contratos = await this._personaContService.fill(
        [5,this.usuarioVO.idPersona,null,null,personaContratoVO.perId,null,null,null,null,null,null]).toPromise();
        
      this.buscarContratosResultHandler(contratos, personaContratoVO, url);
    } catch (e) {
      console.log('error en el servicio', e);
    }
  }

  /**
  * cacha el resultado de los contratros del cliente
  */
  buscarContratosResultHandler(contratos: any[], personaContratoVO:PersonaContratoVO, url:string){
    this.resetCliente();
    
    sessionStorage.setItem('perId', JSON.stringify(personaContratoVO.perId));
    sessionStorage.setItem('conId', JSON.stringify(personaContratoVO.contratoId));
    sessionStorage.setItem('cliente', JSON.stringify(personaContratoVO.nombreCorto));
    this.menu.cliente = personaContratoVO.nombreCorto.replace(/["]/g,'');
    
    if(this.itemMenu != null){
      this.manejadorDragDrop(this.itemMenu, personaContratoVO, contratos, url);
    } else {
      this.setInfoCliente(contratos, personaContratoVO, url);
    }
  }

  /**
  * maneja la valiacion para sabes si tiene acceso a la pantalla es por ejecutivo o cliente
  */
  manejadorDragDrop(item:any = null,persona:PersonaContratoVO = null, contratos:any[] = null, url:string){
    if(item.porCliente){
      if(item.tconId == 0){
        this.isAccessAllowed(item.url , persona.perId, -1, true, item.rolDejaLog, item.rolId, 
          this.usuarioVO.usuClave, item.reqCuestioSeguri, 'POS', contratos, persona, url);
      } else if(Util.validaTipoContrato(item.tconId, contratos)){
        this.isAccessAllowed(item.url , persona.perId, -1, true, item.rolDejaLog, item.rolId, 
          this.usuarioVO.usuClave, item.reqCuestioSeguri, 'POS', contratos, persona, url);
      } else {
        this.alertasService.mostrarMensaje('El Cliente no tiene este Tipo de Contrato','warning','');
      }
    } else {
      this.isAccessAllowed(item.url , -1, -1, true, item.rolDejaLog, item.rolId, 
        this.usuarioVO.usuClave, item.reqCuestioSeguri, 'POS', null, null, url);
    }
  }

  /**
  * ejecuta el validador para saber si el ejecutivo tiene permisos
  * para abrir la pantalla
  */
  async isAccessAllowed(url: string, perId: number, conId: number, porCliente: boolean,
    rolDejaLog: boolean, rolClave: number, usuId: string, reqCuestioSeguri: boolean, 
    sistema: string, contratos: any[], personaContratoVO:PersonaContratoVO, urlStr:string){
    try{
      let result:Map<string, any>[] = await this._authService.isAccessAllowed(url , perId, conId, 
        porCliente, rolDejaLog, rolClave, usuId, reqCuestioSeguri, sistema).toPromise();

        if(result === null || this.isEmptyUnderkill(result) || result["result"] == Const.PERMITIDO){
          if(this.menu.isCliente){
            this.setInfoCliente(contratos,personaContratoVO,urlStr);
          } else {
            this.contenedor.openRouter(urlStr);
          }
        } else {
          this.alertasService.mostrarMensaje('Acceso restringido por : ' + 
            Util.construyeRazonRestriccion(result["result"], result["perId"], result["conId"],result["usuClave"]),'warning', '');
        }
    } catch(e){
      console.error('Error del proceso de isAccessAllowed', e);
    }
  }

  /**
  * carga la info del cliente y la pantalla
  */
  setInfoCliente(contratos: any[], personaContratoVO:PersonaContratoVO, url:string) {
    sessionStorage.setItem('contratos', JSON.stringify(contratos));
    
    //enviando informacion
    var _clienteVO:PersonaVO = new PersonaVO();
    _clienteVO.perId = personaContratoVO.perId;
    _clienteVO.perNomCorto = personaContratoVO.nombreCorto;
    _clienteVO.tipoPersonaVO = new TipoPersonaVO();
    _clienteVO.tipoPersonaVO.tpeClave = personaContratoVO.tpeClave;
    _clienteVO.cpeId = personaContratoVO.cpeId;
    sessionStorage.setItem('_clienteVO', JSON.stringify(_clienteVO));
    sessionStorage.setItem('personaContratoVO', JSON.stringify(personaContratoVO));
    
    if(this.pipe && this.urlTmpPipe != null){
      sessionStorage.setItem('porCliente', JSON.stringify("1"));
      this.menu.isCliente = true;
      this.menu.isPromotror = false;
      this.contenedor.openRouter(this.urlTmpPipe);
      this.urlTmpPipe = null;
      this.pipe = false;
    } else if(url != null){
        this.contenedor.openRouter(url);
    } else {
      if(sessionStorage.getItem("porCliente") != null && sessionStorage.getItem("porCliente") != '' 
        && sessionStorage.getItem("porCliente").replace(/["]/g,'') == '1' || this.menu.isCliente){
          if(this.urlTmp != undefined &&  this.urlTmp != null) {
              this.contenedor.openRouterRefresh(this.urlTmp);
          }
      }
    }
  }

  logout(e:any) {
    this._authService.logOut();
  }

  closeCliente(){
    this.resetCliente();
    this.menu.cliente = '';
    this.urlTmp = null;

    if(sessionStorage.getItem("porCliente") != null && sessionStorage.getItem("porCliente") != '' 
      && sessionStorage.getItem("porCliente").replace(/["]/g,'') == '1' || this.menu.isCliente){
        if(this.urlRetorno != null && this.urlRetorno.length > 0){
          this.contenedor.openRouter(this.urlRetorno);
          this.urlRetorno = null;
        } else {
          this.contenedor.homeRouter();
        }
    }
  }

  resetCliente():void{
    sessionStorage.removeItem('perId');
    sessionStorage.removeItem('conId');
    sessionStorage.removeItem('cliente');
    sessionStorage.removeItem('contratos');
    sessionStorage.removeItem('_clienteVO');
    sessionStorage.removeItem('personaContratoVO');
  }

  isEmptyUnderkill(obj: any) {
    return Object.keys(obj).length === 0;
  }

  ngOnDestroy(): void {
    if(this.DOUBLE_CLICK_ALTA_PROSPECTO) {
      this.DOUBLE_CLICK_ALTA_PROSPECTO.unsubscribe();
    }
  }
}