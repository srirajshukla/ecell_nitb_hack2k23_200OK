<script>
	import { resizing, html, css, js } from '../stores/store.js';
	import { mode } from '../stores/mode.js';
	import { onMount } from 'svelte';
	import Sidebar from '../components/Sidebar.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Pyodide from '../components/Pyodide.svelte';
	import Markdown from '../components/Markdown.svelte';

	let srcDoc;
	let cooldownTimer;
	let firstLoad = true;

	onMount(() => {
		setTimeout(() => {
			firstLoad = false;
		}, 1400);
		window.addEventListener('message', (e) => {
			const data = e.data;
		});
	});

	$: {
		clearTimeout(cooldownTimer);
		cooldownTimer = setTimeout(async () => {
			srcDoc =
				'<ht' +
				"ml lang='en'>" +
				'<he' +
				'ad>' +
				'<me' +
				"ta charset='UTF-8'" +
				'>' +
				'<me' +
				"ta name='viewport' content='width=device-width, initial-scale=1.0'" +
				'>' +
				'<ti' +
				'tle>Document</ti' +
				'tle>' +
				'</he' +
				'ad>' +
				'<bo' +
				`dy>${$html}</bo` +
				'dy>' +
				'<st' +
				`yle>${$css}</st` +
				'yle>' +
				'<sc' +
				`ript>${$js}</scr` +
				'ipt>' +
				'</h' +
				'tml>';
		}, 400);
	}
</script>

<main class="w-screen h-screen flex flex-col overflow-hidden min-w-[700px] font-mono">
	<Navbar />
	<section class="flex h-full">
		<Sidebar />

		<div class="overflow-y-auto flex-1 relative">
			{#if $resizing}
				<div class="bg-transparent w-full h-full absolute left-0 top-0" />
			{/if}
			{#if $mode === 'ide'}
				<Pyodide />
			{:else if $mode === 'web'}
				<iframe
					srcdoc={srcDoc}
					sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
					title="output"
					frameborder="0"
					width="100%"
					height="100%"
				/>
			{:else}
				<Markdown />
			{/if}
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
