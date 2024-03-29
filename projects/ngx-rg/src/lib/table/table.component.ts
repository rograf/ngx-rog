import { RgConfigService } from './../_core/rg-config.service';
import { TableService } from './table.service';
import { TableVsComponent } from './table-vs/table-vs.component';
import { ListVsComponent } from './list-vs/list-vs.component';
import { ListPagComponent } from './list-pag/list-pag.component';
import { TablePagComponent } from './table-pag/table-pag.component';
import { SearchComponent } from './../search/search.component';
import { RgSortByPipe } from '../_core/rg-sort-by.pipe';
import { RgFilterPipe } from '../_core/rg-filter.pipe';
import { RgTemplateDirective } from '../_core/rg-template.directive';
import {
  Component,
  ComponentFactoryResolver,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'rg-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  private _rows: any[] = [];
  private _options = this.service.options;
  private _length: string;

  @ViewChild('search') search: SearchComponent;
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;


  @Output() page = new EventEmitter();
  @Input() headers: any[] = [];
  @Input() name: string;

  @Input() set rows(value) {
    this._rows = value;
    if(this.componentRef?.instance){
      this.componentRef.instance.rows = value;
    }
  }
  get rows() {
    return this._rows;
  }

  @Input() set length(value) {
    this._length = value;
    if(this.componentRef?.instance){
      if(!this.options.delay && value){
        this.options.delay = 500;
        this.componentRef.instance.options.delay = this.options.delay;
      }
      this.componentRef.instance.length = value;
    }
  }
  get length() {
    return this._length;
  }

  @Input() set options(value) {
    this._options = { ...this.options, ...value };
    if(!this.params.sort && this.options.defaultSorting){
      this.params.sort = this.options.defaultSorting;
    }
    if(this.componentRef?.instance){
      this.componentRef.instance.options = this._options;
    }
  }
  get options() {
    return this._options;
  }

  params = {
    sort: null,
    page: null,
    query: null,
  };

  customTemplate: any = {};
  componentRef;
  isTable = true;
  lastParams;

  @ContentChildren(RgTemplateDirective)
  tableCellTemplate: QueryList<RgTemplateDirective>;

  constructor(
    private service: TableService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private el:ElementRef,
    private filter: RgFilterPipe,
    private resolver: ComponentFactoryResolver,
    private sortBy: RgSortByPipe
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
    this.isTable = this.el.nativeElement.offsetWidth > this._options.listBreakpoint;
    if(this.isTable && this.container.element?.nativeElement?.nextSibling?.tagName?.includes('TABLE')){
      return false;
    } else if(!this.isTable && this.container.element?.nativeElement?.nextSibling?.tagName?.includes('LIST')){
      return false;
    }
    this.container.clear();
    let factory;
    if (this.isTable) {
      if(this.options.virtualScroll){
        factory = this.resolver.resolveComponentFactory(TableVsComponent);
      } else {
        factory = this.resolver.resolveComponentFactory(TablePagComponent);
      }
    } else {
      if(this.options.virtualScroll){
        factory = this.resolver.resolveComponentFactory(ListVsComponent);
      } else {
        factory = this.resolver.resolveComponentFactory(ListPagComponent);
      }
    }
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.params = this.params;
    this.componentRef.instance.options = this.options;
    this.componentRef.instance.headers = this.headers;
    this.componentRef.instance.length = this.length;
    this.componentRef.instance.rows = this.rows;
    this.componentRef.instance.customTemplate = this.customTemplate;
    this.componentRef.instance.setQueryParams = this.setQueryParams.bind(this);
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
            // let rows = this.filter.transform(this.rows, this.params.query);
            // if(this.params.sort){
            //   rows = this.sortBy.transform(rows, this.params.sort)
            // }
            // this.componentRef.instance.rows = rows;

            // this.search.queryDebounce = params.query;
            // this.displayRows = this.filter.transform(this.rows, params.query)
          }

          if(params.sort){
            this.params.sort = params.sort;
          }

          if(params.page){
            this.params.page = params.page;
          }

        }
        this.emitPage();
    });
  }

  generateParams() {
    return {
      ...(this.params.page && { page: this.params.page }),
      ...(this.params.sort && { sort: this.params.sort }),
      ...(this.params.query && { query: this.params.query }),
    };
  }

  setQueryParams(emit = true){
    const queryParams = {[this.name]: JSON.stringify(this.generateParams())};
    if(emit){
      this.emitPage();
    }
    this.router.navigate([],{queryParams, relativeTo: this.activatedRoute, queryParamsHandling: 'merge', replaceUrl: true})
  }

  emitPage(){
    const params = {pageSize: this.options.pageSize, page: 1, ...this.generateParams()};
    if(JSON.stringify(params) !== JSON.stringify(this.lastParams)){
      this.lastParams = params;
      this.page.emit(this.service.options.emitPageOutput(params));
    }
  }

  onChangeSearch(query) {
    if(query !== this.params.query){
      this.params.page = 1;
      this.params.query = query;
    }
    let rows = this.filter.transform(this.rows, query);
    if(this.params.sort){
      rows = this.sortBy.transform(rows, this.params.sort)
    }
    this.componentRef.instance.rows = rows;
    this.setQueryParams();
  }
}
