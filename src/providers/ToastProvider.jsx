import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material";
import { createContext, useState } from "react";
export const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({});
	const handleClose = (e, reason) => reason !== "clickaway" && setOpen(false);

	const toast = (message) => {
		setOpen(true);
		return setData(message);
	};

	return (
		<ToastContext.Provider value={{ toast }}>
			{children}

			<Snackbar
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				autoHideDuration={4000}
				onClose={handleClose}
				open={open}
				sx={{ width: { md: "25%" } }}
				TransitionComponent={Slide}>
				<Alert
					onClose={handleClose}
					severity={data.type}
					variant='standard'>
					<AlertTitle>{data.title}</AlertTitle>
					{data.description}
				</Alert>
			</Snackbar>
		</ToastContext.Provider>
	);
};

export default ToastProvider;
