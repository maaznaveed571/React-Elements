import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SidebarExamples from "../pages/SidebarExamples";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sidebar",
    element: <SidebarExamples />,
  },
]);
