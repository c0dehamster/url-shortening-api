<script lang="ts">
	import iconBrandRecognition from "../lib/images/icon-brand-recognition.svg"
	import iconDetailedRecords from "../lib/images/icon-detailed-records.svg"
	import iconFullyCustomizable from "../lib/images/icon-fully-customizable.svg"
</script>

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

			<h3 class="card__heading">Detailed Records</h3>
			<p class="card__description">
				Gain insights into who is clicking your links. Knowing when and
				where people engage with your content helps inform better
				decisions.
			</p>
		</li>

		<li class="card">
			<div class="card__icon-wrapper">
				<img src={iconFullyCustomizable} alt="" class="card__icon" />
			</div>

			<h3 class="card__heading">Fully Customizable</h3>
			<p class="card__description">
				Improve brand awareness and content discoverability through
				customizable links, supercharging audience engagement.
			</p>
		</li>
	</ul>
</section>

<style>
	.services {
		padding-inline: var(--padding-inline-outer);
		display: grid;

		justify-items: center;
		text-align: center;
		padding-block-end: 4.5rem;

		line-height: 1.6;
	}

	.services__heading {
		padding-block-end: 1.5rem;
	}

	.services__description {
		max-width: 33rem;
		padding-block-end: 3.5rem;

		font-size: var(--font-size-200);
	}

	.services__list {
		padding-block-start: 2.75rem;

		position: relative;

		display: grid;
		gap: 5.75rem;
	}

	.services__list::before {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);

		width: 0.5rem;

		background-color: var(--color-primary-400);
	}

	/* Service card */

	.card {
		position: relative;

		padding-inline: 2rem;
		padding-block: 5rem 2.5rem;

		display: grid;
		gap: 1rem;
		justify-items: center;

		border-radius: 0.25rem;

		background-color: white;
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

	.card__heading {
		font-size: var(--font-size-450);
	}

	.card__description {
		font-size: var(--font-size-200);
	}

	/* Media query */

	@media screen and (min-width: 40rem) {
		/* Services */

		.services__heading {
			font-size: var(--font-size-800);
		}

		.services__description {
			font-size: var(--font-size-300);
		}
	}

	@media screen and (min-width: 72rem) {
		.services {
			padding-block-end: 7rem;
		}

		.services__list {
			grid-template-columns: 1fr 1fr 1fr;
			gap: 2rem;
		}

		.services__list::before {
			inset-block: 50%;
			inset-inline: 0;
			transform: translateY(-50%);

			width: 100%;
			height: 0.5rem;

			background-color: var(--color-primary-400);
		}

		.card {
			padding-block-start: 4.5rem;
			justify-items: start;
			text-align: start;
		}

		.card:first-child {
			margin-block-end: 5.5rem;
		}

		.card:nth-child(2) {
			margin-block: 2.75rem 2.75rem;
		}

		.card:nth-child(3) {
			margin-block-start: 5.5rem;
		}

		.card__icon-wrapper {
			left: 2rem;
		}
	}
</style>
