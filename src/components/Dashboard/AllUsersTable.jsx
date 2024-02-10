import { Delete, Groups, Lock, Security } from "@mui/icons-material";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalProvider";
import ActionButton from "@/components/shared/buttons/ActionButton";

const AllUsersTable = ({ users, refetch }) => {
	const axiosSecure = useAxiosSecure();
	const { modal } = useContext(ModalContext);

	const handleAdmin = (id, name) => {
		modal({
			buttonText: "Update",
			color: "success",
			title: "Update Role To Admin",
			description: `Are you sure you want to make ${name} an admin?`,
			onClick: () =>
				axiosSecure.patch(`/users/admin/${id}`).then(() => refetch()),
		});
	};

	const handleDelete = (id, name) => {
		modal({
			buttonText: "Delete",
			color: "error",
			title: "Delete User!",
			description: `This action is irreversible and will delete all data of ${name}.`,
			onClick: () =>
				axiosSecure.delete(`/users/${id}`).then(() => refetch()),
		});
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
						<TableCell align='center'>Name</TableCell>
						<TableCell align='center'>Email</TableCell>
						<TableCell align='center'>Role</TableCell>
						<TableCell align='center'>Action</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((row, index) => (
						<TableRow key={index}>
							<TableCell align='center'>{index + 1}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.email}</TableCell>

							<TableCell align='center'>
								<ActionButton
									color='accent'
									disabled={row.role === "admin"}
									onClick={() => {
										if (row.role !== "admin") {
											handleAdmin(row._id, row.name);
										}
									}}>
									{row.role === "admin" ? (
										<Security />
									) : (
										<Groups />
									)}
								</ActionButton>
							</TableCell>

							<TableCell align='center'>
								<ActionButton
									color='error'
									disabled={row.role === "admin"}
									onClick={() => {
										if (row.role !== "admin") {
											handleDelete(row._id, row.name);
										}
									}}>
									{row.role === "admin" ? (
										<Lock />
									) : (
										<Delete />
									)}
								</ActionButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default AllUsersTable;
