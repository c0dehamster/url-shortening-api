export const load = async ({fetch}) => {
    let apiUrl = "https://api.shrtco.de/v2/shorten?url="
    let initialLink = "frontendmentor.io/profile/twDevNoob"

    const response = await fetch(`${apiUrl}${initialLink}`)
    const data = await response.json()
    const id = await data.result["code"]
    const shortLink = await data.result["short_link"]

    return {id, shortLink}
}

