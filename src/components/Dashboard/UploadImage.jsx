import { Box, Button, Chip, Fab } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Delete } from "@mui/icons-material";
import { useRef, useState } from "react";

const UploadImage = ({ editMode, preview, setImage, setPreview }) => {
	const [error, setError] = useState(false);
	const fileRef = useRef(null);

	const handleChange = ({ target }) => {
		if (/(\.png|\.jpg|\.jpeg)$/.test(target.files[0].name)) {
			setImage(target.files[0]);
			setPreview(URL.createObjectURL(target.files[0]));
			setError(false);
		} else {
			setError(true);
			fileRef.current.value = null;
		}
	};

	const handleRemove = () => {
		setPreview(null);
		setError(true);
		fileRef.current.value = null;
	};

	return (
		<Box
			bgcolor='primary.main'
			borderRadius={2}
			className='aspect-video'
			mx='auto'
			position='relative'
			width={{ sm: "75%", lg: "60%" }}>
			<input
				accept='image/png,image/jpeg'
				className='absolute h-full inset-0 opacity-0 w-full z-10'
				id='image'
				onChange={handleChange}
				ref={fileRef}
				required={!editMode}
				type='file'
			/>

			<img
				alt='uploaded image'
				className={
					preview
						? "h-full object-center object-cover rounded-lg w-full"
						: "hidden"
				}
				src={preview}
			/>

			<Button
				className='z-10'
				component='label'
				htmlFor='image'
				size='large'
				sx={{
					bgcolor: preview ? "transparent" : "primary.main",
					border: "inherit",
					borderColor: error ? "error.main" : "transparent",
					borderRadius: 2,
					borderWidth: 2,
					boxShadow: 0,
					height: "100%",
					fontFamily: "inherit",
					fontWeight: 600,
					inset: 0,
					opacity: preview ? 0 : 100,
					position: "absolute",
					zIndex: 10,
					"&:hover, &:has(+ .MuiFab-root:hover)": {
						bgcolor: preview ? "rgb(21 21 21 / 0.5)" : grey[400],
						boxShadow: 0,
						opacity: 100,
					},
				}}
				variant='contained'>
				<Chip color='accent' label='Upload Image' />
			</Button>

			{preview && (
				<Fab
					aria-label='delete'
					className='right-3 top-3'
					color='error'
					onClick={handleRemove}
					size='small'
					sx={{
						opacity: 0,
						position: "absolute",
						"&:hover": { opacity: 100 },
						"label.MuiButton-root:hover ~ &": { opacity: 100 },
					}}>
					<Delete />
				</Fab>
			)}
		</Box>
	);
};

export default UploadImage;
