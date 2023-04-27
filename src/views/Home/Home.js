import {
	Button,
	Carousel,
	Navbar
} from "react-bootstrap"
import thekeLogo from '../../assets/images/theke-logo-white.png'
import checkedImg from '../../assets/images/checked.png'
import {useNavigate} from "react-router-dom"
import {APP_ROUTE} from "../../utils/constants"
import {FormattedMessage} from "react-intl"
import step1 from '../../assets/images/step1.png'
import step2 from '../../assets/images/step2.png'
import step3 from '../../assets/images/step3.png'
import imageFirst from '../../assets/images/theke-one.png'
import viber from "../../assets/icons/viber.svg"
import telegram from "../../assets/icons/telegram.svg"
import email from "../../assets/icons/mail.svg"
import React from "react"

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
					<a href="/">
						<img
							src={thekeLogo}
							alt="theke Logo"
						/>
					</a>

					<div className='home-navbare_buttons'>
						<ul className='home-navbare_anhors'>
							<li className="home-navbare_anhors-li">
								<a href="#infoTheke" className="home-navbare_anhors-link">
									Про платформу
								</a>
							</li>
							<li className="home-navbare_anhors-li">
								<a href="#itsWork" className="home-navbare_anhors-link">
									Як це працює
								</a>
							</li>
							<li className="home-navbare_anhors-li">
								<a href="#price" className="home-navbare_anhors-link">
									Ціни
								</a>
							</li>
							<li className="home-navbare_anhors-li">
								<a
									href={`http://t.me/ice2me`}
									target='_blank'
									rel="noreferrer noopener"
									className="home-navbare_anhors-link"
								>
									Зв'язок
								</a>
							</li>
						</ul>
						<Button
							variant="primary"
							onClick={transferSingIn}
						>
							<FormattedMessage id='getStarted'/>
						</Button>
					</div>
				</Navbar>

				<div className="home-firstBlock">
					<div className="home-firstBlock_wrapper">
						<h1><FormattedMessage id='createAnOnlineShowcaseForYourStore'/></h1>
						<h2><FormattedMessage id='createAnOnlineShowcaseForYourStore1'/></h2>
						<div className="home-firstBlock_title">
							<span>
								<FormattedMessage id='startDoing'/>
							</span>
							<p>
								<FormattedMessage id='createYourOnlineStoreEasilyStartEarningToday'/>
							</p>
							<a href={`http://t.me/ice2me`}
							   target='_blank'
							   rel="noreferrer noopener">
								<FormattedMessage id='learnMore'/>
							</a>
						</div>
					</div>
					<div className="home-firstBlock_image">
						<img src={imageFirst} alt="image first"/>
					</div>
				</div>
				<div className="home-secondBlock">
					<div className="home-secondBlock_triangleTop"></div>
					<div className="home-secondBlock_triangleDown"></div>
					<div className="home-secondBlock_image"></div>
					<div className="home-secondBlock_title">
						<h2>
							<FormattedMessage id='tiredOfNotDoing'/> <br/>
							<FormattedMessage id='whatImportant'/>
						</h2>
						<ul className='home-secondBlock_list'>
							<li className="home-secondBlock_list-li">
								<img
									src={checkedImg}
									alt="x"
								/>
								<span>
									<FormattedMessage id='yourBusinessNotOnline'/>
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={checkedImg}
									alt="x"
								/>
								<span>
									<FormattedMessage id='yourCustomerBaseIsNotGrowing'/>
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={checkedImg}
									alt="x"
								/>
								<span>
									<FormattedMessage id='youCannotQuicklyPresentYourProductClient'/>
								</span>
							</li>
							<li className="home-secondBlock_list-li">
								<img
									src={checkedImg}
									alt="x"
								/>
								<span>
									<FormattedMessage id='youSpendLotTimeTakingOrdersFromEachClient'/>
								</span>
							</li>
						</ul>
						<button onClick={transferSingIn}>
							<FormattedMessage id='getStarted'/>
						</button>
					</div>
					<div className="home-secondBlock_triangleDown"></div>
				</div>
				<div className="home-thirdBlock">
					<div className="home-thirdBlock_left">
						<h2 className="home-thirdBlock_left-title">
							<FormattedMessage id='theresBetterWay'/>
						</h2>
						<ul className="home-thirdBlock_left-list">
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='easeOfUse'/>
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='speed'/>
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='benefit'/>
								</span>
							</li>
							<li className="home-thirdBlock_left-list_li">
								<img
									src={checkedImg}
									alt="checked image"
								/>
								<span>
									<FormattedMessage id='fastCommunicationWithClients'/>
								</span>
							</li>
						</ul>
						<button
							className="home-thirdBlock_left-button"
							onClick={transferSingIn}
						>
							<FormattedMessage id='getStarted'/>
						</button>
					</div>
					<div className="home-thirdBlock_right"></div>
				</div>
				<div className="home-fourthBlock" id='infoTheke'>
					<div className="home-secondBlock_triangleTop"></div>
					<div className="home-secondBlock_triangleDown"></div>
					<h2 className="home-fourthBlock_title">
						<FormattedMessage id='whatIsTheke'/>
					</h2>
					<div className='home-fourthBlock_content'>
						<p>
							Theke якісна CRM-платформа для малого бізнесу, що створена в Україні для українців. З Theke, Ви власник
							онлайн-вітрини з її простим та зрозумілим управлінням.
						</p>
						<p>
							Ваші клієнти отримують доступ до магазину за індивідуальним посиланням.
							Розсилаючи або рекламуючи посилання на Вашу Theke-вітрину через месенджери або Facebook чи Google , Ви залучаєте клієнтів лише у Ваш
							магазин.
						</p>
						<p>
							Є можливість підписки на Каталог що дозволяє презентувати ваш товар клієнтам без можливості його замовити.
						</p>
						<p>
							Ваші клієнти отримують зручний і красивий інтерфейс, де вибравши товар, зможуть його замовити в 1 клік, а
							Ви отримаєте лист на Email з повним описом товару та контактними даними клієнта.
						</p>
						<p id='itsWork'>
							Наша технічна підтримка працює 24/7 і допоможе Вам у вирішенні будь-якого питання.
						</p>
					</div>
				</div>
				<div className="home-fifthBlock">
					<h2 className="home-fifthBlock_title">
						<FormattedMessage id='howItWorks'/>
					</h2>
					<div className="home-fifthBlock_wrapper">
						<div className="home-fifthBlock_wrapper-block">
							<img
								className='home-fifthBlock_wrapper-block_step'
								src={step1}
								alt="step image"
							/>
							<p className="home-fifthBlock_wrapper-block_content">
								<FormattedMessage id='createCategoryFillWithProductCards'/>
							</p>
						</div>
						<div className="home-fifthBlock_wrapper-block">
							<img
								className='home-fifthBlock_wrapper-block_step'
								src={step2}
								alt="step image"
							/>
							<p className="home-fifthBlock_wrapper-block_content">
								<FormattedMessage id='sendLinkYourStoreYourCustomersConvenientWay'/>
							</p>
						</div>
						<div className="home-fifthBlock_wrapper-block">
							<img
								className='home-fifthBlock_wrapper-block_step'
								src={step3}
								alt="step image"
							/>
							<p className="home-fifthBlock_wrapper-block_content">
								<FormattedMessage id='theClientClicksOnYourLinkAndMakesOrderYourStore'/>
							</p>
						</div>
					</div>
				</div>
				<div className="home-sixthBlock" id='price'>
					<div className="home-secondBlock_triangleDown"></div>
					<div className="home-secondBlock_triangleTop"></div>
					<h2 className="home-sixthBlock_title">
						<FormattedMessage id='becomeTheke'/>
					</h2>
					<h3 className='home-sixthBlock_title-subtitle' style={{color: 'red', fontSize: '26px'}}>
						<FormattedMessage id='firstMonthIsFree'/>
					</h3>
					<div className="home-sixthBlock_wrapper">
						<div className="home-sixthBlock_block">
							<h3 className="home-sixthBlock_block-title">
								<FormattedMessage id='costMenu'/>
							</h3>
							<span className="home-sixthBlock_block-price">
								<FormattedMessage id='priceThekeMenu'/>
							</span>
							<div className="home-sixthBlock_block-option">
								<ul className='home-sixthBlock_block-option_ul'>
									<li>
										<span>-</span>
										<span>Цифровий Каталог</span>
									</li>
									<li>
										<span>-</span>
										<span>Безліч Категорій</span>
									</li>
									<li>
										<span>-</span>
										<span>Безліч Товарів</span>
									</li>
									<li>
										<span>-</span>
										<span>Персональний лінк</span>
									</li>
									<li>
										<span>-</span>
										<span>QR Код</span>
									</li>
									<li>
										<span>-</span>
										<span><del>Онлайн замовлення</del></span>
									</li>
								</ul>
							</div>
							<button
								className="home-thirdBlock_left-button"
								onClick={transferSingIn}
							>
								<FormattedMessage id='getStarted'/>
							</button>
						</div>
						<div className="home-sixthBlock_block">
							<h3 className="home-sixthBlock_block-title">
								<FormattedMessage id='costShop'/>
							</h3>
							<span className="home-sixthBlock_block-price">
							<FormattedMessage id='priceThekeShop'/>
						</span>
							<div className="home-sixthBlock_block-option">
								<ul className='home-sixthBlock_block-option_ul'>
									<li>
										<span>-</span>
										<span>Цифровий Каталог</span>
									</li>
									<li>
										<span>-</span>
										<span>Безліч Категорій</span>
									</li>
									<li>
										<span>-</span>
										<span>Безліч Товарів</span>
									</li>
									<li>
										<span>-</span>
										<span>Персональний лінк</span>
									</li>
									<li>
										<span>-</span>
										<span>QR Код</span>
									</li>
									<li>
										<span>-</span>
										<span>Онлайн замовлення</span>
									</li>
								</ul>
							</div>
							<button
								className="home-thirdBlock_left-button"
								onClick={transferSingIn}
							>
								<FormattedMessage id='getStarted'/>
							</button>
						</div>
						<div className="home-sixthBlock_block">
							<h3 className="home-sixthBlock_block-title">
								Додаткові
							</h3>
							<span className="home-sixthBlock_block-price">
							--
						</span>
							<div className="home-sixthBlock_block-option">
								<ul className='home-sixthBlock_block-option_ul'>
									<li>
										<span>-</span>
										<span>Заповнення карток товарів з PDF, EXL, WORD, Screenshot</span>
									</li>
									<li>
										<span>-</span>
										<span>Налаштування реклами у Facebook чи Google</span>
									</li>
									<li>
										<span>-</span>
										<span>Персональні побажання</span>
									</li>
									<li>
										<span>-</span>
										<span>Технічна підтримка 24/7</span>
									</li>
								</ul>
							</div>
							<button
								className="home-thirdBlock_left-button"
								onClick={transferSingIn}
							>
								<FormattedMessage id='getStarted'/>
							</button>
						</div>
					</div>
					<h3 className="home-sixthBlock_block-description">
						<FormattedMessage id='subscribeThekeAndGetYourBusinessGrowingRightNow'/>
					</h3>
				</div>
				<div className="home-carousel">
					<h2 className="home-fourthBlock_title mt-5">
						<FormattedMessage id='customerReviews'/>
					</h2>
					<Carousel
						variant="dark"
						className='home-carousel_wrapper'
						touch={true}
						interval={5000}
						keyboard={true}
						fade={false}
						slide={true}
					>
						<Carousel.Item
							className='home-carousel_wrapper-item'
						>
							<div className="home-carousel_content">
								<h3>Влад</h3>
								<p>
									На платформі Theke я запустив свій перший інтернет-магазин. Досвіду користування такими речами раінше
									не мав. Трохи переживав з цього приводу.
									щоАле недолік мого досвіду компенсували співробітники платформи, надаючи дуже прості і водночас
									корисні консультації. Результат перевищив мої очікування, тому що інші компанії бюджет вимагали глибші
									знання онлайн-платформ та за той же бюджет пропонували набагато менший функціонал. Загалом співпрацею
									з цією платформою я задоволен.
								</p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="home-carousel_content">
								<h3>Наталія</h3>
								<p>
									Хочу подякувати всій команді Theke за відмінну, злагоджену роботу. Вочевидь, ви створили та
									продовжуєте покращувати відмінне рішення для інтернет-підприємців. Ми, як партнери, дякуємо вам за те,
									що чуєте наші побажання та впроваджуєте доопрацювання, які просять ваші клієнти! Команда Theke, так
									тримати, прокачуйте свій проект і надалі.
								</p>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="home-carousel_content">
								<h3>Александер</h3>
								<p>
									Працюємо разом із самого старту платформи, запустив вже 2 магазини та 1 каталог доставки їжі. За
									функціоналом майданчика Theke питань взагалі немає все просто, створив категорію, наповнив її товаром
									та розшарив посилання своїм клієнтам через месенджери та починаєш роботу, дуже швидкий старт. Дякую за
									те, що заощаджували мій час та гроші, і не потрібно мучитися з особистим інтернет-магазином. Плюс
									платформа Theke в рази дешевша за повноцінний інтернет-магазин.
								</p>
							</div>
						</Carousel.Item>
					</Carousel>
				</div>
				<footer className="home-seventhBlock">
					<div className="home-secondBlock_triangleDown"></div>
					<h2 className="home-seventhBlock_title">
						<FormattedMessage id='contactSupportTitle'/>
					</h2>
					<div className="home-seventhBlock_wrapper h-100 w-100 m-0">
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
							<a
								href='mailto:ice2me1989@gmail.com'
								target='_blank'
								rel="noreferrer noopener"
							>
								<img
									src={email}
									alt="email"
								/>
							</a>
						</div>
					</div>
					<span className='w-100 text-center mt-5'>© Theke.com.ua</span>
				</footer>
			</div>
		</div>
	)
}

export default Home
