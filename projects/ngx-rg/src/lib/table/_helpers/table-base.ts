import { RgTableOptions } from './../_models/RgTableOptions.interface';
import { RgConfigService } from './../../_core/rg-config.service';
import { RgSortByPipe } from '../../_core/rg-sort-by.pipe';
import { getDescendantProp } from './../../_core/utils';


export abstract class TableBase {

  sortBy: RgSortByPipe = new RgSortByPipe();

  SYMBOL_TO_REVERSE =  RgConfigService.instance.config.symbolToReverse;

  constructor(){

  }
  

  getDescendantProp = getDescendantProp;

  setQueryParams

  params;
  options: RgTableOptions;
  headers;
  length;
  _rows = []

  get rows() {
    return this._rows;
  }

  set rows(value) {
    if(this.params.sort && !this.length){
      this._rows = [...this.sortBy.transform(value, this.params.sort)]
    } else {
      this._rows = value;
    }
  }
  customTemplate;

  onChangePage(event){
    this.params.page = event.currentPage + 1;
    this.setQueryParams();
  }

  onChangeSorting(column){
    if(this.params.page){
      this.params.page = 1;
    }
    if(this.params.sort === column){
      this.params.sort = this.SYMBOL_TO_REVERSE + column
    } else {
      this.params.sort = column;
    }
    if(!this.length){
      this.rows = [...this.sortBy.transform(this.rows, this.params.sort)]
    }
    this.setQueryParams();
  }

}
