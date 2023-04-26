<script>
	import Hero from "./Hero.svelte"
	import Form from "./Form.svelte"
	import ListItem from "./ListItem.svelte"
	import Services from "./Services.svelte"

	import backgroundCTAMobile from "../lib/images/bg-boost-mobile.svg"
	import backgroundCTADesktop from "../lib/images/bg-boost-desktop.svg"
</script>

<Hero />

<div class="form-wrapper">
	<Form />

	<ul class="results">
		<ListItem />
		<ListItem />
	</ul>
</div>

<Services />

<div
	class="call-to-action"
	style="--background-mobile: url({backgroundCTAMobile}); --background-desktop: url({backgroundCTADesktop})">
	<h2 class="call-to-action__heading">Boost your links today</h2>
	<button class="button">Get Started</button>
</div>

<style>
	/* General */

	.form-wrapper,
	.call-to-action {
		padding-inline: var(--padding-inline-outer);
	}

	.form-wrapper,
	.results {
		display: grid;
	}

	.button {
		height: 3.5rem;
		border-radius: 1.75rem;
		padding-inline: 2.5rem;

		font-size: var(--font-size-200);
	}

	/* Form section */

	.form-wrapper {
		width: 100%;
		padding-block-end: 5.5rem;

		gap: 1.5rem;
	}

	.results {
		gap: 1.5rem;
	}

	/* Call to action */

	.call-to-action {
		width: 100%;
		min-height: 18.75rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		background-color: var(--color-primary-600);
		background-image: var(--background-mobile);
		background-size: contain;
		background-repeat: no-repeat;
	}

	.call-to-action__heading {
		color: var(--color-neutral-100);

		font-size: var(--font-size-700);
	}

	/* Media query */

	@media screen and (min-width: 40rem) {
	}

	@media screen and (min-width: 72rem) {
		.button {
			font-size: var(--font-size-400);
		}
	}
</style>
