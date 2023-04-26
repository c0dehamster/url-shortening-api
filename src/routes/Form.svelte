<script>
	import backgroundMobile from "../lib/images/bg-shorten-mobile.svg"
	import backgroundDesktop from "../lib/images/bg-shorten-desktop.svg"

	let error = false

	const onSubmit = () => {}

	$: inputClass = `form__input ${error ? "form__input--error" : ""}`
</script>

<form
	action=""
	class="form"
	style="--background-mobile: url({backgroundMobile}); --background-desktop: url({backgroundDesktop})"
	on:submit|preventDefault={onSubmit}>
	<input
		type="text"
		class={inputClass}
		placeholder="Shorten a link here..." />

	{#if error}
		<p class="error-message">Please add a link</p>
	{/if}

	<button class="button">Shorten it!</button>
</form>

<style>
	.form {
		position: relative;
		width: 100%;
		padding: 1.5rem;

		display: flex;
		flex-direction: column;
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

	.form__input {
		padding-inline: 1.5rem;

		transition: outline 100ms linear;
	}

	.error-message {
		padding-block: 0.25rem;
	}

	.button {
		margin-block-start: 1rem;
	}

	/* Active states */

	.form__input:hover,
	.form__input:focus {
		outline: 3px solid var(--color-primary-400);
	}

	.form__input--error {
		outline: 3px solid var(--color-accent-400);
	}
</style>
