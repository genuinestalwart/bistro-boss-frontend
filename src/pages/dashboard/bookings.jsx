import DashTable from "@/components/Dashboard/DashTable";
import Payment from "@/components/Dashboard/Payment";
import MyBookingsRow from "@/components/Dashboard/rows/MyBookingsRow";
import SectionTitles from "@/components/shared/SectionTitles";
import StyledButton from "@/components/shared/buttons/StyledButton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { AuthContext } from "@/providers/AuthProvider";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
const headerCells = ["", "Time", "Date", "Guests", "Price", "Action"];

const MyBookingsPage = () => {
	const [open, setOpen] = useState(false);
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);

	const {
		data = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["bookings", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/bookings/${user.email}`);
			return res.data;
		},
	});

	const totalPrice = data
		.filter((item) => !item.paid)
		.reduce((total, item) => total + item.price, 0);

	return (
		<>
			<Helmet>
				<title>Bistro Boss | My Bookings</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Wanna Add More?'
					component='h1'
					smallTitle='My Cart'
				/>
			</Box>

			{open ? (
				<Payment
					data={data}
					category='Table Booking'
					price={totalPrice}
					refetch={refetch}
					setOpen={setOpen}
				/>
			) : (
				<DashTable
					headerCells={headerCells}
					isLoading={isLoading}
					summary={
						<Box
							alignItems='center'
							display='flex'
							justifyContent='space-between'>
							{[
								`Total Bookings: ${data.length}`,
								`Total Price: $${totalPrice}`,
							].map((text, i) => (
								<Typography
									component='h3'
									fontFamily='"Cinzel Variable", sans-serif'
									fontWeight={700}
									key={i}
									variant='h5'>
									{text}
								</Typography>
							))}

							<StyledButton
								disabled={!totalPrice || !data.length}
								onClick={() => setOpen(true)}
								sx={{ boxShadow: 0 }}>
								Pay
							</StyledButton>
						</Box>
					}
					tableName='my bookings'>
					<MyBookingsRow data={data.toReversed()} refetch={refetch} />
				</DashTable>
			)}
		</>
	);
};

export default MyBookingsPage;
