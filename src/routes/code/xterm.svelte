<script lang="ts">
	import { onMount } from 'svelte';
	import { FitAddon } from 'xterm-addon-fit';
	let output = '';
	let terminal;
	let tDiv;
	let pyodide: any;
	export let pyodide_loaded: boolean = false;

	onMount(async () => {
		// terminal = new (await import('xterm')).Terminal();
		// const fitAddon = new FitAddon();
		// terminal.loadAddon(fitAddon);
		// terminal.open(tDiv);
		// fitAddon.fit();
		//@ts-ignore
		pyodide = await loadPyodide();
		pyodide.globals.set('print', (s) => print(s));
		pyodide_loaded = true;
	});

	export async function runCode(code) {
		if (code == '') return;
		if (pyodide_loaded) {
			print(`\n> ${code}`);
			pyodide.runPython(code);
		}
	}
	export function print(str) {
		if (str == '') return;
		output = `${output}\n${str}`;
	}
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"></script>
</svelte:head>

<pre bind:this={tDiv} class="bg-black text-white text-sm p-4 font-mono overflow-y-auto">{output}</pre>
