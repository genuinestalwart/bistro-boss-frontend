import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import { Send } from "@mui/icons-material";
import StyledButton from "@/components/shared/buttons/StyledButton";
import InputField from "../shared/InputField";
import { fields } from "@/utilities/ContactForm";

const ContactForm = () => {
	return (
		<Box
			bgcolor={grey[100]}
			className='space-y-8 md:space-y-16'
			component='form'
			onSubmit={(e) => e.preventDefault()}
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
