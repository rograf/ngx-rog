import { TableBase } from './../_helpers/table-base';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rg-table-pag',
  templateUrl: './table-pag.component.html',
  styleUrls: ['./table-pag.component.scss']
})
export class TablePagComponent extends TableBase implements OnInit {

  constructor(
  ) {
    super()
  }

  ngOnInit(): void {
  }

  getColumnClass(columnName: string){
    let className = 'rg-table__header-btn--sorting';
    if(this.params.sort === columnName){
      className = className + '-asc';
    } else if (this.params.sort ===  this.SYMBOL_TO_REVERSE + columnName){
      className = className + '-desc';
    }
    return className
  }

}
