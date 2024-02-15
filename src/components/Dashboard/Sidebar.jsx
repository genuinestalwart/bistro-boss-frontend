import { Box, Divider, Drawer } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import NavButton from "@/components/shared/buttons/NavButton";
import { dashNavItems, navItems } from "@/utilities/Sidebar";

const Sidebar = ({ isAdmin, sidebarOpen, setSidebarOpen }) => {
	const sidebar = (
		<>
			{dashNavItems[isAdmin ? 0 : 1].map((dashNavItem, i) => (
				<NavLink
					caseSensitive
					className={({ isActive }) =>
						`block ${isActive ? "text-primary" : "text-secondary"}`
					}
					end
					key={i}
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

			{navItems.map((navItem, i) => (
				<Link className='block' key={i} to={navItem.path}>
					<NavButton icon={navItem.icon} name={navItem.name} />
				</Link>
			))}
		</>
	);

	return (
		<>
			<Box component='nav' display={{ xs: "none", md: "block" }}>
				{sidebar}
			</Box>

			<Drawer
				classes={{ paper: "space-y-2" }}
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
				{sidebar}
			</Drawer>
		</>
	);
};

export default Sidebar;
