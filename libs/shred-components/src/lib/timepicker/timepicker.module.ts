import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslocoModule } from '@ngneat/transloco';
//import { WheelDirective } from './wheel.directive'

import { TimepickerComponent } from './timepicker.component';
import { TimepickerDirective } from './timepicker.directive';

@NgModule({
  declarations: [
    TimepickerComponent,
    TimepickerDirective,
  ],
  imports: [
    CommonModule,
    OverlayModule,
    TranslocoModule,
  ],
  exports: [
    TimepickerComponent,
    TimepickerDirective,
  ],
})
export class TimepickerModule {}
