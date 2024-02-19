import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/index.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/cinzel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import AuthProvider from "@/providers/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { router } from "@/Routes";
import { theme } from "@/theme.config";
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ThemeProvider theme={theme}>
				<LocalizationProvider dateAdapter={AdapterMoment}>
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
				</LocalizationProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
