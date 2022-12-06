import adapter from '@sveltejs/adapter-auto';
/* Library For Markdown */
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	// Config Mdsvex
	extensions: ['.svelte', '.md'],

	// Preprocess(Config Mdsvex)
	preprocess: [
		mdsvex({
		  extensions: ['.md']
		})
	]

};

export default config;
