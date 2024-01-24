import React from 'react'
import { FormattedMessage } from "react-intl"
import Comp from '../../assets/images/second-screen-comp.png'
import CLock from '../../assets/images/second-screen-clock.png'
import Hand from '../../assets/images/second-screen-hand.png'
import Map from '../../assets/images/second-screen-tablemap.png'

const HomeSecondScreen = () => {
	return (
		<div className="home-secondBlock">
			<div className="home-secondBlock_image"></div >
			<div className="home-secondBlock_title">
				<h2 >
					<FormattedMessage id='tiredOfNotDoing' />
					<FormattedMessage id='whatImportant' />
				</h2 >
				<ul className='home-secondBlock_list'>
					<li className="home-secondBlock_list-li">
						<span >
							<img
								src={Comp}
								alt=''
							/>
							<FormattedMessage id='yourBusinessNotOnline' />
						</span >
					</li >
					<li className="home-secondBlock_list-li">
						<span >
							<img
								src={CLock}
								alt=''
							/>
							<FormattedMessage id='yourCustomerBaseIsNotGrowing' />
						</span >
					</li >
					<li className="home-secondBlock_list-li">
						<span >
							<img
								src={Hand}
								alt=''
							/>
							<FormattedMessage id='youCannotQuicklyPresentYourProductClient' />
						</span >
					</li >
					<li className="home-secondBlock_list-li">
						<span >
							<img
								src={Map}
								alt=''
							/>
							<FormattedMessage id='youSpendLotTimeTakingOrdersFromEachClient' />
						</span >
					</li >
				</ul >
			</div >
		</div >
	)
}

export default HomeSecondScreen