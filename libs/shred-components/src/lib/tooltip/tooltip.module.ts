import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  imports: [CommonModule, OverlayModule, TranslocoModule],
  exports: [TooltipDirective],
})
export class TooltipModule {}
