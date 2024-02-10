import { Box, IconButton } from "@mui/material";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const LoginWith = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const axiosPublic = useAxiosPublic();
	const { loginWithGoogle } = useContext(AuthContext);
	const handleFacebook = () => {};
	const handleGitHub = () => {};

	const handleGoogle = () => {
		loginWithGoogle().then(async (res) => {
			await axiosPublic.post("/users", {
				email: res.user?.email,
				name: res.user?.displayName,
				uid: res.user?.uid,
			});

			navigate("/dashboard", {
				replace: true,
				state: location.state,
			});
		});
	};

	const icons = [
		{ component: <Facebook />, label: "Facebook", onClick: handleFacebook },
		{ component: <Google />, label: "Google", onClick: handleGoogle },
		{ component: <GitHub />, label: "GitHub", onClick: handleGitHub },
	];

	return (
		<Box
			display='flex'
			justifyContent={{
				xs: "space-evenly",
				md: "space-between",
			}}
			mx='auto'
			width={{ md: "50%" }}>
			{icons.map((icon, index) => (
				<IconButton
					aria-label={icon.label}
					color='secondary.light'
					key={index}
					onClick={icon.onClick}
					sx={{
						border: "inherit",
						borderColor: "secondary.light",
						borderWidth: 2,
						"&:hover": {
							borderColor: "secondary.main",
							color: "secondary.main",
						},
					}}>
					{icon.component}
				</IconButton>
			))}
		</Box>
	);
};

export default LoginWith;
