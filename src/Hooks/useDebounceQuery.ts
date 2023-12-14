import {useEffect} from "react";
import { timeout } from "../utils";
// import {} from 

 const useDebounceQuery=(fn:()=>void, dep:unknown[], ms?:number)=>{

  useEffect(()=>{
    let isCancelled= false;
    const callMethod=async()=>{
      await timeout(ms??500)
      if(!isCancelled){
        await fn();
      }
    }
    callMethod();
    return ()=>{
      isCancelled=true
    }
  },[...dep])
}
export default useDebounceQuery
