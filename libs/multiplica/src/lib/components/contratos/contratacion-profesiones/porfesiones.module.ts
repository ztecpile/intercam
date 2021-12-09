import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfesionesComponent } from './profesiones/profesiones.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      children: [
          {
          path: 'mis-profesiones',
          component:ProfesionesComponent
          }
      ]
  }
];
@NgModule({
  declarations: [ProfesionesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PorfesionesModule { }
