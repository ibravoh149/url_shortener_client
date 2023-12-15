import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Router/index.ts";
import { DataProvider } from "./Provider/DataStoreProvider/DataStoreProvider.tsx";
import { SpinnerLoader } from "./Compoents/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="bg-tetiary h-screen flex items-center justify-center">
          <SpinnerLoader />
        </div>
      }
    >
      <DataProvider>
        <RouterProvider router={routes} />
      </DataProvider>
    </Suspense>
  </React.StrictMode>
);
