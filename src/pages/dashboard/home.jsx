import AdminHome from "@/components/Dashboard/home/AdminHome";
import UserHome from "@/components/Dashboard/home/UserHome";
import useAdmin from "@/hooks/useAdmin";
import { Box, Skeleton } from "@mui/material";
import { Helmet } from "react-helmet-async";

const DashHomePage = () => {
	const [isAdmin, isLoading] = useAdmin();

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Dashboard</title>
			</Helmet>

			{isLoading ? (
				<Box className='space-y-8' px={8}>
					<Skeleton
						animation='wave'
						height='2.5rem'
						width='30%'
						variant='rounded'
					/>

					<Box
						display='grid'
						gap={8}
						gridTemplateColumns={{
							xs: "repeat(1, 1fr)",
							md: "repeat(3, 1fr)",
						}}>
						{[0, 1, 2].map((skeleton, i) => (
							<Skeleton
								animation='wave'
								height='7rem'
								key={i}
								variant='rounded'
							/>
						))}
					</Box>

					<Skeleton
						animation='wave'
						height='20rem'
						variant='rounded'
					/>
				</Box>
			) : isAdmin ? (
				<AdminHome />
			) : (
				<UserHome />
			)}
		</>
	);
};

export default DashHomePage;
