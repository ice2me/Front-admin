import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import {APP_ROUTE} from "./utils/constants";
import Login from "./views/Login/Login";
import ContactSupport from "./views/ContactSupport/ContactSupport";
import ProfileBuilder from "./views/Profile/ProfileBuilder";
import ProductList from "./views/ProductList/ProductList";

export const RoutesLink = () => {
	return (
		<Routes>
			<Route path={APP_ROUTE.DEFAULT} element={<Home/>}/>
			<Route path={APP_ROUTE.ENTRY} element={<Home/>}/>
			<Route path={APP_ROUTE.CATEGORIES_LIST} element={<Home/>}/>
			<Route path={APP_ROUTE.PRODUCTS_LIST} element={<ProductList/>}/>
			<Route path={APP_ROUTE.LOGIN} element={<Login/>}/>
			<Route path={APP_ROUTE.PROFILE} element={<ProfileBuilder/>}/>
			<Route path={APP_ROUTE.CONTACT_SUPPORT} element={<ContactSupport/>}/>
		</Routes>
	)
}
export const RoutesLinkLogin = () => {
	return (
		<Routes>
			<Route path={APP_ROUTE.ENTRY} element={<Login/>}/>
			<Route path={APP_ROUTE.LOGIN} element={<Login/>}/>
		</Routes>
	)
}