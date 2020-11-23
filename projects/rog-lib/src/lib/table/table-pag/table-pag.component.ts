import { getDescendantProp } from './../../_core/utils';
import { SYMBOL_TO_REVERSE } from './../../_core/variables';
import { TableBase } from './../_helpers/table-base';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rog-table-pag',
  templateUrl: './table-pag.component.html',
  styleUrls: ['./table-pag.component.scss']
})
export class TablePagComponent extends TableBase implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
    console.log(this.options)
  }

  getColumnClass(columnName: string){
    let className = 'r-table__header-btn--sorting';
    if(this.params.sort === columnName){
      className = className + '-asc';
    } else if (this.params.sort ===  SYMBOL_TO_REVERSE + columnName){
      className = className + '-desc';
    }
    return className
  }

}
