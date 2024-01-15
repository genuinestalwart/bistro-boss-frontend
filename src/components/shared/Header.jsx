import "@fontsource-variable/cinzel";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navItems = [
	{ path: "/", pathName: "Home" },
	{ path: "/contact-us", pathName: "Contact Us" },
	{ path: "/dashboard", pathName: "Dashboard" },
	{ path: "/menu", pathName: "Our Menu" },
	{ path: "/shop", pathName: "Our Shop" },
];

const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	const navbar = navItems.map((navItem, index) => (
		<NavLink
			key={index}
			className={({ isActive }) =>
				`bg-neutral/10 md:bg-transparent font-semibold py-3 md:py-0 rounded-lg text-center text-sm uppercase w-4/5 md:w-auto ${
					isActive
						? "text-accent"
						: "hover:bg-accent md:hover:bg-transparent"
				}`
			}
			to={navItem.path}>
			{navItem.pathName}
		</NavLink>
	));

	return (
		<header className='absolute bg-secondary/50 flex h-20 items-center justify-between px-8 text-primary w-full z-10'>
			<IconButton
				color='inherit'
				onClick={() => setSidebarOpen(!sidebarOpen)}
				sx={{ display: { md: "none" } }}>
				<FontAwesomeIcon icon={faBars} />
			</IconButton>

			<div className='capitalize font-cinzel'>
				<div className='font-bold text-xl'>Bistro Boss</div>
				<div className='font-semibold tracking-[.2em]'>Restaurant</div>
			</div>

			<nav className='flex items-center space-x-4'>
				<div className='md:block hidden space-x-4'>{navbar}</div>

				<Drawer
					open={sidebarOpen}
					onClose={() => setSidebarOpen(!sidebarOpen)}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: "80%",
						},
					}}>
					<div className='flex flex-col items-center py-16 space-y-2'>
						{navbar}
					</div>
				</Drawer>

				<button className='bg-accent font-semibold px-3 py-2 rounded-md uppercase'>
					Log In
				</button>
			</nav>
		</header>
	);
};

export default Header;
