const presets = [
	[
		'@babel/env',
		{
			corejs: '@3',
			useBuiltIns: 'usage'  // polyfills are automatically imported when needed
		}
	]
]

module.exports = { presets }