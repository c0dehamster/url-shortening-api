<script lang="ts">
	import backgroundMobile from "../lib/images/bg-shorten-mobile.svg"
	import backgroundDesktop from "../lib/images/bg-shorten-desktop.svg"

	import type { Response } from "./Utils"
	import { ResultsStore } from "./stores"
	import { Utils } from "./Utils"

	let error = false
	let initialLink = ""
	let errorMessage = ""

	const displayError = (message: string) => {
		error = true
		errorMessage = message
	}

	const handleResponse = (item: Response) => {
		if (!item.error) {
			error = false
			ResultsStore.addItem(item)
			initialLink = ""
		} else {
			displayError(item.message)
		}
	}

	const onSubmit = async () => {
		if (initialLink === "") {
			displayError("Please add a link")
			return
		}

		let response = await Utils.getShortLink(initialLink)
		handleResponse(response)
	}

	$: inputClass = `form__input ${error ? "form__input--error" : ""}`
</script>

<form
	action=""
	class="form"
	style="--background-mobile: url({backgroundMobile}); --background-desktop: url({backgroundDesktop})"
	on:submit|preventDefault={onSubmit}>
	<div class="form__input-wrapper">
		<input
			type="text"
			class={inputClass}
			name="initialLink"
			placeholder="Shorten a link here..."
			bind:value={initialLink} />

		{#if error}
			<p class="error-message">{errorMessage}</p>
		{/if}
	</div>

	<button class="button">Shorten it!</button>
</form>

<style>
	.form {
		position: relative;
		width: 100%;
		padding: 1.5rem;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		overflow: hidden;
		border-radius: 0.625rem;

		background-color: var(--color-primary-600);
	}

	/* Make sure to check how others dealt with this background */

	.form::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 3rem;
		right: 0;
		left: 6rem;

		background-image: var(--background-mobile);
		background-size: cover;
		background-position: left;
		background-repeat: no-repeat;
	}

	.button,
	.form__input,
	.error-message {
		position: relative;
		z-index: 5;
	}

	.button,
	.form__input {
		height: 3rem;
		border-radius: 0.25rem;
		border: none;
		outline: none;
	}

	.form__input-wrapper {
		width: 100%;
		grid-area: input;
	}

	.form__input {
		width: 100%;
		padding-inline: 1.5rem;

		transition: outline 100ms linear;
	}

	.error-message {
		padding-block: 0.25rem;
	}

	.button {
		min-width: fit-content;
		padding-inline: 2.5rem;
	}

	/* Active states */

	.form__input:hover,
	.form__input:focus {
		outline: 3px solid var(--color-primary-400);
	}

	.form__input--error {
		outline: 3px solid var(--color-accent-400);
	}

	/* Media query */

	@media screen and (min-width: 40rem) {
		.form {
			flex-direction: row;
			gap: 1.5rem;
			justify-content: stretch;

			padding: 3.25rem 4rem;

			font-size: var(--font-size-400);
		}

		.form::before {
			inset: 0;
			background-image: var(--background-desktop);
		}

		.button,
		.form__input {
			height: 4rem;
			border-radius: 0.5rem;
		}

		.form__input {
			padding-inline: 2rem;
		}

		.error-message {
			font-size: var(--font-size-200);
		}
	}
</style>
