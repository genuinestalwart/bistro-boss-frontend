import { Box, TextField } from "@mui/material";
import LoginLayout from "@/layouts/LoginLayout";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import LoginButton from "@/components/login/LoginButton";
import { useLocation, useNavigate } from "react-router-dom";

const fieldProps = [
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
	const location = useLocation();
	const navigate = useNavigate();
	const axiosPublic = useAxiosPublic();
	const { createUser, updateUser, verifyEmail } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		createUser(data.email, data.password).then(async (res) => {
			await updateUser({ displayName: data.name });
			// await verifyEmail();

			await axiosPublic.post("/users", {
				email: res.user?.email,
				name: res.user?.displayName,
				uid: res.user?.uid,
			});

			navigate("/dashboard", {
				replace: true,
				state: location.state,
			});
		});
	};

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
				{fieldProps.map((fieldItem, index) => (
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

				<LoginButton text='Sign Up' />
			</Box>
		</LoginLayout>
	);
};

export default SignUpPage;
