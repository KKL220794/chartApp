import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Array<any>, filter: {key: any }): Array<any> {
      return items.filter(item => {
          const notMatchingField = Object.keys(filter)
          .find(key => item[key] !== filter[key]);

          return !notMatchingField; // true if matches all fields
      });
  }
}
