import React from "react";
import ReactPaginate from "react-paginate";
// import { Link, LinkProps } from "react-router-dom";
import { useState } from "react";
// import { GrNext } from "react-icons/gr";
import { PaginationProps } from "./types";
import { ISelectListItem, SelectInput } from "..";

export type PaginationRef = {
  setSearch?: (string: string) => void;
};

const pageSizeList:ISelectListItem[] = [
  { label: "5 Items per page", value: 5 },
  { label: "10 Items per page", value: 10 },
  { label: "15 Items per page", value: 15 },
  { label: "20 Items per page", value: 20 },
  { label: "25 Items per page", value: 25 },
  { label: "30 Items per page", value: 30 },
  { label: "35 Items per page", value: 35 },
  { label: "40 Items per page", value: 40 },
  { label: "45 Items per page", value: 45 },
  { label: "50 Items per page", value: 50 },
];

export const TablePagination = React.forwardRef<PaginationRef, PaginationProps>(
  (props, ref) => {
    const [activePage, setActivePage] = useState<number>(0);
    const [search, setSearch] = useState<string | null>(null);
    const [size, setSize] = useState(props.defaultPageSize || 10);

    React.useImperativeHandle(ref, () => ({
      setSearch(string) {
        setSearch(string);
        setActivePage(0);
        props.onPageChange?.({ page: 0, search: string, size });
      },
    }));

    const handlePageClick = (selectedItem: { selected: number }) => {
      props.onPageChange?.({
        page: selectedItem.selected,
        search,
        size,
      });
      onPageActive(selectedItem);
    };

    const onPageActive = (selectedItem: { selected: number }) => {
      setActivePage(selectedItem.selected);
    };

    const onSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const size = Number(e.target.value);
      setSize(size);
      props.onPageChange?.({ page: activePage, search, size });
    };

    return (
      <div className="flex-wrap items-center justify-between mt-5 mb-5 text-sm sm:flex text-textPrimary">
        {(props.totalPages as number) > 0 && (
          <ReactPaginate
            activeClassName="bg-primary text-sm text-white rounded-lg"
            pageClassName="px-2"
            className="flex justify-around overflow-x-auto text-textPrimary"
            breakLabel="..."
            nextLabel=" Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            pageCount={props.totalPages as number}
            previousLabel="Prev "
            previousClassName="mr-2"
            nextClassName="ml-2"
            forcePage={activePage}
            onPageActive={onPageActive}
          />
        )}

        <div className="flex items-center justify-end flex-1">
          <SelectInput
            options={pageSizeList}
            className="w-full px-6 m-auto text-xs bg-transparent border-0 text-vaSecondaryText"
            onChange={onSizeChange}
          />
        </div>
        <div className="flex-1"></div>
      </div>
    );
  }
);

TablePagination.displayName = "TablePagination";
