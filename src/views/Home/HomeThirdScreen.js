import React from 'react'
import { FormattedMessage } from "react-intl"

const HomeThirdScreen = ({transferSingIn}) => {
	return (
		<div className='home-thirdBlock'>
			<div className='home-thirdBlock_left'>
				<h2 className='home-thirdBlock_left-title'>
					<FormattedMessage id='theresBetterWay' />
				</h2 >
				<ul className='home-thirdBlock_left-list'>
					<li className='home-thirdBlock_left-list_li'>
						<span>01</span>
						<span >
							<FormattedMessage id='easeOfUse' />
						</span >
					</li >
					<li className='home-thirdBlock_left-list_li'>
						<span>02</span>
						<span >
							<FormattedMessage id='speed' />
						</span >
					</li >
					<li className='home-thirdBlock_left-list_li'>
						<span>03</span>
						<span >
							<FormattedMessage id='benefit' />
						</span >
					</li >
					<li className='home-thirdBlock_left-list_li'>
						<span>04</span>
						<span >
							<FormattedMessage id='fastCommunicationWithClients' />
						</span >
					</li >
				</ul >
				<button
					className='home-thirdBlock_left-button'
					onClick={transferSingIn}
				>
					<FormattedMessage id='getStarted' />
				</button >
			</div >
			<div className='home-thirdBlock_right'></div >
		</div >
	)
}

export default HomeThirdScreen