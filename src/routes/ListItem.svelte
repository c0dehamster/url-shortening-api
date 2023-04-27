<script>
	let copied = false

	const onCopy = () => (copied = !copied)

	$: buttonClass = `button ${copied ? "button--copied" : ""}`
	$: buttonText = !copied ? "Copy" : "Copied!"
</script>

<li class="list-item">
	<div class="list-item__align-left">
		<div class="initial-link-wrapper">
			<p class="initial-link">https://www.frontendmentor.io</p>
		</div>
	</div>

	<div class="list-item__align-right">
		<p class="short-link">https://relink/k4lKyk</p>
		<button class={buttonClass} on:click={onCopy}>{buttonText}</button>
	</div>
</li>

<style>
	.list-item,
	.list-item__align-right {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.list-item {
		padding-block: 1rem;
		border-radius: 0.25rem;

		background-color: white;
		box-shadow: 0 0 0.5rem 0.5rem rgb(0 0 0 / 0.05);

		overflow-x: hidden;

		font-size: var(--font-size-200);
	}

	.list-item__align-left {
		flex: 1;
		position: relative;
		overflow-x: hidden;
	}

	.list-item__align-left::before {
		/* Text fadeout in case of overflow */

		content: "";
		width: 4rem;
		position: absolute;
		z-index: 1;
		right: 0;
		inset-block: 0;

		background: linear-gradient(to right, transparent, white);
	}

	.initial-link-wrapper {
		border-bottom: 1px solid var(--color-neutral-200);

		overflow-x: scroll;
	}

	.list-item__align-right {
		padding-inline: 1rem;
	}

	/* Scrollbar */

	.initial-link-wrapper::-webkit-scrollbar {
		height: 0.25rem;
	}

	.initial-link-wrapper::-webkit-scrollbar-track {
		background-color: white;
	}

	.initial-link-wrapper::-webkit-scrollbar-thumb {
		border: none;
		border-radius: 0.125rem;
		background-color: var(--color-primary-400);
	}

	.initial-link {
		width: 100%;

		padding-inline: 1rem;
		padding-block-end: 0.75rem;

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

	.button--copied {
		background-color: var(--color-primary-600);
	}

	.button--copied::before {
		display: none;
	}

	@media screen and (min-width: 50rem) {
		.list-item,
		.list-item__align-right {
			flex-direction: row;
			align-items: center;
			gap: 1.5rem;
		}

		.list-item__align-right {
			padding: 0px;
		}

		.list-item {
			padding-inline: 2rem 1.5rem;

			justify-content: stretch;

			box-shadow: 0 0 1rem 0.5rem rgb(0 0 0 / 0.05);
		}

		.initial-link-wrapper {
			border: none;
		}

		.initial-link {
			padding: 0px;
		}
	}
</style>
