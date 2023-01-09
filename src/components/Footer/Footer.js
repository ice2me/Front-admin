import React from 'react'
import { APP_ROUTE } from "../../utils/constants"
import myProducts from "../../assets/icons/note-list-icon.svg"
import myProfile from "../../assets/icons/profile-icon.svg"
import contactSupport from "../../assets/icons/contact-support-icon.svg"
import exit from "../../assets/icons/logout.svg"
import { logout } from "../../redux/slices/userSlice"
import { toast } from "react-toastify"
import {
	useLocation,
	useNavigate
} from "react-router-dom"
import { useDispatch } from "react-redux"

const Footer = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const location = useLocation()

	const logoutHandler = () => {
		dispatch(logout())
		navigate(APP_ROUTE.LOGIN)
		toast('Your exit')
	}
	return (
		<ul className="header-right">
			<li className="header-right_item">
				<button
					onClick={logoutHandler}
					className="header-right_item-link"
				>
					<img
						src={exit}
						alt="exit"
						title="Log Out"
					/>
				</button>
			</li>
			<li className="header-right_item">
				<button
					onClick={() => navigate(APP_ROUTE.CONTACT_SUPPORT)}
					className={`header-right_item-link 
					${location.pathname === APP_ROUTE.CONTACT_SUPPORT ? 'activeButton' : '' }
					`}
				>
					<img
						src={contactSupport}
						alt="Contact Support"
						title="Contact Support"
					/>
				</button>
			</li>
			<li className="header-right_item">
				<button
					onClick={() => navigate(APP_ROUTE.CATEGORIES_LIST)}
					className={`header-right_item-link 
					${location.pathname === APP_ROUTE.CATEGORIES_LIST ? 'activeButton' : '' }
					`}
				>
					<img
						src={myProducts}
						alt="My products"
						title="My products"
					/>
				</button>
			</li>
			<li className="header-right_item">
				<button
					onClick={() => navigate(APP_ROUTE.PROFILE)}
					className={`header-right_item-link 
					${location.pathname === APP_ROUTE.PROFILE ? 'activeButton' : '' }
					`}
				>
					<img
						src={myProfile}
						alt="My Profile"
						title="My Profile"
					/>
				</button>
			</li>
		</ul>
	)
}

export default Footer