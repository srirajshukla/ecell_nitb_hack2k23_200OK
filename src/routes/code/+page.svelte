<script>
	import CodeMirror from './CodeMirror.svelte';
	import Terminal from './xterm.svelte';

	let editor;
	let terminal;
</script>

<div class="p-4 bg-gray-800 text-white text-lg">
	<button
		class="bg-green-500 rounded-lg flex items-center justify-center p-2 w-24 h-12 hover:bg-green-600 transition font-bold"
		on:click={() => terminal.runCode(editor.getCode())}
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
</div>

<div class="h-screen bg-[#282c34] md:flex">
	<div class="flex-grow">
		<CodeMirror bind:this={editor} />
	</div>
	<div class="self-end md:h-screen h-[30vh] font-mono md:w-[30vw] bg-black text-white">
		<Terminal bind:this={terminal} />
	</div>
</div>