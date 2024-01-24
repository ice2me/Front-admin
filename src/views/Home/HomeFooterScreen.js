import React from 'react'
import { FormattedMessage } from "react-intl"
import email from "../../assets/icons/mail.svg"
import telegram from "../../assets/icons/telegram.svg"
import Phone from "../../assets/icons/phone-icon.svg"

const HomeFooterScreen = () => {
	return (
		<footer className='home-seventhBlock'>
			<h2 className='home-seventhBlock_title'>
				<FormattedMessage id='contactSupportTitle' />
			</h2 >
			<div className='home-seventhBlock_wrapper'>
				<div className='home-seventhBlock_wrapper-block'>
					<a
						href={`tel:+380662440253`}
						target='_blank'
						rel='noreferrer noopener'
					>
						<img
							src={Phone}
							alt='telegram'
						/>
						<span>+380662440253</span>
					</a >
					<a
						href={`http://t.me/theke_info`}
						target='_blank'
						rel='noreferrer noopener'
					>
						<img
							src={telegram}
							alt='telegram'
						/>
						<span>@theke_info</span>
					</a >
					<a
						href='mailto:infothekeplatform@gmail.com'
						target='_blank'
						rel='noreferrer noopener'
					>
						<img
							src={email}
							alt='email'
						/>
						<span>infothekeplatform@gmail.com</span>
					</a >
				</div >
			</div >
			<span className='home-seventhBlock_wrapper-text'>© Theke.com.ua</span >
		</footer >
	)
}

export default HomeFooterScreen