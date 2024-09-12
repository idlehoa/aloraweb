import flowbitePlugin from 'flowbite/plugin';
import tailwindcssAnimated from 'tailwindcss-animated';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}', 
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	darkMode: 'class', 
	theme: {
		extend: {
			fontFamily: {
				lexend: ['Lexend', 'sans-serif'], 
			},
			colors: {
				customColor: '#f0f0f0',
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'bounce-slow': 'bounce 2s infinite',
				'fade-in': 'fadeIn 1s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-15px)' },
				},
			},
			screens: {
				'no-select': { 'user-select': 'none' },
			},
		},
	},
	plugins: [flowbitePlugin, tailwindcssAnimated],
};

export default config;
