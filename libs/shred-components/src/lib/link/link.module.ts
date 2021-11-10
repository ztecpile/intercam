import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

import { LinkComponent } from './link.component';

@NgModule({
  declarations: [LinkComponent],
  imports: [CommonModule, RouterModule, TranslocoModule],
  exports: [LinkComponent],
})
export class LinkModule {}
