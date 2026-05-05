<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import github from '$lib/images/github.svg';
	import logo from '$lib/images/svelte-logo.svg';
</script>


<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center h-16 px-6 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl border-b border-stone-200/30 dark:border-stone-800/30">
<div class="flex items-center gap-4">
<button class="hover:opacity-70 transition-opacity duration-300 scale-95 transition-transform duration-200">
<span class="material-symbols-outlined text-stone-900 dark:text-stone-100" data-icon="menu">menu</span>
</button>
</div>
<div class="text-lg font-serif tracking-[0.2em] text-stone-900 dark:text-stone-100 uppercase" style="color: brown;">ETHERIA</div>
<div class="flex items-center gap-4">
<button class="hover:opacity-70 transition-opacity duration-300 scale-95 transition-transform duration-200">
<span class="material-symbols-outlined text-stone-900 dark:text-stone-100" data-icon="shopping_bag">shopping_bag</span>
</button>
</div>
</header>


<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
