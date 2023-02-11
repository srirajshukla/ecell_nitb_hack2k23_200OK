<script lang="ts">
	import { onMount } from 'svelte';
	let terminal;
	let pyodide: any;
	let pyodide_loaded: boolean = false;

	// onMount(async () => {
	// 	terminal = new (await import('xterm')).Terminal();
	// 	terminal.open(document.getElementById('terminal'));
	// 	terminal.write('This is the terminal');
	// });
	onMount(async () => {
		//@ts-ignore
		pyodide = await loadPyodide();
		pyodide_loaded = true;
	});

	export async function runCode(code) {
		if (pyodide_loaded) {
			const output = await pyodide.runPythonAsync(code);
			console.log(output)
			// showOutput(output);
		} else {
			alert('Pyodide is loading');
		}
	}
	export function showOutput(output) {
		terminal.write(output);
	}
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"></script>
</svelte:head>

{#if pyodide_loaded}
	<span> Pydodide loaded successfully! </span>
{:else}
	<span> Loading pyodide </span>
{/if}

<div id="terminal" />
