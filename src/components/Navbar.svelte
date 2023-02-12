<script>
	import { page } from '$app/stores';
</script>

<main
	class="py-2 w-full flex items-center px-3 justify-between bg-gray-100 border-b border-gray-50/50"
>
	<section class="flex items-center space-x-4 select-none">
		<h1 class="font-heading text-xl">Watashiato</h1>
	</section>

	<section>
		<a href="/web" class={$page.url.pathname === '/web' && 'font-bold bg-gray-300 px-2 p-1 rounded'}
			>Web Mode</a
		>
		<a
			href="/markdown"
			class={$page.url.pathname === '/markdown' && 'font-bold bg-gray-300 px-2 p-1 rounded'}
			>Notes Mode</a
		>
		<a
			href="/python"
			class={$page.url.pathname === '/python' && 'font-bold bg-gray-300 px-2 p-1 rounded'}>IDE Mode</a
		>
	</section>
</main>
