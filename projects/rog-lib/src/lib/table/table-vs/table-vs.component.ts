import { TablePagComponent } from './../table-pag/table-pag.component';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'rog-table-vs',
  templateUrl: './table-vs.component.html',
  styleUrls: ['./table-vs.component.scss'],
})
export class TableVsComponent extends TablePagComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport)
  public viewPort: CdkVirtualScrollViewport;

  headerTop = '0px';
  // public get inverseTranslation(): string {
  //   if (!this.viewPort || !this.viewPort['_renderedContentTransform']) {
  //     return '0';
  //   }
    
  //   return '0'
  // }

  constructor() {
    super();
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
    this.headerTop = `-${this.viewPort.getOffsetToRenderedContentStart()}px`;
    if(!!this.options.length){
      const end = this.viewPort.getRenderedRange().end;
      const total = this.viewPort.getDataLength();
      const currentPage = Math.floor(end / this.options.pageSize);
      this.params.page = currentPage;
      if(end === total && total < this.options.length){
        this.setQueryParams();
      } else {
        this.setQueryParams(false);
      }
    }
  }

}
