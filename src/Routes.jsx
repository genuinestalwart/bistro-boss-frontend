import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import DashLayout from "@/layouts/DashLayout";
import NotFound from "@/components/shared/NotFound";
import HomePage from "@/pages/home";
import MenuPage from "@/pages/menu";
import ShopPage from "@/pages/shop";
import ContactUsPage from "@/pages/contact-us";
import SigninPage from "@/pages/signin";
import SignupPage from "@/pages/signup";
import DashHomePage from "@/pages/dashboard/home";
import AddItemPage from "@/pages/dashboard/add-item";
import ManageItemsPage from "@/pages/dashboard/manage-items";
import ManageBookingsPage from "@/pages/dashboard/manage-bookings";
import AllUsersPage from "@/pages/dashboard/users";
import ReservationPage from "@/pages/dashboard/reservation";
import PaymentHistoryPage from "@/pages/dashboard/payment-history";
import MyCartPage from "@/pages/dashboard/cart";
import MyReviewPage from "@/pages/dashboard/review";
import MyBookingsPage from "@/pages/dashboard/bookings";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <HomePage /> },
			{ path: "menu", element: <MenuPage /> },
			{ path: "shop", element: <ShopPage /> },
			{ path: "contact-us", element: <ContactUsPage /> },
		],
	},
	{
		path: "dashboard",
		element: <DashLayout />,
		children: [
			{ path: "/dashboard", element: <DashHomePage /> },
			{ path: "add-item", element: <AddItemPage /> },
			{ path: "manage-items", element: <ManageItemsPage /> },
			{ path: "manage-bookings", element: <ManageBookingsPage /> },
			{ path: "users", element: <AllUsersPage /> },
			{ path: "reservation", element: <ReservationPage /> },
			{ path: "payment-history", element: <PaymentHistoryPage /> },
			{ path: "cart", element: <MyCartPage /> },
			{ path: "review", element: <MyReviewPage /> },
			{ path: "bookings", element: <MyBookingsPage /> },
		],
	},
	{ path: "signin", element: <SigninPage /> },
	{ path: "signup", element: <SignupPage /> },
	{ path: "*", element: <NotFound /> },
]);
