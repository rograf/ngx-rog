export interface RgTableHeader {
  key: string;
  displayName: string;
  type?: 'array' | 'number' | 'date';
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  listWidth?: string;
}
