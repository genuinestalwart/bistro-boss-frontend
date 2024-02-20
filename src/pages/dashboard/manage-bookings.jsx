import DashTable from "@/components/Dashboard/DashTable";
import ManageBookingsRow from "@/components/Dashboard/rows/ManageBookingsRow";
import SectionTitles from "@/components/shared/SectionTitles";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
const headerCells = ["Email", "Time", "Date", "Guests", "Status"];

const ManageBookingsPage = () => {
	const axiosSecure = useAxiosSecure();

	const { data = [], isLoading } = useQuery({
		queryKey: ["bookings"],
		queryFn: async () => {
			const res = await axiosSecure.get("/bookings");
			return res.data;
		},
	});

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Manage Bookings</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Manage All Bookings'
					component='h1'
					smallTitle='At a glance!'
				/>
			</Box>

			<DashTable
				headerCells={headerCells}
				isLoading={isLoading}
				summary={
					<Typography
						component='h3'
						fontFamily='"Cinzel Variable", sans-serif'
						fontWeight={700}
						variant='h5'>
						Total Bookings: {data.length}
					</Typography>
				}
				tableName='my bookings'>
				<ManageBookingsRow data={data.toReversed()} />
			</DashTable>
		</>
	);
};

export default ManageBookingsPage;
