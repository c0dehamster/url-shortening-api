const getShortLink = async (link: string) => {
	const APIUrl = "https://api.shrtco.de/v2/shorten?url="
	const response = await fetch(`${APIUrl}${link}`)

	if (!response.ok) throw new Error("Invalid link")

	const data = await response.json()

	return {
		id: data.result.code,
		shortLink: data.result.full_short_link,
		originalLink: data.result.original_link,
	}
}

export const Utils = {
	getShortLink,
}
