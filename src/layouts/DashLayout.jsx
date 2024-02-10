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
	"/dashboard",
	"/dashboard/add-item",
	"/dashboard/manage-items",
	"/dashboard/manage-bookings",
	"/dashboard/users",
];

const userRoutes = [
	"/dashboard",
	"/dashboard/reservation",
	"/dashboard/payment",
	"/dashboard/cart",
	"/dashboard/review",
	"/dashboard/booking",
];

const DashLayout = () => {
	const [isAdminRoute, setIsAdminRoute] = useState(false);
	const [isUserRoute, setIsUserRoute] = useState(false);
	const location = useLocation();
	const [isAdmin, isLoading] = useAdmin();
	const { loading, user } = useContext(AuthContext);

	useEffect(() => {
		setIsAdminRoute(adminRoutes.includes(location.pathname));
		setIsUserRoute(userRoutes.includes(location.pathname));
	}, [location.pathname]);

	return loading || isLoading ? (
		<PageLoading />
	) : user && ((isAdmin && isAdminRoute) || (!isAdmin && isUserRoute)) ? (
		<Box display={{ md: "flex" }} height={{ md: "100vh" }}>
			<DashHeader isAdmin={isAdmin} />

			<Box
				bgcolor={grey[100]}
				component='main'
				height={{ md: "100%" }}
				sx={{
					overflowY: { md: "auto" },
				}}
				width={{ md: "70%", lg: "75%" }}>
				<Outlet />
			</Box>
		</Box>
	) : user ? (
		<NotFound />
	) : (
		<Navigate state={location.state} to='/signin' />
	);
};

export default DashLayout;
