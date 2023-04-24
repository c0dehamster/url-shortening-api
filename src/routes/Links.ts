import { writable } from "svelte/store";

export const LinksStore = writable({
    links: []
})