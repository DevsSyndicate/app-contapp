module.exports = {
	overrides: [
		// Base
		{
			files: ['*.ts'],
			extends: ['./eslint/base', './eslint/typescript/prefer-arrow', './eslint/typescript/regex'],
		},
		// Typescript
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: ['tsconfig.json'],
			},
			extends: [
				'./eslint/typescript/typescript',
				'./eslint/angular/angular',
				'./eslint/typescript/import',
				'./eslint/documentation/jsdoc',
				'./eslint/typescript/rxjs',
				'./eslint/angular/ngrx',
				'./eslint/typescript/deprecations',
				'./eslint/security/security',
				'./eslint/typescript/sonar',
			],
		},
		// Mocks and stubs
		{
			files: ['*.mock*.ts', '*.stub*.ts'],
			rules: {
				'@angular-eslint/component-class-suffix': 'off',
				'@typescript-eslint/no-empty-function': 'off',
			},
		},
		// Jest
		{
			files: ['*.spec.ts', '*.test.module.ts'],
			extends: ['./eslint/testing/jest'],
		},
		// Tempplates
		{
			files: ['*.html'],
			parser: '@angular-eslint/template-parser',
			extends: ['./eslint/templates/templates'],
		},
		{
			files: ['*.html'],
			extends: ['plugin:prettier/recommended', './eslint/templates/html'],
		},
		// Specific rules for specific files
		{
			files: ['*.actions.ts', '*.action.ts'],
			extends: ['./eslint/angular/actions'],
		},
		{
			files: ['*.selectors.ts', '*.selector.ts'],
			extends: ['./eslint/angular/selectors'],
		},
	],
};
