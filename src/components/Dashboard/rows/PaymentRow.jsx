import { TableCell, TableRow } from "@mui/material";
import moment from "moment";

const PaymentRow = ({ payments }) => {
	return (
		<>
			{payments.map((row, i) => (
				<TableRow key={i} sx={{ whiteSpace: "nowrap" }}>
					<TableCell align='center' sx={{ fontWeight: 700 }}>
						{row.transactionID}
					</TableCell>

					<TableCell align='center'>{row.category}</TableCell>
					<TableCell align='right'>${row.price}</TableCell>

					<TableCell
						align='center'
						sx={{ textTransform: "capitalize" }}>
						{row.status}
					</TableCell>

					<TableCell align='center'>
						{moment.unix(row.timestamp).format("D MMMM YYYY")}
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default PaymentRow;
