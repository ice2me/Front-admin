import photo from '../../assets/images/avatar-user.png'
import thekeLogo from '../../assets/images/theke-logo-white.png'
import {
	useDispatch,
	useSelector
} from "react-redux"
import { FormattedMessage } from "react-intl";
import exit from "../../assets/icons/logout.svg";
import { logout } from "../../redux/slices/userSlice";
import {
	APP_ROUTE,
	LINK_FOR_CLIENT
} from "../../utils/constants";
import { toast } from "react-toastify";
import {
	useLocation,
	useNavigate
} from "react-router-dom";
import eyeOff from "../../assets/icons/eye-blocked.svg";
import eye from "../../assets/icons/eye.svg";
import myProducts from "../../assets/icons/note-list-icon.svg";
import myProfile from "../../assets/icons/profile-icon.svg";
import contactSupport from "../../assets/icons/contact-support-icon.svg";
import React, { useState } from "react";
import {
	Container,
	Nav,
	Navbar
} from "react-bootstrap";

const Header = () => {
	const {user} = useSelector((state) => state.userStore)
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const logoutHandler = () => {
		dispatch(logout())
		navigate(APP_ROUTE.DEFAULT)
		toast('Your exit')
	}
	return (<>
			<div className="header">
				<img
					className='header-left_theke'
					src={thekeLogo}
					alt="company logo theke"
				/>
				<div className="header-left">
					<div
						className='header-left_logo'
						style={user.image_logo ? {backgroundImage: `url(${user.image_logo})`} : {backgroundImage: `url(${photo})`}}
					>
					</div>
					<span className="header-left_status">
					{user?.shop_name}
				</span>
				</div>
				<span className='header-link'>
				<FormattedMessage id='shopLink' />
				<a
					href={`http://localhost:3001/api/link/${user?.shop_name}`}
					target="_blank"
				>{user?.shop_name}</a>
				</span>
				<button
					onClick={logoutHandler}
					className="header-left_logout"
				>
					<img
						src={exit}
						alt="exit"
						title="Log Out"
					/>
					Log Out
				</button>
			</div>
			<Navbar
				bg="light"
				expand="lg"
				sticky='top'
				className="header-mob"
				collapseOnSelect='true'
			>
				<Container>
					<img
						className='header-mob_left_theke'
						src={thekeLogo}
						alt="company logo theke"
					/>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<div className="header-mob_left">
								<div
									className='header-mob_left_logo'
									style={user.image_logo ? {backgroundImage: `url(${user.image_logo})`} : {backgroundImage: `url(${photo})`}}
								>
								</div>
								<span className="header-mob_left_status">{user?.shop_name}</span>
							</div>
							<span className='header-mob_link'><FormattedMessage id='shopLink' />
								<a
									href={`${LINK_FOR_CLIENT}${user?.shop_name}`}
									target="_blank"
								>
									{user?.shop_name}
								</a>
							</span>
							<div className="header-mob_center">
								<ul className='header-mob_center-wrapper'>
									<li
										className={`header-mob_center-wrapper_item ${(location.pathname === APP_ROUTE.CATEGORIES_LIST ||
											location.pathname === APP_ROUTE.DEFAULT || location.pathname ===
											APP_ROUTE.PRODUCTS_LIST) ? 'activeButton' : ''}`}
										onClick={() => navigate(APP_ROUTE.CATEGORIES_LIST)}
									>
										<img
											src={myProducts}
											alt="My products"
											title="My products"
										/>
										<FormattedMessage id='myProducts' />
									</li>
									<li
										className={
											`header-mob_center-wrapper_item ${location.pathname === APP_ROUTE.PROFILE ? 'activeButton' : ''}`
										}
										onClick={() => navigate(APP_ROUTE.PROFILE)}
									>
										<img
											src={myProfile}
											alt="My Profile"
											title="My Profile"
										/>

										<FormattedMessage id='myProfile' />
									</li>
									<li
										className={
											`header-mob_center-wrapper_item ${location.pathname === APP_ROUTE.CONTACT_SUPPORT ? 'activeButton' : ''}`
										}
										onClick={() => navigate(APP_ROUTE.CONTACT_SUPPORT)}
									>
										<img
											src={contactSupport}
											alt="Contact Support"
											title="Contact Support"
										/>
										<FormattedMessage id='contactSupport' />
									</li>
								</ul>
							</div>
							<div className="header-mob-bottom">
								<button
									onClick={logoutHandler}
									className="header-mob-bottom_logout"
								>
									<img
										src={exit}
										alt="exit"
										title="Log Out"
									/>
									Log Out
								</button>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>

	)
}

export default Header
