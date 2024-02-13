import { Box, Typography } from "@mui/material";
import loginBanner from "@/assets/banners/login.png";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import LoginWith from "@/components/shared/LoginWith";
import PageLoading from "@/components/shared/PageLoading";

const LoginLayout = ({ login, children }) => {
	const location = useLocation();
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
							state={{ from: location }}
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

					<LoginWith />
				</Box>
			</Box>
		</Box>
	) : (
		<Navigate state={{ from: location }} to='/dashboard' />
	);
};

export default LoginLayout;
