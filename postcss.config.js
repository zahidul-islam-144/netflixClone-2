module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
	'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
  },
  // plugins: {
	// 	'postcss-import': {},
	// 	autoprefixer: {},
	// 	tailwindcss: {},
	// 	'postcss-flexbugs-fixes': {},
	// 	'postcss-preset-env': {
	// 		autoprefixer: {
	// 			flexbox: 'no-2009'
	// 		},
	// 		stage: 3,
	// 		features: {
	// 			'custom-properties': false
	// 		}
	// 	}
	// }
}
