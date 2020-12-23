import { RgTableOptions } from './_models/RgTableOptions.interface';

import { Inject, Injectable, Optional } from '@angular/core';

const defaultOptions: RgTableOptions = {
  paginator: true,
  pageSize: 10,
  actionCell: '_actions',
  delay: 0,
  title: null,
  height: null,
  search: false,
  itemSize: null,
  listItemSize: null,
  searchText: null,
  listBreakpoint: 0,
  virtualScroll: false,
  emitPageOutput: event=>event,
}

@Injectable()
export class TableService {

  options = defaultOptions;

  constructor(@Optional() @Inject('tableConfig') tableConfig:RgTableOptions) {
    if (tableConfig) {
      this.options = {...defaultOptions, ...tableConfig}
     }
  }

}
