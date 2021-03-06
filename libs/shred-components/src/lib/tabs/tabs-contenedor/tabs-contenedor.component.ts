import { AfterContentInit, Component, ComponentFactoryResolver, ContentChildren, EventEmitter, Output, QueryList, ViewChild } from '@angular/core';
import { DynamicTabsContenedorDirective } from './dynamic-tabs-contenedor.directive';
import { TabContenedorComponent } from './tab-contenedor/tab-contenedor.component';

@Component({
  selector: 'intercam-tabs-contenedor',
  templateUrl: './tabs-contenedor.component.html',
  styleUrls: ['./tabs-contenedor.component.scss']
})
export class TabsContenedorComponent implements AfterContentInit {

  dynamicTabs: TabContenedorComponent[] = [];

  @ContentChildren(TabContenedorComponent) tabs: QueryList<TabContenedorComponent>;
  
  @ViewChild(DynamicTabsContenedorDirective) dynamicTabPlaceholder: DynamicTabsContenedorDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterContentInit(): void {
    // obtenermos los tabs activos
    const activeTabs = this.tabs.filter(tab => tab.active);
  
    // si no hay tabs activos, activa el primero
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  openTab(title: string, name: string, isCliente = false, template, data, isCloseable = false) {
    // obtenemos el componete
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(
      TabContenedorComponent
    );

    // obtenemos la refencia del contenedor en la vista de la directiva
    const viewContainerRef = this.dynamicTabPlaceholder.viewContainer;

    // crea la instacia del compomente
    const componentRef = viewContainerRef.createComponent(componentFactory);

    // estable la propiedades del compomenente que se esta instaciando
    const instance: TabContenedorComponent = componentRef.instance as TabContenedorComponent;
    instance.title = title;
    instance.name = name;
    instance.isCliente = isCliente;
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;

    // agregamos el compomente para que se muestre
    this.dynamicTabs.push(componentRef.instance as TabContenedorComponent);
      
    // se activa el tab si el template es diferente de null
    if(template != null){
      this.selectTab(componentRef.instance as TabContenedorComponent);
    }
  }

  selectTab(tab: TabContenedorComponent, parametro:boolean = false) {
    if(tab != null){
      // desactiva todos los tabs
      this.tabs.toArray().forEach(tab => (tab.active = false));
      this.dynamicTabs.forEach(tab => (tab.active = false));
  
      // se activa sobre el que se hace click
      tab.active = true;
    }
  }

  closeTab(tab: TabContenedorComponent) {
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
      // cierra la pesta??a activa
      this.closeTab(activeTabs[0]);
    }
  }

}
