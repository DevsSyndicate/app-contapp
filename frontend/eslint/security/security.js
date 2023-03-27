module.exports = {
	plugins: ['pii', 'no-secrets'],
	rules: {
		'pii/no-email': 'error',
		/* "pii/no-dob": "error", */
		'pii/no-ip': 'warn',
		'pii/no-phone-number': 'error',
		'no-secrets/no-secrets': 'error',
	},
};
