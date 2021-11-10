import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojComponent } from './reloj/reloj.component';

@NgModule({
  declarations: [RelojComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RelojComponent
  ]
})
export class DateModule { }
