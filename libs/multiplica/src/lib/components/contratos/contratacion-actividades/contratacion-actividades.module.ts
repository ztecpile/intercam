import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {  ContratacionActividadesComponent } from './contratacion-actividades/contratacion-actividades.component'


const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'mis-actividades',
          component: ContratacionActividadesComponent
          }
      ]
  }
];
@NgModule({
  declarations: [ ContratacionActividadesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ]
})
export class ContratacionActividadesModule { }
