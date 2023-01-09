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

export const getRegistrationSchema = (formatMessage) => {
	return yup.object().shape({
		username: yup
			.string()
			.required(formatMessage ({id: "nameIsRequiredField"}))
			.min(3, formatMessage ({id: "usernameLengthMin"}))
			.max(65, formatMessage ({id: "usernameLengthMax"})),
		phone: yup
			.string()
			.trim()
			.required(formatMessage ({id: "mobileIsRequiredField"}))
			.matches(PHONE_REGEXP, formatMessage ({id: "mobileNumberIsNotValid"})),
		email: yup
			.string()
			.trim()
			.required(formatMessage ({id: "emailIsRequiredField"}))
			.email(formatMessage ({id: "emailMustBeValidEmail"}))
			.matches(EMAIL_REGEXP, formatMessage ({id: "emailMustBeValidEmail"})),
		password: yup
			.string()
			.required(formatMessage ({id: "passwordIsRequiredField"}))
			.min(6, formatMessage ({id: "passwordIsRequiredFieldLengthMin"}))
			.matches(PASSWORD_REGEXP, formatMessage ({id: "passwordIsRequiredField"})),
		password_confirm: yup
			.string()
			.required(formatMessage ({id: "passwordConfirmIsRequiredField"}))
			.min(6, formatMessage ({id: "passwordConfirmIsRequiredFieldLengthMin"}))
			.matches(PASSWORD_REGEXP, formatMessage ({id: "passwordConfirmIsRequiredField"})),
		shop_name: yup
			.string()
			.required(formatMessage ({id: "nameIsRequiredField"}))
			.min(3, formatMessage ({id: "shopNameLengthMin"}))
			.max(65, formatMessage ({id: "shopNameLengthMax"})),
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
	});
};

export const getLoginWithEmailSchema = (formatMessage) => {
	return yup.object().shape({
		email: yup
			.string()
			.trim()
			.required(formatMessage ({id: "emailIsRequiredField"}))
			.email(formatMessage ({id: "emailMustBeValidEmail"}))
			.matches(EMAIL_REGEXP, formatMessage ({id: "emailMustBeValidEmail"})),
		password: yup
			.string()
			.required(formatMessage ({id: "passwordIsRequiredField"}))
			.min(6, formatMessage ({id: "passwordIsRequiredFieldLengthMin"}))
			.matches(PASSWORD_REGEXP, formatMessage ({id: "passwordIsRequiredField"})),
	})
};
