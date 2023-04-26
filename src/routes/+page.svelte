<script>
	import Form from "./Form.svelte"
	import ListItem from "./ListItem.svelte"

	import illustrationWorking from "../lib/images/illustration-working.svg"
	import iconBrandRecognition from "../lib/images/icon-brand-recognition.svg"
	import iconDetailedRecords from "../lib/images/icon-detailed-records.svg"
	import iconFullyCustomizable from "../lib/images/icon-fully-customizable.svg"
	import backgroundCTAMobile from "../lib/images/bg-boost-mobile.svg"
	import backgroundCTADesktop from "../lib/images/bg-boost-desktop.svg"
</script>

<section class="hero" style="--background-image: url({illustrationWorking})">
	<!-- Dummy div to work around the weirdly offset image -->
	<div class="hero__illustration" />

	<div class="hero__contents">
		<h1 class="hero__heading">More than just shorter links</h1>

		<p class="hero__description">
			Build your brand’s recognition and get detailed insights on how your
			links are performing.
		</p>

		<button class="button">Get Started</button>
	</div>
</section>

<div class="form-wrapper">
	<Form />

	<ul class="results">
		<ListItem />
		<ListItem />
	</ul>
</div>

<section class="services">
	<h2 class="services__heading">Advanced Statistics</h2>

	<p class="services__description">
		Track how your links are performing across the web with our advanced
		statistics dashboard.
	</p>

	<ul class="services__list">
		<li class="card">
			<div class="card__icon-wrapper">
				<img src={iconBrandRecognition} alt="" class="card__icon" />
			</div>

			<h3 class="card__heading">Brand Recognition</h3>
			<p class="card__description">
				Boost your brand recognition with each click. Generic links
				don’t mean a thing. Branded links help instil confidence in your
				content.
			</p>
		</li>

		<li class="card">
			<div class="card__icon-wrapper">
				<img src={iconDetailedRecords} alt="" class="card__icon" />
			</div>

			<h3 class="card__heading">Brand Recognition</h3>
			<p class="card__description">
				Boost your brand recognition with each click. Generic links
				don’t mean a thing. Branded links help instil confidence in your
				content.
			</p>
		</li>

		<li class="card">
			<div class="card__icon-wrapper">
				<img src={iconFullyCustomizable} alt="" class="card__icon" />
			</div>

			<h3 class="card__heading">Brand Recognition</h3>
			<p class="card__description">
				Boost your brand recognition with each click. Generic links
				don’t mean a thing. Branded links help instil confidence in your
				content.
			</p>
		</li>
	</ul>
</section>

<div
	class="call-to-action"
	style="--background-mobile: url({backgroundCTAMobile}); --background-desktop: url({backgroundCTADesktop})">
	<h2 class="call-to-action__heading">Boost your links today</h2>
	<button class="button">Get Started</button>
</div>

<style>
	/* General */

	.hero__contents,
	.form-wrapper,
	.services,
	.call-to-action {
		padding-inline: var(--padding-inline-outer);
	}

	.hero,
	.hero__contents,
	.form-wrapper,
	.results,
	.services,
	.services__list {
		display: grid;
	}

	.button {
		height: 3.5rem;
		border-radius: 1.75rem;
		padding-inline: 2.5rem;

		font-size: var(--font-size-200);
	}

	/* Hero section */

	.hero {
		width: 100%;
		position: relative;
		grid-template-areas:
			"illustration illustration"
			"contents contents";

		padding-block-end: 5.5rem;

		row-gap: 2.5rem;
	}

	.hero__illustration {
		height: min(87vw, 40rem);
		width: 100%;
		position: relative;
		grid-area: illustration;
	}

	.hero__illustration::before {
		content: "";
		position: absolute;
		inset: 0 0 0 8%;

		background-image: var(--background-image);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.hero__contents {
		grid-area: contents;

		justify-items: center;
		align-items: baseline;

		text-align: center;
	}

	.hero__heading {
		padding-block-end: 1rem;
		font-size: var(--font-size-heading-responsive);
	}

	.hero__description {
		padding-block-end: 2rem;
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

	/* Services */

	.services {
		text-align: center;
		padding-block-end: 5rem;
	}

	.services__heading {
		padding-block-end: 1.5rem;
	}

	.services__description {
		padding-block-end: 5.75rem;
	}

	.services__list {
		gap: 5.75rem;
	}

	/* Service card */

	.card {
		position: relative;

		padding-inline: 2rem;
		padding-block-end: 2.5rem;
		padding-block-start: 5rem;

		display: grid;
		gap: 1rem;
		justify-items: center;

		border-radius: 0.25rem;

		background-color: white;
	}

	.card:not(:last-child)::before {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		height: 6rem;
		width: 0.5rem;

		background-color: var(--color-primary-400);
	}

	.card__icon-wrapper {
		position: absolute;
		transform: translateY(-50%);

		width: 5.5rem;
		aspect-ratio: 1;
		border-radius: 50%;

		display: grid;
		place-items: center;

		background-color: var(--color-primary-600);
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
		/* Hero section */

		.hero {
			padding-block-end: 4.5rem;
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				"contents illustration"
				"contents illustration";

			align-items: center;
		}

		.hero__illustration {
			height: 33.3vw;
		}

		.hero__contents {
			padding-inline: var(--padding-inline-outer) 0px;

			justify-items: start;
			text-align: start;
		}

		.hero__description {
			font-size: var(--font-size-500);
		}

		.button {
			font-size: var(--font-size-400);
		}

		/* Form wrapper */
	}
</style>
