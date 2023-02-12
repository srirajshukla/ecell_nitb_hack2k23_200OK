<script>
	// @ts-nocheck
	import 'codemirror/lib/codemirror.css';
	import 'codemirror/theme/ayu-mirage.css';
	import 'codemirror/mode/javascript/javascript';
	import 'codemirror/mode/markdown/markdown';
	import 'codemirror/mode/css/css';
	import 'codemirror/mode/xml/xml';
	import 'codemirror/mode/python/python';
	import 'codemirror/addon/fold/xml-fold.js';
	import 'codemirror/addon/edit/closetag.js';
	import 'codemirror/addon/edit/closebrackets.js';
	import CodeMirror from 'codemirror';
	import { onMount } from 'svelte';

	export let value;
	export let lang;
	export let label;
	let editor;

	let theme = 'ayu-mirage';

	let textArea;

	onMount(() => {
		editor = CodeMirror.fromTextArea(textArea, {
			lineWrapping: true,
			mode: lang,
			smartIndent: true,
			lineNumbers: true,
			theme: theme,
			scrollbarStyle: 'null',
			autoCloseTags: true,
			autoCloseBrackets: {
				pairs: '()[]{}\'\'""',
				explode: '()[]{}\'\'""><'
			}
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
