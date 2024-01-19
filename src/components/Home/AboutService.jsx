import { Box, Typography } from "@mui/material";

const AboutService = () => {
	return (
		<Box
			className='bg-[url("./assets/home/chef-service.jpg")]'
			component='section'
			mx='auto'
			p={{ xs: 12, md: 20 }}
			sx={{
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
			width={{ md: "75%" }}>
			<Box
				bgcolor='primary.main'
				className='space-y-2'
				py={16}
				textAlign='center'>
				<Typography
					component='h2'
					fontFamily='"Cinzel Variable", sans-serif'
					fontWeight={500}
					textTransform='uppercase'
					variant='h4'>
					Bistro Boss
				</Typography>

				<Typography mx='auto' variant='body2' width='75%'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Necessitatibus, libero accusamus laborum deserunt ratione
					dolor officiis praesentium! Deserunt magni aperiam dolor
					eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
				</Typography>
			</Box>
		</Box>
	);
};

export default AboutService;
