import MyReview from "@/components/Dashboard/MyReview";
import ReviewForm from "@/components/Dashboard/forms/ReviewForm";
import DataLoading from "@/components/shared/DataLoading";
import SectionTitles from "@/components/shared/SectionTitles";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { AuthContext } from "@/providers/AuthProvider";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";

const MyReviewPage = () => {
	const [editMode, setEditMode] = useState(false);
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();
	const { user } = useContext(AuthContext);

	const {
		data = null,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["review", user?.email],
		queryFn: async () => {
			const res = await axiosPublic.get(`/reviews/${user.email}`);
			return res.data;
		},
	});

	const field = {
		defaultValue: data?.review,
		fullWidth: true,
		id: "review",
		label: "Review",
		minRows: 8,
		multiline: true,
		placeholder: "Kindly express your care in a short way",
	};

	const onClick = async (review) => {
		if (data) {
			await axiosSecure.patch(`/reviews/${user.email}`, review);
		} else {
			await axiosSecure.post("/reviews", review);
		}

		await refetch();
		setEditMode(false);
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | My Review</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Give A Review'
					component='h1'
					smallTitle='Sharing is caring!!!'
				/>
			</Box>

			{isLoading ? (
				<Box
					bgcolor='primary.main'
					mx='auto'
					p={8}
					width={{ md: "80%" }}>
					<DataLoading />
				</Box>
			) : !data || editMode ? (
				<ReviewForm
					editMode={editMode}
					field={field}
					onClick={onClick}
					rated={data.rating}
					setEditMode={setEditMode}
				/>
			) : (
				<MyReview data={data} setEditMode={setEditMode} />
			)}
		</>
	);
};

export default MyReviewPage;
