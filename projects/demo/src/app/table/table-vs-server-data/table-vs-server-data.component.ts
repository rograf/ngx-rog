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

  headers = [
    { key: 'name', displayName: 'name', sorting: true },
    { key: 'address.city', displayName: 'city', sorting: true, widthList: 'calc(100% - 100px)' },
    { key: 'address.country', displayName: 'country', sorting: true, widthList: '100px' },
    { key: 'roles', displayName: 'roles', type: 'array' },
    { key: 'lastLogin', displayName: 'birthday', sorting: true, type: 'date' },
    {
      key: 'verified',
      displayName: 'verified',
      sorting: true,
      type: 'boolean',
    },
    { key: 'age', displayName: 'age', type: 'number' },
  ];

  options:any = {pageSize: 20, virtualScroll: true, itemSize: 25, itemSizeVS: '350', height: '400px'}

  rows = [];
  length = 0;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.query({pageSize: 20, page: 0}).subscribe((res)=>{
      this.length = res.total;
      this.rows = res.list;
    })
  }

  onChangePage(event) {
    this.service.query({pageSize: 20, ...event}).subscribe((res)=>{
      this.rows = [...this.rows, ...res.list];
    })
  }

}
