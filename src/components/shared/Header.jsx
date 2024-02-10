import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Menu } from "@mui/icons-material";
import Navbar from "@/components/shared/Navbar";

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<Box
			alignItems='center'
			className='bg-secondary/50 h-20 z-10'
			color='primary.main'
			component='header'
			display='flex'
			justifyContent={{ xs: "space-around", md: "space-between" }}
			maxWidth={{ "2xl": "1440px" }}
			px={{ md: 8 }}
			position='fixed'
			width='100%'>
			<IconButton
				aria-label='open drawer'
				color='inherit'
				onClick={() => setNavbarOpen(!navbarOpen)}
				sx={{ display: { md: "none" } }}>
				<Menu fontSize='large' />
			</IconButton>

			<Box textTransform='uppercase'>
				<Typography
					component='p'
					fontFamily='"Cinzel Variable", sans-serif'
					fontWeight={700}
					variant='h6'>
					Bistro Boss
				</Typography>

				<Typography
					fontFamily='"Cinzel Variable", sans-serif'
					fontWeight={600}
					letterSpacing='.2rem'
					variant='body1'>
					Restaurant
				</Typography>
			</Box>

			<Navbar setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
		</Box>
	);
};

export default Header;
