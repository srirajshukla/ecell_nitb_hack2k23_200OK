<script>
	import * as Y from 'yjs';
	import { CodemirrorBinding } from 'y-codemirror';
	import { WebsocketProvider } from 'y-websocket';
	// @ts-nocheck
	import 'codemirror/lib/codemirror.css';
	import 'codemirror/theme/ayu-mirage.css';
	import 'codemirror/mode/python/python';
	import CodeMirror from 'codemirror';
	import { onMount } from 'svelte';

	const ydoc = new Y.Doc();
	const provider = new WebsocketProvider('ws://10.12.0.226:8000/ws/chat', 'lobby/', ydoc);
	const yText = ydoc.getText('codemirror');
	const yUndoManager = new Y.UndoManager(yText);

	export let value;
	export let lang;
	let editor;
	let firstLoad = true;

	let theme;

	theme = 'ayu-mirage';
	if (!firstLoad) {
		editor.setOption('theme', 'ayu-dark');
	}

	let textArea;

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
		const binding = new CodemirrorBinding(yText, editor, provider.awareness, { yUndoManager });
		firstLoad = false;
		return () => {
			editor.toTextArea();
		};
	});
</script>

<div class="editor-container">
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
