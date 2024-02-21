import { Box, Typography } from "@mui/material";

const HomeStats = ({ statsInfo }) => {
	return (
		<Box
			display='grid'
			gap={6}
			gridTemplateColumns={{
				xs: "repeat(1, 1fr)",
				md: `repeat(${statsInfo.length}, 1fr)`,
			}}>
			{statsInfo.map((stats, i) => (
				<Box
					alignItems='center'
					borderRadius={2}
					className={`bg-gradient-to-r ${stats.from} ${stats.to} space-x-4`}
					color='primary.main'
					display='flex'
					key={i}
					p={6}>
					{stats.icon}

					<Box>
						<Typography
							component='h3'
							fontWeight={600}
							variant='h4'>
							{stats.value}
						</Typography>
						<Typography variant='body1'>{stats.text}</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default HomeStats;
