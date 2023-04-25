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

		box-shadow: 0 0 1rem 0.5rem rgb(0 0 0 / 0.05);
	}

	.short-link-wrapper {
		padding-inline: 1rem;
	}

	.initial-link {
		padding-inline: 1rem;
		padding-block-end: 0.75rem;

		border-bottom: 1px solid var(--color-neutral-200);

		color: var(--color-neutral-600);
	}

	.short-link {
		color: var(--color-primary-400);
	}

	.button {
		height: 2.5rem;
		border-radius: 0.25rem;
	}

	/* Active states */

	.button--clicked {
		background-color: var(--color-primary-600);
	}
</style>
