import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "@/providers/AuthProvider";
import PageLoading from "@/components/shared/PageLoading";

const DashLayout = () => {
	const { loading, user } = useContext(AuthContext);

	return loading ? (
		<PageLoading />
	) : user ? (
		<Outlet />
	) : (
		<Navigate replace to='/login' />
	);
};

export default DashLayout;
