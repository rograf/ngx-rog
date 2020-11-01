import { getDescendantProp } from './utils';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'rogFilter',
})
export class RogFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, filters?: string[]): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    const filteredItems = [];

    const getKeys = (arr, obj, prefix?) => {
      for (var key in obj) {
        if (typeof obj[key] === 'string') {
          if (prefix) {
            arr.push(prefix + '.' + key);
          } else {
            arr.push(key);
          }
        } else if (typeof obj[key] === 'object') {
          getKeys(arr, obj[key], key);
        }
      }
    };

    items.forEach((item) => {
      if (typeof item === 'string') {
        if (
          item !== null &&
          typeof item === 'string' &&
          item.toLowerCase().includes(searchText)
        ) {
          filteredItems.push(item);
        }
      } else {
        if (!filters) {
          filters = [];
          getKeys(filters, item);
        }

        for (let i = 0, l = filters.length; i < l; i++) {
          if (
            getDescendantProp(item, filters[i]) !== null &&
            typeof getDescendantProp(item, filters[i]) === 'string' &&
            getDescendantProp(item, filters[i])
              .toLowerCase()
              .includes(searchText)
          ) {
            filteredItems.push(item);
          }
          return false;
        }
      }
    });
    return filteredItems;
  }
}
