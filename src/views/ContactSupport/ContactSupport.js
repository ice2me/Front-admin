import React from 'react'
import viber from "../../assets/icons/viber.svg"
import telegram from "../../assets/icons/telegram.svg"
import instagram from "../../assets/icons/instagram.svg"

const ContactSupport = () => {
	return (
		<div className='home'>
			<h1 className="home-title">
				Contact Support
			</h1>
			<div className="profile-body_wrapper h-100">
					<a href={`viber://add?number=%380669696402`}>
						<img
							src={viber}
							alt="viber"
						/>
					</a>
					<a href={`tg://resolve?domain=@ice2me`}>
						<img
							src={telegram}
							alt="telegram"
						/>
					</a>
					<a href={`https://www.instagram.com/serhiizuiev/`} target='_blank'>
						<img
							src={instagram}
							alt="instagram"
						/>
					</a>
				<h2 className='fs-3 text-center mt-5'>
					If you have any questions, problems and suggestions for improvement - you can write to me
				</h2>
			</div>

		</div>
	)
}

export default ContactSupport
