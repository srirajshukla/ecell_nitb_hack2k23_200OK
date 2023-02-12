<script>
	import Editor from './Editor.svelte';
	import Collab from './Collab.svelte';
	import { Pane, Splitpanes } from 'svelte-splitpanes';
	import { resizing, html, css, js, md, code } from '../stores/store.js';
	import { onMount } from 'svelte';

	import { mode } from '../stores/mode';

	let sidebar;

	function handleSidebarResize() {
		$resizing = true;
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);

		function handleMouseMove(e) {
			if (e.clientX > 300) {
				sidebar.style.width = e.clientX + 'px';
				document.body.style.cursor = 'col-resize';
			}
		}
		function handleMouseUp() {
			$resizing = false;
			document.body.style.cursor = 'auto';
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		}
	}

	onMount(() => {
		let splitters = document.querySelectorAll('.splitpanes__splitter');

		for (let i = 0; i < splitters.length; i++) {
			switch (i) {
				case 0:
					splitters[i].classList.add('html-splitter');
					break;
				case 1:
					splitters[i].classList.add('js-splitter');
					break;
				case 2:
					splitters[i].classList.add('css-splitter');
					break;
			}
		}
	});
</script>

<section bind:this={sidebar} class="flex min-w-[380px] w-[472px]">
	{#if $mode === 'web'}
		<Splitpanes horizontal={true} theme="own" firstSplitter={true}>
			<Pane maxSize={100}>
				<Editor lang={'xml'} bind:value={$html} />
			</Pane>

			<Pane maxSize={100}>
				<Editor lang={'javascript'} bind:value={$js} />
			</Pane>

			<Pane maxSize={100}>
				<Editor lang={'css'} bind:value={$css} />
			</Pane>
		</Splitpanes>
	{:else if $mode === 'ide'}
		<div class="w-full ide__splitter">
			<Collab lang={'python'} bind:value={$code} />
		</div>
	{:else}
		<div class="w-full markdown_splitter">
			<Editor lang={'markdown'} bind:value={$md} />
		</div>
	{/if}
	<div
		on:mousedown={handleSidebarResize}
		class="flex h-full w-[14px] cursor-col-resize border-x items-center"
	>
		<div class="rotate-90" />
	</div>
</section>

<style>
	:global(.CodeMirror-gutters) {
		background: transparent;
		border: none;
	}
	:global(.splitpanes__splitter) {
		height: 44px;
		position: relative;
		cursor: row-resize;
	}
	:global(.splitpanes__splitter:before, .ide__splitter:before) {
		display: flex;
		align-items: center;
		padding-left: 50px;
		height: 100%;
		background-repeat: no-repeat;
		background-position: 15px 50%;
		background-size: 20px;
		width: 110px;
	}
	:global(.html-splitter) {
		cursor: auto;
		border: none;
	}
	:global(.html-splitter.splitpanes__splitter:before) {
		content: 'HTML';
	}
	:global(.js-splitter.splitpanes__splitter:before) {
		content: 'JS';
	}
	:global(.css-splitter.splitpanes__splitter:before) {
		content: 'CSS';
	}
	:global(.ide__splitter.splitpanes__splitter:before) {
		content: 'Python';
	}
</style>
