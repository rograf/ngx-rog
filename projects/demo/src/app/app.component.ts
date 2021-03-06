import { Component } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  headers = [
    { key: 'name', displayName: 'name', sorting: true },
    { key: 'address.city', displayName: 'city', sorting: true },
    { key: 'address.country', displayName: 'country', sorting: true },
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

  rows = [];

  ngOnInit(): void {
    this.generateRows();
  }

  onChangePage($event) {}

  generateRows() {
    const rows = [];
    for (let i = 0; i < 100; i++) {
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
