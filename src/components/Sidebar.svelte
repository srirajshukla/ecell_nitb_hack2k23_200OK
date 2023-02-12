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
			<Pane maxSize={100} class="html-pane">
				<Editor lang={'xml'} bind:value={$html} label="HTML" />
			</Pane>

			<Pane maxSize={100} class="js-pane">
				<Editor lang={'javascript'} bind:value={$js} label="JS" />
			</Pane>

			<Pane maxSize={100} class="css-pane">
				<Editor lang={'css'} bind:value={$css} label="CSS" />
			</Pane>
		</Splitpanes>
	{:else if $mode === 'ide'}
		<div class="w-full">
			<Collab lang={'python'} bind:value={$code} label="Python" />
		</div>
	{:else}
		<div class="w-full">
			<Collab lang={'markdown'} bind:value={$md} label="Markdown" />
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
		height: 4px;
		background-color: rgb(17 24 39);
		position: relative;
		cursor: row-resize;
	}
</style>
