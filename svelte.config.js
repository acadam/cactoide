import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// if you want to use 'split' mode, set this to 'split'
			// and create a _redirects file with the redirects you want
			// see "split" mode in https://github.com/sveltejs/kit/tree/main/packages/adapter-netlify
			runtime: 'nodejs22.x'
		}),
		csrf: {
			checkOrigin: false
		}
	}
};

export default config;
