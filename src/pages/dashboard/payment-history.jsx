import DashTable from "@/components/Dashboard/DashTable";
import PaymentRow from "@/components/Dashboard/rows/PaymentRow";
import SectionTitles from "@/components/shared/SectionTitles";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { AuthContext } from "@/providers/AuthProvider";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
const headerCells = ["Transaction ID", "Category", "Price", "Status", "Date"];

const PaymentHistoryPage = () => {
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);

	const { data: payments = [], isLoading } = useQuery({
		queryKey: ["payments", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/payments/${user.email}`);
			return res.data;
		},
	});

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Payment History</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Payment History'
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
						Total Payments: {payments.length}
					</Typography>
				}
				tableName='all users'>
				<PaymentRow payments={payments.toReversed()} />
			</DashTable>
		</>
	);
};

export default PaymentHistoryPage;
