import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    paths: {
      base: '',
    },
    prerender: {
      handleHttpError: ({ path, message }) => {
        if (path.startsWith('/downloads/')) return;
        throw new Error(message);
      }
    }
  },
  preprocess: vitePreprocess()
};

export default config;
