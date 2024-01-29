import { Box, IconButton, Typography } from "@mui/material";
import loginBanner from "@/assets/banners/login.png";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import PageLoading from "../components/shared/PageLoading";

const icons = [
	{ component: <Facebook />, label: "Facebook" },
	{ component: <Google />, label: "Google" },
	{ component: <GitHub />, label: "GitHub" },
];

const LoginLayout = ({ login, children }) => {
	const { loading, user } = useContext(AuthContext);

	return loading ? (
		<PageLoading />
	) : !user ? (
		<Box
			className='bg-[url("./assets/others/login-bg.png")]'
			component='main'
			p={{ xs: 6, md: 20 }}
			sx={{
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<Box
				alignItems='center'
				boxShadow={5}
				className='bg-[url("./assets/others/login-bg.png")] space-y-4 md:space-y-0'
				display={{ md: "flex" }}
				flexDirection={login ? "row" : "row-reverse"}
				justifyContent='space-evenly'
				py={12}
				sx={{
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}>
				<img
					alt='login banner'
					className='block w-full md:w-2/5'
					src={loginBanner}
				/>

				<Box className='space-y-4' width={{ md: "40%" }}>
					<Typography
						component='h1'
						fontWeight={700}
						textAlign='center'
						variant='h4'>
						Sign {login ? "In" : "Up"}
					</Typography>

					{children}

					<Typography
						color='accent.main'
						fontWeight={500}
						textAlign='center'
						variant='body2'>
						{login ? "New here?" : "Already registered?"}{" "}
						<Link
							className='font-bold hover:underline underline-offset-2'
							to={login ? "/signup" : "/signin"}>
							{login ? "Create a New Account" : "Go to sign in"}
						</Link>
					</Typography>

					<Typography
						fontWeight={500}
						textAlign='center'
						variant='body2'>
						Or sign {login ? "in" : "up"} with
					</Typography>

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
				</Box>
			</Box>
		</Box>
	) : (
		<Navigate replace to='/dashboard' />
	);
};

export default LoginLayout;
