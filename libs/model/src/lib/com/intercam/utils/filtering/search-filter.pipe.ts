import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], filterTemplate: any, properties: string[]): any {

        if (!items || !filterTemplate || !properties) {
          return items;
        }
    
        filterTemplate = filterTemplate.toLowerCase();
    
        return items.filter((data: any) => {
          let isMatch: boolean = false;
          properties.forEach((property) => {
            isMatch =
              isMatch ||
              JSON.stringify(Reflect.get(data, property))
                .toLowerCase()
                .includes(filterTemplate);
          });
          return isMatch;
        });
      
    }
}
