import { LocationOn, PhoneInTalk, WatchLater } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const contactInfo = [
	{
		icon: <PhoneInTalk />,
		infoName: "Phone",
		details: <>+38 (012) 34 56 789</>,
	},
	{
		icon: <LocationOn />,
		infoName: "Address",
		details: <>573 Walnut Avenue, MO, USA</>,
	},
	{
		icon: <WatchLater />,
		infoName: "Working Hours",
		details: (
			<>
				Mon - Fri: 08:00 - 22:00
				<br />
				Sat - Sun: 10:00 - 23:00
			</>
		),
	},
];

const OurLocation = () => {
	return (
		<Box
			display='grid'
			gap={4}
			gridTemplateColumns={{
				xs: "repeat(1, 1fr)",
				md: "repeat(3, 1fr)",
			}}>
			{contactInfo.map((info, i) => (
				<Box
					borderColor={grey[200]}
					display='flex'
					flexDirection='column'
					key={i}
					sx={{ borderWidth: 1 }}
					textAlign='center'>
					<Box bgcolor='accent.main' color='primary.main' py={3}>
						{info.icon}
					</Box>

					<Box
						bgcolor={grey[200]}
						className='space-y-2'
						flexGrow={1}
						m={6}
						mt={0}
						py={6}>
						<Typography
							component='h3'
							fontWeight={600}
							textTransform='uppercase'
							variant='body1'>
							{info.infoName}
						</Typography>

						<Typography variant='body2'>{info.details}</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
};

export default OurLocation;
