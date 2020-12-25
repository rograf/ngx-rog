import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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
    this.generateRows();
  }

  onChangePage($event) {}

  generateRows() {
    const rows = [];
    for (let i = 0; i < 1000; i++) {
      rows.push({
        id: 1,
        name: faker.name.findName(),
        address: {
          city: faker.address.county(),
          country: faker.address.countryCode(),
        },
        roles: faker.random.boolean()? ['ADMIN, USER']: ['USER'],
        lastLogin: faker.date.past(),
        verified: faker.random.boolean(),
      });
    }
    this.rows = rows;
  }

}
