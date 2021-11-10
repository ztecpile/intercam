import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [TabsComponent, TabItemComponent, TabContentComponent],
  imports: [CommonModule],
  exports: [TabsComponent, TabItemComponent, TabContentComponent],
})
export class TabsModule {}
