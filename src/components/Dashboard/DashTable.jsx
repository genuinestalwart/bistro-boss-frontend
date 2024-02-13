import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

const DashTable = ({ children, headerCells, summary, tableName }) => {
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

			<Table aria-label={tableName} stickyHeader>
				<TableHead>
					<TableRow
						sx={{
							bgcolor: "accent.main",
							textTransform: "uppercase",
							"& .MuiTableCell-root": { bgcolor: "transparent" },
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
		</TableContainer>
	);
};

export default DashTable;
