import { Delete, Edit } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import ActionButton from "@/components/shared/buttons/ActionButton";

const ItemRow = ({ handleOpen, items }) => {
	return (
		<>
			{items.map((item, i) => (
				<TableRow key={i}>
					<TableCell align='center' sx={{ fontWeight: 700 }}>
						{i + 1}
					</TableCell>

					<TableCell align='center'>
						<img
							alt={item.name}
							className='h-16 object-center object-cover w-16'
							src={item.image}
						/>
					</TableCell>

					<TableCell>{item.name}</TableCell>
					<TableCell align='right'>${item.price}</TableCell>

					<TableCell align='center'>
						<ActionButton
							color='accent'
							onClick={() => handleOpen(item)}>
							<Edit />
						</ActionButton>
					</TableCell>

					<TableCell align='center'>
						<ActionButton color='error'>
							<Delete />
						</ActionButton>
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default ItemRow;
