<script>
	import { resizing, html, css, js } from '../../stores/store.js';
	import { onMount } from 'svelte';

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

<iframe
	{srcDoc}
	sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation"
	title="output"
	frameborder="0"
	width="100%"
	height="100%"
/>

<svelte:head>
	<title>Web Mode | Watashiato</title>
</svelte:head>