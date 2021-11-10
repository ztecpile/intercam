import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorComponent } from './paginator.component';
import { PaginatorArrowItemComponent } from './paginator-arrow-item/paginator-arrow-item.component';
import { PaginatorArrowTypePipe } from './paginator-arrow-item/paginator-arrow-type.pipe';
import { PaginatorPageItemComponent } from './paginator-page-item/paginator-page-item.component';
import { PaginatorPageItemBlockComponent } from './paginator-page-item-block/paginator-page-item-block.component';

@NgModule({
  declarations: [
    PaginatorArrowItemComponent,
    PaginatorArrowTypePipe,
    PaginatorPageItemComponent,
    PaginatorPageItemBlockComponent,
    PaginatorComponent,
  ],
  imports: [CommonModule],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}
