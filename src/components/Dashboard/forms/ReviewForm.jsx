import InputField from "@/components/shared/fields/InputField";
import StyledButton from "@/components/shared/buttons/StyledButton";
import { AuthContext } from "@/providers/AuthProvider";
import { ModalContext } from "@/providers/ModalProvider";
import { ToastContext } from "@/providers/ToastProvider";
import { RocketLaunch } from "@mui/icons-material";
import { Box, Rating, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const ReviewForm = ({ editMode, field, onClick, rated = 0, setEditMode }) => {
	const [rating, setRating] = useState(rated);
	const { register, handleSubmit } = useForm();
	const { modal } = useContext(ModalContext);
	const { toast } = useContext(ToastContext);
	const { user } = useContext(AuthContext);

	const onSubmit = (data) => {
		if (rating) {
			const review = {
				email: user.email,
				name: user.displayName,
				rating,
				review: data.review,
			};

			modal({
				buttonText: editMode ? "Save" : "Post",
				color: "success",
				description: `Are you sure you want to ${
					editMode ? "save" : "post"
				} your review?`,
				onClick: async () => await onClick(review),
				title: `${editMode ? "Save" : "Post"} Review!`,
			});
		} else {
			toast({
				title: "No Ratings Given!",
				type: "error",
				description: "Please select at least a star.",
			});
		}
	};

	return (
		<Box
			bgcolor={grey[300]}
			className='space-y-6'
			component='form'
			mx='auto'
			onSubmit={handleSubmit(onSubmit)}
			p={8}
			width={{ md: "80%" }}>
			<Typography
				align='center'
				component='h2'
				fontFamily='"Cinzel Variable", sans-serif'
				fontWeight={700}
				variant='h5'>
				Rate Us!
			</Typography>

			<Box align='center'>
				<Rating
					name='reviews'
					onChange={(e, newValue) => setRating(newValue)}
					size='large'
					value={rating}
				/>
			</Box>

			<InputField field={field} register={register} />

			<Box
				alignItems='center'
				display='flex'
				justifyContent='space-between'>
				{editMode && (
					<StyledButton
						color='error'
						onClick={() => setEditMode(false)}
						sx={{ color: "primary.main" }}>
						Discard Changes
					</StyledButton>
				)}

				<StyledButton endIcon={<RocketLaunch />} type='submit'>
					{editMode ? "Save" : "Post"} Review
				</StyledButton>
			</Box>
		</Box>
	);
};

export default ReviewForm;
