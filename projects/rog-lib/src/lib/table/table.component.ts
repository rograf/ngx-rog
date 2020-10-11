import { getDescendantProp } from './../_core/utils';
import { SYMBOL_TO_REVERSE } from './../_core/variables';
import { RogTemplateDirective } from './../_core/rog-template.directive';
import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';

@Component({
  selector: 'rog-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class RogTableComponent implements OnInit {

  private _rows: any[] = [];
  sortedColumn: string = null;

  customTemplate: any = {};
  tableActionsTemplate;

  @Input() set rows (value){
    this._rows = value;
  }
  get rows(){
    return this._rows;
  }

  @Input() headers: any[] = [];
  @Output() page = new EventEmitter();

  @ContentChildren(RogTemplateDirective) tableCellTemplate: QueryList<RogTemplateDirective>;


  constructor() { }

  ngOnInit(): void {
  }

  getDescendantProp = getDescendantProp;

  ngAfterContentInit(): void {
    this.tableCellTemplate.forEach((template) => {
      this.customTemplate[template.key] = template.template;
    });
  }

  setSorting(column){
    if(this.sortedColumn === column){
      this.sortedColumn = SYMBOL_TO_REVERSE + column
    } else {
      // if(this.sortedColumn && this.sortedColumn.startsWith(SYMBOL_TO_REVERSE)){
      //   this.sortedColumn = SYMBOL_TO_REVERSE + column
      // } else {
        this.sortedColumn = column;
      // }
    }
  }

  getColumnClass(columnName: string){
    let className = 'r-table__header--sorting';
    if(this.sortedColumn === columnName){
      className = className + '-asc';
    } else if (this.sortedColumn ===  SYMBOL_TO_REVERSE + columnName){
      className = className + '-desc';
    }
    return className
  }
  
}
