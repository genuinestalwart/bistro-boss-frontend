/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			screens: {
				"2xl": "1440px",
			},
		},
		extend: {
			colors: {
				primary: "rgb(var(--primary))",
				secondary: "rgb(var(--secondary))",
				neutral: "rgb(var(--neutral))",
				accent: "rgb(var(--accent))",
			},
		},
	},
	plugins: [],
};
