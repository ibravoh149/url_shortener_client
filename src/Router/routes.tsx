import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home";
const Home= React.lazy(()=>import("../Pages/Home"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
