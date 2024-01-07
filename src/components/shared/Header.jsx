import "@fontsource-variable/cinzel";
import { NavLink } from "react-router-dom";

const navItems = [
	{ path: "/", pathName: "Home" },
	{ path: "/contact-us", pathName: "Contact Us" },
	{ path: "/dashboard", pathName: "Dashboard" },
	{ path: "/menu", pathName: "Our Menu" },
	{ path: "/shop", pathName: "Our Shop" },
];

const Header = () => {
	return (
		<header className='absolute bg-secondary/50 flex h-20 items-center justify-between px-8 text-primary w-full z-10'>
			<div className='capitalize font-cinzel'>
				<div className='font-bold text-xl'>Bistro Boss</div>
				<div className='font-semibold tracking-[.2em]'>Restaurant</div>
			</div>

			<nav className='space-x-4'>
				{navItems.map((navItem, index) => (
					<NavLink
						key={index}
						className={({ isActive }) =>
							`font-semibold text-sm uppercase ${
								isActive ? "text-accent" : ""
							}`
						}
						to={navItem.path}>
						{navItem.pathName}
					</NavLink>
				))}
			</nav>
		</header>
	);
};

export default Header;
