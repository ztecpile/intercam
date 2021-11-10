import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'idb-paginator-page-item-block',
  templateUrl: './paginator-page-item-block.component.html',
  styleUrls: ['./paginator-page-item-block.component.css'],
})
export class PaginatorPageItemBlockComponent implements OnInit, OnChanges {
  @Input() pageSize: number;
  @Input() page: number;
  @Input() firstPageItemBlockPage: number;
  @Input() lastPageItemBlockPage: number;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[];

  ngOnChanges(changes: SimpleChanges): void {
    for (const change in changes) {
      if (
        change === 'firstPageItemBlockPage' ||
        change === 'lastPageItemBlockPage'
      ) {
        this.setPages();
      }
    }
  }

  ngOnInit(): void {
    this.setPages();
  }

  onPageChange(page: number): void {
    this.page = page;
    this.pageChange.emit(this.page);
  }

  private setPages(): void {
    this.pages = [];
    for (
      let index = this.firstPageItemBlockPage;
      index <= this.lastPageItemBlockPage;
      index++
    ) {
      this.pages.push(index);
    }
  }
}
