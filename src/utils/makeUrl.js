export const apiBaseUrl =
	process.env.NODE_ENV === "development"
		// ? "http://localhost:5000/api/"
		? "http://185.25.117.182:8080/api"
		: `${window.location.origin}/api/`;

export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;
