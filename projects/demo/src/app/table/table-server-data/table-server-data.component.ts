import { TableService } from './../table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-server-data',
  templateUrl: './table-server-data.component.html',
  styleUrls: ['./table-server-data.component.scss']
})
export class TableServerDataComponent implements OnInit {

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

  options:any = {
    pageSize: 10,
  }

  rows = [];
  length = 0;

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.query({pageSize: 10, page: 0}).subscribe((res)=>{
      this.length = res.total;
      this.rows = res.list;
    })
  }

  onChangePage(event) {
    this.service.query({pageSize: 10, ...event}).subscribe((res)=>{
      this.rows = res.list;
    })
  }


}
