import { Box } from "@mui/material";
import error404 from "@/assets/others/404.gif";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import StyledButton from "@/components/shared/buttons/StyledButton";

const NotFound = () => {
	return (
		<Box
			className='space-y-4'
			display='flex'
			height='100vh'
			flexDirection='column'
			justifyContent='center'
			maxHeight={{ "2xl": "810px" }}>
			<Helmet>
				<title>Bistro Boss Restaurant</title>
			</Helmet>

			<img
				alt='cupcake'
				className='mx-auto sm:w-1/2 md:w-1/3'
				src={error404}
			/>

			<Link className='block' to='/'>
				<StyledButton
					endIcon={<Home />}
					sx={{ display: "flex", mx: "auto" }}>
					Back To Home
				</StyledButton>
			</Link>
		</Box>
	);
};

export default NotFound;
