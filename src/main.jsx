import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/cinzel";
import {
	createBrowserRouter,
	RouterProvider,
	ScrollRestoration,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import RootLayout from "@/layouts/RootLayout";
import DashLayout from "@/layouts/DashLayout";
import HomePage from "@/pages/home";
import MenuPage from "@/pages/menu";
import ShopPage from "@/pages/shop";
import ContactUsPage from "@/pages/contact-us";
import SignInPage from "@/pages/signin";
import SignUpPage from "@/pages/signup";
import DashboardPage from "@/pages/dashboard";
import AuthProvider from "@/providers/AuthProvider";
import ToastProvider from "@/providers/ToastProvider";
import NotFound from "@/components/shared/NotFound";

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
			{
				path: "/shop",
				element: <ShopPage />,
			},
			{
				path: "/contact-us",
				element: <ContactUsPage />,
			},
		],
	},
	{
		path: "/dashboard",
		element: <DashLayout />,
		children: [
			{
				path: "/dashboard",
				element: <DashboardPage />,
			},
		],
	},
	{
		path: "/signin",
		element: <SignInPage />,
	},
	{
		path: "/signup",
		element: <SignUpPage />,
	},
	{
		path: "*",
		element: <NotFound />,
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
		<AuthProvider>
			<ToastProvider>
				<HelmetProvider>
					<ThemeProvider theme={theme}>
						<RouterProvider router={router}>
							<ScrollRestoration />
						</RouterProvider>
					</ThemeProvider>
				</HelmetProvider>
			</ToastProvider>
		</AuthProvider>
	</React.StrictMode>
);
