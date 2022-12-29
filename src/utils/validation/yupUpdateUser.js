import * as yup from "yup";
import {
	FACEBOOK_REGEXP,
	INSTAGRAM_REGEXP,
	PHONE_REGEXP,
	TELEGRAM_REGEXP,
	VIBER_REGEXP,
	WEBSITE_REGEXP
} from "../constants";

export const getUpdateUserSchema = () => {
	return yup.object().shape({
		username: yup
			.string()
			.required('Name is a required field')
			.min(3)
			.max(65),
		phone: yup
			.string()
			.trim()
			.required('Mobile is a required field')
			.matches(PHONE_REGEXP, 'Mobile number is not valid'),
		shop_name: yup
			.string()
			.required('Name is a required field')
			.min(3)
			.max(65),
		description: yup
			.string()
			.max(3500)
			.matches('', 'Max length 500 a valid description'),
		shop_link: yup
			.string()
			.matches(WEBSITE_REGEXP, ('Please enter a valid Shop Website'))
			.min(3)
			.max(65),
		shop_facebook: yup
			.string()
			.matches(FACEBOOK_REGEXP, ("Please enter a valid Facebook profile")),
		shop_viber: yup
			.string()
			.matches(VIBER_REGEXP, ("Please enter a valid Viber number")),
		shop_telegram: yup
			.string()
			.matches(TELEGRAM_REGEXP, ("Please enter a valid Telegram profile")),
		shop_instagram: yup
			.string()
			.matches(INSTAGRAM_REGEXP, ("Please enter a valid Instagram profile")),
	});
};