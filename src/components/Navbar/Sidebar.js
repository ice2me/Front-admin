import React, { useCallback, useEffect, useState } from 'react'
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { logout } from "../../redux/slices/userSlice"
import { APP_ROUTE } from "../../utils/constants"
import ArrowLeft from '../../assets/icons/sidebar/arrow-left.svg'
import ArrowRight from '../../assets/icons/sidebar/arrow-right.svg'

import {
	ReactComponent as ButtonOrangeSidebarToggle
} from "../../assets/icons/sidebar/side-menu-orange-toggle-button.svg"
import { ReactComponent as ButtonSidebarToggle } from "../../assets/icons/sidebar/side-menu-toggle-button.svg"
import { ReactComponent as ContactSupport } from "../../assets/icons/sidebar/side-menu-messages-icon.svg"
import { ReactComponent as ContactSupportOrange } from "../../assets/icons/sidebar/side-menu-messages-icon-orange.svg"
import { ReactComponent as MyProfile } from "../../assets/icons/sidebar/side-menu-profile-shop-icon.svg"
import { ReactComponent as MyProducts } from "../../assets/icons/sidebar/side-menu-product-list-icon.svg"
import { ReactComponent as Exit } from "../../assets/icons/sidebar/exit.svg"

const Sidebar = () => {
	const [toggleNavbar, setToggleNavbar] = useState(true)
	const navigate = useNavigate()
	const dispatch = useDispatch()
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

	const logoutHandler = () => {
		dispatch(logout())
		navigate(APP_ROUTE.DEFAULT)
	}

	return (
		<div className={`navbarApp ${toggleNavbar ? "hideNavbar" : ""}`}>
			<div className={`navbarApp_wrapper ${toggleNavbar ? "hideNavbar-wrapper" : ""}`}>
				<button
					className='navbarApp_eye'
					onClick={() => toggleMenuHandler('menu')}
				>
					{
						toggleNavbar ? <ButtonSidebarToggle /> : <ButtonOrangeSidebarToggle />
					}
					<img
						className={`navbarApp_eye-arrow ${toggleNavbar ? '.arrow-active': ''}`}
						src={toggleNavbar ? ArrowRight : ArrowLeft}
						alt='arrow'
					/>
				</button >
				<ul className='navbarApp_ul'>
					<li
						className={`navbarApp_item ${(location.pathname === APP_ROUTE.CATEGORIES_LIST ||
							location.pathname === APP_ROUTE.DEFAULT ||
							location.pathname === APP_ROUTE.PRODUCTS_LIST)
							? 'activeButton' : ''}`}
						onClick={() => navigate(APP_ROUTE.CATEGORIES_LIST)}
					>
					<MyProducts />
						{!toggleNavbar && <FormattedMessage id='myProducts' />}
					</li >
					<li
						className={`navbarApp_item
							${location.pathname === APP_ROUTE.PROFILE ? 'activeButton' : ''}
							`}
						onClick={() => navigate(APP_ROUTE.PROFILE)}
					>
						<MyProfile />

						{!toggleNavbar && <FormattedMessage id='myProfile' />}
					</li >
					{/*<li*/}
					{/*	className={`navbarApp_item*/}
					{/*		${location.pathname === APP_ROUTE.QR_CODE ? 'activeButton' : ''}*/}
					{/*		`}*/}
					{/*	onClick={() => navigate(APP_ROUTE.QR_CODE)}*/}
					{/*>*/}
					{/*	<img*/}
					{/*		src={qrCode}*/}
					{/*		alt='My Qr code'*/}
					{/*		title='My qr code'*/}
					{/*	/>*/}

					{/*	{!toggleNavbar && <FormattedMessage id='qrCode' />}*/}
					{/*</li >*/}

				</ul >
				<ul className='navbarApp_ul'>
					<li
						className={`navbarApp_item
							${location.pathname === APP_ROUTE.CONTACT_SUPPORT ? 'activeButton' : ''}
							`}
						onClick={() => navigate(APP_ROUTE.CONTACT_SUPPORT)}
					>
						<ContactSupport />
						{!toggleNavbar && <FormattedMessage id='contactSupport' />}
					</li >
					<li
						className={`navbarApp_item`}
						onClick={logoutHandler}
					>
						<Exit />
						{!toggleNavbar ? 'Вихiд' : ''}
					</li >
				</ul >
			</div >
		</div >
	)
}

export default Sidebar