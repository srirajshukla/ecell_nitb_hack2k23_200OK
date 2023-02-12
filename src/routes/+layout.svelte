<script>
	import '../app.postcss';
	import { resizing } from '../stores/store.js';
	import { mode } from '../stores/mode';
	import { page } from '$app/stores';
	import Sidebar from '../components/Sidebar.svelte';
	import Navbar from '../components/Navbar.svelte';

	$: $mode = $page.url.pathname;
</script>

<main class="w-screen h-screen flex flex-col overflow-hidden min-w-[700px] font-mono">
	<Navbar />
	<section class="flex h-full">
		<Sidebar />

		<div class="overflow-y-auto flex-1 relative">
			{#if $resizing}
				<div class="bg-transparent w-full h-full absolute left-0 top-0" />
			{/if}

			<slot />
		</div>
	</section>
</main>

<style>
	:global(.remote-caret) {
		position: absolute;
		border-left: black;
		border-left-style: solid;
		border-left-width: 2px;
		height: 1em;
	}
	:global(.remote-caret > div) {
		position: relative;
		top: -1.05em;
		font-size: 13px;
		user-select: none;
		color: white;
		padding-left: 2px;
		padding-right: 2px;
		z-index: 5;
	}

	:global(.CodeMirror) {
		padding-top: 1rem;
		height: 100%;
		font-size: 16px;
	}

	:global(body) {
		margin: 0;
	}
</style>
