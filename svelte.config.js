import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
		}),
		paths: {
			base: process.env.NODE_ENV === "production" ? process.env.BASE_PATH || "" : "",
		},
	},
	extensions: ['.svelte', '.svx']
};

export default config;
