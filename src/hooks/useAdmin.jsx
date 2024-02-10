import { AuthContext } from "@/providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";

const useAdmin = () => {
	const [isAdmin, setIsAdmin] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const axiosSecure = useAxiosSecure();
	const { loading, user } = useContext(AuthContext);
	const token = localStorage.getItem("access-token");

	useEffect(() => {
		if (!loading && user && token) {
			axiosSecure.get(`/users/admin/${user.email}`).then((res) => {
				setIsAdmin(res.data?.isAdmin);
				setIsLoading(false);
			});
		}
	}, [axiosSecure, loading, token, user]);

	return [isAdmin, isLoading];
};

export default useAdmin;
