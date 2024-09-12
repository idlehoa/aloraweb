import flowbitePlugin from 'flowbite/plugin';
import tailwindcssAnimated from 'tailwindcss-animated';
import type { Config } from 'tailwindcss';

const config: Config = {
<<<<<<< HEAD
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
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(to right, #ff7e5f, #feb47b)',
        'gradient-blue-green': 'linear-gradient(to right, #00c6ff, #0072ff)',
        'gradient-purple-pink': 'linear-gradient(to right, #a855f7, #ec4899)',
      },
    },
  },
  plugins: [flowbitePlugin],
=======
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
>>>>>>> f726299a365ea9b75f7f79471dbd843f1ce78f93
};

export default config;
