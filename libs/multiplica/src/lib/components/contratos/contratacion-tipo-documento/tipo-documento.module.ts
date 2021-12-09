import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
{
  path: '',
  children: [
      {
      path: 'mis-tipos-documentos',
      component:TipoDocumentoComponent
      }
  ]
}
];
@NgModule({
  declarations: [TipoDocumentoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TipoDocumentoModule { }
