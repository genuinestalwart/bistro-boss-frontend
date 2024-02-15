import { createTheme } from "@mui/material";

export let theme = createTheme({
	breakpoints: {
		values: { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1440 },
	},
	palette: {
		primary: { contrastText: "#151515", main: "#ffffff" },
		secondary: { contrastText: "#ffffff", main: "#151515" },
	},
	spacing: 4,
	typography: { fontFamily: "'Inter Variable', sans-serif" },
});

theme = createTheme(theme, {
	palette: {
		accent: theme.palette.augmentColor({
			color: { contrastText: "#151515", main: "#ffbb5c" },
			name: "accent",
		}),
	},
});
