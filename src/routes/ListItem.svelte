<li class="list-item">
	<p class="initial-link">https://www.frontendmentor.io</p>

	<div class="short-link-wrapper">
		<p class="short-link">https://relink/k4lKyk</p>
		<button class="button">Copy</button>
	</div>
</li>

<style>
	.list-item,
	.short-link-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.list-item {
		padding-block: 1rem;
		border-radius: 0.25rem;

		background-color: white;
		box-shadow: 0 0 0.5rem 0.5rem rgb(0 0 0 / 0.05);

		font-size: var(--font-size-200);
	}

	.short-link-wrapper {
		padding-inline: 1rem;
	}

	.initial-link {
		width: 100%;

		padding-inline: 1rem;
		padding-block-end: 0.75rem;

		border-bottom: 1px solid var(--color-neutral-200);

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

	.button--clicked {
		background-color: var(--color-primary-600);
	}

	@media screen and (min-width: 40rem) {
		.list-item,
		.short-link-wrapper {
			flex-direction: row;
			align-items: center;
			gap: 1.5rem;
		}

		.short-link-wrapper {
			padding: 0px;
		}

		.list-item {
			padding-inline: 2rem 1.5rem;

			justify-content: stretch;

			box-shadow: 0 0 1rem 0.5rem rgb(0 0 0 / 0.05);
		}

		.initial-link {
			padding: 0px;
			border: none;
		}
	}
</style>
