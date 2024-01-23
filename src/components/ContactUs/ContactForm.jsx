import { grey } from "@mui/material/colors";
import SectionTitles from "../shared/SectionTitles";
import { Box, Button, TextField } from "@mui/material";
import { Send } from "@mui/icons-material";

const fieldProps = [
	{
		id: "name",
		gridColumn: { md: "span 2 / span 2" },
		label: "Name",
		placeholder: "Enter your name",
	},
	{
		id: "email",
		label: "Email",
		placeholder: "Enter your email",
	},
	{
		id: "phone",
		label: "Phone",
		placeholder: "Enter your phone number",
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
	return (
		<Box
			className='space-y-8'
			component='section'
			mx='auto'
			width={{
				xs: "80%",
				md: "75%",
			}}>
			<SectionTitles
				smallTitle='Send us a message'
				bigTitle='Contact Form'
			/>

			<Box
				autoComplete='off'
				bgcolor={grey[100]}
				className='space-y-8 md:space-y-16'
				component='form'
				noValidate
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
					variant='contained'>
					Send Message
				</Button>
			</Box>
		</Box>
	);
};

export default ContactForm;
