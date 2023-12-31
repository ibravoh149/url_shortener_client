import React from "react";
import { IFormatedTableData, Image, ListURL } from "..";
import { formatDate } from "../../utils";
import CopyBox from "../Common/Copy";

export const formattedTableData = (data: ListURL[]): IFormatedTableData[] => {
  return data.map((item) => ({
    shortLink: {
      value: (
        <span className="flex items-center gap-1 cursor-pointer">
          {item.shortLink} <CopyBox text={item.shortLink} />
        </span>
      ),
    },
    originalLink: {
      value: (
        <span className="flex items-center gap-2">
          <Image src={item.originalLink} /> {item.originalLink}
        </span>
      ),
    },
    clicks: { value: item.clicks },
    date: { value: formatDate(item.date as string) },
  }));
};
