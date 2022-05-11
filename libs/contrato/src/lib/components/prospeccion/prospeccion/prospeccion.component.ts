import { AfterContentInit, Component, ViewChild} from '@angular/core';
import { TabsDynamicComponent } from 'libs/shred-components/src/lib/tabs/tabs-dynamic/tabs-dynamic.component';

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
    this.getUsuario();
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