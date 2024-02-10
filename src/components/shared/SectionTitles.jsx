import { Box, Divider, Typography } from "@mui/material";

const SectionTitles = ({ bigTitle, component = "h2", smallTitle }) => {
	const separator = (
		<Divider
			aria-hidden={true}
			sx={{
				borderBottomWidth: 2,
				mx: "auto",
				width: { md: "40%" },
			}}
		/>
	);

	return (
		<Box textAlign='center'>
			<Typography
				color='accent.main'
				fontStyle='italic'
				fontWeight={500}
				pb={2}
				variant='subtitle2'>
				---{smallTitle}---
			</Typography>

			{separator}

			<Typography
				component={component}
				py={3}
				textTransform='uppercase'
				variant='h4'>
				{bigTitle}
			</Typography>

			{separator}
		</Box>
	);
};

export default SectionTitles;
