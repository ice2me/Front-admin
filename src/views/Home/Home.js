import {
	Button,
	Navbar
} from "react-bootstrap"
import thekeLogo from '../../assets/images/theke-logo-white.png'
import blockX from '../../assets/images/blockX.png'
import checkedImg from '../../assets/images/checked.png'
import { useNavigate } from "react-router-dom"
import { APP_ROUTE } from "../../utils/constants"
import { FormattedMessage } from "react-intl"
import step1 from '../../assets/images/step1.png'
import step2 from '../../assets/images/step2.png'
import step3 from '../../assets/images/step3.png'

const Home = () => {
	const navigate = useNavigate()
	const transferSingIn = () => {
		navigate(APP_ROUTE.LOGIN)
	}
	return (
		<div className='home'>
			<div className="home-wrapper">
				<Navbar
					sticky="top"
					className="home-navbare"
				>
					<img
						src={thekeLogo}
						alt="theke Logo"
					/>
					<div className='home-navbare_buttons'>
						<Button
							variant="primary"
							onClick={transferSingIn}
						>
							<FormattedMessage id='getStarted' />
						</Button>
					</div>
				</Navbar>

				<div className="home-firstBlock">
					<div className="home-firstBlock_title">
						<h1>
							<FormattedMessage id='stopPrepping' />
							<br />
							<FormattedMessage id='startDoing' />
						</h1>
						<p>
							<FormattedMessage id='createYourOnlineStoreEasilyStartEarningToday' />
						</p>
						<button>
							<FormattedMessage id='learnMore' />
						</button>
					</div>
					<div className="home-firstBlock_image"></div>
				</div>
				<div className="home-secondBlock">
					<div className="home-secondBlock_image"></div>
					<div className="home-secondBlock_title">
						<h2>
							<FormattedMessage id='tiredOfNotDoing' /> <br />
							<FormattedMessage id='whatImportant' />
						</h2>
						<ul className='home-secondBlock_list'>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									<FormattedMessage id='yourBusinessNotOnline' />
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									<FormattedMessage id='yourCustomerBaseIsNotGrowing' />
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									<FormattedMessage id='youCannotQuicklyPresentYourProductClient' />
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={blockX}
									alt="x"
								/>
								<span>
									<FormattedMessage id='youSpendLotTimeTakingOrdersFromEachClient' />
								</span>
							</li>
						</ul>
						<button onClick={transferSingIn}>
							<FormattedMessage id='getStarted' />
						</button>
					</div>
				</div>
				<div className="home-thirdBlock">
					<div className="home-thirdBlock_left">
						<h2 className="home-thirdBlock_left-title">
							<FormattedMessage id='theresBetterWay' />
						</h2>
						<ul className="home-thirdBlock_left-list">
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='easeOfUse' />
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='speed' />
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='benefit' />
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='fastCommunicationWithClients' />
								</span>
							</li>
						</ul>
						<button
							className="home-thirdBlock_left-button"
							onClick={transferSingIn}
						>
							<FormattedMessage id='getStarted' />
						</button>
					</div>
					<div className="home-thirdBlock_right"></div>
				</div>
				<div className="home-fourthBlock">
					<div className="home-fourthBlock_wrapper">
					</div>
					<button className="home-fourthBlock_button">
						<FormattedMessage id='seeHowItWorks' />
					</button>
				</div>
				<div className="home-fifthBlock">
					<h2 className="home-fifthBlock_title">
						<FormattedMessage id='howItWorks' />
					</h2>
					<div className="home-fifthBlock_wrapper">
						<div className="home-fifthBlock_wrapper-block">
							<h3 className="home-fifthBlock_wrapper-block_title">
								<FormattedMessage id='step1' />
							</h3>
							<img
								className='home-fifthBlock_wrapper-block_step'
								src={step1}
								alt="step image"
							/>
							<p className="home-fifthBlock_wrapper-block_content">
								<FormattedMessage id='createCategoryFillWithProductCards' />
							</p>
						</div>
						<div className="home-fifthBlock_wrapper-block">
							<h3 className="home-fifthBlock_wrapper-block_title">
								<FormattedMessage id='step2' />
							</h3>
							<img
								className='home-fifthBlock_wrapper-block_step'
								src={step2}
								alt="step image"
							/>
							<p className="home-fifthBlock_wrapper-block_content">
								<FormattedMessage id='sendLinkYourStoreYourCustomersConvenientWay' />
							</p>
						</div>
						<div className="home-fifthBlock_wrapper-block">
							<h3 className="home-fifthBlock_wrapper-block_title">
								<FormattedMessage id='step3' />
							</h3>
							<img
								className='home-fifthBlock_wrapper-block_step'
								src={step3}
								alt="step image"
							/>
							<p className="home-fifthBlock_wrapper-block_content">
								<FormattedMessage id='theClientClicksOnYourLinkAndMakesOrderYourStore' />
							</p>
						</div>
					</div>
				</div>
				<div className="home-sixthBlock">
					<h2 className="home-sixthBlock_title">
						<FormattedMessage id='becomeTheke' />
					</h2>
					<div className="home-sixthBlock_block">
						<h3 className="home-sixthBlock_block-title">
							<FormattedMessage id='cost' />
						</h3>
						<span className="home-sixthBlock_block-price">
							<FormattedMessage id='priceTheke' />
						</span>
						<p className="home-sixthBlock_block-description">
							<FormattedMessage id='subscribeThekeAndGetYourBusinessGrowingRightNow' />
						</p>
					</div>
					<button className="home-sixthBlock_button">
						<FormattedMessage id='viewPlansDetails' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home
