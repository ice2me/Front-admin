import {
	Route,
	Routes
} from "react-router-dom"
import Category from "./views/./Category/Category"
import { APP_ROUTE } from "./utils/constants"
import Login from "./views/Login/Login"
import ContactSupport from "./views/ContactSupport/ContactSupport"
import Registration from "./views/Login/Registration"
import ProfileBuilder from "./views/Profile/ProfileBuilder"
import Home from "./views/Home/Home"
import QrCode from "./views/QrCode/QrCode"
import {
	useState,
	useEffect,
	useCallback
} from "react"
import { useSearchTagMutation } from "./redux/services/categoriesApi";
import { useSelector } from "react-redux";

export const RoutesLink = () => {
	const [toggleView, setToggleView] = useState(false)
	const [optionsSearch, setOptionsSearch] = useState([])
	const {user} = useSelector((state) => state.userStore)
	const [searchTag, {isLoading: isSearchTagLoading}] = useSearchTagMutation()
	const toggleViewHandler = (opt) => {
		if (opt === 'view') {
			setToggleView(!toggleView)
			localStorage.setItem('viewCategories', JSON.stringify({'view': !toggleView}))
		}
	}
	const getLocalStorageViewOption = useCallback(() => {
		const teh = JSON?.parse(localStorage?.getItem('viewCategories'))?.view
		setToggleView(teh)
	}, [])

	const searchTagOptions = useCallback(async () => {
		const data = await searchTag({
			id: user._id
		})
		!data.data.message && setOptionsSearch(data?.data)
	}, [user])

	useEffect(() => {
		getLocalStorageViewOption()
		searchTagOptions().then()
	}, [])

	return (
		<Routes>
			<Route
				path={APP_ROUTE.DEFAULT}
				element={<Category
					toggleViewHandler={toggleViewHandler}
					toggleView={toggleView}
					optionsSearch={optionsSearch}
					isSearchTagLoading={isSearchTagLoading}
				/>}
			/>
			<Route
				path={APP_ROUTE.ENTRY}
				element={<Category
					toggleViewHandler={toggleViewHandler}
					toggleView={toggleView}
					optionsSearch={optionsSearch}
					isSearchTagLoading={isSearchTagLoading}
				/>}
			/>
			<Route
				path={APP_ROUTE.CATEGORIES_LIST}
				element={<Category
					toggleViewHandler={toggleViewHandler}
					toggleView={toggleView}
					optionsSearch={optionsSearch}
					isSearchTagLoading={isSearchTagLoading}
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
			<Route
				path={APP_ROUTE.REGISTRATION}
				element={<Registration />}
			/>
		</Routes>
	)
}