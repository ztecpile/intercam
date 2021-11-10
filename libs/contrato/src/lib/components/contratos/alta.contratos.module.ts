import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FuncionarioAbcComponent } from './funcionarios/funcionario-abc/funcionario-abc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShredComponentsModule } from '@intercam/shred-components';
import { ModelModule } from '@intercam/model';
import { TranslocoModule } from '@ngneat/transloco';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'funcionarios',
          component: FuncionariosComponent
          },
          {
            path: 'funcionarios-abc',
            component: FuncionarioAbcComponent
            }
      ],
  }
];

@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioAbcComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    HttpClientModule,
    TranslocoModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule, 
    ShredComponentsModule,
    ModelModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AltaContratosModule { }
