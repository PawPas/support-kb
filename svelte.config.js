import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';

const layout = fileURLToPath(new URL('./src/lib/layouts/runbook.svelte', import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.svx'],
      layout: { runbook: layout, _: layout }
    })
  ],
  kit: {
    adapter: adapter({ fallback: null, strict: true }),
    alias: { '#lib': 'src/lib' }
  }
};

export default config;
