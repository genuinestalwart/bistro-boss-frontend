import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SectionTitles from "@/components/shared/SectionTitles";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import DashTable from "@/components/Dashboard/DashTable";
import CartRow from "@/components/Dashboard/rows/CartRow";
import StyledButton from "@/components/shared/buttons/StyledButton";
const headerCells = ["", "Image", "Name", "Price", "Remove"];

const MyCartPage = () => {
	const [cart, isLoading, refetch] = useCart();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let sum = 0;
		cart.forEach((item) => (sum += item.price));
		setTotalPrice(Math.round(sum * 100) / 100);
	}, [cart]);

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

						<StyledButton sx={{ boxShadow: 0 }}>Pay</StyledButton>
					</Box>
				}
				tableName='my cart'>
				<CartRow cart={cart.toReversed()} refetch={refetch} />
			</DashTable>
		</>
	);
};

export default MyCartPage;
