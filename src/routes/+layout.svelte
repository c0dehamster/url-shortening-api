<script>
	import "./style.css"

	import Navigation from "./Navigation.svelte"
	import Footer from "./Footer.svelte"

	import logo from "../lib/images/logo.svg"
</script>

<div class="app">
	<header class="header">
		<img src={logo} alt="Shortly" class="logo" />
		<a href="#main" class="sr-only">Skip to content</a>

		<Navigation />
	</header>

	<main class="wrapper" id="main">
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app,
	.wrapper {
		position: relative;

		display: grid;
	}

	.app {
		width: fit-content;
		background-color: var(--color-neutral-100);
	}

	.app::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 58rem;

		background-color: white;
	}

	.header {
		position: relative;
		padding-block: 2.5rem 1.5rem;
		padding-inline: var(--padding-inline-outer);
		z-index: 10;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2.5rem;

		background-color: white;
	}

	.wrapper {
		justify-items: center;
	}
</style>
