import { Box, Typography } from "@mui/material";
import cupcake from "@/assets/others/cupcake.gif";

const PageLoading = () => {
	return (
		<Box
			className='space-y-4'
			display='flex'
			height='100vh'
			flexDirection='column'
			justifyContent='start'
			maxHeight={{ "2xl": "810px" }}>
			<img
				alt='cupcake'
				className='block mx-auto sm:w-1/2 md:w-1/3'
				src={cupcake}
			/>

			<Typography
				component='h1'
				fontFamily='"Cinzel Variable", sans-serif'
				fontWeight={700}
				mx='auto'
				textAlign='center'
				variant='h4'
				width={{ md: "50%" }}>
				Welcome to Bistro Boss Restaurant
			</Typography>
		</Box>
	);
};

export default PageLoading;
