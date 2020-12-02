import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() {
    this.generateRows();
  }

  rows = [];

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

  query(options:any = {}){
    let rows = [...this.rows];
    if(options.pageSize){
      rows = rows.slice(options.page || 0,options.pageSize + options.page || 0)
    }
    return of({list:rows,total:this.rows.length})
  }

}
