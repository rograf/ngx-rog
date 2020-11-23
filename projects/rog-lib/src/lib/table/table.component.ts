import { ListPagComponent } from './list-pag/list-pag.component';
import { TablePagComponent } from './table-pag/table-pag.component';
import { PaginatorComponent } from './../paginator/paginator.component';
import { SearchComponent } from './../search/search.component';
import { RogSortByPipe } from './../_core/rog-sort-by.pipe';
import { RogFilterPipe } from './../_core/rog-filter.pipe';
import { getDescendantProp } from './../_core/utils';
import { SYMBOL_TO_REVERSE } from './../_core/variables';
import { RogTemplateDirective } from './../_core/rog-template.directive';
import {
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SlicePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

export class TableOptions {
  paginator = true;
  pageSize = 10;
  length = 0;
  height = null;
  listBreakPoint = 800;
}

@Component({
  selector: 'rog-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class RogTableComponent implements OnInit {
  private _rows: any[] = [];
  private _options = new TableOptions();

  @ViewChild('search') search: SearchComponent;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;


  @Output() page = new EventEmitter();
  @Input() headers: any[] = [];
  @Input() name: string;

  @Input() set rows(value) {
    this._rows = value;
    this.displayRows = value;
  }
  get rows() {
    return this._rows;
  }

  @Input() set options(value) {
    this._options = { ...this.options, ...value };
  }
  get options() {
    return this._options;
  }

  params = {
    sort: null,
    page: null,
    query: null,
  };

  displayRows = [];
  customTemplate: any = {};
  actionsTemplate: any;

  @ContentChildren(RogTemplateDirective)
  tableCellTemplate: QueryList<RogTemplateDirective>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filter: RogFilterPipe,
    private resolver: ComponentFactoryResolver,
    private sortBy: RogSortByPipe
  ) {}

  ngOnInit(): void {
    this.name = this.name || this.generateName();
  }

  ngAfterViewInit() {
    
  }

  generateName() {
    return this.headers
      .map((v) => v.key)
      .join('-')
      .split('')
      .reduce((a, b) => {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      }, 0)
      .toString();
  }

  @HostListener('window:resize', [])
  createTable() {
    const isTable = window.innerWidth > this._options.listBreakPoint;
    if(isTable && this.container.element?.nativeElement?.nextSibling?.tagName?.includes('TABLE')){
      return false;
    }
    this.container.clear();
    let factory;
    if (isTable) {
      factory = this.resolver.resolveComponentFactory(TablePagComponent);
    } else {
      factory = this.resolver.resolveComponentFactory(ListPagComponent);
    }
    const componentRef: any = this.container.createComponent(factory);
    componentRef.instance.params = this.params;
    componentRef.instance.options = this.options;
    componentRef.instance.headers = this.headers;
    componentRef.instance.rows = this.rows;
    componentRef.instance.customTemplate = this.customTemplate;
    componentRef.instance.setQueryParams = this.setQueryParams.bind(this);
  }

  ngAfterContentInit(): void {
    this.tableCellTemplate.forEach((template) => {
      this.customTemplate[template.key] = template.template;
    });

    setTimeout(() => {
      this.createTable();

        const params =  JSON.parse(this.activatedRoute.snapshot?.queryParams[this.name] || null);

        if(params){

          if(params.query){
            this.params.query = params.query;
            // this.search.queryDebounce = params.query;
            // this.displayRows = this.filter.transform(this.rows, params.query)
          }

          if(params.sort){
            this.params.sort = params.sort;
            // this.displayRows = this.sortBy.transform(this.displayRows, this.params.sort)
          }

          if(params.page){
            this.params.page = params.page;
            // this.paginator.calculateIndex();
          }

        }
    });
  }

  generateParams() {
    return {
      ...(this.params.page && { page: this.params.page }),
      ...(this.params.sort && { sort: this.params.sort }),
      ...(this.params.query && { query: this.params.query }),
    };
  }

  setQueryParams(){
    const queryParams = {[this.name]: JSON.stringify(this.generateParams())};
    this.router.navigate([],{queryParams, relativeTo: this.activatedRoute, queryParamsHandling: 'merge', replaceUrl: true})
  }

  onChangeSearch(query) {
    // this.paginator.currentPage = 1;
    // this.paginator.calculateIndex();
    // let rows = this.filter.transform(this.rows, query);
    // if(this.sortedColumn){
    //   rows = this.sortBy.transform(rows, this.sortedColumn)
    // }
    // this.displayRows = rows;
    // this.setQueryParams();
  }
}
