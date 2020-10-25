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
    {id: 6, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 3, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
    {id: 4, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 5, name: 'Lukas', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 6, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 7, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 8, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 9, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
    {id: 10, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 11, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 12, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 16, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 13, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
    {id: 14, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 15, name: 'Lukas', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 16, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 17, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 18, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 19, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
    {id: 20, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 21, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 22, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 26, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 23, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
    {id: 24, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 25, name: 'Lukas', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 26, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 27, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 28, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 29, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
    {id: 30, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 31, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 32, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 36, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 33, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
    {id: 34, name: 'Łukasz', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 35, name: 'Lukas', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 36, name: 'Alexander', address: {city: 'Warsaw', country: 'PL'}, roles: ['ADMIN, USER'], lastLogin: new Date(), verified: true},
    {id: 37, name: 'Mike', address: {city: 'New York', country: 'US'}, roles: ['ADMIN'], lastLogin: new Date(), verified: false},
    {id: 38, name: 'Zing', address: {city: 'Berlin', country: 'DE'}, verified: false},
    {id: 39, name: 'Johnson', address: {city: 'London', country: 'UK'}, roles: ['USER'], lastLogin: new Date(0), verified: true},
  ]

  onChangePage($event){

  }

}
