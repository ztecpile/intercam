import { RouterModule, Routes } from '@angular/router';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabla2Component } from './tabla2/tabla2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mis-consulta-operaciones',
        component: Tabla2Component,
      },
    ],
  },
];

@NgModule({
  declarations: [Tabla2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ConsultaOperacionesModule {}
