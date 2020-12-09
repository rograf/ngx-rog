import { RgSortByPipe } from '../../_core/rg-sort-by.pipe';
import { getDescendantProp } from './../../_core/utils';
import { SYMBOL_TO_REVERSE } from './../../_core/variables';

const sortBy: RgSortByPipe = new RgSortByPipe();

export abstract class TableBase {

  constructor(){

  }

  getDescendantProp = getDescendantProp;

  setQueryParams

  params;
  options;
  headers;
  length;
  _rows = []

  get rows() {
    return this._rows;
  }

  set rows(value) {
    if(this.params.sort && !this.length){
      this._rows = [...sortBy.transform(value, this.params.sort)]
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
    let propagationAction = true;
    if(this.params.page){
      if(this.params.page !== 1){
        propagationAction = false;
      }
      this.params.page = 1;
    }
    if(this.params.sort === column){
      this.params.sort = SYMBOL_TO_REVERSE + column
    } else {
      this.params.sort = column;
    }
    if(!this.length){
      this.rows = [...sortBy.transform(this.rows, this.params.sort)]
    }
    if(propagationAction){
      this.setQueryParams();
    }
  }

}
