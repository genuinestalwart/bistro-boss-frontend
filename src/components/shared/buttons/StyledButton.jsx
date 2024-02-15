import { Button } from "@mui/material";

const StyledButton = ({
	color,
	children,
	endIcon,
	onClick = () => {},
	size,
	sx,
	type,
}) => {
	return (
		<Button
			color={color || "accent"}
			endIcon={endIcon}
			onClick={onClick}
			size={size || "medium"}
			sx={{
				color: "secondary.main",
				fontFamily: "inherit",
				fontWeight: 600,
				"&:hover": !color
					? { bgcolor: "secondary.main", color: "accent.main" }
					: {},
				...sx,
			}}
			type={type || "button"}
			variant='contained'>
			{children}
		</Button>
	);
};

export default StyledButton;
