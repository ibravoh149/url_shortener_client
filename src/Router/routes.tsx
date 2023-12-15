import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home";
const Home = React.lazy(() => import("../Pages/Home"));
const Redirect = React.lazy(() => import("../Pages/Redirect"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:hash",
    element: <Redirect />,
  },
]);

export default router;
