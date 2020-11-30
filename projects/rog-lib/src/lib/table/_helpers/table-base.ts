import { RogSortByPipe } from './../../_core/rog-sort-by.pipe';
import { getDescendantProp } from './../../_core/utils';
import { SYMBOL_TO_REVERSE } from './../../_core/variables';

const sortBy: RogSortByPipe = new RogSortByPipe();

export class TableBase {

  getDescendantProp = getDescendantProp;

  setQueryParams

  params;
  options;
  headers;
  rows;
  customTemplate;
  actionsTemplate;

  onChangePage(event){
    console.log(event)
    this.setQueryParams();
  }

  onChangeSorting(column){
    if(this.params.sort === column){
      this.params.sort = SYMBOL_TO_REVERSE + column
    } else {
      this.params.sort = column;
    }
    this.rows = [...sortBy.transform(this.rows, this.params.sort)]
    this.setQueryParams();
  }

}
