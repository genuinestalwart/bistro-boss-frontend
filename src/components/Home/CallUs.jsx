import { Box } from "@mui/material";

const CallUs = () => {
	return (
		<Box
			bgcolor='secondary.main'
			className='text-3xl'
			color='secondary.contrastText'
			component='section'
			mx='auto'
			py={16}
			textAlign='center'
			width={{ xs: "80%", md: "75%" }}>
			Call Us: +88 0192345678910
		</Box>
	);
};

export default CallUs;
