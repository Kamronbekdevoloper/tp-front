import { createBrowserRouter } from "react-router"
import DefaultLayout from "./components/layout/default-layout"
import { HiRoute } from "./pages/Hi/routes"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [...HiRoute],
	},
])
