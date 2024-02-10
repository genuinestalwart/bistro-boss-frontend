import { Button } from "@mui/material";

const LoginButton = ({ text }) => {
	return (
		<Button
			color='accent'
			size='large'
			sx={{
				color: "secondary.main",
				display: "flex",
				fontFamily: "inherit",
				fontWeight: 600,
				mx: "auto",
				width: "100%",
				"&:hover": {
					bgcolor: "secondary.main",
					color: "accent.main",
				},
			}}
			type='submit'
			variant='contained'>
			{text}
		</Button>
	);
};

export default LoginButton;
