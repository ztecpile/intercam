import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

import { ChipsComponent } from './chips.component';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    MatChipsModule,
    MatListModule,
    MatInputModule,
  ],
  exports: [ChipsComponent],
  providers:  [
    { provide: LOCALE_ID, useValue: 'es-MX' },
  ],
})
export class ChipsModule {}
