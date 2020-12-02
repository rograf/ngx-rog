import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ListPagComponent } from './../list-pag/list-pag.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'rog-list-vs',
  templateUrl: './list-vs.component.html',
  styleUrls: ['./list-vs.component.scss']
})
export class ListVsComponent extends ListPagComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport)
  public viewPort: CdkVirtualScrollViewport;

  constructor() {
    super()
  }

  ngOnInit(): void {
    if(!this.options.itemSizeVS){
      throw '[TABLE] Missed itemSizeVS in options'
    }
    if(!this.options.height){
      throw '[TABLE] Missed height in options'
    }
  }

  scroll(index){
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
