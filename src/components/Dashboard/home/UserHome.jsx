import { Box, Typography } from "@mui/material";
import HomeStats from "@/components/Dashboard/home/HomeStats";
import {
	AccountBalanceWallet,
	PlayLesson,
	ShoppingCart,
} from "@mui/icons-material";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import UserDetails from "@/components/Dashboard/home/UserDetails";

const UserHome = () => {
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);

	const { data = {} } = useQuery({
		queryKey: ["userStats", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/stats/user/${user.email}`);
			return res.data;
		},
	});

	const statsInfo = [
		{
			from: "from-[#BB34F5]",
			icon: <ShoppingCart fontSize='large' />,
			text: "Cart",
			to: "to-[#FCDBFF]",
			value: data.cart || 0,
		},
		{
			from: "from-[#D3A256]",
			icon: <PlayLesson fontSize='large' />,
			text: "Bookings",
			to: "to-[#FDE8C0]",
			value: data.bookings || 0,
		},
		{
			from: "from-[#FE4880]",
			icon: <AccountBalanceWallet fontSize='large' />,
			text: "Payments",
			to: "to-[#FECDE9]",
			value: data.payments || 0,
		},
	];

	return (
		<Box className='space-y-8' px={8}>
			<Typography
				component='h1'
				fontFamily='"Cinzel Variable", sans-serif'
				fontWeight={700}
				variant='h5'>
				Hi, Welcome Back!
			</Typography>

			<HomeStats statsInfo={statsInfo} />
			<UserDetails user={user} />
		</Box>
	);
};

export default UserHome;
