import { RogSortByPipe } from './../../_core/rog-sort-by.pipe';
import { getDescendantProp } from './../../_core/utils';
import { SYMBOL_TO_REVERSE } from './../../_core/variables';

const sortBy: RogSortByPipe = new RogSortByPipe();

export abstract class TableBase {

  constructor(){
    setTimeout(()=>{
      if(this.params.sort && !this.options.length){
        this.rows = [...sortBy.transform(this.rows, this.params.sort)]
      }
    })
  }

  getDescendantProp = getDescendantProp;

  setQueryParams

  params;
  options;
  headers;
  _rows = []

  get rows() {
    return this._rows;
  }

  set rows(value) {
    this._rows = value;
  }
  customTemplate;

  onChangePage(event){
    this.params.page = event.currentPage + 1;
    this.setQueryParams();
  }

  onChangeSorting(column){
    if(this.params.sort === column){
      this.params.sort = SYMBOL_TO_REVERSE + column
    } else {
      this.params.sort = column;
    }
    if(!this.options.length){
      this.rows = [...sortBy.transform(this.rows, this.params.sort)]
    }
    this.setQueryParams();
  }

}
