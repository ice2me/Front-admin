import React from 'react'
import { Form, Overlay, Tooltip } from "react-bootstrap"
import { Typeahead } from "react-bootstrap-typeahead"
import { FormattedMessage, useIntl } from "react-intl"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
	FacebookShareButton,
	TelegramShareButton,
	ViberShareButton
} from "react-share"
import searchIcon from "../../assets/icons/search.svg"
import LogoTheke from '../../assets/images/logo-theke.png'
import { LINK_FOR_CLIENT, LINK_FOR_INSTAGRAM } from "../../utils/constants"
import ShopLogo from '../../assets/images/default-logo-shop.png'

import { ReactComponent as Facebook } from "../../assets/icons/header/facebook-header-icon.svg"
import { ReactComponent as Telegram } from "../../assets/icons/header/telegram-header-icon.svg"
import { ReactComponent as Viber } from "../../assets/icons/header/viber-header-icon.svg"
import { ReactComponent as CopyLink } from "../../assets/icons/header/copy-header-icon.svg"
import { ReactComponent as Instagram } from "../../assets/icons/header/instagram-header-icon.svg"

const HeaderDesktop = ({
	targetButton,
	searchValueArr,
	setSearchValueArr,
	copyClipboard,
	showClipboard
}) => {
	const {user} = useSelector(state => state.userStore)
	const {tagsList} = useSelector(state => state.categoriesStore)
	const {formatMessage} = useIntl()
	const navigate = useNavigate()
	return (
		<div className='header-desktop'>
			<a
				className='header-desktop_logo'
				href='/'
			>
				<img
					className='header-desktop_logo-img'
					src={LogoTheke}
					alt='Logo Theke'
				/>
			</a >
			<ul className='header-desktop_share'>
				<li className='header-desktop_share-item'>
					<span className='header-desktop_share-item_text'>Поширити посилання на магазин:</span >
				</li >
				<li className='header-desktop_share-item'>
					{
						user?.socials_links?.shop_telegram
						&&
						<TelegramShareButton
							url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
							title='Shared from theke.com.ua'
						>
							<Telegram title={`Поширити посилання на  ${user?.shop_name} у Telegram`} />
						</TelegramShareButton >
					}
				</li >
				<li className='header-desktop_share-item'>
					{
						user?.socials_links?.shop_viber
						&&
						<ViberShareButton
							url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
							title={`Відвідати магазин ${user?.shop_name} можна за цим посиланням`}
						>
							<Viber title={`Поширити посилання на  ${user?.shop_name} у Viber`} />
						</ViberShareButton >
					}
				</li >
				<li className='header-desktop_share-item'>
					{
						user?.socials_links?.shop_instagram
						&&
						<a
							className='react-share__ShareButton'
							href={`${LINK_FOR_INSTAGRAM}${'theke.com.ua'}`}
							title={`Відвідати магазин ${user?.shop_name} в instagram`}
							target='_blank'
							rel='noreferrer noopener'
						>
							<Instagram />
						</a >
					}
				</li >
				<li className='header-desktop_share-item'>
					{
						user?.socials_links?.shop_facebook
						&&
						<FacebookShareButton
							url={`${LINK_FOR_CLIENT}${user?.shop_name}`}
							quote='Shared from theke.com.ua'
							hashtag='#theke'
						>
							<Facebook title={`Поширити посилання на ${user?.shop_name} у Facebook`} />
						</FacebookShareButton >
					}
				</li >
				<li className='header-desktop_share-item'>
					<button
						ref={targetButton}
						onClick={copyClipboard}
						className='react-share__ShareButton'
					>
						<CopyLink title={`Скопіювати посилання на ${user?.shop_name}`} />
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
			<div className='header-desktop_search'>
				{
				tagsList?.length > 0
				&&
				<Form className='header-desktop_search-wrapper'>
						<Typeahead
							id='basic-typeahead-single'
							labelKey='searchProduct'
							onChange={setSearchValueArr}
							options={tagsList}
							placeholder={formatMessage({id: 'search'})}
							selected={searchValueArr}
							className='header-desktop_search-inp'
						/>
						<img
							className='header-desktop_search-icon'
							src={searchIcon}
							alt='search icon'
						/>
				</Form >
			}
			</div >
			<a
				className='header-desktop_infoShop'
				href={`${LINK_FOR_CLIENT}${user?.shop_name}`}
				target='_blank'
				rel='noreferrer noopener'
			>
				<div
					className='header-desktop_infoShop-logo'
					style={
						user?.image_logo
							?
							{backgroundImage: `url(${user?.image_logo})`}
							:
							{backgroundImage: `url(${ShopLogo})`}
					}
				/>
				<div className='header-desktop_infoShop-content'>
					<span className='header-desktop_infoShop-content_name'>
						{user?.shop_name}
					</span >
					<p className='header-desktop_infoShop-content_subname'>
						Посилання на Магазин
					</p >
				</div >
			</a >
		</div >
	)
}

export default HeaderDesktop