import { ListURL } from "../../Compoents";

export type DataStore = ListURL;

export enum ActionTypes {
  ADD_ENTRY = "ADD_ENTRY",
  INITIALIZE="INITIALIZE"
}
export type Action = {
  type: keyof typeof ActionTypes;
  payload: any;
};
