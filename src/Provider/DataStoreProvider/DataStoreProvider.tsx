import React, { useEffect } from "react";
import { Action, ActionTypes, DataStore } from "./types";
import { initialState } from "./helpers";
import { Reducer } from "./Reducer";
import { useDebounceQuery } from "../../Hooks";
import Service from "../../Service/Service";
import { STORE_KEY } from "../../Service/BaseService";

export const DataProviderContext = React.createContext<{
  state: DataStore[];
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const DataProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  const memoizedState = React.useMemo(() => state, [state]);

  const handleStorageUpdate = (e: StorageEvent) => {
    const { newValue, key } = e;
    if (key === STORE_KEY) {
      try {
        dispatch({
          type: ActionTypes.INITIALIZE,
          payload: JSON.parse(newValue as string),
        });
      } catch (error) {
        throw error;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("storage", handleStorageUpdate);
    return () => {
      window.removeEventListener("storage", handleStorageUpdate);
    };
  }, []);

  useDebounceQuery(() => {
    Service.instance
      .loadData()
      .then((data) => {
        dispatch({
          type: ActionTypes.INITIALIZE,
          payload: data,
        });
      })
      .catch((error) => console.warn(error));
  }, []);

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
