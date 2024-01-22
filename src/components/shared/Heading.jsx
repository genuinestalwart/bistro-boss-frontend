import { Box, Typography } from "@mui/material";

const Heading = (props) => {
	const { bgImage, title } = props;

	return (
		<Box
			alignItems='center'
			className={bgImage}
			component='section'
			display='flex'
			height='100vh'
			maxHeight={{ "2xl": "810px" }}
			pt={20}
			sx={{
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<Box
				className='bg-secondary/50 space-y-4'
				color='primary.main'
				display='flex'
				flexDirection='column'
				height='75%'
				justifyContent='center'
				mx='auto'
				textAlign='center'
				width={{ xs: "80%", md: "75%" }}>
				<Typography
					component='h1'
					fontFamily='"Cinzel Variable", sans-serif'
					fontWeight={700}
					textTransform='uppercase'
					variant='h2'>
					{title}
				</Typography>

				<Typography
					fontFamily='"Cinzel Variable", sans-serif'
					fontWeight={600}
					variant='subtitle1'>
					Would you like to try a dish?
				</Typography>
			</Box>
		</Box>
	);
};

export default Heading;
