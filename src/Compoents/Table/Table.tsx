import React from "react";
import { IFormatedTableData, PaginationRef, TableProps } from "./types";
import { useDebounce, useDebounceQuery } from "../../Hooks";
import { Input, TableRow } from "..";
import { CiSearch } from "react-icons/ci";
import { SkeletonLoader } from "../Loaders";
import { TablePagination } from "./TablePagiation";

export default function Table(props: TableProps) {
  const {
    data = [],
    column = [],
    tableBodyClass,
    loading,
    pagination,
    debounceSearchDuration = 500,
    searchClass,
    shouldDebounceSearch = true, /// debounce search by default
  } = props;

  const paginationRef = React.useRef<PaginationRef>(null);
  const [search, setSearch] = React.useState("");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (shouldDebounceSearch) {
      setSearch(e.target.value);
    } else {
      paginationRef.current?.setSearch?.(e.target.value);
    }
  };

  const debouncedValue = useDebounce(search, debounceSearchDuration);

  useDebounceQuery(() => {
    if (shouldDebounceSearch) {
      paginationRef.current?.setSearch?.(search);
    }
  }, [debouncedValue, shouldDebounceSearch]);

  return (
    <div className="mt-6 relative overflow-y-hidden">
      <div
        className={`flex w-full justify-between mb-5 sm:mb-0 flex-col md:flex-row`}
      >
        <div className="flex flex-col justify-start sm:flex-row sm:items-center">
          <div className="relative ml-0">
            <Input
              placeholder="Search item"
              type={"text"}
              className={`w-full md:min-w-[21.875rem] sm:min-w-[12rem] mt-0 bg-[#EDEDEE] text-sm !rounded ${searchClass}`}
              onChange={onSearch}
            />
              <CiSearch
                size={16}
                color="#A0A4A8"
                className="absolute top-3.5 bottom-0 right-3"
              />
          </div>
        </div>
      </div>
      <div className="w-full overflow-x-auto overflow-y-hidden mt-[18px]">
        <table className={`table-auto w-full overflow-x-auto`}>
          <thead className="bg-[#F6F8FA]">
            <tr className="px-4">
              {column.map((item, i) => {
                return (
                  <th
                    key={i}
                    className="text-left py-2.5 px-4 text-sm text-tableText items-center bg-tetiary"
                  >
                    {item.value}
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* <tbody className={`divide-y ${tableBodyClass}`}> */}
          <tbody className={`${tableBodyClass}`}>
            {!loading &&
              data.length > 0 &&
              data?.map((data: IFormatedTableData, i) => {
                return <TableRow key={i} {...data} />;
              })}
            {!loading && data.length <= 0 && (
              <tr className="w-full">
                <td className="" align="center" colSpan={column.length}>
                  <div className="flex flex-col items-center mt-5 text-center">
                    <p className="font-700 mb-[10px] mt-[10px]">
                      {props?.emptyState?.heading}
                    </p>
                    <p className="text-[#677684]">
                      {props?.emptyState?.message || "No Data"}
                    </p>
                  </div>
                </td>
              </tr>
            )}

            {loading && (
              <>
                {Array(5)
                  .fill(0)
                  .map((_, i) => {
                    return (
                      <tr className="w-full" key={i}>
                        {column.map((_, j) => {
                          return (
                            <td key={j}>
                              <SkeletonLoader skeletonClass="!h-4 my-3" />
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </>
            )}
            <tr></tr>
          </tbody>
        </table>
      </div>
      {pagination && <TablePagination ref={paginationRef} {...pagination} />}
    </div>
  );
}
