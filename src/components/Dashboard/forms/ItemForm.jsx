import InputField from "@/components/shared/InputField";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import UploadImage from "@/components/Dashboard/UploadImage";
import StyledButton from "@/components/shared/buttons/StyledButton";
import { Restaurant, Save } from "@mui/icons-material";
import { fields } from "@/utilities/ItemForm";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ItemForm = ({
	editMode,
	handleClose = () => {},
	item = {},
	onSubmit,
	setImage,
}) => {
	const [preview, setPreview] = useState(item.image || null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Box
			bgcolor={grey[300]}
			className='space-y-8'
			component='form'
			mx='auto'
			onReset={() => setPreview(null)}
			onSubmit={handleSubmit(onSubmit)}
			p={8}
			width={{ md: "80%" }}>
			<UploadImage
				editMode={editMode}
				preview={preview}
				setImage={setImage}
				setPreview={setPreview}
			/>

			<Box
				display='grid'
				gap={8}
				gridTemplateColumns={{
					xs: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
				}}>
				{fields(item).map((field, i) => (
					<InputField
						errors={errors}
						field={field}
						key={i}
						register={register}>
						{field.children}
					</InputField>
				))}
			</Box>

			<Box
				alignItems='center'
				display='flex'
				justifyContent='space-between'>
				<StyledButton
					color='error'
					onClick={handleClose}
					sx={{ color: "primary.main" }}
					type={editMode ? "button" : "reset"}>
					{editMode ? "Discard Changes" : "Clear Fields"}
				</StyledButton>

				<StyledButton
					endIcon={editMode ? <Save /> : <Restaurant />}
					type='submit'>
					{editMode ? "Edit" : "Add"} Item
				</StyledButton>
			</Box>
		</Box>
	);
};

export default ItemForm;
