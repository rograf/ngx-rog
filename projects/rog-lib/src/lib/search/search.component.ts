import { SearchService } from './search.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'rog-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() query: string;
  @Input() placeholder: string;
  queryDebounce: string;

  @Output() search = new EventEmitter();

  options = this.service.options;

  constructor(
    private service:SearchService
  ) { }
  
  ngOnInit(): void {
  }

  onQueryChange(event){
    this.queryDebounce = event;
    this.search.emit(event);
  }

}
