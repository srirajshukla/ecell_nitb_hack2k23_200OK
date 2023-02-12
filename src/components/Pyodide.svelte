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
		console.log(op);
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
		if (loading_pyodide === true) return;
		loading_pyodide = true;
		try {
			console.log('Loading Pyodide...');
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
			console.log('Pyodide loaded successfully');
			pyodide_loaded = true;
		}
		loading_pyodide = false;
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
		<button on:click={load_pyodide} disabled={loading_pyodide}>[Load]</button>
		<span>Loading environment...</span>
	{/if}
	{#if pyodide_loaded}
		<button
			class="bg-emerald-900 text-white rounded inline-flex items-center justify-center py-1 px-3 transition"
			on:click={runCode($code)}
		>
			<svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
			>
				<path
					d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
				/>
			</svg>
			<span class="inline-block ml-2">Run</span>
		</button>
		<button
			class="bg-red-500 text-white rounded inline-flex items-center justify-center py-1 px-3 transition"
			on:click={() => (output = '')}
		>
			<svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
			>
				<path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
				<path
					clip-rule="evenodd"
					d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z"
					fill-rule="evenodd"
				/>
			</svg>
			<span class="inline-block ml-2">Clear Output</span>
		</button>
	{/if}
</div>

{#if pyodide_loaded}
	<pre
		bind:this={tDiv}
		class="block w-full text-sm px-4 pb-8 font-mono overflow-y-auto">{output}</pre>
{/if}
