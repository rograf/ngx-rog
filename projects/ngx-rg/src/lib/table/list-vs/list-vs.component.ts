import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ListPagComponent } from './../list-pag/list-pag.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'rg-list-vs',
  templateUrl: './list-vs.component.html',
  styleUrls: ['./list-vs.component.scss']
})
export class ListVsComponent extends ListPagComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  public viewPort: CdkVirtualScrollViewport;

  locked = false;

  get rows() {
    return this._rows;
  }

  set rows(value) {
    if(value.length !== this._rows.length){
      this.locked = false;
    }
    if(value.length === this.length){
      this.locked = true;
    }
    this._rows = value;
  }

  constructor() {
    super()
  }

  ngOnInit(): void {
    if(!this.options.listItemSize){
      throw '[TABLE] Missed listItemSize in options'
    }
    if(!this.options.height){
      throw '[TABLE] Missed height in options'
    }
  }

  scroll(index){
    if(!index){
      return false;
    }
    if(!!this.length){
      const end = this.viewPort.getRenderedRange().end;
      const total = this.viewPort.getDataLength();
      const currentPage = Math.floor(end / this.options.pageSize);
      if(end === total && !this.locked){
        this.locked = true;
        this.params.page = currentPage + 1;
        this.setQueryParams();
      } else {
        this.params.page = currentPage;
        this.setQueryParams(false);
      }
    }
  }

}
