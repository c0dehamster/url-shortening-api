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
	/* General */

	.form-wrapper {
		padding-inline: var(--padding-inline-outer);
	}

	.form-wrapper,
	.results {
		display: grid;
	}

	/* Form section */

	.form-wrapper {
		width: 100%;
		padding-block-end: 5.5rem;

		gap: 1.5rem;
	}

	.results {
		gap: 1.5rem;
	}
</style>
