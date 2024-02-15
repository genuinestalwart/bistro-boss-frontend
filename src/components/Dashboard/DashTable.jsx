import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import DataLoading from "@/components/shared/DataLoading";

const DashTable = ({
	children,
	headerCells,
	isLoading,
	summary,
	tableName,
}) => {
	return (
		<TableContainer
			className='space-y-6'
			sx={{
				bgcolor: "primary.main",
				mx: "auto",
				p: 8,
				width: { md: "80%" },
			}}>
			{summary}

			{isLoading ? (
				<DataLoading />
			) : (
				<Table aria-label={tableName} stickyHeader>
					<TableHead>
						<TableRow
							sx={{
								bgcolor: "accent.main",
								textTransform: "uppercase",
								"& .MuiTableCell-root": {
									bgcolor: "transparent",
								},
							}}>
							{headerCells.map((text, i) => (
								<TableCell align='center' key={i}>
									{text}
								</TableCell>
							))}
						</TableRow>
					</TableHead>

					<TableBody>{children}</TableBody>
				</Table>
			)}
		</TableContainer>
	);
};

export default DashTable;
