import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RequerimientoComponent } from './requerimiento/requerimiento.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      children: [
          {
          path: 'mis-requerimientos',
          component: RequerimientoComponent
          }
      ]
  }
];
@NgModule({
  declarations: [RequerimientoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RequirimientoModule { }
