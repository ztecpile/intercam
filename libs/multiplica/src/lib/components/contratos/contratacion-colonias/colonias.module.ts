import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColoniasComponent } from './colonias/colonias.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
      path: '',
      children: [
          {
          path: 'mis-colonias',
          component:ColoniasComponent
          }
      ]
  }
];


@NgModule({
  declarations: [
    ColoniasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ColoniasModule { }
