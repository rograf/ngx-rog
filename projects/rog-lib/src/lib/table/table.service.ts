
import { Inject, Injectable, Optional } from '@angular/core';

export interface ITableOptions {
  paginator?: boolean;
  pageSize?: number;
  searchText?: string;
  searchWidth?: string;
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
  searchText = null;
  searchWidth = '15rem';
  listBreakPoint = 800;
  virtualScroll = false;
}

@Injectable()
export class TableService {

  options = new TableOptions();

  constructor(@Optional() @Inject('tableConfig') tableConfig:ITableOptions) {
    if (tableConfig) {
      this.options = {...this.options, ...tableConfig}
     }
  }

}
