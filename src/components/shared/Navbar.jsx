import { NavLink } from "react-router-dom";
import { Box, Button, Drawer } from "@mui/material";

const navItems = [
	{ path: "/", pathName: "Home" },
	{ path: "/contact-us", pathName: "Contact Us" },
	{ path: "/dashboard", pathName: "Dashboard" },
	{ path: "/menu", pathName: "Our Menu" },
	{ path: "/shop", pathName: "Our Shop" },
];

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
	const navbar = navItems.map((navItem, index) => (
		<NavLink
			className={({ isActive }) =>
				`bg-secondary/5 md:bg-transparent font-semibold py-3 md:py-0 rounded-lg text-center text-sm uppercase w-4/5 md:w-auto ${
					isActive
						? "text-accent"
						: "hover:bg-accent md:hover:bg-transparent md:hover:text-primary md:hover:underline underline-offset-2"
				}`
			}
			key={index}
			to={navItem.path}>
			{navItem.pathName}
		</NavLink>
	));

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
		</Box>
	);
};

export default Navbar;
