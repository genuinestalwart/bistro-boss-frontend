import { Button } from "@mui/material";

const StyledButton = ({
	color,
	children,
	disabled = false,
	endIcon,
	onClick = () => {},
	size,
	sx,
	type,
}) => {
	return (
		<Button
			color={color || "accent"}
			disabled={disabled}
			endIcon={endIcon}
			onClick={onClick}
			size={size || "medium"}
			sx={{
				color: "secondary.main",
				fontFamily: "inherit",
				fontWeight: 600,
				"&:enabled:hover": !color
					? { bgcolor: "secondary.main", color: "accent.main" }
					: {},
				"&.Mui-disabled": {
					cursor: "not-allowed",
					pointerEvents: "auto",
				},
				...sx,
			}}
			type={type || "button"}
			variant='contained'>
			{children}
		</Button>
	);
};

export default StyledButton;
