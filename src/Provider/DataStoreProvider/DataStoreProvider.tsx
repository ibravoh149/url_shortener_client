import React from "react";
import { Action, DataStore } from "./types";
import { initialState } from "./helpers";
import { Reducer } from "./Reducer";

export const DataProviderContext = React.createContext<{
  state: DataStore[];
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const DataProvider = ({
  children,
}: React.PropsWithChildren<React.ReactNode>) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  const memoizedState = React.useMemo(() => state, [state]);

  return (
    <DataProviderContext.Provider
      value={{
        state: memoizedState,
        dispatch,
      }}
    >
      {children}
    </DataProviderContext.Provider>
  );
};
