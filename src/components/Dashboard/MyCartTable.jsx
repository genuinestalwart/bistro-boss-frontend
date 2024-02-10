import { Delete } from "@mui/icons-material";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import ActionButton from "@/components/shared/buttons/ActionButton";

const MyCartTable = ({ cart, refetch }) => {
	const axiosSecure = useAxiosSecure();

	const handleDelete = (id) => {
		axiosSecure.delete(`/carts/${id}`).then(() => refetch());
	};

	return (
		<TableContainer>
			<Table
				aria-label='my cart'
				stickyHeader
				sx={{
					minWidth: { md: "100%", lg: "auto" },
				}}>
				<TableHead>
					<TableRow
						sx={{
							bgcolor: "accent.main",
							textTransform: "uppercase",
							"& .MuiTableCell-root": {
								bgcolor: "transparent",
							},
						}}>
						<TableCell />
						<TableCell align='center'>Image</TableCell>
						<TableCell align='center'>Name</TableCell>
						<TableCell align='center'>Price</TableCell>
						<TableCell align='center'>Action</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{cart.map((row, index) => (
						<TableRow key={index}>
							<TableCell align='center'>{index + 1}</TableCell>

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
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default MyCartTable;
