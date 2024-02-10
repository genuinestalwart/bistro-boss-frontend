import { Box, Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SectionTitles from "@/components/shared/SectionTitles";
import useCart from "@/hooks/useCart";
import MyCartTable from "@/components/Dashboard/MyCartTable";
import { useEffect, useState } from "react";

const MyCartPage = () => {
	const [cart, refetch] = useCart();
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		let sum = 0;
		cart.forEach((item) => (sum += item.price));
		setTotalPrice(Math.round(sum * 100) / 100);
	}, [cart]);

	return (
		<Box
			className='space-y-12'
			mx='auto'
			py={8}
			width={{ xs: "80%", md: "100%" }}>
			<Helmet>
				<title>Bistro Boss | My Cart</title>
			</Helmet>

			<SectionTitles
				bigTitle='Wanna Add More?'
				component='h1'
				smallTitle='My Cart'
			/>

			<Box
				bgcolor='primary.main'
				className='space-y-6'
				mx='auto'
				p={8}
				width={{ lg: "75%" }}>
				<Box
					alignItems='center'
					display='flex'
					justifyContent='space-between'>
					{[
						`Total Orders: ${cart.length}`,
						`Total Price: $${totalPrice}`,
					].map((text, index) => (
						<Typography
							component='h3'
							fontFamily='"Cinzel Variable", sans-serif'
							fontWeight={700}
							key={index}
							variant='h5'>
							{text}
						</Typography>
					))}

					<Button
						color='accent'
						sx={{
							borderRadius: 1.5,
							boxShadow: 0,
							fontWeight: 600,
							"&:hover": {
								bgcolor: "secondary.main",
								color: "accent.main",
							},
						}}
						variant='contained'>
						Pay
					</Button>
				</Box>

				<MyCartTable cart={cart} refetch={refetch} />
			</Box>
		</Box>
	);
};

export default MyCartPage;
