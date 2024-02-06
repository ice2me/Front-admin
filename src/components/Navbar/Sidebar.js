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
import { ReactComponent as Qr } from "../../assets/icons/header/qr-header-icon.svg"

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
		<>
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
							className={`navbarApp_eye-arrow ${toggleNavbar ? '.arrow-active' : ''}`}
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
							<span className={`navbarApp_item-text ${toggleNavbar ? 'title-min' : ''}`}>{
								<FormattedMessage id='myProducts' />}</span >
						</li >
						<li
							className={`navbarApp_item
								${location.pathname === APP_ROUTE.PROFILE ? 'activeButton' : ''}
								`}
							onClick={() => navigate(APP_ROUTE.PROFILE)}
						>
							<MyProfile />

							<span className={`navbarApp_item-text ${toggleNavbar ? 'title-min' : ''}`}>{
								<FormattedMessage id='myProfile' />} </span >
						</li >
						<li
							className={`navbarApp_item
								${location.pathname === APP_ROUTE.QR_CODE ? 'activeButton' : ''}
								`}
							onClick={() => navigate(APP_ROUTE.QR_CODE)}
						>
							<Qr/>

							<span className={`navbarApp_item-text ${toggleNavbar ? 'title-min' : ''}`}>{
								<FormattedMessage id='qrCode' />} </span >
						</li >
					</ul >

					<ul className='navbarApp_ul'>
						<li
							className={`navbarApp_item
								${location.pathname === APP_ROUTE.CONTACT_SUPPORT ? 'activeButton' : ''}
								`}
							onClick={() => navigate(APP_ROUTE.CONTACT_SUPPORT)}
						>
							<ContactSupport />
							<span className={`navbarApp_item-text ${toggleNavbar ? 'title-min' : ''}`}>{
								<FormattedMessage id='contactSupport' />}</span >
						</li >
						<li
							className={`navbarApp_item`}
							onClick={logoutHandler}
						>
							<Exit />
							<span className={`navbarApp_item-text ${toggleNavbar ? 'title-min' : ''}`}>{!toggleNavbar ? 'Вихiд' : ''}</span >
						</li >
					</ul >

				</div >
			</div >


			<div className='sidebar-mob'>
				<div className='sidebar-mob_wrapper'>
					<ul className='sidebar-mob_wrapper-block'>
						<li
							className='sidebar-mob_wrapper-block_item'
							onClick={logoutHandler}
						>
							<Exit className='sidebar-mob_wrapper-block_item-icon' />
							<span className={`sidebar-mob_wrapper-block_item-title`}>
								Вихiд
							</span >
						</li >
						<li
							className='sidebar-mob_wrapper-block_item'
							onClick={() => navigate(APP_ROUTE.CONTACT_SUPPORT)}
						>
							<ContactSupport className='sidebar-mob_wrapper-block_item-icon' />
							<span className={`sidebar-mob_wrapper-block_item-title`}>
								<FormattedMessage id='contactSupport' />
							</span >
						</li >
						<li
							className='sidebar-mob_wrapper-block_item'
							onClick={() => navigate(APP_ROUTE.QR_CODE)}
						>
							<Qr className='sidebar-mob_wrapper-block_item-icon' />
							<span className={`sidebar-mob_wrapper-block_item-title`}>
								<FormattedMessage id='qrCode' />
							</span >
						</li >
						<li
							className='sidebar-mob_wrapper-block_item'
							onClick={() => navigate(APP_ROUTE.PROFILE)}
						>
							<MyProfile className='sidebar-mob_wrapper-block_item-icon' />
							<span className={`sidebar-mob_wrapper-block_item-title`}>
								<FormattedMessage id='myProfile' />
							</span >
						</li >
						<li
							className='sidebar-mob_wrapper-block_item'
							onClick={() => navigate(APP_ROUTE.CATEGORIES_LIST)}
						>
							<MyProducts className='sidebar-mob_wrapper-block_item-icon' />
							<span className={`sidebar-mob_wrapper-block_item-title`}>
								<FormattedMessage id='myProducts' />
							</span >
						</li >
					</ul >
				</div >
			</div >

		</>
	)
}

export default Sidebar