export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  key: string;          // e.g. 'types', 'tags', 'status'
  label: string;        // e.g. 'Project Type'
  options: FilterOption[];
  multi: boolean;
}

export type FilterState = {
  [key: string]: string[];
};
