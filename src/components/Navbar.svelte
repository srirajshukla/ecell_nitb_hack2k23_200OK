<script>
	import { ideMode } from '../stores/ide';
</script>

<main
	class="h-16 w-full flex items-center px-3 justify-between bg-gray-100 border-b border-gray-50/50"
>
	<section class="flex items-center space-x-4 select-none">
		<h1 class="font-heading text-xl">Watashiato</h1>
		<button on:click={() => ideMode.set(!$ideMode)}>
			{#if $ideMode}
				Switch to Dev Mode
			{:else}
				Switch to IDE Mode
			{/if}</button
		>
	</section>
</main>
