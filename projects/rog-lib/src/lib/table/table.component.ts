import { RogTemplateDirective } from './../_core/rog-template.directive';
import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';

@Component({
  selector: 'rog-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class RogTableComponent implements OnInit {

  private _rows: any[] = [];

  @Input() set rows (value){
    this._rows = value;
  }
  get rows(){
    return this._rows;
  }

  @Input() headers: any[] = [];
  @Output() page = new EventEmitter();

  customTemplate: any = {};
  tableActionsTemplate;

  @ContentChildren(RogTemplateDirective) tableCellTemplate: QueryList<RogTemplateDirective>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.tableCellTemplate.forEach((template) => {
      this.customTemplate[template.key] = template.template;
    });
  }

  setSorting(column){

  }
  

  getDescendantProp(obj, desc) {
    const arr = desc.split('.');
    while (arr.length && (obj = obj[arr.shift()])) {}
    return obj;
  }

}
