import useAxiosSecure from "@/hooks/useAxiosSecure";
import { AuthContext } from "@/providers/AuthProvider";
import { ToastContext } from "@/providers/ToastProvider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import moment from "moment";
import { useContext, useState } from "react";
import CheckoutForm from "@/components/Dashboard/forms/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_publishable_key);

const Payment = ({ data, payingFor, price, refetch, setOpen }) => {
	const [error, setError] = useState("");
	const [transactionID, setTransactionID] = useState("");
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);
	const { toast } = useContext(ToastContext);

	const onSubmit = async (CardElement, clientSecret, elements, stripe) => {
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (!card) {
			return;
		}

		const { error: createError } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		setError(createError ? createError.message : "");

		const { error: confirmError, paymentIntent } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card,
					billing_details: {
						email: user?.email || "anonymous",
						name: user?.displayName || "anonymous",
					},
				},
			});

		setError(confirmError ? confirmError.message : "");

		if (paymentIntent?.status === "succeeded") {
			await axiosSecure.post("/payments", {
				dataIDs: data.map((item) => item._id),
				email: user.email,
				menuIDs: data.map((item) => item.menuID),
				payingFor,
				price,
				status: "pending",
				timestamp: moment().unix(),
				transactionID: paymentIntent.id,
			});

			toast({
				title: "Payment Successful!",
				type: "success",
				description: "You've placed your order.",
			});

			setTransactionID(paymentIntent.id);
			refetch();
		}
	};

	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm
				error={error}
				price={price}
				onSubmit={onSubmit}
				setOpen={setOpen}
				transactionID={transactionID}
			/>
		</Elements>
	);
};

export default Payment;
