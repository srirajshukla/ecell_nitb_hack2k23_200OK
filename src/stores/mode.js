import { writable } from 'svelte/store';

export const mode = writable('markdown');

export const lobby = writable('')