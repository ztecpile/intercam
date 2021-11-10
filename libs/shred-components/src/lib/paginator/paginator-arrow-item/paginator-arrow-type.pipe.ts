import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PaginatorArrowType } from '../shared/paginator-arrow-type.enum';

@Pipe({
  name: 'paginatorArrowType',
})
export class PaginatorArrowTypePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: PaginatorArrowType, ...args: unknown[]): SafeHtml {
    switch (value) {
      case PaginatorArrowType.LEFT:
        return this.sanitizer.bypassSecurityTrustHtml('&laquo;');
      case PaginatorArrowType.RIGTH:
        return this.sanitizer.bypassSecurityTrustHtml('&raquo;');
      case PaginatorArrowType.DOUBLE_LEFT:
        return this.sanitizer.bypassSecurityTrustHtml('&laquo;&nbsp;&laquo;');
      case PaginatorArrowType.DOUBLE_RIGTH:
        return this.sanitizer.bypassSecurityTrustHtml('&raquo;&nbsp;&raquo;');
    }
  }
}
