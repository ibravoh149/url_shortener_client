import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home";k
const Home = React.lazy(() => import("../Pages/Home"));
const Redirect = React.lazy(() => import("../Pages/Redirect"));
const ErrorPage = React.lazy(() => import("../Pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:hash",
    element: <Redirect />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
