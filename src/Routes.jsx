import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import DashLayout from "@/layouts/DashLayout";
import NotFound from "@/components/shared/NotFound";
import HomePage from "@/pages/home";
import MenuPage from "@/pages/menu";
import ShopPage from "@/pages/shop";
import ContactUsPage from "@/pages/contact-us";
import SignInPage from "@/pages/signin";
import SignUpPage from "@/pages/signup";
import DashHomePage from "@/pages/dashboard/home";
import AddItemPage from "@/pages/dashboard/add-item";
import ManageItemsPage from "@/pages/dashboard/manage-items";
import ManageBookingsPage from "@/pages/dashboard/manage-bookings";
import AllUsersPage from "@/pages/dashboard/users";
import ReservationPage from "@/pages/dashboard/reservation";
import PaymentPage from "@/pages/dashboard/payment";
import MyCartPage from "@/pages/dashboard/cart";
import AddReviewPage from "@/pages/dashboard/review";
import MyBookingPage from "@/pages/dashboard/booking";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
			{
				path: "menu",
				element: <MenuPage />,
			},
			{
				path: "shop",
				element: <ShopPage />,
			},
			{
				path: "contact-us",
				element: <ContactUsPage />,
			},
		],
	},
	{
		path: "dashboard",
		element: <DashLayout />,
		children: [
			{
				path: "/dashboard",
				element: <DashHomePage />,
			},
			{
				path: "add-item",
				element: <AddItemPage />,
			},
			{
				path: "manage-items",
				element: <ManageItemsPage />,
			},
			{
				path: "manage-bookings",
				element: <ManageBookingsPage />,
			},
			{
				path: "users",
				element: <AllUsersPage />,
			},
			{
				path: "reservation",
				element: <ReservationPage />,
			},
			{
				path: "payment",
				element: <PaymentPage />,
			},
			{
				path: "cart",
				element: <MyCartPage />,
			},
			{
				path: "review",
				element: <AddReviewPage />,
			},
			{
				path: "booking",
				element: <MyBookingPage />,
			},
		],
	},
	{
		path: "signin",
		element: <SignInPage />,
	},
	{
		path: "signup",
		element: <SignUpPage />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
