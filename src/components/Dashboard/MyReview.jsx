import { Box, Rating, Typography } from "@mui/material";
import StyledButton from "@/components/shared/buttons/StyledButton";

const MyReview = ({ data, setEditMode }) => {
	return (
		<Box
			bgcolor='primary.main'
			className='space-y-6'
			mx='auto'
			p={8}
			width={{ md: "80%" }}>
			<Typography fontStyle='italic' variant='body1'>
				{data?.review}
			</Typography>

			<Box
				alignItems='center'
				display='flex'
				justifyContent='space-between'>
				<Rating
					name='reviews'
					readOnly
					size='large'
					value={data?.rating}
				/>

				<StyledButton onClick={() => setEditMode(true)} type='submit'>
					Edit Review
				</StyledButton>
			</Box>
		</Box>
	);
};

export default MyReview;
