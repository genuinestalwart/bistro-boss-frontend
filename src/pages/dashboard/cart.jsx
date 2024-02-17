import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SectionTitles from "@/components/shared/SectionTitles";
import useCart from "@/hooks/useCart";
import DashTable from "@/components/Dashboard/DashTable";
import CartRow from "@/components/Dashboard/rows/CartRow";
import StyledButton from "@/components/shared/buttons/StyledButton";
import { useState } from "react";
import Payment from "@/components/Dashboard/Payment";
const headerCells = ["", "Image", "Name", "Price", "Remove"];

const MyCartPage = () => {
	const [open, setOpen] = useState(false);
	const [cart, isLoading, refetch] = useCart();

	const totalPrice =
		Math.round(cart.reduce((total, item) => total + item.price, 0) * 100) /
		100;

	return (
		<>
			<Helmet>
				<title>Bistro Boss | My Cart</title>
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
					data={cart}
					payingFor='cart'
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
								`Total Orders: ${cart.length}`,
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
								disabled={!cart.length || !totalPrice}
								onClick={() => setOpen(true)}
								sx={{ boxShadow: 0 }}>
								Pay
							</StyledButton>
						</Box>
					}
					tableName='my cart'>
					<CartRow cart={cart.toReversed()} refetch={refetch} />
				</DashTable>
			)}
		</>
	);
};

export default MyCartPage;
