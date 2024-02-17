import StyledButton from "@/components/shared/buttons/StyledButton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { ModalContext } from "@/providers/ModalProvider";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

const CheckoutForm = ({ error, onSubmit, price, setOpen, transactionID }) => {
	const [clientSecret, setClientSecret] = useState("");
	const [disabled, setDisabled] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const axiosSecure = useAxiosSecure();
	const { modal } = useContext(ModalContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		modal({
			buttonText: "Confirm",
			color: "success",
			description: `Are you sure you want to pay $${price}?`,
			onClick: async () => {
				setDisabled(true);
				await onSubmit(CardElement, clientSecret, elements, stripe);
			},
			title: "Confirm Payment",
		});
	};

	useEffect(() => {
		price > 0 &&
			axiosSecure
				.post("/create-payment-intent", { price })
				.then((res) => setClientSecret(res.data.clientSecret));
	}, [axiosSecure, price]);

	return (
		<Box
			bgcolor={grey[300]}
			borderRadius={2}
			className='space-y-8'
			component='form'
			mx='auto'
			onSubmit={handleSubmit}
			p={8}
			width={{ xs: "80%", md: "75%", lg: "50%" }}>
			<Typography component='h3' fontWeight={500} variant='h5'>
				Amount: ${price}
			</Typography>

			<CardElement className='bg-primary border-2 border-secondary hover:border-accent hover:cursor-text p-4 rounded-md' />

			<Box
				alignItems='center'
				display='flex'
				justifyContent='space-between'>
				<StyledButton
					onClick={() => setOpen(false)}
					sx={{ bgcolor: grey[400] }}>
					Go Back
				</StyledButton>

				<StyledButton
					disabled={!stripe || !clientSecret || disabled}
					type='submit'>
					Pay
				</StyledButton>
			</Box>

			{(error || transactionID) && (
				<Typography
					color={error ? "error" : "success.main"}
					fontWeight={500}
					variant='body1'>
					{error ? error : `Your transaction ID is: ${transactionID}`}
				</Typography>
			)}
		</Box>
	);
};

export default CheckoutForm;
