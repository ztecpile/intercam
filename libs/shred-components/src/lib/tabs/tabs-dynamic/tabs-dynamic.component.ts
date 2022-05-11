import { AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Output, QueryList, ViewChild } from '@angular/core';
import { DynamicTabsDirective } from './dynamic-tabs.directive';
import { TabDynamicComponent } from './tab-dynamic/tab-dynamic.component';

@Component({
  selector: 'intercam-tabs-dynamic',
  templateUrl: './tabs-dynamic.component.html',
  styleUrls: ['./tabs-dynamic.component.scss']
})
export class TabsDynamicComponent implements AfterContentInit {

  dynamicTabs: TabDynamicComponent[] = [];
  
    @ContentChildren(TabDynamicComponent) tabs: QueryList<TabDynamicComponent>;
  
    @ViewChild(DynamicTabsDirective) dynamicTabPlaceholder: DynamicTabsDirective;
    
    @Output() selectTabInfo = new EventEmitter<any>();

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {}

    ngAfterContentInit() {
      // obtenermos los tabs activos
      const activeTabs = this.tabs.filter(tab => tab.active);
  
      // si no hay tabs activos, activa el primero
      if (activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    }
  
    openTab(title: string, template, data, isCloseable = false) {
      // obtenemos el componete
      const componentFactory = this._componentFactoryResolver.resolveComponentFactory(
        TabDynamicComponent
      );
  
      // obtenemos la refencia del contenedor en la vista de la directiva
      const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
  
      // crea la instacia del compomente
      const componentRef = viewContainerRef.createComponent(componentFactory);
  
      // estable la propiedades del compomenente que se esta instaciando
      const instance: TabDynamicComponent = componentRef.instance as TabDynamicComponent;
      instance.title = title;
      instance.template = template;
      instance.dataContext = data;
      instance.isCloseable = isCloseable;

      // agregamos el compomente para que se muestre
      this.dynamicTabs.push(componentRef.instance as TabDynamicComponent);
  
      // se activa el tab
      this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
    }
  
    selectTab(tab: TabDynamicComponent, parametro:boolean = false) {
      // desactiva todos los tabs
      this.tabs.toArray().forEach(tab => (tab.active = false));
      this.dynamicTabs.forEach(tab => (tab.active = false));
  
      // se activa sobre el que se hace click
      tab.active = true;
      if(tab.active && parametro){
        this.selectTabInfo.emit(tab);
      }
    }
  
    closeTab(tab: TabDynamicComponent) {
      for (let i = 0; i < this.dynamicTabs.length; i++) {
        if (this.dynamicTabs[i] === tab) {
          // elimina el tab de arreglo
          this.dynamicTabs.splice(i, 1);
  
          // destruye el compomente creado dimamicamente
          let viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
          viewContainerRef.remove(i);
  
          // estable el indice del tab
          this.selectTab(this.tabs.first);
          break;
        }
      }
    }
  
    closeActiveTab() {
      const activeTabs = this.dynamicTabs.filter(tab => tab.isCloseable);
      if (activeTabs.length > 0) {
        // cierra la pestaña activa
        this.closeTab(activeTabs[0]);
      }
    }

}
