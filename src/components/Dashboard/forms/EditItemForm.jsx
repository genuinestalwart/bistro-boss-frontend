import InputField from "@/components/shared/InputField";
import StyledButton from "@/components/shared/buttons/StyledButton";
import { Box, MenuItem } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useForm } from "react-hook-form";
const category = ["dessert", "pizza", "salad", "soup"];
const itemType = ["recommended", "today's offer", "popular", "none"];

const EditItemForm = ({ item, handleClose, onSubmit }) => {
	const fields = [
		{
			defaultValue: item.name,
			gridColumn: { md: "span 3 / span 3" },
			id: "name",
			label: "Name",
		},
		{
			defaultValue: item.category,
			children: category.map((option, i) => (
				<MenuItem key={i} value={option}>
					{option}
				</MenuItem>
			)),
			id: "category",
			label: "Category",
			select: true,
		},
		{
			defaultValue: item.type,
			children: itemType.map((option, i) => (
				<MenuItem key={i} value={option}>
					{option}
				</MenuItem>
			)),
			id: "type",
			label: "Type",
			select: true,
		},
		{
			defaultValue: item.price,
			id: "price",
			label: "Price",
			type: "number",
			validation: {
				min: 1,
				validate: (num) =>
					typeof num === "number" &&
					num % 1 !== 0 &&
					num.toString().split(".")[1].length > 2
						? false
						: true,
			},
		},
		{
			defaultValue: item.image,
			gridColumn: { md: "span 3 / span 3" },
			id: "image",
			label: "Image URL",
		},
		{
			defaultValue: item.sourceUrl,
			gridColumn: { md: "span 3 / span 3" },
			id: "sourceUrl",
			label: "Source URL",
		},
		{
			defaultValue: item.recipe,
			gridColumn: { md: "span 3 / span 3" },
			id: "recipe",
			label: "Recipe",
			minRows: 8,
			multiline: true,
		},
	];

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
			onSubmit={handleSubmit(onSubmit)}
			p={8}
			width={{ md: "80%" }}>
			<Box
				display='grid'
				gap={8}
				gridTemplateColumns={{
					xs: "repeat(1, 1fr)",
					md: "repeat(3, 1fr)",
				}}>
				{fields.map((field, i) => (
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
					sx={{ color: "primary.main" }}>
					Discard Changes
				</StyledButton>

				<StyledButton type='submit'>Save Changes</StyledButton>
			</Box>
		</Box>
	);
};

export default EditItemForm;
