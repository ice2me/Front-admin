import {
	Route,
	Routes
} from "react-router-dom"
import Category from "./views/./Category/Category"
import { APP_ROUTE } from "./utils/constants"
import Login from "./views/Login/Login"
import ContactSupport from "./views/ContactSupport/ContactSupport"
import ProfileBuilder from "./views/Profile/ProfileBuilder"
import Home from "./views/Home/Home"
import QrCode from "./views/QrCode/QrCode"
import {
	useState,
	useEffect,
	useCallback
} from "react"

export const RoutesLink = () => {
	const [toggleView, setToggleView] = useState(false)
	const toggleViewHandler = () => {
		setToggleView(!toggleView)
		localStorage.setItem('viewCategories', JSON.stringify({'view': !toggleView}))
	}
	const getLocalStorageViewOption = useCallback(() => {
		const teh = JSON?.parse(localStorage?.getItem('viewCategories')).view
		setToggleView(teh)
	}, [])

	useEffect(() => {
		getLocalStorageViewOption()
	}, [])

	return (
		<Routes>
			<Route
				path={APP_ROUTE.DEFAULT}
				element={<Category
					toggleViewHandler={toggleViewHandler}
					toggleView={toggleView}
				/>}
			/>
			<Route
				path={APP_ROUTE.ENTRY}
				element={<Category
					toggleViewHandler={toggleViewHandler}
					toggleView={toggleView}
				/>}
			/>
			<Route
				path={APP_ROUTE.CATEGORIES_LIST}
				element={<Category
					toggleViewHandler={toggleViewHandler}
					toggleView={toggleView}
				/>}
			/>
			<Route
				path={APP_ROUTE.PROFILE}
				element={<ProfileBuilder />}
			/>
			<Route
				path={APP_ROUTE.CONTACT_SUPPORT}
				element={<ContactSupport />}
			/>
			<Route
				path={APP_ROUTE.QR_CODE}
				element={<QrCode />}
			/>
		</Routes>
	)
}
export const RoutesLinkLogin = () => {
	return (
		<Routes>
			<Route
				path={APP_ROUTE.ENTRY}
				element={<Home />}
			/>
			<Route
				path={APP_ROUTE.LOGIN}
				element={<Login />}
			/>
		</Routes>
	)
}