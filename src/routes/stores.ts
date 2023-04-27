import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

interface Item {
    id: number
    shortLink: string
    originalLink: string
}

const createArrayStore = () => {
	const { set, update, subscribe }: Writable<{items: Item[]}> = writable({
		items: [],
	})

	const addItem = (item: Item) => {
		update(store => {
			return {
				...store,
				items: [item, ...store.items],
			}
		})
	}

	const removeItem = (id: number) => {
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

export const ResultsStore = createArrayStore()
