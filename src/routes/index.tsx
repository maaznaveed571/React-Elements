import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SidebarExamples from "../pages/SidebarExamples";
import Player from "../pages/Player";
import User from "../pages/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sidebar",
    element: <SidebarExamples />,
  },
  {
    path: "/player",
    element: <Player />,
  },
  {
    path: "/users",
    element: <User />,
  },
]);
