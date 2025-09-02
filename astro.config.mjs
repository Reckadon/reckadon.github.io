import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
	site: 'https://reckadon.github.io/',
	integrations: [mdx(), sitemap(), tailwind(), partytown()],
	markdown: {
		extendDefaultPlugins: true,
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			rehypeKatex,
			[
				autoNewTabExternalLinks,
				{
					domain: 'https://reckadon.github.io/'
				}
			]
		]
	}
});
