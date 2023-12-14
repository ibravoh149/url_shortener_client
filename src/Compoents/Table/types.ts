import React from "react";

export interface TableColumn {
  accessor: string;
  value: string;
}
export type TableProps = {
  data?: IFormatedTableData[];
  column?: TableColumn[];
  tableBodyClass?: string;
  emptyState?: {
    heading: string;
    message: string;
  };
  loading?: boolean;
  pagination?: PaginationProps;
  debounceSearchDuration?: number; // millisecons
  shouldDebounceSearch?: boolean;
  searchClass?:string
};

export interface TableRowProps {
  // datatype?: keyof typeof TableDataType;
  value?: string | React.ReactNode;
  className?: string;
  stringValue?: string | string[];
}

// type RowKey<T> = T;
export interface IFormatedTableData {
  [accessor: TableColumn["accessor"]]: TableRowProps;
}

export type PaginationProps = {
  onPageChange?: <T>(payload: IPaginationChange & T) => void;
  totalPages?: number;
  defaultPageSize?: number;
};

export interface IPaginationChange {
  page: number;
  search?: string | null;
  size?: number;
}

export type PaginationRef = {
  setSearch?: (string: string) => void;
};
