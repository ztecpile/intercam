import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TituloComponent } from './titulo.component';

import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [TituloComponent],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [TituloComponent],
})
export class TituloModule {}
