<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { md } from '../stores/store';
</script>

<div class="prose p-4">
	<SvelteMarkdown source={$md}/>
</div>
