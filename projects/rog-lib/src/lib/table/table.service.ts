
import { Inject, Injectable, Optional } from '@angular/core';

export class ITableOptions {
  paginator?: boolean;
  pageSize?: number;
  delay?: number;
  height?: string;
  listBreakPoint?: number;
  virtualScroll?: boolean;
}

export class TableOptions {
  paginator = true;
  pageSize = 10;
  delay = 0;
  height = null;
  listBreakPoint = 800;
  virtualScroll = false;
}

@Injectable()
export class TableService {

  options = new TableOptions();

  constructor(@Inject('config') config:ITableOptions) {
    if (config) {
      this.options = {...this.options, ...config}
     }
  }


}
