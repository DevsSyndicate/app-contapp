module.exports = {
	plugins: ['jest', '@angular-eslint/eslint-plugin'],
	settings: {
		jest: {
			version: 29,
		},
	},
	env: {
		jest: true,
	},
	rules: {
		'@typescript-eslint/unbound-method': 'off',
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': [
			'error',
			{
				allowKeywords: true,
				allowIndexSignaturePropertyAccess: false,
				// Mejor poner notación funcion['metodoPrivado'] que "as any"
				allowPrivateClassPropertyAccess: true,
				allowProtectedClassPropertyAccess: true, // Testing protected methods
			},
		],
		'@typescript-eslint/no-extraneous-class': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@angular-eslint/component-class-suffix': 'off',
		'@angular-eslint/use-component-selector': 'off',
		/* "jest/consistent-test-it": "error",
        "jest/expect-expect": "off", // No funciona bien con marble testing (expectObservable)
        "jest/lowercase-name": "off",
        "jest/max-nested-describe": "error",
        "jest/no-alias-methods": "error",
        "jest/no-commented-out-tests": "error",
        "jest/no-conditional-expect": "off",
        "jest/no-deprecated-functions": "error",
        "jest/no-disabled-tests": "error",
        "jest/no-done-callback": "error",
        "jest/no-duplicate-hooks": "error",
        "jest/no-export": "error",
        "jest/no-focused-tests": "error",
        "jest/no-hooks": "off",
        "jest/no-identical-title": "error",
        "jest/no-if": "off",
        "jest/no-interpolation-in-snapshots": "error",
        "jest/no-jasmine-globals": "off",
        // "jest/no-jest-import": "error", Deprecated
        "jest/no-large-snapshots": "error",
        "jest/no-mocks-import": "error",
        "jest/no-restricted-matchers": "error",
        "jest/no-standalone-expect": "error",
        "jest/no-test-prefixes": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-called-with": "off", // Deseable
        "jest/prefer-expect-assertions": [
            "off",
            {
                onlyFunctionsWithAsyncKeyword: true
            }
        ],
        "jest/prefer-expect-resolves": "error",
        "jest/prefer-hooks-on-top": "off",
        "jest/prefer-spy-on": "off",
        "jest/prefer-strict-equal": "error",
        "jest/prefer-to-be": "error",
        // "jest/prefer-to-be-null": "error", Deprecated
        // "jest/prefer-to-be-undefined": "error", Deprecated
        "jest/prefer-to-contain": "error",
        "jest/prefer-to-have-length": "error",
        "jest/prefer-todo": "error",
        "jest/require-to-throw-message": "error",
        "jest/require-top-level-describe": "error",
        "jest/valid-describe-callback": "error",
        "jest/valid-expect": "error",
        "jest/valid-expect-in-promise": "error",
        "jest/valid-title": "error" */
	},
};
