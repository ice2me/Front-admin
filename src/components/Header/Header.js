import photo from '../../assets/images/avatar-user.png'
import thekeLogo from '../../assets/images/theke-logo-white.png'
import {
	useDispatch,
	useSelector
} from "react-redux"
import {
	FormattedMessage,
	useIntl
} from "react-intl";
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
import share from "../../assets/icons/share.svg";
import React, {
	useEffect,
	useState
} from "react";
import {
	Container,
	Dropdown,
	Nav,
	Navbar
} from "react-bootstrap";
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookShareButton,
	InstapaperIcon,
	InstapaperShareButton,
	TelegramIcon,
	TelegramShareButton,
	ViberIcon,
	ViberShareButton
} from "react-share";
import { addSpace } from "../../utils/toggleSpaceString";
import qrCode from "../../assets/icons/qrCode.svg";

const Header = () => {
	const [expanded, setExpanded] = useState(false)
	const {user} = useSelector((state) => state.userStore)
	const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {formatMessage} = useIntl()


	const logoutHandler = () => {
		dispatch(logout())
		navigate(APP_ROUTE.DEFAULT)
	}

	return (
		<>
			<div className="header">
				<img
					className='header-left_theke'
					src={thekeLogo}
					alt="company logo theke"
				/>
				{
					user?.shop_name
					&&
					<div className="header-left">
						<div
							className='header-left_logo'
							style={user.image_logo ? {backgroundImage: `url(${user.image_logo})`} : {backgroundImage: `url(${photo})`}}
						>
						</div>
						<span className="header-left_status">
					{addSpace(user?.shop_name) || ''}
				</span>
					</div>
				}
				{(user?.socials_links?.shop_facebook || user?.socials_links?.shop_viber || user?.socials_links?.shop_telegram ||
						user?.socials_links?.shop_instagram) && user?.shop_name
					&&
					<div className='header-link'>
						<Dropdown className="d-inline mx-2">
							<Dropdown.Toggle
								id="dropdown-autoclose-true"
								variant='secondary'
							>
								{/*<FormattedMessage id='share' />*/}
								<img
									src={share}
									alt="share"
								/>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								{
									user?.socials_links?.shop_facebook
									&&
									<FacebookShareButton
										url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
										quote='shared from theke.com.ua'
										hashtag='#theke'
									>
										<FacebookIcon />
									</FacebookShareButton>
								}
								{
									user?.socials_links?.shop_telegram
									&&
									<TelegramShareButton
										url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
										title='shared from theke.com.ua'
									>
										<TelegramIcon />
									</TelegramShareButton>
								}
								{
									user?.socials_links?.shop_viber
									&&
									<ViberShareButton
										url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
										// title='shared from theke.com.ua_____ '
									>
										<ViberIcon />
									</ViberShareButton>
								}
							</Dropdown.Menu>
						</Dropdown>
					</div>
				}
				{
					user?.shop_name
					&&
					<span className='header-link'>
					<FormattedMessage
						id='shopLink'
						values={{total: formatMessage({id: `${user?.variant_trading}`})}}
					/>
					<a
						href={`${LINK_FOR_CLIENT}${user?.shop_name}`}
						target="_blank"
						rel="noreferrer noopener"
					>
						{addSpace(user?.shop_name)}
					</a>
				</span>
				}

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
			{/*TODO************************************MOB******************************** */}
			<Navbar
				bg="light"
				expand="lg"
				sticky='top'
				className="header-mob"
				collapseOnSelect='true'
				expanded={expanded}

			>
				<Container>
					<img
						className='header-mob_left_theke'
						src={thekeLogo}
						alt="company logo theke"
					/>
					<Navbar.Toggle
						aria-controls="basic-navbar-nav"
						onClick={() => setExpanded(expanded ? false : "expanded")}
					/>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{
								user?.shop_name
								&&
								<div className="header-mob_left">
									<div
										className='header-mob_left_logo'
										style={user.image_logo ? {backgroundImage: `url(${user.image_logo})`} : {backgroundImage: `url(${photo})`}}
									>
									</div>
									<span className="header-mob_left_status">{addSpace(user?.shop_name)}</span>
								</div>
							}
							{
								user?.shop_name
								&&
								<span className='header-mob_link'>
								<FormattedMessage
									id='shopLink'
									values={{total: formatMessage({id: `${user?.variant_trading}`})}}
								/>
								<a
									href={`${LINK_FOR_CLIENT}${user?.shop_name}`}
									target="_blank"
									rel="noreferrer noopener"
								>
									{addSpace(user?.shop_name)}
								</a>
							</span>
							}

							<div className="header-mob_center">
								<ul className='header-mob_center-wrapper'>
									<li
										className={`header-mob_center-wrapper_item ${(location.pathname === APP_ROUTE.CATEGORIES_LIST ||
											location.pathname === APP_ROUTE.DEFAULT || location.pathname ===
											APP_ROUTE.PRODUCTS_LIST) ? 'activeButton' : ''}`}
										onClick={() => {
											setExpanded(false)
											navigate(APP_ROUTE.CATEGORIES_LIST)
										}}
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
										onClick={() => {
											setExpanded(false)
											navigate(APP_ROUTE.PROFILE)
										}}
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
											`header-mob_center-wrapper_item ${location.pathname === APP_ROUTE.QR_CODE ? 'activeButton' : ''}`
										}
										onClick={() => {
											setExpanded(false)
											navigate(APP_ROUTE.QR_CODE)
										}}
									>
										<img
											src={qrCode}
											alt="My Qr code"
											title="My Qr code"
										/>
										<FormattedMessage id='qrCode' />
									</li>
									<li
										className={
											`header-mob_center-wrapper_item ${location.pathname ===
											APP_ROUTE.CONTACT_SUPPORT ? 'activeButton' : ''}`
										}
										onClick={() => {
											setExpanded(false)
											navigate(APP_ROUTE.CONTACT_SUPPORT)
										}}
									>
										<img
											src={contactSupport}
											alt="Contact Support"
											title="Contact Support"
										/>
										<FormattedMessage id='contactSupport' />
									</li>
									{(user?.socials_links?.shop_facebook || user?.socials_links?.shop_viber ||
											user?.socials_links?.shop_telegram || user?.socials_links?.shop_instagram) && user?.shop_name
										&&
										<li
											className={`header-mob_center-wrapper_item`}
											onClick={() => navigate(APP_ROUTE.CATEGORIES_LIST)}
										>
											<div className='header-link mt-2'>
												<Dropdown className="d-inline mx-2">
													<Dropdown.Toggle
														id="dropdown-button-drop-up"
														drop='up'
														variant='secondary'
													>
														<img
															src={share}
															alt="share"
														/>
													</Dropdown.Toggle>
													<Dropdown.Menu>
														{
															user?.socials_links?.shop_facebook
															&&
															<FacebookShareButton
																url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
																quote='shared from theke.com.ua'
																hashtag='#theke'
															>
																<FacebookIcon />
															</FacebookShareButton>
														}
														{
															user?.socials_links?.shop_telegram
															&&
															<TelegramShareButton
																url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
																title='shared from theke.com.ua'
															>
																<TelegramIcon />
															</TelegramShareButton>
														}
														{
															user?.socials_links?.shop_viber
															&&
															<ViberShareButton
																url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
																// title='shared from theke.com.ua_____ '
															>
																<ViberIcon />
															</ViberShareButton>
														}
													</Dropdown.Menu>
												</Dropdown>
											</div>
										</li>
									}
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
