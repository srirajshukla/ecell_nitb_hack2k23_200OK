<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { md } from '../stores/store';
</script>

<div class="p-4 bg-gray-900 h-full w-full">
	<div class="prose prose-invert">

	<SvelteMarkdown source={$md}/>
	</div>
</div>
