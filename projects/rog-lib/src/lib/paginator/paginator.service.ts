import { Inject, Injectable, Optional } from '@angular/core';

export interface IPaginatorOptions {
  labelPrevious?: string;
  labelPreposition?: string;
  labelNext?: string;
}

export class PaginatorOptions {
  labelPrevious = '';
  labelPreposition = '/';
  labelNext = '';
}

@Injectable()
export class PaginatorService {

  options = new PaginatorOptions();

  constructor(@Optional() @Inject('paginatorConfig') paginatorConfig:IPaginatorOptions) {
    if (paginatorConfig) {
      this.options = {...this.options, ...paginatorConfig}
     }
  }

}
