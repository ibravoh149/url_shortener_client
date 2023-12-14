import { IFormatedTableData, ListURL } from "..";
import { formatDate } from "../../utils";

export const formattedTableData = (data: ListURL[]): IFormatedTableData[] => {
  return data.map((item) => ({
    shortLink: { value: item.shortLink },
    originalLink: { value: item.originalLink },
    clicks: { value: "Bond@jame.com" },
    date: { value: formatDate(new Date().toISOString()) },
  }));
};

// id?: string;
