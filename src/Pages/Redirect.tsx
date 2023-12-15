import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDataStore } from "../Hooks";
import { SpinnerLoader } from "../Compoents";

export default function Redirect() {
  const params = useParams<{ hash: string }>();
  const { retrievEntry } = useDataStore();
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(true);

  const performRedirect = useCallback(async () => {
    const data = await retrievEntry(params.hash as string);
    if (!data) {
      // tell them this doesn't exist
      setLoading(false);
      setInvalid(true);
      return;
    }
    return window.location.replace(data.originalLink);
  }, []);

  useEffect(() => {
    performRedirect();
  }, [performRedirect]);

  return (
    <div className="bg-tetiary h-screen flex items-center justify-center w-full">
      {loading && <SpinnerLoader />}
      {invalid && (
        <h3 className="text-transparent text-4xl min-h-[3.5rem] my-4 font-bold text-center">
          <span className="bg-gradient-to-br from-[#144EE3] to-[#EB568E] bg-clip-text">
            Oops! The Url
          </span>{" "}
          <span className="text-[#EB568E] bg-clip-text">appears to be</span>{" "}
          <span className="bg-gradient-to-br to-[#144EE3] from-[#EB568E] bg-clip-text">
            malformed or incorrect :)
          </span>
          <br />
          <Link to="/" replace className="text-pink-300 text-sm underline">
            Visit home
          </Link>
        </h3>
      )}
    </div>
  );
}
