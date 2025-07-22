// tailwind.config.js
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ['"DM Serif Display"', "serif"],
				body: ['"Roboto Mono"', "monospace"],
			},
		},
	},
	plugins: [],
};
