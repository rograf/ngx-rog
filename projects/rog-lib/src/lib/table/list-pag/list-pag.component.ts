import { TableBase } from './../_helpers/table-base';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rog-list-pag',
  templateUrl: './list-pag.component.html',
  styleUrls: ['./list-pag.component.scss']
})
export class ListPagComponent extends TableBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
