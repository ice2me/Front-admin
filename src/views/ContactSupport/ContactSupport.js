import React from 'react'
import viber from "../../assets/icons/viber.svg"
import telegram from "../../assets/icons/telegram.svg"
import instagram from "../../assets/icons/instagram.svg"
import { FormattedMessage } from "react-intl";

const ContactSupport = () => {
	return (
		<div className='category'>
			<h1 className="category-title">
				<FormattedMessage id='contactSupport' />
			</h1>
			<div className="profile-body_wrapper h-100 w-100">
				<div className='d-inline-flex align-items-center justify-content-center'>
					<a
						href={`viber://add?number=%380669696402`}
						target='_blank'
					>
						<img
							src={viber}
							alt="viber"
						/>
					</a>
					<a
						href={`tg://resolve?domain=@ice2me`}
						target='_blank'
					>
						<img
							src={telegram}
							alt="telegram"
						/>
					</a>
					<a
						href={`https://www.instagram.com/serhiizuiev/`}
						target='_blank'
					>
						<img
							src={instagram}
							alt="instagram"
						/>
					</a>
				</div>
				<h2 className='text-center mt-4'>
					<FormattedMessage id='contactSupportMessage' />
					<br />
					<FormattedMessage id='contactSupportMessage2' />
				</h2>
			</div>
		</div>
	)
}

export default ContactSupport
