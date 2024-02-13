import {
	Backdrop,
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { createContext, useState } from "react";
export const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState({});

	const modal = (message) => {
		setOpen(true);
		return setData(message);
	};

	return (
		<ModalContext.Provider value={{ modal }}>
			{children}

			<Dialog
				className='[&_div.MuiDialog-paper]:space-y-4'
				open={open}
				onClose={() => setOpen(false)}
				sx={{ "& .MuiDialog-paper": { p: 6 } }}>
				<DialogTitle fontWeight={700} sx={{ p: 0 }}>
					{data.title}
				</DialogTitle>

				<DialogContent sx={{ p: 0 }}>
					<DialogContentText sx={{ color: "secondary.main" }}>
						{data.description}
					</DialogContentText>
				</DialogContent>

				<DialogActions sx={{ p: 0 }}>
					<Button
						sx={{
							bgcolor: grey[400],
							color: "secondary.main",
							fontFamily: "inherit",
							fontWeight: 600,
						}}
						variant='contained'
						onClick={() => setOpen(false)}>
						Cancel
					</Button>

					<Button
						color={data.color}
						sx={{ fontFamily: "inherit", fontWeight: 600 }}
						variant='contained'
						onClick={async () => {
							setOpen(false);
							setLoading(true);
							await data.onClick();
							setLoading(false);
						}}>
						{data.buttonText}
					</Button>
				</DialogActions>
			</Dialog>

			<Backdrop open={loading} onClick={() => setLoading(false)}>
				<CircularProgress color='accent' />
			</Backdrop>
		</ModalContext.Provider>
	);
};

export default ModalProvider;
