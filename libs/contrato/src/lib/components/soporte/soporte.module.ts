import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaLogComponent } from './consulta-log/consulta-log.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ContratoService } from '../../services/contrato.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ShredComponentsModule } from '@intercam/shred-components';


const routes: Routes = [
  {
      path: '', 
      children: [
          {
          path: 'log-bpm',
          component:ConsultaLogComponent
          }
          
      ]
  }
];
providers:[
  ContratoService
]

@NgModule({
  declarations: [
    ConsultaLogComponent,
    
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ShredComponentsModule,
  ]
})
export class SoporteModule { }
