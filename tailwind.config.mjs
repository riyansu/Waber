/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'@mb': '420px',
			'@tb': '768px',
			'@lt': '1024px',
			'@pc': '1540px',
			'@dp': '1920px',
		}
	},
	plugins: [],
}
