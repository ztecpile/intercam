import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsuarioVO } from '@intercam/model';
import { UsuarioService } from 'libs/contrato/src/lib/services/usuario.service';

@Component({
  selector: 'intercam-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  usuarioVO: UsuarioVO;

  menuArray: any[]=[];
  
  prefixAng: string[] = ['ANG','ANG:'];
  fieldNames: string[] = ['rolDescripcion','url'];
  
  ismart: string = '/ismart-pos';
  urlImgFolder: string = '/ismart-pos/assets/menu/folder.png';
  
  usuario:String;
  cliente:String;
  isCliente:boolean = false;
  isPromotror:boolean = true;
  isVisibleCliente:boolean = true;
  isVisiblePromotror:boolean = true;
  isCloseClte:boolean = true;
  
  @Output() open_router = new EventEmitter<any>();
  @Output() close_cliente = new EventEmitter<any>();
  
  btnMenuDisabled: boolean = true;
  tooltipBtnMenu: string = '';

  constructor(
    private _usuarioService:UsuarioService,
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('url')){
      this.tooltipBtnMenu = '';
      this.btnMenuDisabled = true;
      if(sessionStorage.getItem("porCliente") != null && sessionStorage.getItem("porCliente") != '' 
        && sessionStorage.getItem("porCliente").replace(/["]/g,'') == '1'){
          this.isVisibleCliente = true;
          this.isVisiblePromotror = false;
          this.isCloseClte = false;
      } else {
        this.isVisiblePromotror = true;
        this.isVisibleCliente = false;
        this.isCloseClte = true;
      }
    } else {
      this.tooltipBtnMenu = 'Inicio';
      this.btnMenuDisabled = false;
      this.usuarioVO = JSON.parse(sessionStorage.getItem("usuarioVO")) as UsuarioVO;
      if(this.usuarioVO != null){
        this._usuarioService.getHtmlMenu(this.usuarioVO.usuClave, 'POS').subscribe(
          then =>{
            this.menuArray = then;          
          },
          error => console.error(error)
        );
      }
    }
    this.usuario = sessionStorage.getItem("usuUsuario");
  }

  getClassBtnMenu() {
    return {'btn-menu logo-button-menu-disable': sessionStorage.getItem('url') != null && sessionStorage.getItem('url').length > 0, 
    'btn-menu logo-button-menu': sessionStorage.getItem('url') == null || sessionStorage.getItem('url') == undefined}
  }

  getUrlButton(prcIcono:string){
    if(prcIcono != null && prcIcono != ''){
      return prcIcono = prcIcono.replace(/[..]*/i,this.ismart);
    }
    return prcIcono = this.urlImgFolder;
  }

  routerLink(item:any) {
    let obj:Object = new Object({'item':item});
    this.open_router.emit(obj);
  }

  closeCliente(){
    this.close_cliente.emit();
  }
}