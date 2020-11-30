import { ListPagComponent } from './../list-pag/list-pag.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rog-list-vs',
  templateUrl: './list-vs.component.html',
  styleUrls: ['./list-vs.component.scss']
})
export class ListVsComponent extends ListPagComponent implements OnInit {

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

}
