/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'@mb': '420px',
			'@tb': '768px',
			'@lt': '1024px',
			'@hs':{'raw': '(min-width:768px) and (max-height:420px)'},
			// '@hm':{'raw': '(min-width:1024px) and (max-height:768px)'},
			// '@hl':{'raw': '(min-width:1540px) and (max-height:1024px)'},
			'@pc': '1540px',
			'@dp': '1920px',
		}
	},
	plugins: [],
}
