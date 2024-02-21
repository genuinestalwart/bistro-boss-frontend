import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
	const axiosSecure = useAxiosSecure();
	const { loading, user } = useContext(AuthContext);

	const { data: isAdmin, isLoading } = useQuery({
		enabled: !loading,
		queryKey: ["isAdmin", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/admin/${user.email}`);
			return res.data?.isAdmin;
		},
	});

	return [isAdmin, isLoading];
};

export default useAdmin;
