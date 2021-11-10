import { AfterContentInit, Component, ViewChild} from '@angular/core';
import { TabsDynamicComponent } from '../../util/tabs/tabs-dynamic.component';

import { UsuarioVO } from '@intercam/model';

@Component({
  selector: 'intercam-prospeccion',
  templateUrl: './prospeccion.component.html',
  styleUrls: ['./prospeccion.component.scss']
})

export class ProspeccionComponent implements AfterContentInit{

  @ViewChild('altaProspecto') editAltaProspectoTemplate;
  @ViewChild(TabsDynamicComponent) tabsComponent;

  usuarioVO: UsuarioVO;
  
  constructor() {}

  ngAfterContentInit(): void {

    //this.getUsuario();
    const urlStr = 'http://10.9.2.81:7001/POSServiceWeb/usuario/findusuario-usuusuario/' + 'FBELTRAN';
// this.http.get<UsuarioVO>(urlStr, {}).subscribe(
// then => {
// this.usuarioVO = then;
// this._buscaProspecto.usuarioSesion = this.usuarioVO;
// this._buscaProspecto._busquedaProspecto.mostrarEjecutivos(this.usuarioVO);
// //this._buscaProspecto.mostrarEjecutivos(this.usuarioVO);
// },
// error => console.error('Error al buscar usuario', error)
// );

  }
  
  async getUsuario() {
    const usuStr = sessionStorage.getItem('usuarioVO');
    if (usuStr) {
      this.usuarioVO = JSON.parse(usuStr);
    }
  }

  mostrarAltaProspecto(altaProspectoEvent:any) {
    this.cerrarAltaProspecto();
    if(altaProspectoEvent != null){
      altaProspectoEvent.usuarioSesion = this.usuarioVO;
      this.tabsComponent.openTab('Alta de Prospecto', this.editAltaProspectoTemplate, altaProspectoEvent, true);
    }
  }
  
  mostraBusquedaProspecto() {
    // cierra el tab
    this.tabsComponent.closeActiveTab();
  }

  cerrarAltaProspecto() {
    // cierra el tab
    this.tabsComponent.closeActiveTab();
  }
}