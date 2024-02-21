import {
	AccountBalanceWallet,
	Groups,
	LocalShipping,
	Restaurant,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import HomeStats from "@/components/Dashboard/home/HomeStats";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AdminBarChart from "@/components/Dashboard/home/AdminBarChart";
import AdminPieChart from "@/components/Dashboard/home/AdminPieChart";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
	const axiosSecure = useAxiosSecure();

	const { data = {} } = useQuery({
		queryKey: ["adminStats"],
		queryFn: async () => {
			const res = await axiosSecure.get(`/stats/admin`);
			return res.data;
		},
	});

	const statsInfo = [
		{
			from: "from-[#BB34F5]",
			icon: <AccountBalanceWallet fontSize='large' />,
			text: "Revenue",
			to: "to-[#FCDBFF]",
			value: `$${Math.round(data.totalRevenue) || 0}`,
		},
		{
			from: "from-[#D3A256]",
			icon: <Groups fontSize='large' />,
			text: "Customers",
			to: "to-[#FDE8C0]",
			value: data.customers || 0,
		},
		{
			from: "from-[#FE4880]",
			icon: <Restaurant fontSize='large' />,
			text: "Products",
			to: "to-[#FECDE9]",
			value: data.products || 0,
		},
		{
			from: "from-[#6AAEFF]",
			icon: <LocalShipping fontSize='large' />,
			text: "Orders",
			to: "to-[#B6F7FF]",
			value: data.orders || 0,
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

			<Box
				bgcolor='primary.main'
				className='md:space-x-4 space-y-4 md:space-y-0'
				display={{ md: "flex" }}
				p={4}>
				<Box className='h-72 w-full md:w-1/2'>
					<AdminBarChart colors={colors} sold={data.sold} />
				</Box>

				<Box className='h-72 w-full md:w-1/2'>
					<AdminPieChart colors={colors} sold={data.sold} />
				</Box>
			</Box>
		</Box>
	);
};

export default AdminHome;
