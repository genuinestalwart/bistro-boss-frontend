import { Button } from "@mui/material";

const BorderButton = ({ onClick, sxProps, text }) => {
	return (
		<Button
			onClick={onClick}
			sx={{
				border: "inherit",
				borderBottomWidth: 2,
				borderRadius: 1.5,
				boxShadow: 0,
				fontWeight: 600,
				maxWidth: "max-content",
				"&:hover": {
					bgcolor: "secondary.main",
					borderColor: "accent.main",
					color: "accent.main",
				},
				...sxProps,
			}}
			variant='contained'>
			{text}
		</Button>
	);
};

export default BorderButton;
