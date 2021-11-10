import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RestringeFechaHoraComponent } from './restringe-fecha-hora.component';

import { TranslocoModule } from '@ngneat/transloco';
import { RestringeFechaHoraDirective } from './restringe-fecha-hora.directive';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

import { TimepickerModule } from '../timepicker/timepicker.module';

@NgModule({
  declarations: [
    RestringeFechaHoraComponent,
    RestringeFechaHoraDirective,
//    RestringeFechaHoraInputDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    TimepickerModule,
    NgxMaterialTimepickerModule,
  ],
  exports: [
    RestringeFechaHoraComponent,
    RestringeFechaHoraDirective,
  ],
  providers: []
})
export class RestringeFechaHoraModule {}
