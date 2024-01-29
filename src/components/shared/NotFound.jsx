import { Box, Button } from "@mui/material";
import error404 from "@/assets/others/404.gif";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<Box
			className='space-y-4'
			display='flex'
			height='100vh'
			flexDirection='column'
			justifyContent='center'
			maxHeight={{ "2xl": "810px" }}>
			<img
				alt='cupcake'
				className='block mx-auto sm:w-1/2 md:w-1/3'
				src={error404}
			/>

			<Link to='/'>
				<Button
					color='accent'
					endIcon={<Home />}
					sx={{
						color: "secondary.main",
						display: "flex",
						fontFamily: "inherit",
						fontWeight: 600,
						mx: "auto",
						"&:hover": {
							bgcolor: "secondary.main",
							color: "accent.main",
						},
					}}
					variant='contained'>
					Send Message
				</Button>
			</Link>
		</Box>
	);
};

export default NotFound;
