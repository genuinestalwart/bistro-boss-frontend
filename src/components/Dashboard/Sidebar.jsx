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
import { Box, Divider, Drawer } from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavButton from "@/components/shared/buttons/NavButton";

const dashNavItems = [
	{ icon: <Home />, name: "Admin Home", path: "/dashboard" },
	{ icon: <Restaurant />, name: "Add Items", path: "add-item" },
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
	{ icon: <Home />, name: "User Home", path: "/dashboard" },
	{
		icon: <CalendarMonth />,
		name: "Reservation",
		path: "reservation",
	},
	{
		icon: <AccountBalanceWallet />,
		name: "Payment History",
		path: "payment",
	},
	{ icon: <ShoppingCart />, name: "My Cart", path: "cart" },
	{ icon: <RateReview />, name: "My Review", path: "review" },
	{ icon: <PlayLesson />, name: "My Booking", path: "booking" },
];

const navItems = [
	{ icon: <Home />, name: "Home", path: "/" },
	{ icon: <Restaurant />, name: "Our Menu", path: "/menu" },
	{ icon: <ShoppingBag />, name: "Our Shop", path: "/shop" },
	{ icon: <Email />, name: "Contact Us", path: "/contact-us" },
];

const Sidebar = ({ isAdmin, sidebarOpen, setSidebarOpen }) => {
	const location = useLocation();

	const navbar = (
		<>
			{dashNavItems
				.slice(isAdmin ? 0 : 5, isAdmin ? 5 : 11)
				.map((dashNavItem, index) => (
					<NavLink
						caseSensitive
						className={({ isActive }) =>
							`block ${
								isActive ? "text-primary" : "text-secondary"
							}`
						}
						end
						key={index}
						state={{ from: location }}
						to={dashNavItem.path}>
						<NavButton
							icon={dashNavItem.icon}
							name={dashNavItem.name}
						/>
					</NavLink>
				))}

			<Divider
				aria-hidden={true}
				sx={{
					borderBottomWidth: 2,
					borderColor: "primary.main",
					my: 6,
				}}
			/>

			{navItems.map((navItem, index) => (
				<Link
					className='block'
					key={index}
					state={{ from: location }}
					to={navItem.path}>
					<NavButton icon={navItem.icon} name={navItem.name} />
				</Link>
			))}
		</>
	);

	return (
		<>
			<Box component='nav' display={{ xs: "none", md: "block" }}>
				{navbar}
			</Box>

			<Drawer
				classes={{
					paper: "space-y-2",
				}}
				open={sidebarOpen}
				onClose={() => setSidebarOpen(!sidebarOpen)}
				sx={{
					display: { md: "none" },
					"& .MuiDrawer-paper": {
						bgcolor: "accent.main",
						px: 4,
						py: 8,
						width: "80%",
					},
				}}>
				{navbar}
			</Drawer>
		</>
	);
};

export default Sidebar;
