import * as yup from "yup"
import {
	FACEBOOK_REGEXP,
	INSTAGRAM_REGEXP,
	PHONE_REGEXP,
	TELEGRAM_REGEXP,
	VIBER_REGEXP,
	WEBSITE_REGEXP
} from "../constants"

export const getUpdateUserSchema = (formatMessage) => {
	return yup.object().shape({
		description: yup
			.string()
			.max(3500,  formatMessage ({id: "shopDescriptionLengthMax"})),
		shop_link: yup
			.string()
			.matches(WEBSITE_REGEXP, (formatMessage ({id: "pleaseEnterValidShopWebsite"})))
			.min(3, formatMessage ({id: "shopLinkLengthMin"}))
			.max(65, formatMessage ({id: "shopLinkLengthMax"})),
		shop_facebook: yup
			.string()
			.matches(FACEBOOK_REGEXP, (formatMessage ({id: "pleaseEnterValidFacebookProfile"}))),
		shop_viber: yup
			.string()
			.matches(VIBER_REGEXP, (formatMessage ({id: "pleaseEnterValidViberProfile"}))),
		shop_telegram: yup
			.string()
			.matches(TELEGRAM_REGEXP, formatMessage ({id: "pleaseEnterValidTelegramProfile"})),
		shop_instagram: yup
			.string()
			.matches(INSTAGRAM_REGEXP, formatMessage ({id: "pleaseEnterValidInstagramProfile"})),
	})
}