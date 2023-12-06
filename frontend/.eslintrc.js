module.exports = {
	overrides: [
		// Base
		{
			files: ['*.ts'],
			extends: ['./linter/base', './linter/typescript/prefer-arrow', './linter/typescript/regex'],
		},
		// Typescript
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: ['tsconfig.json'],
			},
			extends: [
				'./linter/typescript/typescript',
				'./linter/angular/angular',
				'./linter/typescript/import',
				'./linter/documentation/jsdoc',
				'./linter/typescript/rxjs',
				'./linter/angular/ngrx',
				'./linter/typescript/deprecations',
				'./linter/security/security',
				'./linter/typescript/sonar',
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
			extends: ['./linter/testing/jest'],
		},
		// Tempplates
		{
			files: ['*.html'],
			parser: '@angular-eslint/template-parser',
			extends: ['./linter/templates/templates'],
		},
		{
			files: ['*.html'],
			extends: ['plugin:prettier/recommended', './linter/templates/html'],
		},
		// Specific rules for specific files
		{
			files: ['*.actions.ts', '*.action.ts'],
			extends: ['./linter/angular/actions'],
		},
		{
			files: ['*.selectors.ts', '*.selector.ts'],
			extends: ['./linter/angular/selectors'],
		},
	],
};
