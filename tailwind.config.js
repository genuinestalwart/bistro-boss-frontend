import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		container: {
			center: true,
			screens: {
				"2xl": "1440px",
			},
		},
		extend: {
			colors: {
				accent: "#ffbb5c",
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
