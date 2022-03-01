import { Table10Component } from './table10/table10.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'mis-tabla-10',
          component:Table10Component
          }
      ]
  }
];


@NgModule({
  declarations: [
    Table10Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class BitacaPrecioModule { }
