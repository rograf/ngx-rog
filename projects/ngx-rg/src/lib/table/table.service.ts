
import { Inject, Injectable, Optional } from '@angular/core';

export interface ITableOptions {
  paginator?: boolean;
  pageSize?: number;
  search?: boolean;
  searchText?: string;
  delay?: number;
  height?: string;
  title?: string;
  actionsCell?: string;
  listBreakPoint?: number;
  virtualScroll?: boolean;
}

export class TableOptions {
  paginator = true;
  pageSize = 10;
  actionsCell = '_actions';
  delay = 0;
  title = null;
  height = null;
  search = true;
  searchText = null;
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
