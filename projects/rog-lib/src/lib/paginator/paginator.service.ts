import { Inject, Injectable, Optional } from '@angular/core';

export interface IPaginatorOptions {
  labelLeft?: string;
  labelRight?: string;
}

export class PaginatorOptions {
  labelLeft = '';
  labelRight = '';
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
