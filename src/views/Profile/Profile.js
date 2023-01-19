import photo from '../../assets/images/avatar-user.png'
import facebook from '../../assets/icons/facebook.svg'
import viber from '../../assets/icons/viber.svg'
import telegram from '../../assets/icons/telegram.svg'
import instagram from '../../assets/icons/instagram.svg'
import dots from '../../assets/icons/dotsEdit.svg'
import { FormattedMessage } from "react-intl";

const Profile = ({
	user,
	setOpenEditProfile
}) => {
	return (
		<>
			<h1 className="profile-title">
				<FormattedMessage id='profile' />
				<button
					className='profile-title_dots'
					onClick={() => setOpenEditProfile(true)}
				>
					<img
						src={dots}
						alt="dots edit profile"
					/>
				</button>
			</h1>
			<div className='profile-body'>
				<div className='profile-body_wrapper'>
					<div
						className="profile-body_photo"
						style={
						user?.image_logo
							? {backgroundImage: `url(${user?.image_logo})`}
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
								<FormattedMessage id='name' />
							</span>
							<p>{user?.username}</p>
						</li>
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
						<li className="profile-body_content-text">
							<span>
								<FormattedMessage id='nameShop' />
							</span>
							<p>{user?.shop_name}</p>
						</li>
						{
							user?.description && <li className="profile-body_content-text">
								<span>
									<FormattedMessage id='descriptionShop' />
								</span>
								<p className='profile-body_content-text_description'>
									{user?.description}
								</p>
							</li>
						}
						{
							user?.shop_link && <li className="profile-body_content-text">
								<span>
									<FormattedMessage id='shopLink' />
								</span>
								<a href="/">{user?.shop_link}</a>
							</li>
						}
					</ul>
					<div className="profile-body_content-socials">
						{
							user?.socials_links?.shop_facebook &&
							<a href={user?.socials_links?.shop_facebook}>
								<img
									src={facebook}
									alt="facebook"
								/>
							</a>
						}

						{
							user?.socials_links?.shop_viber &&
							<a href={`viber://add?number=%${user?.socials_links?.shop_viber}`}>
								<img
									src={viber}
									alt="viber"
								/>
							</a>
						}

						{
							user?.socials_links?.shop_telegram &&
							<a href={`tg://resolve?domain=${user?.socials_links?.shop_telegram}`}>
								<img
									src={telegram}
									alt="telegram"
								/>
							</a>
						}

						{
							user?.socials_links?.shop_instagram &&
							<a href={`https://www.instagram.com/${user?.socials_links?.shop_instagram}/`}>
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
