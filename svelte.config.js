import adapter from '@sveltejs/adapter-static';
import json from '@rollup/plugin-json'

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: dev ? '' : '/cooking-guide',
		},
		//target: '#svelte'
	}
};

export default config;
