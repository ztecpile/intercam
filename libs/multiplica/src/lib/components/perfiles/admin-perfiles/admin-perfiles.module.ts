import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfigPerfilComponent } from './config-perfil/config-perfil.component';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'config-perfil',
        component: ConfigPerfilComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ConfigPerfilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatTableModule,
  ]
})

export class AdminPerfilesModule { }