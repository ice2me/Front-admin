import React from 'react'
import viber from "../../assets/icons/viber.svg"
import telegram from "../../assets/icons/telegram.svg"
import { FormattedMessage } from "react-intl"

const ContactSupport = () => {
	return (
		<div className='category'>
			<h1 className="category-title">
				<FormattedMessage id='contactSupport' />
			</h1>
			<div className="profile-body_wrapper h-100 w-100 m-0">
				<div
					className="profile-body_wrapper-video"
				>
					<iframe
						src="https://www.youtube.com/embed/WvJxQEJRp4I"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					>
					</iframe>
				</div>
				<div className='d-inline-flex align-items-center justify-content-center'>
					<a
						href={`viber://chat?number=%2B380669696402`}
						target='_blank'
						rel="noreferrer noopener"
					>
						<img
							src={viber}
							alt="viber"
						/>
					</a>
					<a
						href={`http://t.me/ice2me`}
						target='_blank'
						rel="noreferrer noopener"
					>
						<img
							src={telegram}
							alt="telegram"
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
