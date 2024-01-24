import React from 'react'
import { FormattedMessage } from "react-intl"
import imageFirst from "../../assets/images/photo-screen-one.png"

const HomeFirstScreen = () => {
	return (
		<div className='home-firstBlock'>
			<div className='home-firstBlock_wrapper'>
				<h1 ><FormattedMessage id='createAnOnlineShowcaseForYourStore' /></h1 >
				<h2 ><FormattedMessage id='createAnOnlineShowcaseForYourStore1' /></h2 >
				<div className='home-firstBlock_image-mob'>
				<img
					src={imageFirst}
					alt='image first'
				/>
			</div >
				<div className='home-firstBlock_title'>
					<span >
						<FormattedMessage id='startDoing' />
					</span >
					<p >
						<FormattedMessage id='createYourOnlineStoreEasilyStartEarningToday' />
					</p >
					<a
						href={`http://t.me/ice2me`}
						target='_blank'
						rel='noreferrer noopener'
					>
						<FormattedMessage id='learnMore' />
					</a >
				</div >
			</div >
			<div className='home-firstBlock_image'>
				<img
					src={imageFirst}
					alt='image first'
				/>
			</div >
		</div >
	)
}

export default HomeFirstScreen