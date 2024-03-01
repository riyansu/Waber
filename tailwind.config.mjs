import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes:{
				fadein: {
					'0%':{opacity:0},
					'100%':{opacity:1}
				},
				fadeout: {
					'0%':{opacity:1},
					'100%':{opacity:0}
				},
				slidein: {
					'0%':{opacity:0,transform:"translateY(10%)"},
					'100%':{opacity:1,transform:"translateY(0px)"}
				}
			},
			animation:{
				fadein:'fadein 0.3s ease-out',
				fadeout:'fadeout 0.3s ease-out',
				slidein:'slidein 0.3s ease-out'
			}
		},
		screens: {
			'@mb': '420px',
			'@tb': '768px',
			'@lt': '1024px',
			'@hs':{'raw': '(min-width:594px) and (max-height:420px)'},
			// '@hm':{'raw': '(min-width:1024px) and (max-height:768px)'},
			// '@hl':{'raw': '(min-width:1540px) and (max-height:1024px)'},
			'@pc': '1540px',
			'@dp': '1920px',
		}
	},
	plugins: [],
}
