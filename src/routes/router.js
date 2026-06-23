import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import Layout from "../pages/layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);
