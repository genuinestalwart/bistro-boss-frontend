import { Box, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";

const DashHeader = ({ isAdmin }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<Box
			alignItems='center'
			bgcolor='accent.main'
			className='h-20 md:h-full md:space-y-8 [&::-webkit-scrollbar-thumb]:bg-secondary'
			component='header'
			display={{ xs: "flex", md: "block" }}
			justifyContent='space-between'
			px={6}
			py={{ md: 8 }}
			sx={{ overflowY: { md: "auto" } }}
			width={{ md: "30%", lg: "25%" }}>
			<Box px={{ md: 2 }} textTransform='uppercase'>
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

			<IconButton
				aria-label='open drawer'
				color='inherit'
				onClick={() => setSidebarOpen(!sidebarOpen)}
				sx={{ display: { md: "none" } }}>
				<Menu fontSize='large' />
			</IconButton>

			<Sidebar
				isAdmin={isAdmin}
				setSidebarOpen={setSidebarOpen}
				sidebarOpen={sidebarOpen}
			/>
		</Box>
	);
};

export default DashHeader;
