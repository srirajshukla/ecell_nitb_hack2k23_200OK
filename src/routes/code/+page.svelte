<script>
	import CodeMirror, { basicSetup } from './CodeMirror.svelte';

	let store;

	function changeHandler({ detail: { tr } }) {
		console.log('change', tr.changes.toJSON());
	}
</script>

<div>
	<CodeMirror
		doc={'Edit me!\nAnd here is the second line!!'}
		bind:docStore={store}
		extensions={basicSetup}
		on:change={changeHandler}
	/>
</div>

<style>
	:global(.codemirror) {
		border: 1px solid #ddd;
	}
</style>
