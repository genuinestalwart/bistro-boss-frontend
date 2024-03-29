import { Box, IconButton } from "@mui/material";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const LoginWith = () => {
	const navigate = useNavigate();
	const axiosPublic = useAxiosPublic();
	const { loginWithGoogle } = useContext(AuthContext);

	const handleGoogle = async () => {
		const res = await loginWithGoogle();

		await axiosPublic.post("/users", {
			email: res.user?.email,
			name: res.user?.displayName,
			uid: res.user?.uid,
		});

		navigate("/dashboard");
	};

	const icons = [
		{ component: <Facebook />, label: "Facebook", onClick: () => {} },
		{ component: <Google />, label: "Google", onClick: handleGoogle },
		{ component: <GitHub />, label: "GitHub", onClick: () => {} },
	];

	return (
		<Box
			display='flex'
			justifyContent={{ xs: "space-evenly", md: "space-between" }}
			mx='auto'
			width={{ md: "50%" }}>
			{icons.map((icon, i) => (
				<IconButton
					aria-label={icon.label}
					color='secondary.light'
					key={i}
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
