<script>
</script>

<nav class="navigation">
	<button class="button-icon">
		<svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"
			><path
				d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
				fill="#69707D"
				fill-rule="evenodd" /></svg>
		<span class="sr-only">Menu</span>
	</button>

	<div class="nav-contents">
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

	.nav-contents {
		flex: 1;
	}

	.my-account,
	.nav-links {
		gap: 2rem;
	}

	.nav-links {
		list-style: none;
	}
</style>
