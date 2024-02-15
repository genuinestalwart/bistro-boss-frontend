import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SectionTitles from "@/components/shared/SectionTitles";
import DashTable from "@/components/Dashboard/DashTable";
import useMenu from "@/hooks/useMenu";
import ItemRow from "@/components/Dashboard/rows/ItemRow";
import { useContext, useState } from "react";
import { ModalContext } from "@/providers/ModalProvider";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import ItemForm from "@/components/Dashboard/forms/ItemForm";
const headerCells = ["", "Image", "Name", "Price", "Edit", "Delete"];
const apiKey = import.meta.env.VITE_imgbb_api_key;
const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;

const ManageItemsPage = () => {
	const [openEdit, setOpenEdit] = useState(false);
	const [editingItem, setEditingItem] = useState({});
	const [image, setImage] = useState(null);
	const [items, isLoading, refetch] = useMenu();
	const axiosPublic = useAxiosPublic();
	const axiosSecure = useAxiosSecure();
	const { modal } = useContext(ModalContext);

	const handleOpen = (item) => {
		setEditingItem(item);
		setOpenEdit(true);
	};

	const handleClose = () => {
		setOpenEdit(false);
		setEditingItem({});
	};

	const handleUpload = async () => {
		let link = editingItem.image;

		try {
			if (image) {
				const res = await axiosPublic.post(
					url,
					{ image },
					{ headers: { "Content-Type": "multipart/form-data" } }
				);

				link = res.data.data.url;
			}
		} catch (error) {
			link = false;
		}

		return link;
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
			buttonText: "Update",
			color: "success",
			description: `Are you sure you want to save the changes?`,
			onClick: async () => {
				const link = await handleUpload();

				if (link) {
					await axiosSecure.patch(`/menu/${editingItem._id}`, {
						image: link,
						...newItem,
					});

					refetch();
					setOpenEdit(false);
				}
			},
			title: "Update The Item Details",
		});
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Manage Items</title>
			</Helmet>

			<Box mx='auto' width={{ xs: "80%", md: "100%" }}>
				<SectionTitles
					bigTitle='Manage All Items'
					component='h1'
					smallTitle='Hurry up!'
				/>
			</Box>

			{openEdit ? (
				<ItemForm
					editMode={true}
					handleClose={handleClose}
					item={editingItem}
					onSubmit={onSubmit}
					setImage={setImage}
				/>
			) : (
				<DashTable
					headerCells={headerCells}
					isLoading={isLoading}
					summary={
						<Typography
							component='h3'
							fontFamily='"Cinzel Variable", sans-serif'
							fontWeight={700}
							variant='h5'>
							Total Items: {items.length}
						</Typography>
					}
					tableName='manage items'>
					<ItemRow
						items={items.toReversed()}
						handleOpen={handleOpen}
						refetch={refetch}
					/>
				</DashTable>
			)}
		</>
	);
};

export default ManageItemsPage;
