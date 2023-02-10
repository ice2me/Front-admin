export const addSpace = (string) => {
	return string?.replace(/_/ig, ' ')
}
export const deleteSpace = (string) => {
	return string?.trim().replace(/ /ig, '_')
}