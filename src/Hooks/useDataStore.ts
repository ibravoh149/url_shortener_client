import React from "react";
import { DataProviderContext } from "../Provider/DataStoreProvider";
import { usePaginate } from ".";
import { ActionTypes, DataStore } from "../Provider/DataStoreProvider/types";
import { removeWhiteSpace } from "../utils/removeWhiteSpace";
import { customAlphabet, urlAlphabet } from "nanoid";
import Service from "../Service/Service";
const min_search_value_length = 3;
const useDataStore = () => {
  const { state, dispatch } = React.useContext(DataProviderContext);
  const { paginate } = usePaginate<DataStore>();

  const addEntry = (url: string) => {
    const hash = customAlphabet(urlAlphabet, 5)();
    const payload: DataStore = {
      id: hash,
      originalLink: url,
      shortLink: `${location.origin}/${hash}`,
      clicks: 0,
      date: new Date().toISOString(),
    };
    Service.instance.updateData([payload]);
    dispatch({
      type: ActionTypes.ADD_ENTRY,
      payload,
    });
  };

  const searchEntry = (string: string): DataStore[] => {
    return state.filter((entry) =>
      removeWhiteSpace(entry.originalLink)
        .toLocaleLowerCase()
        .includes(removeWhiteSpace(string).toLocaleLowerCase())
    );
  };

  const trackEntryClicks = (id: string) => {};

  const getEntries = (page: number, size: number, searchString?: string) => {
    if (searchString && searchString.length > min_search_value_length)
      return paginate({
        list: searchEntry(searchString),
        pageNumber: page,
        perPage: size,
      });
    return paginate({ list: state, pageNumber: page, perPage: size });
  };

  return { addEntry, searchEntry, trackEntryClicks, getEntries, state };
};
export default useDataStore;
