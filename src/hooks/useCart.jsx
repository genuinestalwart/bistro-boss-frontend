import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";

const useCart = () => {
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);

	const {
		data = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["cart", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/carts?email=${user.email}`);
			return res.data;
		},
	});

	return [data, isLoading, refetch];
};

export default useCart;
