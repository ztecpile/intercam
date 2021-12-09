import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaContratoVO, UsuarioVO } from '@intercam/model';
import { DialogBuscaPersonaComponent } from 'libs/shred-components/src/lib/dialog/dialog-busca-persona/dialog-busca-persona.component';
import { AuthService } from '../../core/services/auth.service';
import { UsuarioService } from '../../core/services/usuario.service';
import { DialogPreciosComponent } from '../dialog-precios/dialog-precios.component';
// import { ContratacionDocumentoComponent } from '../../../../../../libs/contrato/src/lib/components/documentos/contratacion-documento/contratacion-documento.component'

@Component({
  selector: 'intercam-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  usuarioVO: UsuarioVO;

  menuArray: any[]=[];

  prefixAng: string = 'ANG';
  prefixISmart: string = 'ANG:';
  ismart: string = '/ismart-pos';
  urlImgFolder: string = '/ismart-pos/assets/menu/folder.png';
  urlImgBuscar: string = '/ismart-pos/assets/menu/buscar.png';

  target: any = null;

  usuario:String;
  cliente:String;
  documento:String;
  isCliente:boolean = false;
  isPromotror:boolean = true;

  urlTmp:string;
  event:any;

  constructor(
    private _authService: AuthService,
    private _usuarioService:UsuarioService,
    private _router: Router,
    private render: Renderer2,
    private _activatedRoute:ActivatedRoute,
    private dialog: MatDialog) { }
    
  ngOnInit(): void {
    const usuUsuario: string = sessionStorage.getItem('usuUsuario');
    if(usuUsuario != null){
      this._usuarioService.getHtmlMenu(usuUsuario, 'POS').subscribe(
        then =>{
          this.menuArray = then;
          this.usuarioVO = JSON.parse(sessionStorage.getItem("usuarioVO")) as UsuarioVO;
        },
        error => console.error(error)
      );
    }
    
    this.usuario = sessionStorage.getItem("usuUsuario");
    this.cliente = sessionStorage.getItem("cliente") != null && sessionStorage.getItem("cliente") != '' ? sessionStorage.getItem("cliente").replace(/["]/g,''):'';

    if(sessionStorage.getItem("porCliente") != null && sessionStorage.getItem("porCliente") != '' 
      && sessionStorage.getItem("porCliente").replace(/["]/g,'') == '1'){
      this.isCliente = true;
      this.isPromotror = false;
    }
  }
  
  getUrlButton(prcIcono:string){
    if(prcIcono != null && prcIcono != ''){
      return prcIcono = prcIcono.replace(/[..]*/i,this.ismart);
    }
    return prcIcono = this.urlImgFolder;
  }

  routerLink(item:any,e:any) {
    this.urlTmp = item.url;
    this.event = e;
    
    sessionStorage.setItem('porCliente', JSON.stringify(item.porCliente ? "1" : "0"));
    if(item.porCliente){
      this.isCliente = true;
      this.isPromotror = false;
      if(!isNaN(item.perIdCliente)){
        sessionStorage.setItem('perId', JSON.stringify(item.perIdCliente));
        this.openRouter(item.url,e);
        return;
      }
      
      if(sessionStorage.getItem('perId') != null && sessionStorage.getItem('perId').length > 0 && 
        sessionStorage.getItem('conId') != null && sessionStorage.getItem('conId').length > 0){
        this.openRouter(item.url,e);
      } else {
        const dialogRef = this.dialog.open(DialogBuscaPersonaComponent,{
          width: '990px',
          disableClose:true,
          autoFocus:true,
          data: { usuarioVO: this.usuarioVO, tconId: item.tconId}
        });
        
        dialogRef.afterClosed().subscribe((result) => {
          if(result !== undefined) {
            this.buscarPersonaByParmetroHandler(result['data'],item.url,e);
          }
        });
      }

    } else {
      this.isCliente = false;
      this.isPromotror = true;
      this.openRouter(item.url,e);
    }
  }

  buscarPersonaByParmetroHandler(result:PersonaContratoVO,url:string,e:any){
    let personaTemp: PersonaContratoVO = result;
    sessionStorage.setItem('perId', JSON.stringify(personaTemp.perId));
    sessionStorage.setItem('conId', JSON.stringify(personaTemp.contratoId));
    sessionStorage.setItem('cliente', JSON.stringify(personaTemp.nombreCorto));
    this.cliente = personaTemp.nombreCorto.replace(/["]/g,'');
    this.openRouter(url,e);
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
        this.buscarPersonaHandler(result['data']);
      }
    });
  }

  // showGetDocument(){
  //   const dialogRef = this.dialog.open(ContratacionDocumentoComponent,{
  //     width: '990px',
  //     disableClose:true,
  //     autoFocus:true,
  //     data: { usuarioVO: this.usuarioVO, tconId: 0}
  //   });
    

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if(result !== undefined) {
  //       this.buscarPersonaHandler(result['data']);
  //     }
  //   });
  // }

  buscarPersonaHandler(result:PersonaContratoVO){
    let personaTemp: PersonaContratoVO = result;
    sessionStorage.removeItem('perId');
    sessionStorage.removeItem('conId');
    sessionStorage.removeItem('cliente');

    sessionStorage.setItem('perId', JSON.stringify(personaTemp.perId));
    sessionStorage.setItem('conId', JSON.stringify(personaTemp.contratoId));
    sessionStorage.setItem('cliente', JSON.stringify(personaTemp.nombreCorto));
    this.cliente = personaTemp.nombreCorto.replace(/["]/g,'');
    
    if(sessionStorage.getItem("porCliente") != null && sessionStorage.getItem("porCliente") != '' 
    && sessionStorage.getItem("porCliente").replace(/["]/g,'') == '1' || this.isCliente){
      if(this.urlTmp != undefined &&  this.urlTmp != null && 
        this.event != undefined && this.event != null) {
          this.openRouterRefresh(this.urlTmp,this.event);
      }
    }
  }

  closeCliente(){
    sessionStorage.removeItem('perId');
    sessionStorage.removeItem('conId');
    sessionStorage.removeItem('cliente');
    this.cliente = '';
    
    if(sessionStorage.getItem("porCliente") != null && sessionStorage.getItem("porCliente") != '' 
      && sessionStorage.getItem("porCliente").replace(/["]/g,'') == '1' || this.isCliente){
        if(this.target != null) {
          this.render.removeClass(this.target, 'select');
        }
        this._router.navigate(['/'],{relativeTo:this._activatedRoute})
          .catch(this.handleError);
    }
  }
  
  openRouter(url:string,e:any){
    if(this.target != null) {
      this.render.removeClass(this.target, 'select');
    }
    this.target = e.target || e.srcElement || e.currentTarget;
    this.render.addClass(this.target, 'select');
    
    this._router.navigate([this.getUrl(url)],{relativeTo:this._activatedRoute})
      .catch(this.handleError);
  }

  openRouterRefresh(url:string,e:any){
    if(this.target != null) {
      this.render.removeClass(this.target, 'select');
    }
    this.target = e.target || e.srcElement || e.currentTarget;
    this.render.addClass(this.target, 'select');
    
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
     this._router.navigate([this.getUrl(url)])).catch(this.handleError);
  }

  private handleError (error: Response|any) {
    if (error.status == 401) {
      this._router.navigate(['/login']);
      return error.status;
    }
  }

  getUrl(url:string):string{
    let urlStr:string = url;
    if (url.indexOf(this.prefixISmart) >= 0){
      urlStr = urlStr.substring(urlStr.indexOf(this.prefixISmart) + 4);
    }
    return urlStr;
  }

  showGetPrecios(){
    const dialogRef =  this.dialog.open(DialogPreciosComponent,{
      disableClose:true,
      autoFocus:true,
      data: { usuarioVO: this.usuarioVO}
    });

    dialogRef.afterClosed();
  }

  logout() {
    this._authService.logout();
  }
}