import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
    console.log('params', options)
    let rows = [...this.rows];
    if(options.pageSize){
      const page = (options.page || 1) - 1
      rows = rows.slice( (options.pageSize * page),options.pageSize + (options.pageSize * page))
    }
    return of({list:rows,total:this.rows.length}).pipe(delay(500))
  }

}
