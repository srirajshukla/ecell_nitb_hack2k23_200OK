<script>
	import * as Y from 'yjs';
	import { onMount } from 'svelte';
	// @ts-ignore
	import { yCollab, yUndoManagerKeymap } from 'y-codemirror.next';
	import { WebsocketProvider } from 'y-websocket';

	import { EditorView, basicSetup } from 'codemirror';
	import { keymap } from '@codemirror/view';
	import { python } from '@codemirror/lang-python';
	import { oneDark } from '@codemirror/theme-one-dark';

	import * as random from 'lib0/random';
	import { EditorState } from '@codemirror/state';
	import { createEventDispatcher } from 'svelte';

	export const usercolors = [
		{ color: '#30bced', light: '#30bced33' },
		{ color: '#6eeb83', light: '#6eeb8333' },
		{ color: '#ffbc42', light: '#ffbc4233' },
		{ color: '#ecd444', light: '#ecd44433' },
		{ color: '#ee6352', light: '#ee635233' },
		{ color: '#9ac2c9', light: '#9ac2c933' },
		{ color: '#8acb88', light: '#8acb8833' },
		{ color: '#1be7ff', light: '#1be7ff33' }
	];

	export const userColor = usercolors[random.uint32() % usercolors.length];
	let dom;
	let view;
	let _mounted = false;

	onMount(() => {
		_mounted = true;

		const ydoc = new Y.Doc();
		const provider = new WebsocketProvider('ws://10.12.0.226:8000/ws/chat', 'lobby/', ydoc);
		const ytext = ydoc.getText('codemirror');

		provider.awareness.setLocalStateField('user', {
			name: 'Anonymous ' + Math.floor(Math.random() * 10),
			color: userColor.color,
			colorLight: userColor.light
		});

		const state = EditorState.create({
			extensions: [
				keymap.of([...yUndoManagerKeymap]),
				basicSetup,
				python(),
				EditorView.lineWrapping,
				yCollab(ytext, provider.awareness),
				oneDark
			]
		});

		view = new EditorView({
			state,
			parent: dom
		});

		return () => {
			_mounted = false;
		};
	});

	export function getCode() {
		return view.state.doc.toString();
	}
</script>

<div bind:this={dom} />
