<script>
	import { page } from '$app/stores';
	import { html, css, js, code, md } from '../stores/store';
	import saveAs from 'save-as';
	import JSZip from 'jszip';

	$: ide = $page.url.pathname === '/python';
	$: web = $page.url.pathname === '/web';
	$: markdown = $page.url.pathname === '/markdown';

	const download = () => {
		if (ide) {
			const blob = new Blob([$code], { type: 'text/plain' });
			saveAs(blob, 'script.py');
		} else if (markdown) {
			const blob = new Blob([$md], { type: 'text/plain' });
			saveAs(blob, 'notes.md');
		} else if (web) {
			var zip = new JSZip();
			let fullHtml = `<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
		<link rel="stylesheet" href="styles.css">
  </head>
  <body>
		${$html}
		<script src="main.js"><\/script>
	</body>
</html>`;

			zip.file('index.html', fullHtml);
			zip.file('styles.css', $css);
			zip.file('main.js', $js);

			zip.generateAsync({ type: 'blob' }).then(function (content) {
				saveAs(content, 'project.zip');
			});
		}
	};
</script>

<main
	class="py-2 w-full flex items-center px-3 justify-between bg-gray-100 border-b border-gray-50/50"
>
	<section class="flex items-center space-x-4 select-none">
		<h1 class="font-heading text-xl">Watashiato</h1>
	</section>

	<section>
		<button
			on:click={download}
			class="bg-pink-500 text-white rounded font-bold p-1 px-2 inline-flex items-center mr-4">Download
			<svg
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 ml-2"
			>
				<path
					clip-rule="evenodd"
					d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm5.25-9.25a.75.75 0 00-1.5 0v4.59l-1.95-2.1a.75.75 0 10-1.1 1.02l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V7.75z"
					fill-rule="evenodd"
				/>
			</svg>
		</button>

		<a href="/web" class={web && 'font-bold bg-gray-300 px-2 p-1 rounded'}>Web Mode</a>
		<a href="/markdown" class={markdown && 'font-bold bg-gray-300 px-2 p-1 rounded'}>Notes Mode</a>
		<a href="/python" class={ide && 'font-bold bg-gray-300 px-2 p-1 rounded'}>IDE Mode</a>
	</section>
</main>
