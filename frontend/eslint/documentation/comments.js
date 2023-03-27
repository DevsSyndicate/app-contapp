module.exports = {
	plugins: ['todo-plz'],
	rules: {
		'todo-plz/ticket-ref': [
			'error',
			{
				commentPattern: 'TODO:\\s\\[((ECOMDUTI-[0-9]{5,5}|NO-TASK)[,\\s]*)+\\]',
				description: 'For example: `TODO: [ECOMDUTI-1234] or TODO: [NO-TASK]`',
			},
		],
	},
};
