<script lang="ts">
	import { onMount } from 'svelte';
	import { code } from '../stores/store';
	let tDiv;
	let pyodide = null;
	let pyodide_loaded = false;
	let loading_pyodide = false;

	export let output = '';
	function showStdOut(op) {
		output = output + op + '\n';
	}
	function showStdErr(err) {
		output = output + 'Err:' + err + '\n';
	}

	onMount(async () => {
		load_pyodide();

		return () => {
			pyodide_loaded = false;
			loading_pyodide = false;
		};
	});

	async function load_pyodide() {
		if (pyodide_loaded) return;

		try {
			loading_pyodide = true;
			pyodide = await loadPyodide({
				indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.22.1/full/',
				stdout: showStdOut,
				stderr: showStdErr
			});
		} catch (e) {
			console.error(e);
		}

		if (pyodide) {
			pyodide_loaded = true;
			loading_pyodide = false;
		}
	}

	export async function runCode() {
		if ($code == '') return;
		if (pyodide_loaded) {
			showStdOut(`\n> ${$code}`);
			let result = await pyodide.runPython($code);
		}
	}
	// export function print(str) {
	// 	if (str == '') return;
	// 	output = `${output}\n${str}`;
	// }
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/pyodide/v0.22.1/full/pyodide.js"></script>
</svelte:head>

<div class="p-4">
	{#if !pyodide_loaded}
		<button
			class="bg-slate-300 rounded-lg flex items-center justify-center py-2 px-4 h-12 hover:bg-slate-400 transition"
			on:click={load_pyodide}>Load Pyodide</button
		>
		{#if !loading_pyodide}
			<span>Loading pyodide...</span>
		{/if}
	{/if}
	{#if pyodide_loaded}
		<button
			class="bg-green-500 disabled:bg-gray-400 rounded-lg flex items-center justify-center p-2 w-24 h-12 hover:bg-green-600 transition font-bold"
			disabled={!pyodide_loaded}
			on:click={runCode($code)}
		>
			<svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
			>
				<path
					d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
				/>
			</svg>
			<span class="inline-block ml-2">Run</span>
		</button>
	{/if}
</div>

{#if pyodide_loaded}
	<pre bind:this={tDiv} class="block w-full text-sm px-4 pb-8 font-mono overflow-y-auto">{output}</pre>
{/if}
