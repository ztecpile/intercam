import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProspectos'
})
export class FilterProspectosPipe implements PipeTransform {

  transform(items: any[], searchText: string, fieldName: string): any[] {
    if (!items) { return []; }

    if (!searchText) { return items; }

    if (searchText && searchText.length < 3) { return items; }

    searchText = searchText.toLowerCase();
    
    return items.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].toLowerCase().includes(searchText);
      }
      return false;
    });
   }

}
