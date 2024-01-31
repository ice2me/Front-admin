export const APP_ROUTE = {
	DEFAULT: '/',
	ENTRY: "*",
	LOGIN: '/login',
	// SIGNUP: '/registration',
	REGISTRATION: '/registration',
	PRODUCTS_LIST: '/products-list',
	CATEGORIES_LIST: '/categories-list',
	PROFILE: '/profile',
	CONTACT_SUPPORT: '/contact-support',
	QR_CODE: '/qr-code',
}

export const EXTENSION = {
	PNG: 'png',
	PDF: 'pdf'
}

export const LINK_FOR_CLIENT = 'https://client.theke.com.ua/'

export const AUTH_API = {
	SIGNUP: "/auth/register",
	REGISTRATION_SHOP: "/auth/register-shop",
	UPDATE: "/auth/update",
	LOGIN: "/auth/login",
	ME: "/auth/me",
	DELETE_USER: "/auth/delete",
}
export const CATEGORIES_API = {
	GET_CATEGORIES: "/categories/list",
	CREATE_CATEGORIES: "/categories",
	DELETE_CATEGORIES: "/categories/",
	UPDATE_CATEGORIES_NAME: "/categories/update-name/",
	CREATE_CATEGORIES_ITEM: "/categories/product",
	GET_CATEGORIES_ITEM: "/categories/products-list/",
	PATCH_CATEGORIES_ITEM_UPDATE: "/categories/product/",
	PATCH_CATEGORIES_AVAILABLE_ITEM_UPDATE: "/categories/product-available/",
	DELETE_PRODUCT_ITEM: "/categories/product/",
	SEARCH_PRODUCT: "/categories/search",
	SEARCH_PRODUCT_TAG: "/categories/search_tag",
}

export const URLS_PROCESSED_IN_COMPONENTS = [
	AUTH_API.SIGNUP,
	AUTH_API.LOGIN,
	AUTH_API.ME,
	AUTH_API.REGISTRATION_SHOP
];

export const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const PASSWORD_REGEXP = /^[a-zA-Z0-9!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]{6,}$/
export const PHONE_REGEXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
export const WEBSITE_REGEXP = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&\\/=]*)$/g
export const FACEBOOK_REGEXP = /(?:https?|file|ftp):\/\/([^\/\s]+)[^\s]*/ig
export const VIBER_REGEXP = /^[a-zA-Z0-9!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]{6,}$/g
export const TELEGRAM_REGEXP = /^(?:^|[^\w])([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/g
export const INSTAGRAM_REGEXP = /^(?:^|[^\w])([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/g
export const PRICE_REGEXP = /^\d{1,7}(\.\d{1,2})?$/