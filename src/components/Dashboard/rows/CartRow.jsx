import { Delete } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import ActionButton from "@/components/shared/buttons/ActionButton";

const CartRow = ({ cart, refetch }) => {
	const axiosSecure = useAxiosSecure();

	const handleDelete = (id) => {
		axiosSecure.delete(`/carts/${id}`).then(() => refetch());
	};

	return (
		<>
			{cart.map((row, i) => (
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
							color='error'
							onClick={() => handleDelete(row._id)}>
							<Delete />
						</ActionButton>
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default CartRow;
