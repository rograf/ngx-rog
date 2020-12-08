import { Inject, Injectable, Optional } from '@angular/core';

export interface ISearchOptions {
  placeholder?: string;
}

export class SearchOptions {
  placeholder = 'Search...';
}

@Injectable()
export class SearchService {

  options = new SearchOptions();

  constructor(@Optional() @Inject('searchConfig') searchConfig:ISearchOptions) {
    if (searchConfig) {
      this.options = {...this.options, ...searchConfig}
     }
  }

}
