import { Suspense } from "react"
import { Outlet } from "react-router"
import Header from "./header/mainHeader"

const DefaultLayout = () => {
	return (
		<div className="mx-20 mt-5">
			<Header />
			<Suspense fallback={<p>Yuklanmoqda...</p>}>
				<Outlet />
			</Suspense>
		</div>
	)
}
export default DefaultLayout
