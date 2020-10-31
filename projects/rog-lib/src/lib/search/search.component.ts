import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rog-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  queryDebounce: string;

  constructor() { }
  
  ngOnInit(): void {
  }

  onQueryChange(event){
    this.queryDebounce = event;
  }

}
