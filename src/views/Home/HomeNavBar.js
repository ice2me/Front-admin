import React from 'react'
import { Navbar } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import thekeLogo from "../../assets/images/logo-theke.png"

const HomeNavBar = ({transferSingIn}) => {

	return (
		<Navbar
			sticky='top'
			className='home-navbare'
		>
			<a href='/'>
				<img
					src={thekeLogo}
					alt='theke Logo'
				/>
			</a >

			<div className='home-navbare_buttons'>
				<ul className='home-navbare_anhors'>
					<li className='home-navbare_anhors-li'>
						<a
							href='#infoTheke'
							className='home-navbare_anhors-link'
						>
							Про платформу
						</a >
					</li >
					<li className='home-navbare_anhors-li'>
						<a
							href='#itsWork'
							className='home-navbare_anhors-link'
						>
							Як це працює
						</a >
					</li >
					<li className='home-navbare_anhors-li'>
						<a
							href='#price'
							className='home-navbare_anhors-link'
						>
							Ціни
						</a >
					</li >
					<li className='home-navbare_anhors-li'>
						<a
							href={`http://t.me/theke_info`}
							target='_blank'
							rel='noreferrer noopener'
							className='home-navbare_anhors-link'
						>
							Зв'язок
						</a >
					</li >
				</ul >
				<button
					className='home-navbare_button'
					onClick={transferSingIn}
				>
					<FormattedMessage id='getStarted' />
				</button >
			</div >
		</Navbar >
	)
}

export default HomeNavBar