export interface RgTableOptions {
  paginator?: boolean;
  pageSize?: number;
  search?: boolean;
  searchText?: string;
  defaultSorting?: string;
  delay?: number;
  height?: string;
  title?: string;
  actionCell?: string;
  listItemSize? : number | string;
  itemSize? : number;
  listBreakpoint?: number;
  virtualScroll?: boolean;
  emitPageOutput?: Function;
}