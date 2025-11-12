import { ThemeProvider } from "@/components/providers/theme-provider"
import { I18nextProvider } from "react-i18next"
import { RouterProvider } from "react-router/dom"
import { router } from "./routes"
import i18n from "./utils/i18n"

export default function App() {
	return (
		<div>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<I18nextProvider i18n={i18n} defaultNS={"translation"}>
					<RouterProvider router={router} />
				</I18nextProvider>
			</ThemeProvider>
		</div>
	)
}
