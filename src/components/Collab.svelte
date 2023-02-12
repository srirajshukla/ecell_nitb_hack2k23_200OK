<script>
	import * as Y from 'yjs';
	import { CodemirrorBinding } from 'y-codemirror';
	import { WebsocketProvider } from 'y-websocket';
	import Clipboard from 'svelte-clipboard';

	import { PUBLIC_WEBSOCKET_SERVER } from '$env/static/public';

	import { mode } from '../stores/mode';
	import { goto } from '$app/navigation';

	// @ts-nocheck
	import 'codemirror/lib/codemirror.css';
	import 'codemirror/theme/ayu-mirage.css';
	import 'codemirror/mode/python/python';
	import CodeMirror from 'codemirror';
	import { onMount } from 'svelte';
	import * as random from 'lib0/random';

	import { page } from '$app/stores';

	let lobby = $page.url.searchParams.get('lobby');

	let ydoc;
	let provider;
	let yText;
	let yUndoManager;
	let editor;
	let theme = 'ayu-mirage';
	let textArea;

	let connStatus = false;

	const usercolors = [
		{ color: '#03001C', light: '#fff' },
		{ color: '#FB2576', light: '#fff' },
		{ color: '#ffbc42', light: '#fff' }
	];

	const checkCollab = async () => {
		if (!lobby) {
			let id = random.uint32().toString();
			$mode = $page.url.pathname.toString().replace(/\//, '');
			lobby = `${$mode}_${id}`;

			$page.url.searchParams.set('lobby', lobby);
			await goto(`?${$page.url.searchParams.toString()}`);
		}

		ydoc = new Y.Doc();
		provider = new WebsocketProvider(`${PUBLIC_WEBSOCKET_SERVER}/ws/chat`, `${lobby}/`, ydoc);
		yText = ydoc.getText('codemirror');
		yUndoManager = new Y.UndoManager(yText);

		const userColor = usercolors[random.uint32() % usercolors.length];

		provider.awareness.setLocalStateField('user', {
			name: 'Anonymous ' + Math.floor(Math.random() * 5),
			color: userColor.color
		});

		const binding = new CodemirrorBinding(yText, editor, provider?.awareness, { yUndoManager });

		connStatus = true;
	};

	const disableCollab = async () => {
		provider?.disconnect();
		lobby = '';
		connStatus = false;
		$page.url.searchParams.set('lobby', lobby);
		await goto(`?${$page.url.searchParams.toString()}`);
	};

	export let value;
	export let lang;
	export let label;

	onMount(() => {
		editor = CodeMirror.fromTextArea(textArea, {
			lineWrapping: true,
			mode: lang,
			smartIndent: true,
			lineNumbers: true,
			theme: theme,
			scrollbarStyle: 'null'
		});
		editor.focus();

		editor.on('change', () => {
			value = editor.getValue();
		});

		if (lobby) checkCollab();

		return () => {
			editor.toTextArea();
			provider?.destroy();
			lobby = '';
			connStatus = false;
		};
	});
</script>

<div class="editor-container">
	<h3 class="py-2 px-4 text-white text-xs lowercase font-bold bg-gray-900">{label}</h3>
	<div class="bg-slate-900 px-4 py-2 flex items-center justify-between text-white">
		{#if !connStatus}
			<button
				class="py-1 px-2 text-xs uppercase inline-block text-white shadow rounded bg-emerald-900"
				on:click={async () => {
					disableCollab();
					$page.url.searchParams.set('lobby', '');
					await goto(`?${$page.url.searchParams.toString()}`);
					checkCollab();
				}}>Begin collaboration</button
			>
		{/if}

		{#if connStatus}
			<div class="inline-flex items-center">
				<span class="text-sm inline-block">
					Connected to {lobby}
				</span>
				<span class="inline-block ml-2">
					<Clipboard
						text={`${$page.url.toString()}`}
						let:copy
						on:copy={() => {
							console.log('Has Copied');
						}}
					>
						<button on:click={copy}>
							<svg
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
							>
								<path
									clip-rule="evenodd"
									d="M18 5.25a2.25 2.25 0 00-2.012-2.238A2.25 2.25 0 0013.75 1h-1.5a2.25 2.25 0 00-2.238 2.012c-.875.092-1.6.686-1.884 1.488H11A2.5 2.5 0 0113.5 7v7h2.25A2.25 2.25 0 0018 11.75v-6.5zM12.25 2.5a.75.75 0 00-.75.75v.25h3v-.25a.75.75 0 00-.75-.75h-1.5z"
									fill-rule="evenodd"
								/>
								<path
									clip-rule="evenodd"
									d="M3 6a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V7a1 1 0 00-1-1H3zm6.874 4.166a.75.75 0 10-1.248-.832l-2.493 3.739-.853-.853a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.154-.114l3-4.5z"
									fill-rule="evenodd"
								/>
							</svg>
						</button>
					</Clipboard>
				</span>
			</div>
		{/if}
		<button
			class="py-1 px-2 text-xs uppercase inline-block text-white shadow rounded bg-red-900 ml-8"
			on:click={disableCollab}>Disconnect</button
		>
	</div>

	<textarea bind:this={textArea} bind:value readonly />
</div>

<style>
	.editor-container {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: 100%;
		height: 100%;
	}
</style>
