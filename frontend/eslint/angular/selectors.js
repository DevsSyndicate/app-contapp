module.exports = {
	plugins: ['@typescript-eslint'],
	rules: {
		// Ensure that selector names starts with "get"
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['PascalCase'],
				prefix: ['get'],
				modifiers: ['exported'],
			},
		],
	},
};
