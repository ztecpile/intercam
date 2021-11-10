import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenusComponent } from './Menus.component';

import { MatMenuModule } from '@angular/material/menu';

import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    TranslocoModule
  ],
  exports: [MenusComponent],
})
export class MenusModule {}
