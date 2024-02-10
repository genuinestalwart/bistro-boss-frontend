import { grey } from "@mui/material/colors";
import { Box, Button, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";

const fieldProps = [
	{
		id: "name",
		gridColumn: { md: "span 2 / span 2" },
		label: "Name",
		placeholder: "Enter your name",
		type: "text",
	},
	{
		id: "email",
		label: "Email",
		placeholder: "Enter your email",
		type: "email",
	},
	{
		id: "phone",
		label: "Phone",
		placeholder: "Enter your phone number",
		type: "tel",
	},
	{
		id: "message",
		gridColumn: { md: "span 2 / span 2" },
		label: "Message",
		multiline: true,
		placeholder: "Write your message here",
		rows: 8,
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
				{fieldProps.map((fieldItem, index) => (
					<TextField
						autoComplete='on'
						color='accent'
						id={fieldItem.id}
						key={index}
						label={fieldItem.label}
						multiline={fieldItem.multiline}
						placeholder={fieldItem.placeholder}
						required
						rows={fieldItem.rows}
						sx={{
							bgcolor: "primary.main",
							gridColumn: fieldItem.gridColumn || "auto",
						}}
						type={fieldItem.type}
						variant='outlined'
					/>
				))}
			</Box>

			<Button
				color='accent'
				endIcon={<Send />}
				sx={{
					color: "secondary.main",
					display: "flex",
					fontFamily: "inherit",
					fontWeight: 600,
					mx: "auto",
					"&:hover": {
						bgcolor: "secondary.main",
						color: "accent.main",
					},
				}}
				type='submit'
				variant='contained'>
				Send Message
			</Button>
		</Box>
	);
};

export default ContactForm;
