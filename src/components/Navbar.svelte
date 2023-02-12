<script>
	import { lobby, mode } from '../stores/mode';
	import { page } from '$app/stores';
	import * as random from 'lib0/random';
</script>

<main
	class="py-2 w-full flex items-center px-3 justify-between bg-gray-100 border-b border-gray-50/50"
>
	<section class="flex items-center space-x-4 select-none">
		<h1 class="font-heading text-xl">Watashiato</h1>
	</section>

	<section>
		<a href="/web">Web Mode</a>
		<a href="/markdown">Notes Mode</a>
		<a href="/python">Python Mode</a>
	</section>
</main>
