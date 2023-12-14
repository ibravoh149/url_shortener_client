import React from "react";
import { Table, TableColumn } from "..";
import { formatDate } from "../../utils";

const columns: TableColumn[] = [
  { accessor: "shortLink", value: "Short Link" },
  { accessor: "originalLink", value: "Original Link" },
  { accessor: "clicks", value: "Clicks" },
  // { accessor: "qrCode", value: "QR Code" },
  { accessor: "date", value: "Date" },
];

export default function ListUrlData() {
  return (
    <div className="w-full max-w-6xl m-auto">
      <Table
        searchClass="bg-secondary text-tableText focus:border-tableText focus:ring-0"
        column={columns}
        data={[
          {
            firstName: { value: "James" },
            lastName: { value: "Bond" },
            email: { value: "Bond@jame.com" },
            date: { value: formatDate(new Date().toISOString()) },
          },

          {
            firstName: { value: "Jame" },
            lastName: { value: "Doe" },
            email: { value: "jane@Jay.com" },
            date: { value: formatDate(new Date().toISOString()) },
          },

          {
            firstName: { value: "Blong" },
            lastName: { value: "Gist" },
            email: { value: "gist@brow.com" },
            date: { value: formatDate(new Date().toISOString()) },
          },
        ]}
      />
    </div>
  );
}
