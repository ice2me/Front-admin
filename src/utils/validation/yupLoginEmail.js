import * as yup from "yup";
import {
	EMAIL_REGEXP,
	FACEBOOK_REGEXP,
	INSTAGRAM_REGEXP,
	PASSWORD_REGEXP,
	PHONE_REGEXP,
	TELEGRAM_REGEXP,
	VIBER_REGEXP,
	WEBSITE_REGEXP
} from "../constants";

export const getRegistrationSchema = () => {
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
		email: yup
			.string()
			.trim()
			.required('Email is a required field')
			.email("Email must be a valid email")
			.matches(EMAIL_REGEXP, "Email must be a valid email"),
		password: yup
			.string()
			.required("Password is a required field")
			.min(6)
			.matches(PASSWORD_REGEXP, "Password is a required field"),
		password_confirm: yup
			.string()
			.required("Password confirm is a required field")
			.min(6)
			.matches(PASSWORD_REGEXP, "Password confirm is a required field"),
		shop_name: yup
			.string()
			.required('Name is a required field')
			.min(3)
			.max(65),
		description: yup
			.string()
			.max(3500),
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

export const getLoginWithEmailSchema = () => {
	return yup.object().shape({
		email: yup
			.string()
			.trim()
			.required('Email is a required field')
			.email("Email must be a valid email")
			.matches(EMAIL_REGEXP, "Email must be a valid email"),
		password: yup
			.string()
			.required("Password is a required field")
			.min(6)
			.matches(PASSWORD_REGEXP, "Password is a required field"),
	})
};
