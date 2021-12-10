import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RelacionDocumentoComponent } from './relacion-documento/relacion-documento.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatTableModule } from '@angular/material/table';
const routes: Routes = [
  {
    path: '', 
    children: [
        {
        path: 'mis-relacion-documento',
        component:RelacionDocumentoComponent
        }
    ]
  }
  ];

@NgModule({
  declarations: [RelacionDocumentoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    // MatTableModule,
    // MatSnackBarModule,
    ReactiveFormsModule,
  ]
})
export class RelacionDocumentoModule { }
