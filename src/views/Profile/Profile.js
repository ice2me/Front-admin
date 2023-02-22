import photo from '../../assets/images/avatar-user.png'
import facebook from '../../assets/icons/facebook.svg'
import viber from '../../assets/icons/viber.svg'
import telegram from '../../assets/icons/telegram.svg'
import instagram from '../../assets/icons/instagram.svg'
import dots from '../../assets/icons/dotsEdit.svg'
import {
	FormattedMessage,
	useIntl
} from "react-intl"
import React, { useState } from "react";
import { RegistrationShop } from "../Login/RegistrationShop";
import { addSpace } from "../../utils/toggleSpaceString";
import { Form } from "react-bootstrap";

const Profile = ({
	user,
	setOpenEditProfile
}) => {
	const [openRegistrationShopWindow, setOpenRegistrationShopWindow] = useState(false)
	const showRegistrationShopWindow = () => setOpenRegistrationShopWindow(true)
	const hideRegistrationShopWindow = () => setOpenRegistrationShopWindow(false)
	const {formatMessage} = useIntl()
	if (openRegistrationShopWindow) {
		return openRegistrationShopWindow
			&&
			<RegistrationShop hideRegistrationShopWindow={hideRegistrationShopWindow} />
	}
	return (
		<>
			<h1 className="profile-title">
				<FormattedMessage id='profile' />
				{
					user?.shop_name && <button
						className='profile-title_dots'
						onClick={() => setOpenEditProfile(true)}
					>
						<img
							src={dots}
							alt="dots edit profile"
						/>
					</button>
				}

			</h1>
			<div className='profile-body'>
				<div className='profile-body_wrapper'>
					<div
						className="profile-body_photo"
						style={
							user?.image_logo
								?
								{backgroundImage: `url(${user?.image_logo})`}
								:
								{backgroundImage: `url(${photo})`}
						}
					>
					</div>
				</div>
				<div className='profile-body_wrapper'>
					<ul className="profile-body_content">
						<li className="profile-body_content-text">
							<span>
								<FormattedMessage id='mobilePhone' />
							</span>
							<p>+{user?.phone}</p>
						</li>
						<li className="profile-body_content-text">
							<span>
								<FormattedMessage id='email' />
							</span>
							<p>{user?.email}</p>
						</li>
						{
							!user?.shop_name &&
							<li>
								<div className='h-100 w100 d-flex align-items-center justify-content-center'>
									<button
										className="editProfile-body_content_button"
										onClick={showRegistrationShopWindow}
									>
									<span>
										<FormattedMessage id='createShopOrMenu' />
									</span>
									</button>
								</div>
							</li>
						}
						<li>
							<Form.Group className="registrationShop-form_label registrationShop-form_checkbox-wrapper">
								<div className='registrationShop-form_title'>
											<span>
												<FormattedMessage id='calculateTotalCost' />
											</span>
								</div>
								<div className='registrationShop-form_title'>
											<span className='m-2'>
												{
													user?.calculate_total_cost
														?
														<FormattedMessage id='yes' />
														:
														<FormattedMessage id='no' />
												}
											</span>
								</div>
							</Form.Group>
						</li>

						{
							user?.shop_name && <li className="profile-body_content-text">
							<span>
								<FormattedMessage
									id='nameShop'
									values={{total: formatMessage({id: `${user?.variant_trading}`})}}
								/>
							</span>
								<p>{addSpace(user?.shop_name)}</p>
							</li>
						}
						{
							user?.description && <li className="profile-body_content-text">
								<span>
									<FormattedMessage
										id='descriptionShop'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
								<p className='profile-body_content-text_description'>
									{user?.description}
								</p>
							</li>
						}
						{
							user?.shop_link && <li className="profile-body_content-text">
								<span>
									<FormattedMessage
										id='shopLink'
										values={{total: formatMessage({id: `${user?.variant_trading}`})}}
									/>
								</span>
								<a href={`https://${user?.shop_link}`}>{user?.shop_link}</a>
							</li>
						}
					</ul>
					<div className="profile-body_content-socials">
						{
							user?.socials_links?.shop_facebook &&
							<a
								href={user?.socials_links?.shop_facebook}
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									src={facebook}
									alt="facebook"
								/>
							</a>
						}

						{
							user?.socials_links?.shop_viber &&
							<a
								href={`${user?.socials_links?.shop_viber}`}
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									src={viber}
									alt="viber"
								/>
							</a>
						}

						{
							user?.socials_links?.shop_telegram &&
							<a
								href={`tg://resolve?domain=${user?.socials_links?.shop_telegram}`}
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									src={telegram}
									alt="telegram"
								/>
							</a>
						}

						{
							user?.socials_links?.shop_instagram &&
							<a
								href={`https://www.instagram.com/${user?.socials_links?.shop_instagram}/`}
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									className='profile-body_content-socials_instagram'
									src={instagram}
									alt="instagram"
								/>
							</a>
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile
