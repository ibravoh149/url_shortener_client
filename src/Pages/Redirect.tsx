import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDataStore } from "../Hooks";

export default function Redirect() {
  const params = useParams<{ hash: string }>();
  const { retrievEntry } = useDataStore();

  const performRedirect = useCallback(async () => {
    const data = await retrievEntry(params.hash as string);
    if (!data) {
      // tell them this doesn't exist
      return;
    }
   return window.location.replace(data.originalLink);
  }, []);

  useEffect(() => {
    performRedirect();
  }, [performRedirect]);

  return <div>Redirecting...</div>;
}
