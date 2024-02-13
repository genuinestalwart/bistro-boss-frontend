import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
	const axiosPublic = useAxiosPublic();

	const {
		data = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["menu"],
		queryFn: async () => {
			const res = await axiosPublic.get("/menu");
			return res.data;
		},
	});

	return [data, isLoading, refetch];
};

export default useMenu;
