<script>
	import Hero from "./Hero.svelte"
	import Form from "./Form.svelte"
	import ListItem from "./ListItem.svelte"
	import Services from "./Services.svelte"
	import CallToAction from "./CallToAction.svelte"
</script>

<Hero />

<div class="form-wrapper">
	<Form />

	<ul class="results">
		<ListItem />
		<ListItem />
	</ul>
</div>

<Services />
<CallToAction />

<style>
	.form-wrapper,
	.results {
		display: grid;
		gap: 1.5rem;
	}

	.form-wrapper {
		width: 100%;
		padding-block-end: 5.5rem;
		padding-inline: var(--padding-inline-outer);
	}
</style>
