import React, { useMemo, useState } from "react";
import { IPaginationChange, Table, TableColumn } from "..";
// import { formatDate } from "../../utils";
import { useDataStore } from "../../Hooks";
import { formattedTableData } from "./util";

const columns: TableColumn[] = [
  { accessor: "shortLink", value: "Short Link" },
  { accessor: "originalLink", value: "Original Link" },
  { accessor: "clicks", value: "Clicks" },
  // { accessor: "qrCode", value: "QR Code" },
  { accessor: "date", value: "Date" },
];

export default function ListUrlData() {
  const { getEntries, state } = useDataStore();
  const [paging, setPaging] = useState<IPaginationChange>({
    page: 1,
    size: 5,
    search: "",
  });
  const data = useMemo(
    () => getEntries(paging.page, paging.size as number),
    [state, paging]
  );

  return (
    <div className="w-full max-w-6xl m-auto">
      <Table
        searchClass="bg-secondary text-tableText focus:border-tableText focus:ring-0"
        column={columns}
        data={formattedTableData(data.data)}
        pagination={{
          totalPages: data.pageCount,
           onPageChange(payload) {
            setPaging(payload);
          },
        }}
      />
    </div>
  );
}
