import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { TabsDynamicComponent } from './tabs-dynamic/tabs-dynamic.component';
import { TabDynamicComponent } from './tabs-dynamic/tab-dynamic/tab-dynamic.component';
import { DynamicTabsDirective } from './tabs-dynamic/dynamic-tabs.directive';
import { TabsContenedorComponent } from './tabs-contenedor/tabs-contenedor.component';
import { TabContenedorComponent } from './tabs-contenedor/tab-contenedor/tab-contenedor.component';
import { DynamicTabsContenedorDirective } from './tabs-contenedor/dynamic-tabs-contenedor.directive';

@NgModule({
  declarations: [
    TabsComponent, 
    TabItemComponent, 
    TabContentComponent, 
    TabsDynamicComponent, 
    TabDynamicComponent, 
    DynamicTabsDirective, 
    TabsContenedorComponent, 
    TabContenedorComponent, 
    DynamicTabsContenedorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent, 
    TabItemComponent, 
    TabContentComponent,
    TabsDynamicComponent,
    TabDynamicComponent,
    TabsContenedorComponent, 
    TabContenedorComponent,
  ],
})
export class TabsModule {}
