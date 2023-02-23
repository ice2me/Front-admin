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
		phone: yup
			.string()
			.trim()
			.required(formatMessage ({id: "mobileIsRequiredField"}))
			.length(12, formatMessage ({id: "mobileNumberIsNotValid"}))
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
