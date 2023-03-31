module.exports = {
	plugins: ['import', 'unused-imports'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'unused-imports/no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'import/default': 'off',
		'import/namespace': 'error',
		// Restrict imports
		'import/no-restricted-paths': [
			'error',
			{
				zones: [
					// Restrict imports from @features
					{
						target: './src/app/core',
						from: './src/app/features',
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/layout',
						from: './src/app/features/**/!(*public|*module)*',
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/pages',
						from: './src/app/features/**/!(*module)*',
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/shared',
						from: './src/app/features',
						message: 'Forbidden to import from @features',
					},
					// Restrict imports from @pages
					{
						target: './src/app/core',
						from: './src/app/pages',
						message: 'Forbidden to import from @pages',
					},
					{
						target: './src/app/features',
						from: './src/app/pages',
						message: 'Forbidden to import from @pages',
					},
					{
						target: './src/app/layout',
						from: './src/app/pages',
						message: 'Forbidden to import from @pages',
					},
					{
						target: './src/app/shared',
						from: './src/app/pages',
						message: 'Forbidden to import from @pages',
					},
					// Restrict imports from @shared
					{
						target: './src/app/core',
						from: './src/app/shared',
						message: 'Forbidden to import from @shared',
					},
					// Restrict imports in @feature modules. Only Books can have dependencies from other features
					{
						target: './src/app/features/authentication',
						from: [
							'./src/app/features/authors',
							'./src/app/features/books',
							'./src/app/features/genres',
							'./src/app/features/languages',
							'./src/app/features/themes',
							'./src/app/features/user',
						],
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/features/authors',
						from: [
							'./src/app/features/authentication',
							'./src/app/features/books',
							'./src/app/features/genres',
							'./src/app/features/languages',
							'./src/app/features/themes',
							'./src/app/features/user',
						],
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/features/genres',
						from: [
							'./src/app/features/authentication',
							'./src/app/features/authors',
							'./src/app/features/books',
							'./src/app/features/languages',
							'./src/app/features/themes',
							'./src/app/features/user',
						],
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/features/languages',
						from: [
							'./src/app/features/authentication',
							'./src/app/features/authors',
							'./src/app/features/books',
							'./src/app/features/genres',
							'./src/app/features/themes',
							'./src/app/features/user',
						],
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/features/themes',
						from: [
							'./src/app/features/authentication',
							'./src/app/features/authors',
							'./src/app/features/books',
							'./src/app/features/genres',
							'./src/app/features/languages',
							'./src/app/features/user',
						],
						message: 'Forbidden to import from @features',
					},
					{
						target: './src/app/features/user',
						from: [
							'./src/app/features/authentication',
							'./src/app/features/authors',
							'./src/app/features/books',
							'./src/app/features/genres',
							'./src/app/features/languages',
							'./src/app/features/themes',
						],
						message: 'Forbidden to import from @features',
					},
				],
			},
		],
		'import/no-absolute-path': 'error',
		'import/no-dynamic-require': 'error',
		'import/no-internal-modules': 'off',
		'import/no-webpack-loader-syntax': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'off',
		'import/no-useless-path-segments': 'error',
		'import/no-relative-parent-imports': 'off',
		'import/no-relative-packages': 'error',
		'import/export': 'error',
		'import/no-named-as-default': 'error',
		'import/no-named-as-default-member': 'error',
		'import/no-deprecated': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-mutable-exports': 'error',
		'import/no-unused-modules': 'error',
		'import/unambiguous': 'error',
		'import/no-commonjs': 'error',
		'import/no-amd': 'error',
		'import/no-nodejs-modules': 'error',
		'import/no-import-module-exports': 'error',
		'import/first': 'error',
		'import/exports-last': 'error',
		'import/no-duplicates': 'error',
		'import/extensions': [
			'error',
			'never',
			{
				json: 'always',
			},
		],
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'import/newline-after-import': 'error',
		'import/prefer-default-export': 'off',
		'import/max-dependencies': 'off',
		'import/no-unassigned-import': 'error',
		'import/no-named-default': 'off',
		'import/no-default-export': 'off',
		'import/no-named-export': 'off',
		'import/no-anonymous-default-export': 'error',
		'import/group-exports': 'off',
		'import/dynamic-import-chunkname': 'off',
	},
};
