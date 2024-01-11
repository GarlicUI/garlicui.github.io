import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'GarlicOS',
			components: {
				// Override the default `SocialIcons` component.
				Hero: './src/components/_Hero.astro',
				Header: './src/components/_Header.astro',
			  },
			social: {
				github: 'https://github.com/GarlicUI',
			},
			sidebar: [
				{
					label: 'Docs',
					items: [
						{label: 'Introduction', link: '/guides/introduction/'},
						{label: 'Features', link: '/guides/features/'},
						{
							label: 'Installation',
							autogenerate: { directory: 'guides/installation' },
							collapsed: true,
						},
						{label: 'FAQ', link: '/guides/faq/'},
						{label: 'Emulators', link: '/guides/emulators/'},
						{label: 'Ports Collection', link: '/guides/ports-collection/'},
						{label: 'Multiplayer Netplay', link: '/guides/multiplayer-netplay/'},
						{label: 'Apps', link: '/guides/apps/'},
						{label: 'Guides', link: '/guides/guides/'},
					],
				}
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
