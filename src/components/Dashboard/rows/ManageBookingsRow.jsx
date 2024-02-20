import { Chip, TableCell, TableRow } from "@mui/material";

const ManageBookingsRow = ({ data }) => {
	return (
		<>
			{data.map((row, i) => (
				<TableRow key={i} sx={{ whiteSpace: "nowrap" }}>
					<TableCell align='center'>{row.email}</TableCell>
					<TableCell align='center'>{row.time}</TableCell>
					<TableCell align='center'>{row.date}</TableCell>
					<TableCell align='center'>{row.guests}</TableCell>

					<TableCell align='center'>
						<Chip
							color={row.paid ? "success" : "warning"}
							label={row.paid ? "PAID" : "PENDING"}
							sx={{ fontWeight: 500 }}
						/>
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default ManageBookingsRow;
