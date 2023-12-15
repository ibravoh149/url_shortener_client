import { initialState } from "./helpers";
import { Action, ActionTypes } from "./types";

export const Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_ENTRY:
      return [action.payload, ...state];
    case ActionTypes.INITIALIZE:
      return [...action.payload];
    default:
      return state;
  }
};
