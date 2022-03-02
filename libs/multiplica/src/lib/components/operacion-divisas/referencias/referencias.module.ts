import { RouterModule, Routes } from '@angular/router';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table5Component } from './table5/table5.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mis-referencias',
        component: Table5Component,
      },
    ],
  },
];

@NgModule({
  declarations: [Table5Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ReferenciasModule { }
