import {	Route, Routes } from "react-router-dom"
import Category from "./views/./Category/Category"
import {APP_ROUTE} from "./utils/constants"
import Login from "./views/Login/Login"
import ContactSupport from "./views/ContactSupport/ContactSupport"
import ProfileBuilder from "./views/Profile/ProfileBuilder"
import Home from "./views/Home/Home"
import QrCode from "./views/QrCode/QrCode"

export const RoutesLink = () => {
	return (
		<Routes>
			<Route path={APP_ROUTE.DEFAULT} element={<Category/>}/>
			<Route path={APP_ROUTE.ENTRY} element={<Category/>}/>
			<Route path={APP_ROUTE.CATEGORIES_LIST} element={<Category/>}/>
			<Route path={APP_ROUTE.PROFILE} element={<ProfileBuilder/>}/>
			<Route path={APP_ROUTE.CONTACT_SUPPORT} element={<ContactSupport/>}/>
			<Route path={APP_ROUTE.QR_CODE} element={<QrCode/>}/>
		</Routes>
	)
}
export const RoutesLinkLogin = () => {
	return (
		<Routes>
			<Route path={APP_ROUTE.ENTRY} element={<Home/>}/>
			<Route path={APP_ROUTE.LOGIN} element={<Login/>}/>
		</Routes>
	)
}