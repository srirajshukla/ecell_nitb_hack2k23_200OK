import { writable } from 'svelte/store';
const PREFIX = 'wasabi-';

export const resizing = writable(false);

const storedHTML = localStorage.getItem(PREFIX + 'html');
const storedJS = localStorage.getItem(PREFIX + 'js');
const storedCSS = localStorage.getItem(PREFIX + 'css');

export const html = writable(storedHTML || '');
export const js = writable(storedJS || '');
export const css = writable(storedCSS || '');

export const code = writable('');
export const pyodide_loaded = writable(false);

export const md = writable('');

html.subscribe((value) => {
	localStorage.setItem(PREFIX + 'html', value);
});

js.subscribe((value) => {
	localStorage.setItem(PREFIX + 'js', value);
});

css.subscribe((value) => {
	localStorage.setItem(PREFIX + 'css', value);
});