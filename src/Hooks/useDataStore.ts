import React from "react";
import { DataProviderContext } from "../Provider/DataStoreProvider";
const useDataStore = () => {
  const { state, dispatch } = React.useContext(DataProviderContext);


  const addEntry=()=>{
    
  }

  const searchEntry=()=>{

  }

  const trackEntryClicks=(id:string)=>{

  }

  const getEntries=()=>{
    return state
  }

  return {addEntry, searchEntry, trackEntryClicks, getEntries}
};
export default useDataStore;
