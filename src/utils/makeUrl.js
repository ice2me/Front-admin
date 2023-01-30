export const apiBaseUrl =
	process.env.NODE_ENV === "development"
		? "http://backend:8080/api/"
		// ? "http://185.25.117.182/api"
		: `${window.location.origin}/api/`;
// || 'theke.com.ua/api
export const makeUrl = (urlSuff) => {
	return `${apiBaseUrl}/${urlSuff}`
}