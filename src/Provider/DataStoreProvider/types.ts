import { ListURL } from "../../Compoents";

export type DataStore = ListURL;

export enum ActionTypes {
  ADD_ENTRY = "ADD_ENTRY",
  SEARCH_ENTRY = "SEARCH_ENTRY",
}
export type Action = {
  type: keyof typeof ActionTypes;
  payload: any;
};
