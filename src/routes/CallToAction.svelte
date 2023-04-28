<script lang="ts">
	import backgroundCTAMobile from "../lib/images/bg-boost-mobile.svg"
	import backgroundCTADesktop from "../lib/images/bg-boost-desktop.svg"
</script>

<div
	class="call-to-action"
	style="--background-mobile: url({backgroundCTAMobile}); --background-desktop: url({backgroundCTADesktop})">
	<h2 class="call-to-action__heading">Boost your links today</h2>
	<button class="button">Get Started</button>
</div>

<style>
	.call-to-action {
		padding-inline: var(--padding-inline-outer);
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
		background-position: top right;
	}

	.call-to-action__heading {
		color: var(--color-neutral-100);
		font-size: var(--font-size-700);
	}

	/* Media query */

	@media screen and (min-width: 40rem) {
		.call-to-action {
			min-height: 15.5rem;

			gap: 2rem;

			background-image: var(--background-desktop);
			background-size: cover;
		}

		.call-to-action__heading {
			font-size: var(--font-size-800);
		}

		.button {
			font-size: var(--font-size-400);
		}
	}
</style>
