import { RgTableHeader } from './../../../../../ngx-rg/src/lib/table/_models/RgTableHeaders.interface';
import { RgTableOptions } from './../../../../../ngx-rg/src/lib/table/_models/RgTableOptions.interface';
import { TableService } from './../table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-vs-server-data',
  templateUrl: './table-vs-server-data.component.html',
  styleUrls: ['./table-vs-server-data.component.scss']
})
export class TableVsServerDataComponent implements OnInit {

  constructor(
    private service:TableService
  ){
  }

  headers: RgTableHeader[] = [
    { key: 'name', displayName: 'name', sortable: true },
    { key: 'address.city', displayName: 'city', sortable: true, listWidth: 'calc(100% - 100px)' },
    { key: 'address.country', displayName: 'country', sortable: true, listWidth: '100px' },
    { key: 'roles', displayName: 'roles', type: 'array' },
    { key: 'lastLogin', displayName: 'birthday', sortable: true, type: 'date' },
    {
      key: 'verified',
      displayName: 'verified',
      sortable: true,
      type: 'boolean',
    },
    { key: 'age', displayName: 'age', type: 'number' },
  ];

  options:RgTableOptions = {pageSize: 20, virtualScroll: true, itemSize: 25, listItemSize: '350', height: '400px', defaultSorting: '-address.country'}

  rows = [];
  length = 0;

  ngOnInit(): void {
  }

  onChangePage(event) {
    if(event.page === 1){
      this.rows = [];
    }
    this.service.query({pageSize: 20, ...event}).subscribe((res)=>{
      this.length = res.total;
      this.rows = [...this.rows, ...res.list];
    })
  }

}
