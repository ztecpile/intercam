import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PaginatorArrowType } from './shared/paginator-arrow-type.enum';

@Component({
  selector: 'idb-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  _totalPages: number;
  _size: number;
  _page: number = 1;

  @Output() pageChange = new EventEmitter<number>();

  totalPageItemBlocks: number;
  pageItemBlock: number;

//  page: number;
  paginatorArrowTypeEnum = PaginatorArrowType;
  firstPageItemBlockPage: number;
  lastPageItemBlockPage: number;

  @Input() set totalPages(pages: number) {
    this._totalPages = pages;
    this.inicializa();
  }
  get totalPages(): number {
    return this._totalPages;
  }

  @Input() set size(size: number) {
    this._size = size;
    this.inicializa();
  }
  get size(): number {
    return this._size;
  }

  @Input() set page(page: number) {
    this._page = page;
    this.inicializa();
  }
  get page(): number {
    return this._page;
  }

  ngOnInit(): void {
    this.inicializa();
  }

  private inicializa() {
    if (this._size && this._totalPages) {
      this.pageItemBlock = 1;
      this.onPageChange(this._page);
      this.totalPageItemBlocks = Math.ceil(this.totalPages / this.size);
      this.setPageItemBlockRange();
    }
  }

  onPageChange(page: number): void {
    if ( this._page != page ) {
      this._page = page;
      this.pageChange.emit(this._page);
      }
  }

  onPageItemBlockChange(pageItemBlock: number): void {
    this.pageItemBlock = pageItemBlock;
    this.setPageItemBlockRange();
  }

  private setPageItemBlockRange(): void {
    const temporalLastPageItemBlockPage = this.pageItemBlock * this.size;
    if (temporalLastPageItemBlockPage > this.totalPages) {
      this.lastPageItemBlockPage = this.totalPages;
      this.firstPageItemBlockPage =
        temporalLastPageItemBlockPage - this.size + 1;
    } else {
      this.lastPageItemBlockPage = temporalLastPageItemBlockPage;
      this.firstPageItemBlockPage =
        this.lastPageItemBlockPage - this.size + 1;
    }
    if ( this.page > this.totalPages ) {
      this.page = this.totalPages;
    }
    if ( this.page < 1 ) {
      this.page = 1;
    }
  }
}
