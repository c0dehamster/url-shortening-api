<script>
	import "./style.css"

	import Navigation from "./Navigation.svelte"
	import Footer from "./Footer.svelte"
</script>

<div class="app">
	<header class="header">
		<Navigation />
	</header>

	<slot />

	<Footer />
</div>
