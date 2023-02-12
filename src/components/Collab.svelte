<script>
	import * as Y from 'yjs';
	import { CodemirrorBinding } from 'y-codemirror';
	import { WebsocketProvider } from 'y-websocket';

	import { PUBLIC_WEBSOCKET_SERVER } from '$env/static/public';

	// @ts-nocheck
	import 'codemirror/lib/codemirror.css';
	import 'codemirror/theme/ayu-mirage.css';
	import 'codemirror/mode/python/python';
	import CodeMirror from 'codemirror';
	import { onMount } from 'svelte';
	import * as random from 'lib0/random';

	import { lobby } from '../stores/mode';

	let ydoc;
	let provider;
	let yText;
	let yUndoManager;
	let editor;
	let theme = 'ayu-mirage';
	let textArea;

	const usercolors = [
		{ color: '#30bced', light: '#fff' },
		{ color: '#6eeb83', light: '#fff' },
		{ color: '#ffbc42', light: '#fff' },
		{ color: '#ecd444', light: '#fff' },
		{ color: '#ee6352', light: '#fff' },
		{ color: '#9ac2c9', light: '#fff' },
		{ color: '#8acb88', light: '#fff' },
		{ color: '#1be7ff', light: '#fff' }
	];

	const initiateCollab = () => {
		ydoc = new Y.Doc();
		$lobby = random.uint32().toString();
		provider = new WebsocketProvider(`${PUBLIC_WEBSOCKET_SERVER}/ws/chat`, `${$lobby}/`, ydoc);
		yText = ydoc.getText('codemirror');
		yUndoManager = new Y.UndoManager(yText);

		const userColor = usercolors[random.uint32() % usercolors.length];

		provider.awareness.setLocalStateField('user', {
			name: 'Anonymous ' + Math.floor(Math.random() * 10),
			color: userColor.color,
			colorLight: userColor.light
		});

		const binding = new CodemirrorBinding(yText, editor, provider.awareness, { yUndoManager });
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
		return () => {
			editor.toTextArea();
		};
	});
</script>

<div class="editor-container">
	<h3 class="py-1 px-4 text-white text-xs lowercase font-bold bg-gray-900">{label}</h3>
	<button on:click={initiateCollab}>Connect to lobby</button>
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
