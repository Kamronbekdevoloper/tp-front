import { lazy } from "react"
import type { RouteObject } from "react-router"
const Hi = lazy(() => import("./hi"))

export const HiRoute: RouteObject[] = [
	{
		path: "",
		children: [
			{
				index: true,
				element: <Hi customClass="mt-[10px]" />,
			},
		],
	},
]
