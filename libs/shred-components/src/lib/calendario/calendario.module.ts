import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { CalendarioComponent } from './calendario.component';
import { DatePipe } from '@angular/common'
// import { DataService } from './data.service';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [CalendarioComponent],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatDatepickerModule,
  ],
  exports: [CalendarioComponent],
})
export class CalendarioModule {}
