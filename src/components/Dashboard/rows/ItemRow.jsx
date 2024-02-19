import { Delete, Edit } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import ActionButton from "@/components/shared/buttons/ActionButton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalProvider";

const ItemRow = ({ handleOpen, items, refetch }) => {
	const axiosSecure = useAxiosSecure();
	const { modal } = useContext(ModalContext);

	const handleDelete = (id, name) => {
		modal({
			buttonText: "Delete",
			color: "error",
			description: `This action is irreversible and will delete all data of "${name}".`,
			onClick: () =>
				axiosSecure.delete(`/menu/${id}`).then(() => refetch()),
			title: "Delete Item!",
		});
	};

	return (
		<>
			{items.map((row, i) => (
				<TableRow key={i}>
					<TableCell align='center' sx={{ fontWeight: 700 }}>
						{i + 1}
					</TableCell>

					<TableCell align='center'>
						<img
							alt={row.name}
							className='h-16 object-center object-cover w-16'
							src={row.image}
						/>
					</TableCell>

					<TableCell>{row.name}</TableCell>
					<TableCell align='right'>${row.price}</TableCell>

					<TableCell align='center'>
						<ActionButton
							color='accent'
							onClick={() => handleOpen(row)}>
							<Edit />
						</ActionButton>
					</TableCell>

					<TableCell align='center'>
						<ActionButton
							color='error'
							onClick={() => handleDelete(row._id, row.name)}>
							<Delete />
						</ActionButton>
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default ItemRow;
