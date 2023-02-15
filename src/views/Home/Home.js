import {
	Button,
	Carousel,
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
import bgForSlider from '../../assets/images/goldBg.png'

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
					<div className="home-firstBlock_wrapper">
						<h1><FormattedMessage id='createAnOnlineShowcaseForYourStore' /></h1>
						<h2><FormattedMessage id='createAnOnlineShowcaseForYourStore1' /></h2>
						<div className="home-firstBlock_title">
							<h2>
								<br />
								<FormattedMessage id='startDoing' />
							</h2>
							<p>
								<FormattedMessage id='createYourOnlineStoreEasilyStartEarningToday' />
							</p>
							<a href='#video'>
								<FormattedMessage id='learnMore' />
							</a>
						</div>
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
					<div
						className="home-fourthBlock_wrapper"
						id='video'
					>
						<iframe
							src="https://www.youtube.com/embed/WvJxQEJRp4I"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							// allowFullScreen
						></iframe>
					</div>
					{/*<button className="home-fourthBlock_button">*/}
					{/*	<FormattedMessage id='seeHowItWorks' />*/}
					{/*</button>*/}
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
				<div className="home-carousel">
					<Carousel
						variant="dark"
						className='home-carousel_wrapper'
						touch={true}
						interval={5000000000}
						keyboard={true}
						fade={false}
						slide={false}
					>
						<Carousel.Item
							className='home-carousel_wrapper-item'
						>
							<div className="home-carousel_content">
								<h3>Влад</h3>
								<p>
									На платформі Theke я запустив свій перший інтернет-магазин, тому порівнювати мені нема з чим, але з упевненістю можу сказати, що недолік мого досвіду компенсували співробітники платформи, надаючи дуже прості і в одночас корисні консультації. За сплачені гроші я отримав можливості з перевищенням очікувань, тому що інші компанії за передбачуваний бюджет пропонували набагато менший функціонал. Загалом співпраця з цією платформою я задоволен.
								</p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="home-carousel_content">
								<h3>Наталія</h3>
								<p>
									Хочу подякувати всій команді Theke за відмінну, злагоджену роботу. Вочевидь, ви створили та продовжуєте покращувати відмінне рішення для інтернет-підприємців. Ми, як партнери, дякуємо вам за те, що чуєте наші побажання та впроваджуєте доопрацювання, які просять ваші клієнти! Команда Theke, так тримати, прокачуйте свій проект і надалі.
								</p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="home-carousel_content">
								<h3>Сашко</h3>
								<p>
									Працюємо разом із самого старту платформи, запустив вже 1 магазин та 1 меню. За функціоналом майданчика Theke питань взагалі немає все просто, створив категорію, наповнив її товаром та розшарив посилання своїм клієнтам через месенджери та починаєш роботу, дуже швидкий старт. Дякую за те, що заощаджували мій час та гроші, і не потрібно мучитися з особистим інтернет-магазином. Плюс платформа Theke в рази дешевша за повноцінний інтернет-магазин.
								</p>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>
				<div className="home-sixthBlock">
					<h2 className="home-sixthBlock_title">
						<FormattedMessage id='becomeTheke' />
					</h2>
					<div className="home-sixthBlock_block">
						<h3 className="home-sixthBlock_block-title">
							<FormattedMessage id='cost' />
						</h3>
						<div className="home-sixthBlock_block-sale">
							<h2>
								<FormattedMessage id='firstMonthIsFree' />
							</h2>
						</div>
						<span className="home-sixthBlock_block-price">
							<FormattedMessage id='priceTheke' />
						</span>
						<p className="home-sixthBlock_block-description">
							<FormattedMessage id='subscribeThekeAndGetYourBusinessGrowingRightNow' />
						</p>
					</div>
					{/*<button className="home-sixthBlock_button">*/}
					{/*	<FormattedMessage id='viewPlansDetails' />*/}
					{/*</button>*/}
				</div>
			</div>
		</div>
	)
}

export default Home
