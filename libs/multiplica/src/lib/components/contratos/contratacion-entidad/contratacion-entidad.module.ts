import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadComponent } from './entidad/entidad.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      children: [
          {
          path: 'mis-entidades',
          component:EntidadComponent
          }
      ]
  }
];

@NgModule({
  declarations: [
    EntidadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContratacionEntidadModule { }
