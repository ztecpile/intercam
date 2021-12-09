import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MisClientesComponent } from './mis-clientes/mis-clientes.component';

const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'mis-clientes',
          component:MisClientesComponent
          }
      ]
  }
];

@NgModule({
  declarations: [
    MisClientesComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    HttpClientModule
  ]
})
export class ClientesModule { }
