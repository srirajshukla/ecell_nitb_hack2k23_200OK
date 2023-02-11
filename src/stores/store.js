import { writable } from 'svelte/store';
const PREFIX = 'watashiato-';

export const resizing = writable(false);

const storedHTML = localStorage.getItem(PREFIX + 'html');
const storedJS = localStorage.getItem(PREFIX + 'js');
const storedCSS = localStorage.getItem(PREFIX + 'css');

export const html = writable(storedHTML || '');
export const js = writable(storedJS || '');
export const css = writable(storedCSS || '');


html.subscribe((value) => {
	localStorage.setItem(PREFIX + 'html', value);
});

js.subscribe((value) => {
	localStorage.setItem(PREFIX + 'js', value);
});

css.subscribe((value) => {
	localStorage.setItem(PREFIX + 'css', value);
});