import { browser } from "$app/environment"
import { writable } from "svelte/store"
import type { Writable } from "svelte/store"
import type { Item } from "./Utils"


let items: Item[] = []

if (browser) {
	let results = localStorage.getItem("results")

	if (results && results !== "undefined") items = JSON.parse(results)
}

const createArrayStore = (items: Item[]) => {
	const { set, update, subscribe }: Writable<{items: Item[]}> = writable({
		items
	})

	const addItem = (item: Item) => {		
		update(store => {
			return {
				...store,
				items: [item, ...store.items],
			}
		})
	}

	const removeItem = (id: string) => {
		update(store => {
			let itemsUpdated = store.items.filter((item: Item) => item.id !== id)

			return { ...store, items: itemsUpdated }
		})
	}

	return {
		subscribe,
		addItem,
		removeItem,
	}
}

export const ResultsStore = createArrayStore(items)

if (browser) {
	ResultsStore.subscribe(value =>
		localStorage.setItem("results", JSON.stringify(value.items))
	)
}
