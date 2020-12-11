import { TablePagComponent } from './../table-pag/table-pag.component';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'rg-table-vs',
  templateUrl: './table-vs.component.html',
  styleUrls: ['./table-vs.component.scss'],
})
export class TableVsComponent extends TablePagComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  public viewPort: CdkVirtualScrollViewport;

  headerTop = '0px';
  locked = false;
  // public get inverseTranslation(): string {
  //   if (!this.viewPort || !this.viewPort['_renderedContentTransform']) {
  //     return '0';
  //   }
    
  //   return '0'
  // }

  constructor() {
    super();
  }

  get rows() {
    return this._rows;
  }

  set rows(value) {
    setTimeout(()=>{
      if(value.length !== this._rows.length){
        this.locked = false;
      }
      if(value.length === this.length){
        this.locked = true;
      }
      this._rows = value;
      setTimeout(()=>{
        if(this.viewPort){
          this.headerTop = `-${this.viewPort.getOffsetToRenderedContentStart()}px`;
        }
      })
    })
  }

  ngOnInit(): void {
    if(!this.options.itemSize){
      throw '[TABLE] Missed itemSize in options'
    }
    if(!this.options.height){
      throw '[TABLE] Missed height in options'
    }
  }

  scroll(index){
    if(!index){
      return false;
    }
    this.headerTop = `-${this.viewPort.getOffsetToRenderedContentStart()}px`;
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
