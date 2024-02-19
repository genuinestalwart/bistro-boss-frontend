import { Link, NavLink } from "react-router-dom";
import {
	Badge,
	Box,
	CircularProgress,
	Drawer,
	IconButton,
} from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { Logout, ShoppingCart } from "@mui/icons-material";
import useCart from "@/hooks/useCart";
import StyledButton from "@/components/shared/buttons/StyledButton";

const navItems = [
	{ path: "/", name: "Home" },
	{ path: "contact-us", name: "Contact Us" },
	{ path: "dashboard", name: "Dashboard", private: true },
	{ path: "menu", name: "Our Menu" },
	{ path: "shop", name: "Our Shop" },
];

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
	const [cart] = useCart();
	const { loading, logOut, user } = useContext(AuthContext);

	const navbar = navItems.map(
		(navItem, i) =>
			!(navItem.private && !user) && (
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
					key={i}
					onClick={() => setNavbarOpen(!navbarOpen)}
					to={navItem.path}>
					{navItem.name}
				</NavLink>
			)
	);

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
				classes={{ paper: "space-y-2" }}
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

					<Link className='block' to='/signin'>
						<StyledButton>Log In</StyledButton>
					</Link>
				</>
			) : (
				<>
					<Link className='block' to='/dashboard/cart'>
						<IconButton aria-label='cart'>
							<Badge badgeContent={cart.length} color='accent'>
								<ShoppingCart color='primary' />
							</Badge>
						</IconButton>
					</Link>

					<StyledButton
						color='error'
						onClick={logOut}
						sx={{ color: "primary.main" }}>
						<span className='hidden md:inline'>Log Out</span>
						<Logout sx={{ display: { md: "none" } }} />
					</StyledButton>
				</>
			)}
		</Box>
	);
};

export default Navbar;
