import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "@/components/shared/Navbar";

const Header = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

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
			position='absolute'
			width='100%'>
			<IconButton
				aria-label='open drawer'
				color='inherit'
				onClick={() => setSidebarOpen(!sidebarOpen)}
				sx={{ display: { md: "none" } }}>
				<MenuIcon fontSize='large' />
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

			<Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
		</Box>
	);
};

export default Header;
