import { PaginatorComponent } from './../paginator/paginator.component';
import { SearchComponent } from './../search/search.component';
import { RogSortByPipe } from './../_core/rog-sort-by.pipe';
import { RogFilterPipe } from './../_core/rog-filter.pipe';
import { getDescendantProp } from './../_core/utils';
import { SYMBOL_TO_REVERSE } from './../_core/variables';
import { RogTemplateDirective } from './../_core/rog-template.directive';
import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

export class TableOptions {
  paginator = true;
  pageSize = 10;
  length = 0;
  height = null;
}

@Component({
  selector: 'rog-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class RogTableComponent implements OnInit {

  private _rows: any[] = [];
  private _options = new TableOptions();

  @ViewChild('search') search: SearchComponent;
  @ViewChild('paginator') paginator: PaginatorComponent;

  @Output() page = new EventEmitter();
  @Input() headers: any[] = [];
  @Input() name: string;

  @Input() set rows (value){
    this._rows = value;
    this.displayRows = value;
  }
  get rows(){
    return this._rows;
  }

  @Input() set options (value){
    this._options = {...this.options, ...value};
  }
  get options(){
    return this._options;
  }

  sortedColumn: string = null;
  displayRows = [];
  customTemplate: any = {};
  tableActionsTemplate: any;

  @ContentChildren(RogTemplateDirective) tableCellTemplate: QueryList<RogTemplateDirective>;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private filter:RogFilterPipe,
    private sortBy:RogSortByPipe,
  ) { }

  ngOnInit(): void {
    this.name = this.name || this.generateName();
  }

  getDescendantProp = getDescendantProp;

  generateName(){
    return this.headers.map(v=>v.key).join("-").split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0).toString();
  }

  ngAfterContentInit(): void {
    this.tableCellTemplate.forEach((template) => {
      this.customTemplate[template.key] = template.template;
    });

    setTimeout(()=>{

      const params =  JSON.parse(this.activatedRoute.snapshot?.queryParams[this.name] || null);
      
      if(params){

        if(params.query){
          this.search.queryDebounce = params.query;
          this.displayRows = this.filter.transform(this.rows, params.query)
        }

        if(params.sort){
          this.sortedColumn = params.sort;
          this.displayRows = this.sortBy.transform(this.displayRows, this.sortedColumn)
        }

        if(params.page){
          this.paginator.currentPage = params.page;
          this.paginator.calculateIndex();
        }

      }

    })

  }


  getColumnClass(columnName: string){
    let className = 'r-table__header-btn--sorting';
    if(this.sortedColumn === columnName){
      className = className + '-asc';
    } else if (this.sortedColumn ===  SYMBOL_TO_REVERSE + columnName){
      className = className + '-desc';
    }
    return className
  }

  generateParams() {
    return {
      ...(this.sortedColumn && {sort: this.sortedColumn}),
      ...(this.paginator?.currentPage && {page: this.paginator.currentPage}),
      ...(this.search?.query && {query: this.search.query}),
    };
  }

  setQueryParams(){
    const queryParams = {[this.name]: JSON.stringify(this.generateParams())};
    this.router.navigate([],{queryParams, relativeTo: this.activatedRoute, queryParamsHandling: 'merge', replaceUrl: true})
  }

  onChangePage(event){
    this.setQueryParams();
  }

  onChangeSorting(column){
    if(this.sortedColumn === column){
      this.sortedColumn = SYMBOL_TO_REVERSE + column
    } else {
      // if(this.sortedColumn && this.sortedColumn.startsWith(SYMBOL_TO_REVERSE)){
      //   this.sortedColumn = SYMBOL_TO_REVERSE + column
      // } else {
        this.sortedColumn = column;
      // }
    }
    this.displayRows = this.sortBy.transform(this.displayRows, this.sortedColumn)
    this.setQueryParams();
  }

  onChangeSearch(query){

    this.paginator.currentPage = 1;
    this.paginator.calculateIndex();

    let rows = this.filter.transform(this.rows, query);

    if(this.sortedColumn){
      rows = this.sortBy.transform(rows, this.sortedColumn)
    }

    this.displayRows = rows;
    this.setQueryParams();

  }

  
}
