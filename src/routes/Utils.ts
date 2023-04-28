export interface FetchError {
	error: true
	message: string
}

export interface Item {
    id: string
    shortLink: string
    originalLink: string
	error?: false | undefined
}

export type Response = Item | FetchError

const getShortLink = async (link: string): Promise<Response> => {
	const APIUrl = "https://api.shrtco.de/v2/shorten?url="

	try {
		const response = await fetch(`${APIUrl}${link}`)

		if (!response.ok) {
			return {
				error: true,
				message: "Please enter a valid link",
			}
		}

		const data = await response.json()

		return {
			id: String(data.result.code),
			shortLink: String(data.result.full_short_link),
			originalLink: String(data.result.original_link),
		}
	} catch (error) {
		return {
			error: true,
			message: "Failed to fetch",
		}
	}
}

const copyText = async (text: string) => {
	if ("clipboard" in navigator) await navigator.clipboard.writeText(text)
}

export const Utils = {
	getShortLink,
	copyText
}
