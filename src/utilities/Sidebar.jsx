import {
	AccountBalanceWallet,
	CalendarMonth,
	Email,
	FormatListBulleted,
	Groups,
	Home,
	LibraryBooks,
	PlayLesson,
	RateReview,
	Restaurant,
	ShoppingBag,
	ShoppingCart,
} from "@mui/icons-material";

const adminItems = [
	{ icon: <Restaurant />, name: "Add Item", path: "add-item" },
	{
		icon: <FormatListBulleted />,
		name: "Manage Items",
		path: "manage-items",
	},
	{
		icon: <LibraryBooks />,
		name: "Manage Bookings",
		path: "manage-bookings",
	},
	{ icon: <Groups />, name: "All Users", path: "users" },
];

const userItems = [
	{ icon: <CalendarMonth />, name: "Reservation", path: "reservation" },
	{
		icon: <AccountBalanceWallet />,
		name: "Payment History",
		path: "payment-history",
	},
	{ icon: <ShoppingCart />, name: "My Cart", path: "cart" },
	{ icon: <RateReview />, name: "My Review", path: "review" },
	{ icon: <PlayLesson />, name: "My Booking", path: "booking" },
];

export const dashNavItems = [
	[
		{ icon: <Home />, name: "Admin Home", path: "/dashboard" },
		...adminItems,
		...userItems,
	],
	[{ icon: <Home />, name: "User Home", path: "/dashboard" }, ...userItems],
];

export const navItems = [
	{ icon: <Home />, name: "Home", path: "/" },
	{ icon: <Restaurant />, name: "Our Menu", path: "/menu" },
	{ icon: <ShoppingBag />, name: "Our Shop", path: "/shop" },
	{ icon: <Email />, name: "Contact Us", path: "/contact-us" },
];
