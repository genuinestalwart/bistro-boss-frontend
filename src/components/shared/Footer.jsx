import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const icons = [
	{ component: <Facebook color='primary' />, label: "facebook" },
	{ component: <Instagram color='primary' />, label: "instagram" },
	{ component: <Twitter color='primary' />, label: "x" },
];

const Footer = () => {
	return (
		<Box
			textAlign='center'
			bgcolor='secondary.main'
			className='bg-secondary'
			component='section'>
			<Box display={{ md: "flex" }}>
				<Box className='bg-slate-800' py={16} width={{ md: "50%" }}>
					<Box
						className='space-y-4'
						ml={{ md: "auto" }}
						width={{ md: "75%" }}>
						<Typography
							component='h3'
							textTransform='uppercase'
							variant='h5'>
							Contact Us
						</Typography>

						<Typography lineHeight={2} variant='body2'>
							123 ABS Street, Uni 21, Bangladesh
							<br />
							+88 123456789
							<br />
							Mon - Fri: 08:00 - 22:00
							<br />
							Sat - Sun: 10:00 - 23:00
						</Typography>
					</Box>
				</Box>

				<Box className='bg-slate-900' py={16} width={{ md: "50%" }}>
					<Box
						className='space-y-6'
						mr={{ md: "auto" }}
						width={{ md: "75%" }}>
						<Typography
							component='h3'
							textTransform='uppercase'
							variant='h5'>
							Follow Us
						</Typography>
						<Typography variant='body2'>
							Join us on social media
						</Typography>

						<Box
							alignItems='center'
							className='space-x-2'
							display='flex'
							justifyContent='center'>
							{icons.map((icon, index) => (
								<IconButton
									aria-label={icon.label}
									key={index}
									sx={{
										"&:hover": {
											bgcolor: "secondary.light",
										},
									}}>
									{icon.component}
								</IconButton>
							))}
						</Box>
					</Box>
				</Box>
			</Box>

			<Typography py={4} variant='body2'>
				Copyright &copy; CulinaryCloud. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;
