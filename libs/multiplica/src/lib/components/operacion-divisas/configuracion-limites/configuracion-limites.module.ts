import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table7Component } from './table7/table7.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'mis-configuracion-limites',
          component:Table7Component
          }
      ]
  }
];

@NgModule({
  declarations: [Table7Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ConfiguracionLimitesModule { }
