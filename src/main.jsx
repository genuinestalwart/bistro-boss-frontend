import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/cinzel";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "@/providers/AuthProvider";
import ToastProvider from "@/providers/ToastProvider";
import { router } from "@/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ModalProvider from "@/providers/ModalProvider";
import { theme } from "@/theme.config";
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<ModalProvider>
					<ToastProvider>
						<AuthProvider>
							<HelmetProvider>
								<RouterProvider router={router}>
									<ScrollRestoration />
								</RouterProvider>
							</HelmetProvider>
						</AuthProvider>
					</ToastProvider>
				</ModalProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
