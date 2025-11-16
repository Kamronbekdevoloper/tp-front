import { lazy } from "react";
import type { RouteObject } from "react-router";
const Hero = lazy(() => import("./hero"));

export const HiRoute: RouteObject[] = [
  {
    path: "",
    children: [
      {
        index: true,
        element: <Hero customClass="mt-[10px]" />,
      },
    ],
  },
];
