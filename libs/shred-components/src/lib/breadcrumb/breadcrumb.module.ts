import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';
import { LinkModule } from '../link/link.module';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, LinkModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
