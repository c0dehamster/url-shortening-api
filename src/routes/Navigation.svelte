<script>
	let expanded = false

	$: navContentsClass = `nav-contents ${
		expanded ? "nav-contents--expanded" : ""
	}`

	const onClick = () => (expanded = !expanded)
</script>

<nav class="navigation">
	<button class="button-icon" aria-expanded={expanded} on:click={onClick}>
		<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"
			><path
				d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
				fill="#69707D"
				fill-rule="evenodd" /></svg>
		<span class="sr-only">Menu</span>
	</button>

	{#if expanded}
		<div
			class="backdrop"
			on:click={onClick}
			on:keydown={e => {
				if (e.key === "Escape") onClick()
			}} />
	{/if}

	<div class={navContentsClass}>
		<ul class="nav-links">
			<li class="nav-links__list-item">
				<a href="#0" class="link">Features</a>
			</li>

			<li class="nav-links__list-item">
				<a href="#0" class="link">Pricing</a>
			</li>

			<li class="nav-links__list-item">
				<a href="#0" class="link">Resources</a>
			</li>
		</ul>

		<div class="my-account">
			<button class="link">Login</button>
			<button class="button">Sign Up</button>
		</div>
	</div>
</nav>

<style>
	.navigation,
	.nav-contents,
	.nav-links,
	.my-account {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.button-icon {
		display: none;
	}

	.navigation {
		flex: 1;
	}

	.backdrop {
		display: none;
	}

	.nav-contents {
		flex: 1;
	}

	.nav-contents,
	.my-account,
	.nav-links {
		gap: clamp(1rem, 4.3vw, 2rem);
	}

	.nav-links {
		list-style: none;
	}

	.link {
		color: var(--color-neutral-400);
		background-color: transparent;

		transition: color 100ms ease-in;
	}

	.button {
		width: fit-content;
		padding-inline: 1.5rem;
		height: 2.5rem;
		border-radius: 1.25rem;
	}

	/* Active states */

	.link:hover,
	.link:focus {
		color: var(--color-neutral-600);
	}

	@media screen and (max-width: 44rem) {
		.navigation {
			justify-content: end;
		}

		.button-icon {
			display: block;
			position: relative;
			z-index: 100;
		}

		.nav-links,
		.nav-contents,
		.my-account {
			flex-direction: column;
		}

		.backdrop {
			display: block;
			position: fixed;
			inset: 0;
		}

		.nav-contents {
			position: fixed;
			inset-inline: 1.5rem;
			top: 6rem;
			transform: translateY(-100%);
			z-index: -1;

			padding: 2.5rem 1.5rem;
			border-radius: 0.5rem;

			flex-direction: column;

			background-color: var(--color-primary-600);
			opacity: 0;
		}

		.nav-contents--expanded {
			z-index: 20;
			transition: 200ms ease-in;

			transform: translateY(0%);

			opacity: 1;
		}

		.nav-links {
			width: 100%;
			padding-block-end: 2rem;
			border-bottom: 1px solid var(--color-neutral-400);
		}

		.link {
			color: var(--color-neutral-100);
			font-size: var(--font-size-400);
			font-weight: var(--font-weight-bold);
		}

		/* Active states */

		.link:hover,
		.link:focus {
			color: var(--color-primary-400);
		}
	}
</style>
