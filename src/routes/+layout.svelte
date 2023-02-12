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
	:global(.CodeMirror) {
		height: 100%;
		font-size: 14px;
	}

	:global(body) {
		margin: 0;
	}
</style>
