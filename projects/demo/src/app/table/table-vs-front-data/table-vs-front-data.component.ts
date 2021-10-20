import { TableService } from './../table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-vs-front-data',
  templateUrl: './table-vs-front-data.component.html',
  styleUrls: ['./table-vs-front-data.component.scss']
})
export class TableVsFrontDataComponent implements OnInit {

  constructor(
    private service:TableService
  ){
  }

  headers = [
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

  rows = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.service.query().subscribe((res)=>{
      this.rows = res.list;
    })
  }

}
