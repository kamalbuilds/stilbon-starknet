// @ts-ignore
import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// Stilbon Protocol Brand Colors
				stilbon: {
					primary: 'hsl(var(--stilbon-primary))',
					secondary: 'hsl(var(--stilbon-secondary))',
					accent: 'hsl(var(--stilbon-accent))',
					cyan: 'hsl(var(--stilbon-cyan))',
					silver: 'hsl(var(--stilbon-silver))',
					platinum: 'hsl(var(--stilbon-platinum))',
				},
				// Extended Gray Palette
				gray: {
					50: 'hsl(var(--stilbon-gray-50))',
					100: 'hsl(var(--stilbon-gray-100))',
					200: 'hsl(var(--stilbon-gray-200))',
					300: 'hsl(var(--stilbon-gray-300))',
					400: 'hsl(var(--stilbon-gray-400))',
					500: 'hsl(var(--stilbon-gray-500))',
					600: 'hsl(var(--stilbon-gray-600))',
					700: 'hsl(var(--stilbon-gray-700))',
					800: 'hsl(var(--stilbon-gray-800))',
					900: 'hsl(var(--stilbon-gray-900))',
					950: 'hsl(var(--stilbon-gray-950))',
				},
				// Semantic Colors
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			fontFamily: {
				body: ['StilbonBody', 'Inter', 'system-ui', 'sans-serif'],
				display: [
					'StilbonDisplay',
					'GT America',
					'system-ui',
					'sans-serif',
				],
				logo: ['StilbonLogo', 'Pirulen', 'monospace'],
				// Legacy aliases for backwards compatibility
				bodyRegular: [
					'StilbonBody',
					'Inter',
					'system-ui',
					'sans-serif',
				],
				bodyBold: ['StilbonBody', 'Inter', 'system-ui', 'sans-serif'],
				gtamerica: [
					'StilbonDisplay',
					'GT America',
					'system-ui',
					'sans-serif',
				],
			},
			fontSize: {
				'display-xl': [
					'5rem',
					{ lineHeight: '1', letterSpacing: '-0.02em' },
				],
				'display-lg': [
					'4rem',
					{ lineHeight: '1.1', letterSpacing: '-0.02em' },
				],
				'display-md': [
					'3rem',
					{ lineHeight: '1.2', letterSpacing: '-0.02em' },
				],
				'display-sm': [
					'2.25rem',
					{ lineHeight: '1.3', letterSpacing: '-0.01em' },
				],
			},
			keyframes: {
				// Nexus-specific animations
				'stilbon-gradient': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'stilbon-spin': {
					to: { transform: 'rotate(360deg)' },
				},
				'stilbon-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				'stilbon-pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'stilbon-slide-in': {
					from: { opacity: '0', transform: 'translateX(10px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				'stilbon-slide-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'stilbon-scale': {
					from: { opacity: '0', transform: 'scale(0.9)' },
					to: { opacity: '1', transform: 'scale(1)' },
				},
				// Enhanced default animations
				twinkle: {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'slide-in-from-top': {
					from: { opacity: '0', transform: 'translateY(-20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-from-bottom': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				'slide-in-from-left': {
					from: { opacity: '0', transform: 'translateX(-20px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
				'slide-in-from-right': {
					from: { opacity: '0', transform: 'translateX(20px)' },
					to: { opacity: '1', transform: 'translateX(0)' },
				},
			},
			animation: {
				// Nexus-specific animations
				'stilbon-gradient': 'stilbon-gradient 15s ease infinite',
				'stilbon-spin': 'stilbon-spin 1s linear infinite',
				'stilbon-float': 'stilbon-float 6s ease-in-out infinite',
				'stilbon-pulse':
					'stilbon-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'stilbon-slide-in': 'stilbon-slide-in 0.5s ease-out forwards',
				'stilbon-slide-up': 'stilbon-slide-up 0.6s ease-out forwards',
				'stilbon-scale': 'stilbon-scale 0.4s ease-out forwards',
				// Enhanced default animations
				twinkle: 'twinkle 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in-from-top': 'slide-in-from-top 0.5s ease-out',
				'slide-in-from-bottom': 'slide-in-from-bottom 0.5s ease-out',
				'slide-in-from-left': 'slide-in-from-left 0.5s ease-out',
				'slide-in-from-right': 'slide-in-from-right 0.5s ease-out',
			},
			borderRadius: {
				xl: '1rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			backdropBlur: {
				xs: '2px',
			},
			boxShadow: {
				'stilbon-sm': '0 1px 2px 0 rgba(244, 63, 94, 0.05)',
				'stilbon-md':
					'0 4px 6px -1px rgba(244, 63, 94, 0.1), 0 2px 4px -1px rgba(244, 63, 94, 0.06)',
				'stilbon-lg':
					'0 10px 15px -3px rgba(244, 63, 94, 0.1), 0 4px 6px -2px rgba(244, 63, 94, 0.05)',
				'stilbon-xl':
					'0 20px 25px -5px rgba(244, 63, 94, 0.1), 0 10px 10px -5px rgba(244, 63, 94, 0.04)',
				'stilbon-2xl': '0 25px 50px -12px rgba(244, 63, 94, 0.25)',
				'stilbon-glow': '0 0 20px rgba(244, 63, 94, 0.5)',
				'stilbon-inner': 'inset 0 2px 4px 0 rgba(244, 63, 94, 0.06)',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			zIndex: {
				'60': '60',
				'70': '70',
				'80': '80',
				'90': '90',
				'100': '100',
			},
			screens: {
				xs: '475px',
				'3xl': '1600px',
			},
			transitionProperty: {
				height: 'height',
				spacing: 'margin, padding',
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'3/2': '3 / 2',
				'2/3': '2 / 3',
				'9/16': '9 / 16',
			},
			gridTemplateColumns: {
				'13': 'repeat(13, minmax(0, 1fr))',
				'14': 'repeat(14, minmax(0, 1fr))',
				'15': 'repeat(15, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
			},
			maxWidth: {
				'8xl': '88rem',
				'9xl': '96rem',
			},
		},
	},
	plugins: [
		// @ts-ignore
		require('tailwindcss-animate'),
		// Custom plugin for Nexus Labs utilities
		function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
			const newUtilities = {
				'.text-gradient': {
					background: `linear-gradient(to right, ${theme('colors.stilbon.primary')}, ${theme('colors.stilbon.accent')}, ${theme('colors.stilbon.secondary')})`,
					'-webkit-background-clip': 'text',
					'-webkit-text-fill-color': 'transparent',
				},
				'.bg-gradient-stilbon': {
					background: `linear-gradient(135deg, ${theme('colors.stilbon.primary')}, ${theme('colors.stilbon.accent')}, ${theme('colors.stilbon.secondary')})`,
				},
				'.bg-gradient-stilbon-radial': {
					background: `radial-gradient(circle, ${theme('colors.stilbon.primary')}, ${theme('colors.stilbon.accent')}, ${theme('colors.stilbon.secondary')})`,
				},
				'.glass-effect': {
					background: 'rgba(255, 255, 255, 0.05)',
					'backdrop-filter': 'blur(10px)',
					border: '1px solid rgba(255, 255, 255, 0.1)',
				},
				'.hover-lift': {
					transition: 'transform 0.3s ease-out',
					'&:hover': {
						transform: 'translateY(-4px)',
					},
				},
			};
			addUtilities(newUtilities);
		},
	],
} satisfies Config;
