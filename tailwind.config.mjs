import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#e3b1fc', 600: '#c700c4', 900: '#63005e', 950: '#450a45' };
const gray = { 100: '#faf3ff', 200: '#f6e7ff', 300: '#cdb9d9', 400: '#a07ab5', 500: '#6b477e', 700: '#49265b', 800: '#371347', 900: '#201128' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};