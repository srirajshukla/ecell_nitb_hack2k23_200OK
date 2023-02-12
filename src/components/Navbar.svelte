<script>
	import { ideMode } from '../stores/ide';
</script>

<main
	class="py-2 w-full flex items-center px-3 justify-between bg-gray-100 border-b border-gray-50/50"
>
	<section class="flex items-center space-x-4 select-none">
		<h1 class="font-heading text-xl">Watashiato</h1>
	</section>
	{#if $ideMode}
		<button
			class="bg-slate-300 rounded-lg flex items-center justify-center py-2 px-4 h-12 hover:bg-slate-400 transition"
			on:click={() => ideMode.set(!$ideMode)}
		>
			Switch to Dev Mode
		</button>
	{:else}
		<button
			class="bg-slate-300 rounded-lg flex items-center justify-center py-2 px-4 h-12 hover:bg-slate-400 transition"
			on:click={() => ideMode.set(!$ideMode)}
		>
			Switch to IDE Mode
		</button>
	{/if}
</main>
