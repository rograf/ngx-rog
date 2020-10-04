import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  headers = [
    { key: 'name', displayName: 'name', sorting: true },
    { key: 'address.city', displayName: 'city', sorting: true },
    { key: 'address.country', displayName: 'country', sorting: true },
    { key: 'roles', displayName: 'roles', type: 'array'},
    { key: 'lastLogin', displayName: 'birthday', sorting: true, type: 'date' },
    { key: 'verified', displayName: 'verified', sorting: true, type: 'boolean' },
    { key: 'age', displayName: 'age', type: 'number'},
  ];

  rows = [
    {id: 1, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 2, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 3, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(), verified: true},
    {id: 4, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 5, name: 'Lukas', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 6, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
  ]

  onChangePage($event){

  }

}
