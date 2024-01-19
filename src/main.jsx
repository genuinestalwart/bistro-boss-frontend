import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/cinzel";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import RootLayout from "./pages/layout";
import HomePage from "./pages/page";
import MenuPage from "./pages/menu/page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "/menu",
				element: <MenuPage />,
			},
		],
	},
]);

let theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 768,
			lg: 1024,
			xl: 1280,
			"2xl": 1440,
		},
	},
	palette: {
		primary: {
			contrastText: "#151515",
			main: "#ffffff",
		},
		secondary: {
			contrastText: "#ffffff",
			main: "#151515",
		},
	},
	spacing: 4,
	typography: {
		fontFamily: "'Inter Variable', sans-serif",
	},
});

theme = createTheme(theme, {
	palette: {
		accent: theme.palette.augmentColor({
			color: {
				contrastText: "#151515",
				main: "#ff9100",
			},
			name: "accent",
		}),
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
