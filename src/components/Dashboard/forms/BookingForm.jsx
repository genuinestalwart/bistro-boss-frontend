import InputField from "@/components/shared/fields/InputField";
import StyledButton from "@/components/shared/buttons/StyledButton";
import { fields } from "@/utilities/BookingForm";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import InputDate from "@/components/shared/fields/InputDate";
import moment from "moment";

const BookingForm = ({ onSubmit }) => {
	const [selectedDate, setSelectedDate] = useState(moment().add(1, "d"));
	const [time, setTime] = useState("12:00pm - 12:30pm");
	const [guests, setGuests] = useState("1");
	const [price, setPrice] = useState(5);
	const available = true;

	useEffect(() => {
		setPrice(5 * parseInt(guests));
	}, [guests]);

	return (
		<Box
			bgcolor={grey[300]}
			className='space-y-8'
			component='form'
			mx='auto'
			onSubmit={(e) => onSubmit(e, selectedDate, time, guests)}
			p={8}
			width={{ md: "80%" }}>
			<Box
				display='grid'
				gap={8}
				gridTemplateColumns={{
					xs: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
				}}>
				<InputDate
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
				/>

				{fields(setTime, setGuests).map((field, i) => (
					<InputField field={field} key={i} onChange={field.onChange}>
						{field.children}
					</InputField>
				))}
			</Box>

			<Box
				alignItems='center'
				display='flex'
				justifyContent='space-between'>
				<Typography fontWeight={500} variant='body1'>
					Price: ${price}
				</Typography>

				<StyledButton disabled={!available} type='submit'>
					Book A Table
				</StyledButton>
			</Box>
		</Box>
	);
};

export default BookingForm;
