import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material";
import { createContext, useState } from "react";
export const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState({});

	const toast = (m) => {
		setOpen(true);
		return setMessage(m);
	};

	const handleClose = (event, reason) => {
		if (reason !== "clickaway") {
			setOpen(false);
		}
	};

	return (
		<ToastContext.Provider
			value={{
				toast,
			}}>
			{children}

			<Snackbar
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				autoHideDuration={4000}
				onClose={handleClose}
				open={open}
				sx={{
					width: { md: "25%" },
				}}
				TransitionComponent={Slide}>
				<Alert
					onClose={handleClose}
					severity='error'
					variant='standard'>
					<AlertTitle>{message.title}</AlertTitle>
					{message.description}
				</Alert>
			</Snackbar>
		</ToastContext.Provider>
	);
};

export default ToastProvider;
