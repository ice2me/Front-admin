import React from 'react'
import { FormattedMessage } from "react-intl"
import step1 from "../../assets/images/step1.png"
import step2 from "../../assets/images/step2.png"
import step3 from "../../assets/images/step3.png"

const HomeFifthScreen = () => {
	return (
		<div className='home-fifthBlock'>
			<h2 className='home-fifthBlock_title'>
				<FormattedMessage id='howItWorks' />
			</h2 >
			<div className='home-fifthBlock_wrapper'>
				<div className='home-fifthBlock_wrapper-block'>
					<img
						className='home-fifthBlock_wrapper-block_step'
						src={step1}
						alt='step image'
					/>
					<p className='home-fifthBlock_wrapper-block_content'>
						<FormattedMessage id='createCategoryFillWithProductCards' />
					</p >
				</div >
				<div className='home-fifthBlock_wrapper-block'>
					<img
						className='home-fifthBlock_wrapper-block_step'
						src={step2}
						alt='step image'
					/>
					<p className='home-fifthBlock_wrapper-block_content'>
						<FormattedMessage id='sendLinkYourStoreYourCustomersConvenientWay' />
					</p >
				</div >
				<div className='home-fifthBlock_wrapper-block'>
					<img
						className='home-fifthBlock_wrapper-block_step'
						src={step3}
						alt='step image'
					/>
					<p className='home-fifthBlock_wrapper-block_content'>
						<FormattedMessage id='theClientClicksOnYourLinkAndMakesOrderYourStore' />
					</p >
				</div >
			</div >
		</div >
	)
}

export default HomeFifthScreen