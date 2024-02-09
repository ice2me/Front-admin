import React from 'react'
import { FormattedMessage } from "react-intl"

const HomeFourthScreen = () => {
	return (
		<div
			className='home-fourthBlock'
			id='infoTheke'
		>
			<div className='home-fourthBlock_wrapper'>
				<div className='home-fourthBlock_wrapper-photo'>
				</div >
				<div className='home-fourthBlock_wrapper-content'>
					<h2 className='home-fourthBlock_title'>
						<FormattedMessage id='whatIsTheke' />
					</h2 >
					<div className='home-fourthBlock_content'>
						<p >
							Theke - це якісна CRM-платформа для малого бізнесу, що створена в Україні для українців. З Theke, Ви є власником онлайн-вітрини з її простим та зрозумілим управлінням.
						</p >
						<p >
							Ваші клієнти отримують доступ до магазину за індивідуальним посиланням.
							Розсилаючи або рекламуючи посилання на Вашу Theke-вітрину через месенджери або Facebook чи Google.
						</p >
						<p>
							Ви залучаєте клієнтів лише у Ваш магазин, де вибравши товар, зможуть його замовити в 1 клік, а
							Ви отримаєте лист на Email з повним описом товару та контактними даними клієнта.
						</p>
						<p >
							А ще є можливість підписки на Каталог що дозволяє презентувати ваш товар клієнтам без можливості його замовити.
						</p >
						<p id='itsWork'>
							Наша технічна підтримка працює 24/7 і допоможе Вам у вирішенні будь-якого питання.
						</p >
					</div >
				</div >
			</div >
		</div >
	)
}

export default HomeFourthScreen