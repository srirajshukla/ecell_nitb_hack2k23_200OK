<script>
	import { mode } from '../stores/mode';
</script>

<main
	class="py-2 w-full flex items-center px-3 justify-between bg-gray-100 border-b border-gray-50/50"
>
	<section class="flex items-center space-x-4 select-none">
		<h1 class="font-heading text-xl">Watashiato</h1>
	</section>
	<select
		class="form-select appearance-none
      block
      px-3
      py-2
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      rounded
      transition
      ease-in-out
      m-0
	  text-right
      focus:text-gray-700 focus:bg-white focus:outline-none"
		aria-label="Mode Selector"
		bind:value={$mode}
	>
		<option value="markdown" selected>Notes Mode</option>
		<option value="web">Web Mode</option>
		<option value="ide">Python Mode</option>
	</select>
</main>
