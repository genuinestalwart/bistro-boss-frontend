import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "@/providers/AuthProvider";
import PageLoading from "@/components/shared/PageLoading";
import { Box } from "@mui/material";
import DashHeader from "@/components/Dashboard/DashHeader";
import { grey } from "@mui/material/colors";
import useAdmin from "@/hooks/useAdmin";
import NotFound from "@/components/shared/NotFound";

const adminRoutes = [
	"/dashboard/add-item",
	"/dashboard/manage-items",
	"/dashboard/manage-bookings",
	"/dashboard/users",
];

const DashLayout = () => {
	const [isAdminRoute, setIsAdminRoute] = useState(false);
	const location = useLocation();
	const [isAdmin, isLoading] = useAdmin();
	const { loading, user } = useContext(AuthContext);

	useEffect(() => {
		setIsAdminRoute(adminRoutes.includes(location.pathname));
	}, [location.pathname]);

	return loading || isLoading ? (
		<PageLoading />
	) : user && (!isAdminRoute || isAdmin) ? (
		<Box display={{ md: "flex" }} height={{ md: "100vh" }}>
			<DashHeader isAdmin={isAdmin} />

			<Box
				bgcolor={grey[100]}
				className='space-y-12'
				component='main'
				height={{ md: "100%" }}
				py={8}
				sx={{ overflowY: { md: "auto" } }}
				width={{ md: "70%", lg: "75%" }}>
				<Outlet />
			</Box>
		</Box>
	) : user ? (
		<NotFound />
	) : (
		<Navigate to='/signin' />
	);
};

export default DashLayout;
