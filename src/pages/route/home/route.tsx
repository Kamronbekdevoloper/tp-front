import { lazy } from "react";
import type { RouteObject } from "react-router";
const Home = lazy(() => import("./home"));

export const HomeRoute: RouteObject[] = [
  {
    path: "",
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
