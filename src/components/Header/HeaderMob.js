import React from 'react'
import { Form, Overlay, Tooltip } from "react-bootstrap"
import { Typeahead } from "react-bootstrap-typeahead"
import { FormattedMessage, useIntl } from "react-intl"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FacebookShareButton, TelegramShareButton, ViberShareButton } from "react-share"
import ShopLogo from "../../assets/images/default-logo-shop.png"
import LogoTheke from "../../assets/images/logo-theke.png"
import { APP_ROUTE, LINK_FOR_CLIENT, LINK_FOR_INSTAGRAM } from "../../utils/constants"
import searchIcon from "../../assets/icons/search.svg"

import { ReactComponent as Facebook } from "../../assets/icons/header/facebook-header-icon.svg"
import { ReactComponent as Telegram } from "../../assets/icons/header/telegram-header-icon.svg"
import { ReactComponent as Viber } from "../../assets/icons/header/viber-header-icon.svg"
import { ReactComponent as CopyLink } from "../../assets/icons/header/copy-header-icon.svg"
import { ReactComponent as Instagram } from "../../assets/icons/header/instagram-header-icon.svg"

const HeaderMob = ({
	targetButton,
	searchValueArr,
	setSearchValueArr,
	copyClipboard,
	showClipboard
}) => {
	const {user} = useSelector(state => state.userStore)
	const {tagsList} = useSelector(state => state.categoriesStore)
	const {formatMessage} = useIntl()

	const toggleMenu = () => {
		let showMenu = document.querySelector('.header-mob_menu')
		let button = document.querySelector('.header-mob_button')
		if (showMenu.classList.contains('active')) {
			showMenu.classList.remove('active')
			button.classList.remove('open')
		} else {
			showMenu.classList.add('active')
			button.classList.add('open')
		}
	}

	return (
		<>
			<div className='header-mob header-mob_menu-small'>

				<a
					className='header-mob_logo'
					href='/'
				>
					<img
						className='header-mob_logo-img'
						src={LogoTheke}
						alt='Logo Theke'
					/>
				</a >

				<a
					className='header-mob_infoShop'
					href={`${LINK_FOR_CLIENT}${user?.shop_name}`}
					target='_blank'
					rel='noreferrer noopener'
				>
					<div
						className='header-mob_infoShop-logo'
						style={user?.image_logo ? {backgroundImage: `url(${user?.image_logo})`} : {backgroundImage: `url(${ShopLogo})`}}
					/>
					<div className='header-mob_infoShop-content'>
						<span className='header-mob_infoShop-content_name'>
							{user?.shop_name}
						</span >
						<p className='header-mob_infoShop-content_subname'>
							Посилання на Магазин
						</p >
					</div >
				</a >

				<div className='header-mob_button' onClick={toggleMenu}>
					<span className='header-mob_button-touch'></span >
				</div >
				{/*{*/}
				{/*	tagsList?.length > 0*/}
				{/*	&&*/}
				{/*	<Form className='header-mob_search-wrapper'>*/}
				{/*		<Typeahead*/}
				{/*			id='basic-typeahead-single'*/}
				{/*			labelKey='searchProduct'*/}
				{/*			onChange={setSearchValueArr}*/}
				{/*			options={tagsList}*/}
				{/*			placeholder={formatMessage({id: 'search'})}*/}
				{/*			selected={searchValueArr}*/}
				{/*			className='header-mob_search-inp'*/}
				{/*			disabled*/}
				{/*		/>*/}
				{/*		<img*/}
				{/*			className='header-mob_search-icon'*/}
				{/*			src={searchIcon}*/}
				{/*			alt='search icon'*/}
				{/*		/>*/}
				{/*</Form >*/}
				{/*}*/}



			</div >
			<div className='header-mob header-mob_menu'>
				<a
					className='header-mob_menu-logo'
					href='/'
				>
					<img
						className='header-mob_menu-logo_img'
						src={LogoTheke}
						alt='Logo Theke'
					/>
				</a >
				<div className='header-mob_menu-wrapper'>
					<ul className='header-mob_menu-share'>
						<li className='header-mob_menu-share_item'>
							<span className='header-mob_menu-share_item-text'>Поширити посилання на магазин:</span >
						</li >
						<li className='header-mob_menu-share_item'>
							{user?.socials_links?.shop_telegram && <TelegramShareButton
								url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
								title='Shared from theke.com.ua'
							>
								<Telegram title={`Поширити посилання на  ${user?.shop_name} у Telegram`} />
								<span >Telegram</span >
								</TelegramShareButton >}
						</li >
						<li className='header-mob_menu-share_item'>
							{user?.socials_links?.shop_viber && <ViberShareButton
								url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
								title={`Відвідати магазин ${user?.shop_name} можна за цим посиланням`}
							>
								<Viber title={`Поширити посилання на  ${user?.shop_name} у Viber`} />
								<span >Viber</span >
								</ViberShareButton >}
						</li >
						<li className='header-mob_menu-share_item'>
							{user?.socials_links?.shop_instagram && <a
								className='react-share__ShareButton'
								href={`${LINK_FOR_INSTAGRAM}${'theke.com.ua'}`}
								title={`Відвідати магазин ${user?.shop_name} в instagram`}
								target='_blank'
								rel='noreferrer noopener'
							>
								<Instagram />
								<span >Instagram</span >
								</a >}
						</li >
						<li className='header-mob_menu-share_item'>
							{user?.socials_links?.shop_facebook && <FacebookShareButton
								url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
								quote='Shared from theke.com.ua'
								hashtag='#theke'
							>
								<Facebook title={`Поширити посилання на ${user?.shop_name} у Facebook`} />
								<span >Facebook</span >
								</FacebookShareButton >}
						</li >
						<li className='header-mob_menu-share_item'>
							<button
								ref={targetButton}
								onClick={copyClipboard}
								className='react-share__ShareButton'
							>
								<CopyLink title={`Скопіювати посилання на ${user?.shop_name}`} />
								<span >Скопіювати</span >
							</button >
							<Overlay
								target={targetButton?.current}
								show={showClipboard}
								placement='bottom'
							>
								<Tooltip id='overlay-example'>
									<FormattedMessage id='linkCopied' />
								</Tooltip >
							</Overlay >
						</li >
					</ul >
				</div >
				<div className='header-mob_menu-search'>
					{/*{*/}
					{/*	tagsList?.length > 0*/}
					{/*	&&*/}
					{/*	<Form className='header-mob_menu-search_wrapper'>*/}
					{/*		<Typeahead*/}
					{/*			id='basic-typeahead-single'*/}
					{/*			labelKey='searchProduct'*/}
					{/*			onChange={setSearchValueArr}*/}
					{/*			options={tagsList}*/}
					{/*			placeholder={formatMessage({id: 'search'})}*/}
					{/*			selected={searchValueArr}*/}
					{/*			className='header-mob_menu-search_inp'*/}
					{/*			disabled*/}
					{/*		/>*/}
					{/*		<img*/}
					{/*			className='header-mob_menu-search_icon'*/}
					{/*			src={searchIcon}*/}
					{/*			alt='search icon'*/}
					{/*		/>*/}
					{/*</Form >*/}
					{/*}*/}
				</div >

			</div >
		</>
	)
}

export default HeaderMob