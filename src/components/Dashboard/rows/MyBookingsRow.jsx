import ActionButton from "@/components/shared/buttons/ActionButton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { ModalContext } from "@/providers/ModalProvider";
import { Delete } from "@mui/icons-material";
import { Chip, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";

const MyBookingsRow = ({ data, refetch }) => {
	const axiosSecure = useAxiosSecure();
	const { modal } = useContext(ModalContext);

	const handleDelete = (id) => {
		modal({
			buttonText: "Delete",
			color: "error",
			description: `Are you sure you want to cancel this booking?`,
			onClick: () =>
				axiosSecure.delete(`/bookings/${id}`).then(() => refetch()),
			title: "Confirmation Needed!",
		});
	};

	return (
		<>
			{data.map((row, i) => (
				<TableRow key={i}>
					<TableCell align='center' sx={{ fontWeight: 700 }}>
						{i + 1}
					</TableCell>

					<TableCell align='center'>{row.time}</TableCell>
					<TableCell align='center'>{row.date}</TableCell>
					<TableCell align='center'>{row.guests}</TableCell>
					<TableCell align='right'>${row.price}</TableCell>

					<TableCell align='center'>
						{row.paid ? (
							<Chip
								color='success'
								label='PAID'
								sx={{ fontWeight: 500 }}
							/>
						) : (
							<ActionButton
								color='error'
								onClick={() => handleDelete(row._id)}>
								<Delete />
							</ActionButton>
						)}
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default MyBookingsRow;
