<script>
	import Form from "./Form.svelte"
	import ListItem from "./ListItem.svelte"

	import illustrationWorking from "../lib/images/illustration-working.svg"
	import iconBrandRecognition from "../lib/images/icon-brand-recognition.svg"
	import iconDetailedRecords from "../lib/images/icon-detailed-records.svg"
	import iconFullyCustomizable from "../lib/images/icon-fully-customizable.svg"
</script>

<section class="hero" style="--background-image: url({illustrationWorking})">
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

<div class="call-to-action">
	<h2 class="call-to-action__heading">Boost your links today</h2>
	<button class="button">Get Started</button>
</div>

<style>
	/* Hero section */

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
	.services__list,
	.call-to-action {
		display: grid;
	}

	.hero {
		position: relative;
		grid-template-areas:
			"illustration illustration"
			"contents contents";
		overflow-x: hidden;

		padding-block-end: 5.5rem;

		row-gap: 2.5rem;
	}

	.hero::before {
		content: "";
		position: relative;
		min-height: 90vw;
		width: 100vw;

		left: 1rem;

		background-image: var(--background-image);
		background-repeat: no-repeat;
		background-size: cover;
	}

	.hero__contents {
		grid-area: contents;

		justify-items: center;
		align-items: baseline;

		text-align: center;
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
</style>
