<script lang="ts">
	import { onMount } from 'svelte';
	let terminal;
	let tDiv;
	let pyodide: any;
	let pyodide_loaded: boolean = false;

	onMount(async () => {
		terminal = new (await import('xterm')).Terminal();
		terminal.open(tDiv);
		//@ts-ignore
		pyodide = await loadPyodide();
		pyodide.globals.set('print', (s) => terminal.write(s));
		pyodide_loaded = true;
	});

	export async function runCode(code) {
		if (pyodide_loaded) {
			const output = pyodide.runPython(code);
			alert(output);
		} else {
			alert('Pyodide is loading');
		}
	}
	export function showOutput(output) {
		if (output) terminal.write(output);
	}
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"></script>
</svelte:head>

{#if pyodide_loaded}
	<p>Pydodide loaded successfully!</p>
{:else}
	<p>Loading pyodide</p>
{/if}
<div bind:this={tDiv} class="bg-black text-white p-4 font-mono" />
