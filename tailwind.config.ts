import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				plusJakartaSans: ['PlusJakartaSans', ...defaultTheme.fontFamily.sans],
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				'slide-in': 'slide-in 500ms forwards',
			},
			keyframes: {
				'slide-in': {
					from: { transform: 'translateX(-100%)', opacity: '0' },
					to: { transform: 'translateX(0%)', opacity: '1' },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
