import OurLocation from "@/components/ContactUs/OurLocation";
import BookingForm from "@/components/Dashboard/forms/BookingForm";
import SectionTitles from "@/components/shared/SectionTitles";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { AuthContext } from "@/providers/AuthProvider";
import { ModalContext } from "@/providers/ModalProvider";
import { Box } from "@mui/material";
import moment from "moment";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const ReservationPage = () => {
	const navigate = useNavigate();
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);
	const { modal } = useContext(ModalContext);

	const onSubmit = (e, date, time, guests) => {
		e.preventDefault();

		const booking = {
			date: moment(date).format("D MMMM YYYY"),
			email: user.email,
			guests: parseInt(guests),
			price: 5 * parseInt(guests),
			time: time,
		};

		modal({
			buttonText: "Confirm",
			color: "success",
			description: `Are you agreeing to pay $5 for this booking?`,
			onClick: async () => {
				await axiosSecure.post("/bookings", booking);
				navigate("/dashboard/bookings");
			},
			title: "Book A Table!",
		});
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Reservation</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Book A Table'
					component='h1'
					smallTitle='Reservation'
				/>
			</Box>

			<BookingForm onSubmit={onSubmit} />

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles bigTitle='Our Location' smallTitle='Visit us' />
			</Box>

			<Box mx='auto' width='80%'>
				<OurLocation />
			</Box>
		</>
	);
};

export default ReservationPage;
