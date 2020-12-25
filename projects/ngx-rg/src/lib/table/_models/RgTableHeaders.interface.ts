export interface RgTableHeader {
  key: string;
  displayName: string;
  type?: 'array' | 'number' | 'date' | 'boolean';
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
  listWidth?: string;
}
