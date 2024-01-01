import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../page/Home";
import NotFound from "../page/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
