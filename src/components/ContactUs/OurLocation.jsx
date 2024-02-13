import { LocationOn, PhoneInTalk, WatchLater } from "@mui/icons-material";
import SectionTitles from "@/components/shared/SectionTitles";
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
			className='space-y-8'
			component='section'
			mx='auto'
			width={{ xs: "80%", lg: "75%" }}>
			<SectionTitles bigTitle='Our Location' smallTitle='Visit us' />

			<Box
				className='space-y-4 md:space-x-4 md:space-y-0'
				display={{ md: "flex" }}>
				{contactInfo.map((info, i) => (
					<Box
						borderColor={grey[200]}
						className='md:w-1/3'
						key={i}
						sx={{ borderWidth: 1 }}
						textAlign='center'>
						<Box bgcolor='accent.main' color='primary.main' py={3}>
							{info.icon}
						</Box>

						<Box
							bgcolor={grey[200]}
							className='h-36 space-y-2'
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

							<Typography variant='body2'>
								{info.details}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default OurLocation;
