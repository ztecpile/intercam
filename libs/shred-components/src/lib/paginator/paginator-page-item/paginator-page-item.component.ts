import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PaginatorItem } from '../shared/paginator-item';

@Component({
  selector: 'idb-paginator-page-item',
  templateUrl: './paginator-page-item.component.html',
  styleUrls: ['./paginator-page-item.component.css'],
})
export class PaginatorPageItemComponent implements PaginatorItem {
  @Input() page: number;
  @Input() active: boolean;
  @Output() pageChange = new EventEmitter<number>();

  onClick(event: MouseEvent): void {
    event.preventDefault();
    this.pageChange.emit(this.page);
  }
}
