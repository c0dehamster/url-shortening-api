<script>
	import illustrationWorking from "../lib/images/illustration-working.svg"
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

<style>
	.hero {
		width: 100%;
		position: relative;
		padding-block-end: 5.5rem;

		display: grid;
		grid-template-areas:
			"illustration illustration"
			"contents contents";
		justify-items: center;

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
		max-width: 75vw; /* To improve readability on intermediate screens */
		padding-inline: var(--padding-inline-outer);

		display: grid;
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

	@media screen and (min-width: 72rem) {
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
	}
</style>
