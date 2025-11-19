import { createBrowserRouter } from "react-router";
import DefaultLayout from "./components/layout/default-layout";
import { HomeRoute } from "./pages/route/home/route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [...HomeRoute],
  },
]);
