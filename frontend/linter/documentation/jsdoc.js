module.exports = {
	plugins: ['jsdoc'],
	rules: {
		'jsdoc/no-types': 'error',
		"jsdoc/require-jsdoc": [
			"error",
			{
				checkConstructors: false,
				"require": {
					"ClassDeclaration": false,
					"ClassExpression": false,
					"MethodDefinition": false
				},
				"publicOnly": false,
			}
		]
	},
};
