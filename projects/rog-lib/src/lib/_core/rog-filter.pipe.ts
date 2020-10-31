import { getDescendantProp } from './utils';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'rogFilter',
})
export class RogFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string, filters: string[]): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    const filteredItems = [];

    const getKeys = (arr, obj, prefix?)=> {
      for(var key in obj) {
        if(typeof obj[key] === 'string'){
          if(prefix){
            arr.push(prefix + '.' + key);
          } else {
            arr.push(key);
          }
        } else if(typeof obj[key] === 'object'){
          getKeys(arr, obj[key], key)
        }
      }
    }

    items.forEach((item) => {
      if(typeof item === 'string'){
        if (item !== null && typeof item === 'string' && item.toLowerCase().includes(searchText)) {
          filteredItems.push(item);
        }
      } else {
        if(!filters){
          filters = []
          getKeys(filters, item)
        }
        filters.forEach((filter) => {
          if(filter.includes(".")){
            if (getDescendantProp(item, filter) !== null && typeof getDescendantProp(item, filter) === 'string' && getDescendantProp(item, filter).toLowerCase().includes(searchText)){
              filteredItems.push(item);
            }
          } else if (item[filter] !== null && typeof item[filter] === 'string' && item[filter].toLowerCase().includes(searchText)) {
            filteredItems.push(item);
          }
        });
      }
    });
    return filteredItems;
  }
}
