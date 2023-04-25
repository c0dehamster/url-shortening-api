<script>
	import Form from "./Form.svelte"
	import ListItem from "./ListItem.svelte"
</script>

<section class="hero">
	<h1 class="hero__heading">More than just shorter links</h1>

	<p class="hero__description">
		Build your brand’s recognition and get detailed insights on how your
		links are performing.
	</p>

	<button class="button">Get Started</button>
</section>

<div class="form-wrapper">
	<Form />

	<ul class="results">
		<ListItem />
	</ul>
</div>

<section class="services">
	<h2 class="services__heading">Advanced Statistics</h2>

	<p class="services__description">
		Track how your links are performing across the web with our advanced
		statistics dashboard.
	</p>

	<ul class="services__list">
		<li class="card">
			<img src="" alt="" class="card__icon" />
			<h3 class="card__subheading">Brand Recognition</h3>
			<p class="card__description">
				Boost your brand recognition with each click. Generic links
				don’t mean a thing. Branded links help instil confidence in your
				content.
			</p>
		</li>

		<li class="card">
			<img src="" alt="" class="card__icon" />
			<h3 class="card__subheading">Detailed Records</h3>
			<p class="card__description">
				Gain insights into who is clicking your links. Knowing when and
				where people engage with your content helps inform better
				decisions.
			</p>
		</li>

		<li class="card">
			<img src="" alt="" class="card__icon" />
			<h3 class="card__subheading">Fully Customizable</h3>
			<p class="card__description">
				Improve brand awareness and content discoverability through
				customizable links, supercharging audience engagement.
			</p>
		</li>
	</ul>
</section>

<div class="call-to-action">
	<h2 class="call-to-action__heading">Boost your links today</h2>
	<button class="button">Get Started</button>
</div>
