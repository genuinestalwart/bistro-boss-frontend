import { Box, Button, TextField } from "@mui/material";
import LoginLayout from "@/layouts/LoginLayout";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { ToastContext } from "@/providers/ToastProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const fieldItems = [
	{
		id: "name",
		label: "Name",
		type: "text",
		validation: {
			maxLength: 32,
			minLength: 3,
		},
	},
	{
		id: "email",
		label: "Email",
		type: "email",
		validation: {
			pattern:
				/^([a-z0-9]+(\.[^\WA-Z_]+)*){6,30}@((([a-z0-9-](?!--)){3,}\.)+[a-z]{2,})$/,
		},
	},
	{
		id: "password",
		label: "Password",
		type: "password",
		validation: {
			minLength: 8,
		},
	},
];

const SignUpPage = () => {
	const [displayName, setDisplayName] = useState("");
	const navigate = useNavigate();
	const { toast } = useContext(ToastContext);
	const { createUser, updateUser, user, verifyEmail } =
		useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const { name, email, password } = data;
		setDisplayName(name);
		createUser(email, password).catch((error) => {
			toast({
				title: "Email Address Already Taken!",
				description:
					"Someone has already signed up using this email address. If that's you, please sign in instead.",
			});
		});
	};

	useEffect(() => {
		const setUpAccount = async (displayName) => {
			await updateUser({ displayName });
			// await verifyEmail();
			navigate("/dashboard");
		};

		if (user) {
			setUpAccount(displayName);
		}
	}, [user]);

	return (
		<LoginLayout login={false}>
			<Helmet>
				<title>Bistro Boss | Sign Up</title>
			</Helmet>

			<Box
				className='space-y-6'
				component='form'
				onSubmit={handleSubmit(onSubmit)}
				px={{ xs: 6, md: 0 }}>
				{fieldItems.map((fieldItem, index) => (
					<TextField
						autoComplete='off'
						color='accent'
						error={errors[fieldItem.id] ? true : false}
						fullWidth
						id={fieldItem.id}
						key={index}
						label={fieldItem.label}
						{...register(fieldItem.id, fieldItem.validation)}
						required
						size='small'
						sx={{
							bgcolor: "primary.main",
						}}
						type={fieldItem.type}
						variant='outlined'
					/>
				))}

				<Button
					color='accent'
					size='large'
					sx={{
						color: "secondary.main",
						display: "flex",
						fontFamily: "inherit",
						fontWeight: 600,
						mx: "auto",
						width: "100%",
						"&:hover": {
							bgcolor: "secondary.main",
							color: "accent.main",
						},
					}}
					type='submit'
					variant='contained'>
					Sign Up
				</Button>
			</Box>
		</LoginLayout>
	);
};

export default SignUpPage;
