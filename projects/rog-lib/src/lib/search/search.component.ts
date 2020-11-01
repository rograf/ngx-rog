import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rog-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string;
  queryDebounce: string;

  @Output() search = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }

  onQueryChange(event){
    this.queryDebounce = event;
    this.search.emit(event);
  }

}
