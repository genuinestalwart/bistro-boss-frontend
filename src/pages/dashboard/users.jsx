import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SectionTitles from "@/components/shared/SectionTitles";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AllUsersTable from "@/components/Dashboard/AllUsersTable";

const AllUsersPage = () => {
	const axiosSecure = useAxiosSecure();

	const { data: users = [], refetch } = useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const res = await axiosSecure.get("/users");
			return res.data;
		},
	});

	return (
		<Box
			className='space-y-12'
			mx='auto'
			py={8}
			width={{ xs: "80%", md: "100%" }}>
			<Helmet>
				<title>Bistro Boss | My Cart</title>
			</Helmet>

			<SectionTitles
				bigTitle='Manage All Users'
				component='h1'
				smallTitle='How many?'
			/>

			<Box
				bgcolor='primary.main'
				className='space-y-6'
				mx='auto'
				p={8}
				width={{ lg: "75%" }}>
				<Box
					alignItems='center'
					display='flex'
					justifyContent='space-between'>
					<Typography
						component='h3'
						fontFamily='"Cinzel Variable", sans-serif'
						fontWeight={700}
						variant='h5'>
						Total Users: {users.length}
					</Typography>
				</Box>

				<AllUsersTable users={users} refetch={refetch} />
			</Box>
		</Box>
	);
};

export default AllUsersPage;
