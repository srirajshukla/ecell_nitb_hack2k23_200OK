<script>
	import CodeMirror from './CodeMirror.svelte';
	import Terminal from './xterm.svelte';

	let editor;
	let terminal;
	let pd;
</script>

<div class="h-screen bg-[#282c34] md:flex">
	<div class="flex-grow">
		<div class="p-4 bg-gray-800 text-white text-lg flex items-center">
			<button
				class="bg-green-500 disabled:bg-gray-500 rounded-lg flex items-center justify-center p-2 w-24 h-12 hover:bg-green-600 transition font-bold"
				on:click={() => terminal.runCode(editor.getCode())}
				disabled={!pd}
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
			{#if !pd}
				<span class="text-sm inline-block ml-2">Loading Pyodide...</span>
			{/if}
		</div>
		<CodeMirror bind:this={editor}/>
	</div>
	<div
		class="self-end md:h-screen h-[30vh] overflow-y-auto font-mono md:w-[30vw] bg-black text-white"
	>
		<Terminal bind:this={terminal} bind:pyodide_loaded={pd}/>
	</div>
</div>
