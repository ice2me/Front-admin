import React from 'react'
import { FormattedMessage } from "react-intl"
import CheckIcon from '../../assets/icons/check-icon.svg'

const HomeSixthScreen = ({transferSingIn}) => {
	return (
		<div
			className='home-sixthBlock'
			id='price'
		>
				<h2 className='home-sixthBlock_title'>
					<FormattedMessage id='becomeTheke' />
				</h2 >
				<h3 className='home-sixthBlock_title-subtitle'>
					<FormattedMessage id='firstMonthIsFree' />
				</h3 >
			<div className='home-sixthBlock_wrapper'>
				<div className='home-sixthBlock_block'>
					<div className='home-sixthBlock_title-header'>
						<h3 className='home-sixthBlock_block-title'>
							<FormattedMessage id='costMenu' />
						</h3 >
						<span className='home-sixthBlock_block-price'>
							<FormattedMessage id='priceThekeMenu' />
						</span >
					</div>
					<div className='home-sixthBlock_block-option'>
						<ul className='home-sixthBlock_block-option_ul'>
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Цифровий Каталог</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Безліч Категорій</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Безліч Товарів</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Персональний лінк</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >QR Код</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Технічна підтримка 24/7</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
									style={{opacity: 0}}
								/>
								<span style={{opacity: 0.2}}>Онлайн замовлення</span >
							</li >
						</ul >
					</div >
					<button
						className='home-thirdBlock_left-button'
						onClick={transferSingIn}
					>
						<FormattedMessage id='getStarted' />
					</button >
				</div >
				<div className='home-sixthBlock_block'>
					<div className='home-sixthBlock_title-header'>
						<h3 className='home-sixthBlock_block-title'>
							<FormattedMessage id='costShop' />
						</h3 >
						<span className='home-sixthBlock_block-price'>
							<FormattedMessage id='priceThekeShop' />
						</span >
					</div>
					<div className='home-sixthBlock_block-option'>
						<ul className='home-sixthBlock_block-option_ul'>
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Цифровий Каталог</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Безліч Категорій</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Безліч Товарів</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Персональний лінк</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >QR Код</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Онлайн замовлення</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Технічна підтримка 24/7</span >
							</li >
						</ul >
					</div >
					<button
						className='home-thirdBlock_left-button'
						onClick={transferSingIn}
					>
						<FormattedMessage id='getStarted' />
					</button >
				</div >
				<div className='home-sixthBlock_block'>
					<div className='home-sixthBlock_title-header'>
						<h3 className='home-sixthBlock_block-title'>
							Додаткові
						</h3 >
						<span className='home-sixthBlock_block-price' style={{opacity: 0}}>
							--
						</span >
					</div>
					<div className='home-sixthBlock_block-option'>
						<ul className='home-sixthBlock_block-option_ul'>
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Заповнення карток товарів з PDF, EXL, WORD, Screenshot</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Налаштування реклами у Facebook чи Google</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Персональні побажання</span >
							</li >
							<li >
								<img
									src={CheckIcon}
									alt='Ckeck icon'
								/>
								<span >Технічна підтримка 24/7</span >
							</li >
						</ul >
					</div >
					<button
						className='home-thirdBlock_left-button'
						onClick={transferSingIn}
					>
						<FormattedMessage id='getStarted' />
					</button >
				</div >
			</div >
			<h3 className='home-sixthBlock_block-description'>
				<FormattedMessage id='subscribeThekeAndGetYourBusinessGrowingRightNow' />
			</h3 >
		</div >
	)
}

export default HomeSixthScreen