import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PaginatorItem } from '../shared/paginator-item';
import { PaginatorArrowType } from '../shared/paginator-arrow-type.enum';

@Component({
  selector: 'idb-paginator-arrow-item',
  templateUrl: './paginator-arrow-item.component.html',
  styleUrls: ['./paginator-arrow-item.component.css'],
})
export class PaginatorArrowItemComponent implements PaginatorItem {
  @Input() page: number;
  @Input() totalPageItemBlocks: number;
  @Input() pageItemBlock: number;
  @Input() firstPageItemBlockPage: number;
  @Input() lastPageItemBlockPage: number;
  @Input() arrowType: PaginatorArrowType;
  @Output() pageChange = new EventEmitter<number>();
  @Output() pageItemBlockChange = new EventEmitter<number>();

  onClick(event: MouseEvent): void {
    event.preventDefault();
    switch (this.arrowType) {
      case PaginatorArrowType.LEFT:
        this.pageChange.emit(this.page - 1);
        break;
      case PaginatorArrowType.RIGTH:
        this.pageChange.emit(this.page + 1);
        break;
      case PaginatorArrowType.DOUBLE_LEFT:
        this.pageChange.emit(this.firstPageItemBlockPage - 1);
        this.pageItemBlockChange.emit(this.pageItemBlock - 1);
        break;
      case PaginatorArrowType.DOUBLE_RIGTH:
        this.pageChange.emit(this.lastPageItemBlockPage + 1);
        this.pageItemBlockChange.emit(this.pageItemBlock + 1);
        break;
    }
  }

  disable(): boolean {
    return (
      (this.page === this.firstPageItemBlockPage &&
        this.arrowType === PaginatorArrowType.LEFT) ||
      (this.page === this.lastPageItemBlockPage &&
        this.arrowType === PaginatorArrowType.RIGTH) ||
      (this.pageItemBlock === 1 &&
        this.arrowType === PaginatorArrowType.DOUBLE_LEFT) ||
      (this.pageItemBlock === this.totalPageItemBlocks &&
        this.arrowType === PaginatorArrowType.DOUBLE_RIGTH)
    );
  }
}
