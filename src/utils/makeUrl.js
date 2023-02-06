export const apiBaseUrl =
	process.env.NODE_ENV === "development"
		// ? "http://localhost:8080/api/"
		? "https://theke.com.ua/api/"
		: `${window.location.origin}/api/`

export const makeUrl = (urlSuff) => {
	return `${apiBaseUrl}/${urlSuff}`
}