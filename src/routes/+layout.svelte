<script>
	import "./style.css"

	import Navigation from "./Navigation.svelte"
	import Footer from "./Footer.svelte"

	import logo from "../lib/images/logo.svg"
</script>

<div class="app">
	<header class="header">
		<img src={logo} alt="Shortly" class="logo" />

		<Navigation />
	</header>

	<slot />

	<Footer />
</div>
