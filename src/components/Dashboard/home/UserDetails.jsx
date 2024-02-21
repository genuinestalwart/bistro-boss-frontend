import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import profile from "@/assets/others/profile.png";
import { AccountCircle, AlternateEmail, Verified } from "@mui/icons-material";
import moment from "moment";

const UserDetails = ({ user }) => {
	const { displayName, email, emailVerified, metadata, photoURL } = user;

	const info = [
		{ icon: <AlternateEmail />, text: `${email}` },
		{
			icon: <Verified />,
			text: `Status: ${emailVerified ? "" : "not "}verified`,
		},
		{
			icon: <AccountCircle />,
			text: `Created ${moment(parseInt(metadata.createdAt)).fromNow()}`,
		},
	];

	return (
		<Box display={{ md: "flex" }}>
			<Box
				alignItems='center'
				className='bg-accent/50 space-y-4'
				display='flex'
				flexDirection='column'
				justifyContent='space-between'
				py={16}
				width={{ md: "50%" }}>
				<img
					alt='profile picture'
					className='border-2 border-secondary h-32 rounded-full w-32'
					src={photoURL || profile}
				/>

				<Typography component='p' fontWeight={500} variant='h5'>
					{displayName}
				</Typography>
			</Box>

			<Box
				className='bg-amber-200'
				p={{ xs: 4, lg: 8 }}
				width={{ md: "50%" }}>
				<Typography
					component='h3'
					fontFamily='"Cinzel Variable", sans-serif'
					fontWeight={700}
					variant='h5'>
					Account Details
				</Typography>

				<List>
					{info.map((item, i) => (
						<ListItem className='space-x-2' key={i} sx={{ px: 0 }}>
							<ListItemIcon
								sx={{
									color: "secondary.main",
									minWidth: "auto",
								}}>
								{item.icon}
							</ListItemIcon>

							<ListItemText sx={{ my: 0 }}>
								{item.text}
							</ListItemText>
						</ListItem>
					))}
				</List>
			</Box>
		</Box>
	);
};

export default UserDetails;
