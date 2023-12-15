import React from "react";
import { Action, ActionTypes, DataStore } from "./types";
import { initialState } from "./helpers";
import { Reducer } from "./Reducer";
import { useDebounceQuery } from "../../Hooks";
import Service from "../../Service/Service";

export const DataProviderContext = React.createContext<{
  state: DataStore[];
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const DataProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  const memoizedState = React.useMemo(() => state, [state]);

  useDebounceQuery(()=>{
    Service.instance.loadData().then((data)=>{
      dispatch({
        type:ActionTypes.INITIALIZE,
        payload:data
      })
    }).catch((error)=>console.warn(error))
  },[])

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
