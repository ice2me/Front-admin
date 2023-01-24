import React, { useState } from 'react'
import { APP_ROUTE } from "../../utils/constants"
import myProducts from "../../assets/icons/note-list-icon.svg"
import myProfile from "../../assets/icons/profile-icon.svg"
import contactSupport from "../../assets/icons/contact-support-icon.svg"
import eye from "../../assets/icons/eye.svg"
import eyeOff from "../../assets/icons/eye-blocked.svg"
import {
	useLocation,
	useNavigate
} from "react-router-dom"
import { FormattedMessage } from "react-intl";

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()

	return (
		<ul className={`navbar ${toggleNavbar ? "hideNavbar" : ""}`}>
			<button
				className='navbar_eye'
				onClick={() => setToggleNavbar(!toggleNavbar)}
			>
				<img
					src={toggleNavbar ? eyeOff : eye}
					alt="eye"
				/>
			</button>
			<li
				className={`navbar_item ${(location.pathname === APP_ROUTE.CATEGORIES_LIST ||
					location.pathname === APP_ROUTE.DEFAULT ||
					location.pathname === APP_ROUTE.PRODUCTS_LIST)
					? 'activeButton' : ''}`}
				onClick={() => navigate(APP_ROUTE.CATEGORIES_LIST)}
			>
				<img
					src={myProducts}
					alt="My products"
					title="My products"
				/>
				{!toggleNavbar && <FormattedMessage id='myProducts' />}
			</li>
			<li
				className={`navbar_item
					${location.pathname === APP_ROUTE.PROFILE ? 'activeButton' : ''}
					`}
				onClick={() => navigate(APP_ROUTE.PROFILE)}
			>
				<img
					src={myProfile}
					alt="My Profile"
					title="My Profile"
				/>

				{!toggleNavbar && <FormattedMessage id='myProfile' />}
			</li>
			<li
				className={`navbar_item
					${location.pathname === APP_ROUTE.CONTACT_SUPPORT ? 'activeButton' : ''}
					`}
				onClick={() => navigate(APP_ROUTE.CONTACT_SUPPORT)}
			>
				<img
					src={contactSupport}
					alt="Contact Support"
					title="Contact Support"
				/>
				{!toggleNavbar && <FormattedMessage id='contactSupport' />}
			</li>
		</ul>
	)
}

export default Navbar