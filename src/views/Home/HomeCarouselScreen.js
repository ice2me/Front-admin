import React from 'react'
import { FormattedMessage } from "react-intl"
import PhotoOne from '../../assets/images/photo-1.png'
import PhotoTwo from '../../assets/images/photo-2.png'
import PhotoThree from '../../assets/images/photo-3.png'
import PhotoFour from '../../assets/images/photo-4.png'
import PhotoFive from '../../assets/images/photo-5.png'

const HomeCarouselScreen = () => {
	return (
		<div className='home-carousel'>
			<h2 className='home-carousel_title mt-5'>
				<FormattedMessage id='customerReviews' />
			</h2 >
			<div className='home-carousel_bottomBg'></div >
			<div className='home-carousel_wrapper'>

				<div className='home-carousel_content'>
					<div className='home-carousel_content-wrapper'>
						<div className='home-carousel_content-wrapper_header'>
							<img
								src={PhotoOne}
								alt='photo'
							/>
							<div className='home-carousel_content-wrapper_header-block'>
								<h3 className='home-carousel_content-wrapper_header-block_name'>Наталія Гуровська</h3 >
								<h4 className='home-carousel_content-wrapper_header-block_position'>CEO, Mavidea Technology Group</h4 >
							</div >
						</div >
						<div className='home-carousel_content-wrapper_content'>
							<p className='home-carousel_content-wrapper_content-text'>
								На платформі Theke я запустила свій перший інтернет-магазин. Theke виявилась дуже проста та зручна у використанні платформа. Загалом співпрацею з цією платформою я задоволена.
							</p >
						</div >
					</div >
				</div >
				<div className='home-carousel_content'>
					<div className='home-carousel_content-wrapper'>
						<div className='home-carousel_content-wrapper_header'>
							<img
								src={PhotoTwo}
								alt='photo'
							/>
							<div className='home-carousel_content-wrapper_header-block'>
								<h3 className='home-carousel_content-wrapper_header-block_name'>Влад Степанішин</h3 >
								<h4 className='home-carousel_content-wrapper_header-block_position'>CEO, Product Group</h4 >
							</div >
						</div >
						<div className='home-carousel_content-wrapper_content'>
							<p className='home-carousel_content-wrapper_content-text'>
								Працюємо разом із самого старту платформи, запустив вже 2 магазини та 1 каталог доставки їжі. За функціоналом майданчика Theke питань взагалі немає все просто, створив категорію, наповнив її товаром та розшарив посилання своїм клієнтам через месенджери та починаєш роботу, дуже швидкий старт. Дякую за те, що заощаджували мій час та гроші.
							</p >
						</div >
					</div >
				</div >
				<div className='home-carousel_content'>
					<div className='home-carousel_content-wrapper'>
						<div className='home-carousel_content-wrapper_header'>
							<img
								src={PhotoThree}
								alt='photo'
							/>
							<div className='home-carousel_content-wrapper_header-block'>
								<h3 className='home-carousel_content-wrapper_header-block_name'>Петро Василішин</h3 >
								<h4 className='home-carousel_content-wrapper_header-block_position'>CEO, AVG Partners</h4 >
							</div >
						</div >
						<div className='home-carousel_content-wrapper_content'>
							<p className='home-carousel_content-wrapper_content-text'>
								На Theke я запустив свій інтернет-магазин. Досвіду користування такими речами раінше не мав. Але недолік мого досвіду компенсували співробітники платформи, надаючи дуже прості і водночас корисні консультації. Результат перевищив мої очікування, тому що інші компанії вимагали глибші знання онлайн-платформ.
							</p >
						</div >
					</div >
				</div >
				<div className='home-carousel_content'>
					<div className='home-carousel_content-wrapper'>
						<div className='home-carousel_content-wrapper_header'>
							<img
								src={PhotoFour}
								alt='photo'
							/>
							<div className='home-carousel_content-wrapper_header-block'>
								<h3 className='home-carousel_content-wrapper_header-block_name'>Олександр Гришковець</h3 >
								<h4 className='home-carousel_content-wrapper_header-block_position'>Director Business</h4 >
							</div >
						</div >
						<div className='home-carousel_content-wrapper_content'>
							<p className='home-carousel_content-wrapper_content-text'>
								Хочу подякувати всій команді Theke за відмінну, злагоджену роботу. Вочевидь, ви створили та
								продовжуєте покращувати відмінне рішення для інтернет-підприємців. Ми, як партнери, дякуємо вам за те, що чуєте наші побажання та впроваджуєте доопрацювання, які просять ваші клієнти! Команда Theke, так тримати, прокачуйте свій проект і надалі.
							</p >
						</div >
					</div >
				</div >
				<div className='home-carousel_content'>
					<div className='home-carousel_content-wrapper'>
						<div className='home-carousel_content-wrapper_header'>
							<img
								src={PhotoFive}
								alt='photo'
							/>
							<div className='home-carousel_content-wrapper_header-block'>
								<h3 className='home-carousel_content-wrapper_header-block_name'>Оксана Носик</h3 >
								<h4 className='home-carousel_content-wrapper_header-block_position'>CEO, Mavidea</h4 >
							</div >
						</div >
						<div className='home-carousel_content-wrapper_content'>
							<p className='home-carousel_content-wrapper_content-text'>
								Працюємо на платформи, запустили вже 2й магазин. Не потрібно мучитися з особистим інтернет-магазином. Плюс
								платформа Theke в рази дешевша за повноцінний інтернет-магазин де треба ще слідкувати за його роботою на серверах і тд.
							</p >
						</div >
					</div >
				</div >
			</div >
		</div >
	)
}

export default HomeCarouselScreen