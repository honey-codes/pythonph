const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	// purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	important: true,
	theme: {
		colors: {
			transparent: 'transparent',
			white: {
				DEFAULT: '#ffffff',
				70: 'rgba(255,255,255,0.7)',
			},
			blue: {
				DEFAULT: '#101c42',
				1: '#3a9dff',
				2: '#243b75',
				3: '#0d1736',
			},
			yellow: {
				DEFAULT: '#fdd649',
				1: '#fbcc15',
				2: '#fcd649',
			},
			pink: '#f84c66',
			green: '#32bf8c',
			'gray-30': 'rgba(151,151,151, 0.3)',
		},
		spacing: {
			px: '1px',
			0: '0',
			1: '0.0625rem',
			2: '0.125rem',
			4: '0.25rem',
			5: '0.3125rem',
			6: '0.375rem',
			8: '0.5rem',
			9: '0.5625rem',
			10: '0.625rem',
			11: '0.6875rem',
			12: '0.75rem',
			13: '0.8125rem',
			14: '0.875rem',
			15: '0.9375rem',
			16: '1rem',
			17: '1.0625rem',
			18: '1.125rem',
			20: '1.25rem',
			21: '1.3125rem',
			22: '1.375rem',
			23: '1.4375rem',
			24: '1.5rem',
			25: '1.5625rem',
			26: '1.625rem',
			27: '1.6875rem',
			28: '1.75rem',
			29: '1.8125rem',
			30: '1.875rem',
			31: '1.9375rem',
			32: '2rem',
			33: '2.0625rem',
			34: '2.125rem',
			35: '2.1875rem',
			36: '2.25rem',
			38: '2.375rem',
			40: '2.5rem',
			42: '2.625rem',
			43: '2.6875rem',
			44: '2.75rem',
			46: '2.875rem',
			47: '2.9375rem',
			48: '3rem',
			50: '3.125rem',
			51: '3.1875rem',
			52: '3.25rem',
			56: '3.5rem',
			60: '3.75rem',
			62: '3.875rem',
			63: '3.9375rem',
			65: '4.0625rem',
			70: '4.375rem',
			73: '4.5625rem',
			74: '4.625rem',
			'75-px': '4.6875rem',
			78: '4.875rem',
			79: '4.9375rem',
			80: '5rem',
			81: '5.0625rem',
			82: '5.125rem',
			83: '5.1875rem',
			85: '5.3125rem',
			87: '5.4375rem',
			88: '5.5rem',
			90: '5.625rem',
			91: '5.6875rem',
			92: '5.75rem',
			94: '5.875rem',
			100: '6.25rem',
			107: '6.6875rem',
			112: '7em',
			125: '7.8125rem',
			126: '7.875rem',
			130: '8.125rem',
			136: '8.5rem',
			139: '8.6875rem',
			140: '8.75rem',
			143: '8.9375rem',
			144: '9rem',
			145: '9.0625rem',
			146: '9.125rem',
			150: '9.375rem',
			154: '9.625rem',
			159: '9.9375rem',
			160: '10rem',
			162: '10.125rem',
			165: '10.3125rem',
			168: '10.5rem',
			180: '11.25rem',
			188: '11.75rem',
			194: '12.125rem',
			202: '12.625rem',
			210: '13.125rem',
			255: '15.9375rem',
			284: '17.75rem',
			292: '18.25rem',
			320: '20rem',
			480: '30rem',
			533: '33.3125rem',
			534: '33.375rem',
			540: '33.75rem',
			855: '53.4375rem',
			920: '57.5rem',
			1025: '64.0625rem',
			1110: '69.375rem',
			1204: '75.25rem',
			'-27': '-1.6875rem',
		},
		fontSize: (theme) => ({
			...theme('spacing'),
		}),
		fontFamily: {
			montserrat: 'Montserrat',
			raleway: 'Raleway',
			sourcesanspro: 'Source Sans Pro',
		},
		borderRadius: (theme) => ({
			...defaultTheme.borderRadius,
			...theme('spacing'),
		}),
		minHeight: (theme) => ({
			...defaultTheme.minHeight,
			...theme('spacing'),
		}),
		maxHeight: (theme) => ({
			...theme('spacing'),
		}),
		maxWidth: (theme) => ({
			...theme('spacing'),
		}),
		minWidth: (theme) => ({
			...theme('spacing'),
		}),
		zIndex: {
			...defaultTheme.zIndex,
			1: 1,
		},
		inset: (theme) => ({
			...defaultTheme.zIndex,
			...theme('spacing'),
			'-5': '-0.3125rem',
			'39%': '39%',
			'44%': '44%',
		}),
		lineHeight: (theme) => ({
			...defaultTheme.lineHeight,
			primary: '1.5125rem',
			...theme('spacing'),
		}),
		// screens: (theme) => ({
		// 	...defaultTheme.screens,
		// 	'xl': '1440px',
		// }),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
