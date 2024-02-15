import ItemForm from "@/components/Dashboard/forms/ItemForm";
import SectionTitles from "@/components/shared/SectionTitles";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { ModalContext } from "@/providers/ModalProvider";
import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
const apiKey = import.meta.env.VITE_imgbb_api_key;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const AddItemPage = () => {
	const [image, setImage] = useState(null);
	const navigate = useNavigate();
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();
	const { modal } = useContext(ModalContext);

	const handleUpload = async () => {
		try {
			const res = await axiosPublic.post(
				url,
				{ image },
				{ headers: { "Content-Type": "multipart/form-data" } }
			);

			return res.data.data.url;
		} catch (error) {
			return false;
		}
	};

	const onSubmit = async (data) => {
		const newItem = {
			category: data.category,
			name: data.name,
			price: parseFloat(data.price),
			recipe: data.recipe,
			sourceUrl: data.sourceUrl,
			type: data.type,
		};

		modal({
			buttonText: "Add",
			color: "success",
			description: "Are you sure you want to save the changes?",
			onClick: async () => {
				const link = await handleUpload();

				link &&
					axiosSecure
						.post("/menu", { image: link, ...newItem })
						.then(() => navigate("/dashboard/manage-items"));
			},
			title: "Add A New Item",
		});
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Add Item</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Add An Item'
					component='h1'
					smallTitle="What's news?"
				/>
			</Box>

			<ItemForm
				editMode={false}
				onSubmit={onSubmit}
				setImage={setImage}
			/>
		</>
	);
};

export default AddItemPage;
