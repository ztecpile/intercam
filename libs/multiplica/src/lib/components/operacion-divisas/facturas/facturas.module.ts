import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Table6Component } from './table6/table6.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'mis-tabla',
          component:Table6Component
          }
      ]
  }
];

@NgModule({
  declarations: [Table6Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule 
  ]
})
export class FacturasModule { }
