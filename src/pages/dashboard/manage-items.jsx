import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import SectionTitles from "@/components/shared/SectionTitles";
import DashTable from "@/components/Dashboard/DashTable";
import useMenu from "@/hooks/useMenu";
import ItemRow from "@/components/Dashboard/rows/ItemRow";
import { useContext, useState } from "react";
import EditItemForm from "@/components/Dashboard/forms/EditItemForm";
import { ModalContext } from "@/providers/ModalProvider";
const headerCells = ["", "Image", "Name", "Price", "Edit", "Delete"];

const ManageItemsPage = () => {
	const [openEdit, setOpenEdit] = useState(false);
	const [editingItem, setEditingItem] = useState({});
	const [items, , refetch] = useMenu();
	const { modal } = useContext(ModalContext);

	const handleOpen = (item) => {
		setEditingItem(item);
		setOpenEdit(true);
	};

	const handleClose = () => {
		setOpenEdit(false);
		setEditingItem({});
	};

	const onSubmit = (data) => {
		modal({
			buttonText: "Update",
			color: "success",
			title: "Update The Item Details",
			description: `Are you sure you want to save the changes?`,
			onClick: () => {
				console.log(data);
			},
		});
	};

	return (
		<Box className='space-y-12' py={12}>
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
				<EditItemForm
					item={editingItem}
					handleClose={handleClose}
					onSubmit={onSubmit}
				/>
			) : (
				<DashTable
					headerCells={headerCells}
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
					<ItemRow items={items} handleOpen={handleOpen} />
				</DashTable>
			)}
		</Box>
	);
};

export default ManageItemsPage;
