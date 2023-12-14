import { formatDate } from "../../utils";
import { DataStore } from "./types";

export const initialState: DataStore[] = [
  {
    shortLink: "https:shortened.com/jikjo",
    originalLink: "https:original 1.com/jikjo",
    clicks: 1,
    date: formatDate(new Date().toISOString()),
    id: Math.floor(Math.random() * 100).toString(),
  },

  {
    shortLink: "https:shortened 2.com/jikjo",
    originalLink: "https:original 2.com/jikjo",
    clicks: 2,
    date: formatDate(new Date().toISOString()),
    id: Math.floor(Math.random() * 100).toString(),
  },

  {
    shortLink: "https:shortened 3.com/jikjo",
    originalLink: "https:original 3.com/jikjo",
    clicks: 3,
    date: formatDate(new Date().toISOString()),
    id: Math.floor(Math.random() * 100).toString(),
  },
];
