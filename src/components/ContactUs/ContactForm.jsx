import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import { Send } from "@mui/icons-material";
import StyledButton from "@/components/shared/buttons/StyledButton";
import InputField from "../shared/InputField";

const fields = [
	{
		autoComplete: "name",
		gridColumn: { md: "span 2 / span 2" },
		id: "name",
		label: "Name",
		placeholder: "Enter your name",
		type: "text",
	},
	{
		autoComplete: "email",
		id: "email",
		label: "Email",
		placeholder: "Enter your email",
		type: "email",
	},
	{
		autoComplete: "tel",
		id: "phone",
		label: "Phone",
		placeholder: "Enter your phone number",
		type: "tel",
	},
	{
		gridColumn: { md: "span 2 / span 2" },
		id: "message",
		label: "Message",
		multiline: true,
		placeholder: "Write your message here",
		minRows: 8,
	},
];

const ContactForm = () => {
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Box
			bgcolor={grey[100]}
			className='space-y-8 md:space-y-16'
			component='form'
			onSubmit={onSubmit}
			p={{ xs: 8, md: 16 }}>
			<Box
				display='grid'
				gap={8}
				gridTemplateColumns={{
					xs: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
				}}>
				{fields.map((field, i) => (
					<InputField field={field} key={i} />
				))}
			</Box>

			<StyledButton
				endIcon={<Send />}
				sx={{ display: "flex", mx: "auto" }}
				type='submit'>
				Send Message
			</StyledButton>
		</Box>
	);
};

export default ContactForm;
