import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Luigi } from "./Luigi";
import { Mario } from "./Mario";
import Profile from "./Profile";
import { DafaultProfile } from "./DafaultProfile";
import { ErrorPage } from "./ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage />, },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  {
    path: "/profile/:name",
    element: <Profile />,
    children: [
      { index: true, element: <DafaultProfile /> },
      { path: "mario", element: <Mario /> },
      { path: "luigi", element: <Luigi /> },
    ],
  },
]);

export default router;
