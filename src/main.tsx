import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { isDOMComponent } from 'react-dom/test-utils'
import {  RouterProvider } from "react-router-dom";
import router from "./components/routes.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
