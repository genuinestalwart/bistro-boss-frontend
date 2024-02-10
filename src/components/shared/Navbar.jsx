import { Link, NavLink, useLocation } from "react-router-dom";
import {
	Badge,
	Box,
	Button,
	CircularProgress,
	Drawer,
	IconButton,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { ShoppingCart } from "@mui/icons-material";
import useCart from "@/hooks/useCart";

const navItems = [
	{ path: "/", name: "Home" },
	{ path: "contact-us", name: "Contact Us" },
	{ path: "dashboard", name: "Dashboard", private: true },
	{ path: "menu", name: "Our Menu" },
	{ path: "shop", name: "Our Shop" },
];

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
	const location = useLocation();
	const [cart] = useCart();
	const { loading, logOut, user } = useContext(AuthContext);

	const navbar = navItems.map((navItem, index) => {
		if (navItem.private && !user) {
			return;
		} else {
			return (
				<NavLink
					caseSensitive
					className={({ isActive }) =>
						`bg-secondary/5 md:bg-transparent font-semibold py-3 md:py-0 rounded-lg text-center text-sm uppercase w-4/5 md:w-auto ${
							navItem.private && !user ? "hidden" : ""
						} ${
							isActive
								? "text-accent"
								: "hover:bg-accent md:hover:bg-transparent md:hover:text-primary md:hover:underline underline-offset-2"
						}`
					}
					end
					key={index}
					state={{ from: location }}
					to={navItem.path}>
					{navItem.name}
				</NavLink>
			);
		}
	});

	return (
		<Box
			alignItems='center'
			className='md:space-x-4'
			component='nav'
			display='flex'>
			<Box className='space-x-4' display={{ xs: "none", md: "block" }}>
				{navbar}
			</Box>

			<Drawer
				classes={{
					paper: "space-y-2",
				}}
				open={navbarOpen}
				onClose={() => setNavbarOpen(!navbarOpen)}
				sx={{
					display: { md: "none" },
					"& .MuiDrawer-paper": {
						alignItems: "center",
						display: "flex",
						flexDirection: "column",
						py: 8,
						width: "80%",
					},
				}}>
				{navbar}
			</Drawer>

			{loading ? (
				<CircularProgress color='accent' />
			) : !user ? (
				<>
					<IconButton aria-label='cart'>
						<ShoppingCart color='primary' />
					</IconButton>

					<Link
						className='block'
						state={{ from: location }}
						to='/signin'>
						<Button
							color='accent'
							sx={{
								color: "secondary.main",
								fontFamily: "inherit",
								fontWeight: 600,
							}}
							variant='contained'>
							Log In
						</Button>
					</Link>
				</>
			) : (
				<>
					<Link
						className='block'
						state={{ from: location }}
						to='/dashboard/cart'>
						<IconButton aria-label='cart'>
							<Badge badgeContent={cart.length} color='accent'>
								<ShoppingCart color='primary' />
							</Badge>
						</IconButton>
					</Link>

					<Button
						color='accent'
						onClick={logOut}
						sx={{
							color: "secondary.main",
							fontFamily: "inherit",
							fontWeight: 600,
						}}
						variant='contained'>
						Log Out
					</Button>
				</>
			)}
		</Box>
	);
};

export default Navbar;
