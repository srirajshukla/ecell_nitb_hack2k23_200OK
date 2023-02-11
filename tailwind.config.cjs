const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
		},
		extend: {}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
