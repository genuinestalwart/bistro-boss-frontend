import { Delete, Groups, Lock, Security } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useContext } from "react";
import { ModalContext } from "@/providers/ModalProvider";
import ActionButton from "@/components/shared/buttons/ActionButton";

const UserRow = ({ refetch, users }) => {
	const axiosSecure = useAxiosSecure();
	const { modal } = useContext(ModalContext);

	const handleAdmin = (id, name) => {
		modal({
			buttonText: "Update",
			color: "success",
			description: `Are you sure you want to make "${name}" an admin?`,
			onClick: () =>
				axiosSecure.patch(`/admin/${id}`).then(() => refetch()),
			title: "Update Role To Admin",
		});
	};

	const handleDelete = (id, name) => {
		modal({
			buttonText: "Delete",
			color: "error",
			description: `This action is irreversible and will delete all data of "${name}".`,
			onClick: () =>
				axiosSecure.delete(`/users/${id}`).then(() => refetch()),
			title: "Delete User!",
		});
	};

	return (
		<>
			{users.map((row, i) => (
				<TableRow key={i}>
					<TableCell align='center' sx={{ fontWeight: 700 }}>
						{i + 1}
					</TableCell>

					<TableCell>{row.name}</TableCell>
					<TableCell>{row.email}</TableCell>

					<TableCell align='center'>
						<ActionButton
							color='accent'
							disabled={row.role === "admin"}
							onClick={() => handleAdmin(row._id, row.name)}>
							{row.role === "admin" ? <Security /> : <Groups />}
						</ActionButton>
					</TableCell>

					<TableCell align='center'>
						<ActionButton
							color='error'
							disabled={row.role === "admin"}
							onClick={() => handleDelete(row._id, row.name)}>
							{row.role === "admin" ? <Lock /> : <Delete />}
						</ActionButton>
					</TableCell>
				</TableRow>
			))}
		</>
	);
};

export default UserRow;
