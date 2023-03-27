module.exports = {
	plugins: ['@typescript-eslint'],
	rules: {
		// Ensure that actions are in PascalCase
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['StrictPascalCase'],
			},
		],
	},
};
