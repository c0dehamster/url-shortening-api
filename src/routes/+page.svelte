<script lang="ts">
	import Hero from "./Hero.svelte"
	import Form from "./Form.svelte"
	import ListItem from "./ListItem.svelte"
	import Services from "./Services.svelte"
	import CallToAction from "./CallToAction.svelte"

	import { ResultsStore } from "./stores"

	// I don't know the right way to type event parameters

	const onDelete = (e: CustomEvent<string>) =>
		ResultsStore.removeItem(e.detail)
</script>

<Hero />

<div class="form-wrapper">
	<Form />

	{#if $ResultsStore.items.length > 0}
		<ul class="results">
			{#each $ResultsStore.items as item}
				<ListItem {...item} on:delete={onDelete} />
			{/each}
		</ul>
	{/if}
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
		padding-block-end: 7.5rem;
		padding-inline: var(--padding-inline-outer);
	}
</style>
