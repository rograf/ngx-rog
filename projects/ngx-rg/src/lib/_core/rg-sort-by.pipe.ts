import { RgConfigService } from './rg-config.service';
import { Pipe, PipeTransform } from '@angular/core';
import { getDescendantProp, sortFn } from './utils';


@Pipe({ name: 'rgSortBy' })
export class RgSortByPipe implements PipeTransform {

  SYMBOL_TO_REVERSE;

  constructor(
    configService:RgConfigService = RgConfigService.instance
  ){
    this.SYMBOL_TO_REVERSE = configService?.config?.symbolToReverse
  }
  
  transform(value: any[], column: string = ''): any[] {
    
    if (!value || !column || !value.length) {
      return value;
    }

    let reverse = false;
    let sortedValue = []

    if(column.startsWith(this.SYMBOL_TO_REVERSE)){
      column = column.substring(this.SYMBOL_TO_REVERSE.length);
      reverse = true;
    }

    sortedValue = value.sort((a, b) => {
      if(column.includes(".")){
        return sortFn(getDescendantProp(a, column), getDescendantProp(b, column));
      } else {
        if(a[column] === undefined && b[column] === undefined){
          return sortFn(a, b);
        } else {
          return sortFn(a[column], b[column]);
        }
      }
    });

    if(reverse){
      return sortedValue.reverse();
    } else {
      return sortedValue;
    }

  }


}
