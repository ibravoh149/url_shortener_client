import React from "react";
import { DataProviderContext } from "../Provider/DataStoreProvider";
import { usePaginate } from ".";
import { DataStore } from "../Provider/DataStoreProvider/types";
const useDataStore = () => {
  const { state, dispatch } = React.useContext(DataProviderContext);
  const { paginate } = usePaginate<DataStore>();

  const addEntry = () => {};

  const searchEntry = () => {};

  const trackEntryClicks = (id: string) => {};

  const getEntries = (page: number, size: number) => {
    return paginate({ list: state, pageNumber: page, perPage: size });
  };

  return { addEntry, searchEntry, trackEntryClicks, getEntries, state };
};
export default useDataStore;
