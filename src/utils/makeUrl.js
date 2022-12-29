export const apiBaseUrl =
	process.env.NODE_ENV === "development"
		? "http://localhost:5000/api/"
		: `${window.location.origin}/api/`;

export const makeUrl = (urlSuff) => `${apiBaseUrl}/${urlSuff}`;
