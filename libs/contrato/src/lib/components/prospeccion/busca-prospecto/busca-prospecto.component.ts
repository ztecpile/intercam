
import { AfterContentInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { _MatTableDataSource } from '@angular/material/table';

import { UsuarioVO } from '@intercam/model';

import { TabsDynamicComponent } from 'libs/shred-components/src/lib/tabs/tabs-dynamic/tabs-dynamic.component';
import { BusquedaProspectoComponent } from './busqueda-prospecto/busqueda-prospecto.component';

@Component({
  selector: 'intercam-busca-prospecto',
  templateUrl: './busca-prospecto.component.html',
  styleUrls: ['./busca-prospecto.component.scss']
})

export class BuscaProspectoComponent implements AfterContentInit {

  usuarioSesion = new UsuarioVO;
  @Output() MOSTRAR_ALTA_PROSPECTO = new EventEmitter<any>();
  
  @ViewChild('resultadoBusqueda') resultadoBusquedaTemplate;
  @ViewChild(TabsDynamicComponent) tabsComponent; //reconstruye aqui el resultado
  @ViewChild(BusquedaProspectoComponent) _busquedaProspecto: BusquedaProspectoComponent;

  constructor() {}

  ngAfterContentInit(): void {
    this.getUsuario();
  }
  
  async getUsuario() {
    const usuStr = sessionStorage.getItem('usuarioVO');
    if (usuStr) {
      this.usuarioSesion = JSON.parse(usuStr);
    }
  }


  mostrarResultadoBusqueda(resulBusqueda:any) {
    this.cerrarResultadoBusqueda();
    if(resulBusqueda != null){
      this.tabsComponent.openTab('Resultado', this.resultadoBusquedaTemplate, resulBusqueda, true);
    }

  }

  mostrarAltaProspecto(altaProspectoEvent:any) {
    if(altaProspectoEvent != null){
      this.MOSTRAR_ALTA_PROSPECTO.emit(altaProspectoEvent);
    }
  }

  regresarBusquedaProspecto(){
    let tab:TabsDynamicComponent;
    this.tabsComponent.tabs._results.forEach(element => {
      if(element != null){
        tab = element;
      }
    });
    this.tabsComponent.selectTab(tab);
  }

  cerrarResultadoBusqueda() {
    // cierra el tab
    this.tabsComponent.closeActiveTab();
  }
 
} // fin de la clase 

