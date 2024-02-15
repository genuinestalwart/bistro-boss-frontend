import { Button } from "@mui/material";

const ActionButton = ({
	children,
	color,
	disabled = false,
	onClick = () => {},
}) => {
	return (
		<Button
			color={color}
			disabled={disabled}
			onClick={onClick}
			sx={{
				boxShadow: 0,
				minWidth: "auto",
				p: 1.5,
				"&.Mui-disabled": {
					color: "inherit",
					cursor: "not-allowed",
					pointerEvents: "auto",
				},
			}}
			variant='contained'>
			{children}
		</Button>
	);
};

export default ActionButton;
