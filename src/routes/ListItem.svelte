<script lang="ts">
	import { createEventDispatcher } from "svelte"
	import { Utils } from "./Utils"

	const dispatch = createEventDispatcher<{ delete: string }>()

	export let id = ""
	export let shortLink = ""
	export let originalLink = ""

	let copied = false

	const onCopy = () => {
		copied = !copied
		Utils.copyText(shortLink)
	}

	const onDelete = () => dispatch("delete", id)

	$: buttonClass = `button ${copied ? "button--copied" : ""}`
	$: buttonText = !copied ? "Copy" : "Copied!"
</script>

<li class="list-item" {id}>
	<button class="button-icon" on:click={onDelete}>
		<span class="sr-only">Delete</span>
		<svg
			class="icon"
			width="14"
			height="15"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
				fill="#69707D"
				fill-rule="evenodd" /></svg>
	</button>

	<div class="list-item__align-left">
		<div class="original-link-wrapper">
			<a class="original-link" href={originalLink}>{originalLink}</a>
		</div>
	</div>

	<div class="list-item__align-right">
		<a class="short-link" href={shortLink}>{shortLink}</a>
		<button class={buttonClass} on:click={onCopy}>{buttonText}</button>
	</div>
</li>

<style>
	.list-item,
	.list-item__align-right {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.list-item {
		position: relative;
		padding-block: 1rem;
		border-radius: 0.25rem;

		background-color: white;
		box-shadow: 0 0 0.5rem 0.5rem rgb(0 0 0 / 0.05);
		--color-button-delete: var(--color-neutral-200);

		overflow-x: hidden;

		font-size: var(--font-size-200);
	}

	/* The delete button should have been in the design,
	especially considering the requirement for the data to persist */

	.button-icon {
		position: absolute;
		top: 0.25rem;
		left: 0.25rem;
	}

	.button-icon:hover path,
	.button-icon:focus path {
		fill: var(--color-neutral-400);
	}

	.button-icon path {
		fill: var(--color-button-delete);
	}

	.list-item__align-left {
		padding-inline: 1rem;
		padding-block-end: 0.75rem;

		flex: 1;
		position: relative;
		overflow-x: hidden;
	}

	.list-item__align-left::before {
		/* Text fadeout in case of overflow */

		content: "";
		width: 4rem;
		position: absolute;
		z-index: 1;
		right: 0;
		inset-block: 0;

		background: linear-gradient(to right, transparent, white);
	}

	.original-link-wrapper {
		border-bottom: 1px solid var(--color-neutral-200);

		overflow-x: scroll;
	}

	.list-item__align-right {
		padding-inline: 1rem;
	}

	/* Scrollbar */

	.original-link-wrapper::-webkit-scrollbar {
		height: 0.25rem;
	}

	.original-link-wrapper::-webkit-scrollbar-track {
		background-color: white;
	}

	.original-link-wrapper::-webkit-scrollbar-thumb {
		border: none;
		border-radius: 0.125rem;
		background-color: var(--color-primary-400);
	}

	.original-link {
		width: 100%;

		color: var(--color-neutral-600);

		font-size: var(--font-size-400);
	}

	.short-link {
		color: var(--color-primary-400);
		font-size: var(--font-size-400);
	}

	.button {
		min-width: 6.5rem;
		height: 2.5rem;
		padding-inline: 2rem;
		border-radius: 0.25rem;
	}

	/* Active states */

	.button--copied {
		background-color: var(--color-primary-600);
	}

	.button--copied::before {
		display: none;
	}

	@media screen and (min-width: 50rem) {
		.list-item,
		.list-item__align-right {
			flex-direction: row;
			align-items: center;
			gap: 1.5rem;
		}

		.list-item__align-left,
		.list-item__align-right {
			padding: 0px;
		}

		.list-item {
			padding-inline: 2rem 1.5rem;

			justify-content: stretch;

			box-shadow: 0 0 1rem 0.5rem rgb(0 0 0 / 0.05);
			--color-button-delete: transparent;
		}

		.list-item:hover,
		.list-item:focus-within {
			--color-button-delete: var(--color-neutral-200);
		}

		.button-icon {
			padding: 0.2rem;
		}

		.original-link-wrapper {
			border: none;
		}

		.original-link {
			padding: 0px;
		}
	}
</style>
