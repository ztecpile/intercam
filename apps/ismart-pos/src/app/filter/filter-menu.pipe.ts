import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {

  transform(items: any[], prefixISmart: string, fieldName: string): any[] {

    if (!items) { return []; }

    if (!prefixISmart) { return items; }

    return items.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].includes(prefixISmart);
      }
      return false;
    });
   }

}
