import { Link, NavLink } from "react-router-dom";
import { Box, Button, CircularProgress, Drawer } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const navItems = [
	{ path: "/", pathName: "Home" },
	{ path: "/contact-us", pathName: "Contact Us" },
	{ path: "/dashboard", pathName: "Dashboard", private: true },
	{ path: "/menu", pathName: "Our Menu" },
	{ path: "/shop", pathName: "Our Shop" },
];

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
	const { loading, logOut, user } = useContext(AuthContext);

	const navbar = navItems.map((navItem, index) => {
		if (navItem.private && !user) {
			return;
		} else {
			return (
				<NavLink
					className={({ isActive }) =>
						`bg-secondary/5 md:bg-transparent font-semibold py-3 md:py-0 rounded-lg text-center text-sm uppercase w-4/5 md:w-auto ${
							navItem.private && !user ? "hidden" : ""
						} ${
							isActive
								? "text-accent"
								: "hover:bg-accent md:hover:bg-transparent md:hover:text-primary md:hover:underline underline-offset-2"
						}`
					}
					key={index}
					to={navItem.path}>
					{navItem.pathName}
				</NavLink>
			);
		}
	});

	return (
		<Box
			alignItems='center'
			className='space-x-4'
			component='nav'
			display='flex'>
			<Box className='space-x-4' display={{ xs: "none", md: "block" }}>
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
				<Link to='/signin'>
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
			) : (
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
			)}
		</Box>
	);
};

export default Navbar;
