import React, {
	useCallback,
	useEffect,
	useState
} from 'react'
import { APP_ROUTE } from "../../utils/constants"
import myProducts from "../../assets/icons/note-list-icon.svg"
import myProfile from "../../assets/icons/profile-icon.svg"
import contactSupport from "../../assets/icons/contact-support-icon.svg"
import eye from "../../assets/icons/eye.svg"
import eyeOff from "../../assets/icons/eye-blocked.svg"
import qrCode from "../../assets/icons/qrCode.svg"
import {
	useLocation,
	useNavigate
} from "react-router-dom"
import { FormattedMessage } from "react-intl"

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(true)
	const navigate = useNavigate()
	const location = useLocation()
	const toggleMenuHandler = (opt) => {
		if (opt === 'menu') {
			setToggleNavbar(!toggleNavbar)
			localStorage.setItem('toggleMenu', JSON.stringify({'menu': !toggleNavbar}))
		}
	}
	const getLocalStorageMenuOption = useCallback(() => {
		const teh = JSON?.parse(localStorage?.getItem('toggleMenu'))?.menu
		setToggleNavbar(teh)
	}, [])

	useEffect(() => {
		getLocalStorageMenuOption()
	}, [])
	return (
		<ul className={`navbarApp ${toggleNavbar ? "hideNavbar" : ""}`}>
			<button
				className='navbarApp_eye'
				onClick={() => toggleMenuHandler('menu')}
			>
				<img
					src={toggleNavbar ? eyeOff : eye}
					alt="eye"
				/>
			</button>
			<li
				className={`navbarApp_item ${(location.pathname === APP_ROUTE.CATEGORIES_LIST ||
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
				className={`navbarApp_item
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
				className={`navbarApp_item
					${location.pathname === APP_ROUTE.QR_CODE ? 'activeButton' : ''}
					`}
				onClick={() => navigate(APP_ROUTE.QR_CODE)}
			>
				<img
					src={qrCode}
					alt="My Qr code"
					title="My qr code"
				/>

				{!toggleNavbar && <FormattedMessage id='qrCode' />}
			</li>
			<li
				className={`navbarApp_item
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