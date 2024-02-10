import { Button } from "@mui/material";

const NavButton = ({ icon, name }) => {
	return (
		<Button
			color='inherit'
			size='small'
			startIcon={icon}
			sx={{
				bgcolor: "transparent",
				boxShadow: 0,
				justifyContent: "start",
				width: "100%",
				"&:hover": {
					bgcolor: "secondary.main",
					color: "primary.main",
					boxShadow: 0,
				},
			}}
			variant='contained'>
			{name}
		</Button>
	);
};

export default NavButton;
