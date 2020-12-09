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
    pageSize: 5,
    title: 'Users',
    searchText: 'Start typing...'
  }

  rows = [];
  length = 0;

  ngOnInit(): void {
  }

  onChangePage(event) {
    this.service.query({...event}).subscribe((res)=>{
      this.length = res.total;
      this.rows = res.list;
    })
  }


}
