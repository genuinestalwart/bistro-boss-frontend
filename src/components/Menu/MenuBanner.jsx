import { Box, Typography } from "@mui/material";

const MenuBanner = ({ bgImage, title, description }) => {
	return (
		<Box
			className={bgImage}
			component='section'
			py={{ xs: 12, md: 24 }}
			sx={{
				backgroundAttachment: "fixed",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<Box
				className='bg-secondary/50 space-y-2'
				color='primary.main'
				mx='auto'
				py={{ xs: 8, md: 16 }}
				textAlign='center'
				width={{ md: "60%" }}>
				<Typography
					component='h2'
					fontFamily='"Cinzel Variable", sans-serif'
					fontWeight={500}
					textTransform='uppercase'
					variant='h4'>
					{title}
				</Typography>

				<Typography mx='auto' variant='body2' width='75%'>
					{description}
				</Typography>
			</Box>
		</Box>
	);
};

export default MenuBanner;
