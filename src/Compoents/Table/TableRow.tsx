import React from "react";
import { TableRowProps } from "./types";

export default function TableRow(props: any) {
  const values: TableRowProps[] = Object.values(props);
  return (
    <tr>
      {values.map((value, i) => {
        return (
          <td
            key={i}
            className={`text-left py-6 px-4 text-sm text-tableText ${value.className}`}
          >
            {React.isValidElement(value.value) ? (
              value.value
            ) : (
              <span> {value.value}</span>
            )}
          </td>
        );
      })}
    </tr>
  );
}
