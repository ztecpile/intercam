import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {

  transform(items: any[], prefixISmart: string[], fieldNames: string[]): any[] {

    if (!items) { return []; }

    if (!prefixISmart) { return items; }

    return items.filter(item => {
      if (item && (item[fieldNames[0]] || item[fieldNames[1]])) {
        return item[fieldNames[0]].includes(prefixISmart[0]) || item[fieldNames[1]].includes(prefixISmart[1]);
      }
      return false;
    });
   }
}
