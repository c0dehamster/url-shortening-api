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
		display: grid;
	}

	.header {
		padding-inline: var(--padding-inline-outer);
		padding-block-start: 2.5rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2.5rem;
	}
</style>
