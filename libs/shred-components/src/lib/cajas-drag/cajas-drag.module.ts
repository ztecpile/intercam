import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CajasDragComponent } from './cajas-drag.component';

import { TranslocoModule } from '@ngneat/transloco';
import { RestringeFechaHoraModule } from '../restringe-fecha-hora/restringe-fecha-hora.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { TimepickerModule } from '../timepicker/timepicker.module';

import { OverlayModule } from '@angular/cdk/overlay';
import localeEsMx from '@angular/common/locales/es-MX';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEsMx)


@NgModule({
  declarations: [
    CajasDragComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    RestringeFechaHoraModule,
    TranslocoModule,
    TooltipModule,
    TimepickerModule,
    OverlayModule
  ],
  exports: [CajasDragComponent],
  providers:  [
    { provide: LOCALE_ID, useValue: 'es-MX' },
  ],
})
export class CajasDragModule {}
