import { fontFamily } from "tailwindcss/defaultTheme";
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
				accent: "#ff9100",
				primary: "#ffffff",
				secondary: "#151515",
			},
			fontFamily: {
				cinzel: ["Cinzel Variable", ...fontFamily.sans],
				inter: ["Inter Variable", ...fontFamily.sans],
			},
			screens: {
				"2xl": "1440px",
			},
		},
	},
	plugins: [],
};
