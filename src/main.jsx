import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource-variable/inter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
		],
	},
]);

const theme = createTheme({
	palette: {
		primary: {
			main: "#ffffff",
		},
		secondary: {
			main: "#151515",
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>
);
