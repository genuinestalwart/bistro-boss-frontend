import { Box } from "@mui/material";
import LoginLayout from "@/layouts/LoginLayout";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import StyledButton from "@/components/shared/buttons/StyledButton";
import InputField from "@/components/shared/InputField";

const fields = [
	{
		autoComplete: "name",
		fullWidth: true,
		id: "name",
		label: "Name",
		type: "text",
		validation: { maxLength: 32, minLength: 3 },
	},
	{
		autoComplete: "email",
		fullWidth: true,
		id: "email",
		label: "Email",
		type: "email",
		validation: {
			pattern:
				/^([a-z0-9]+(\.[^\WA-Z_]+)*){6,30}@((([a-z0-9-](?!--)){3,}\.)+[a-z]{2,})$/,
		},
	},
	{
		autoComplete: "new-password",
		fullWidth: true,
		id: "password",
		label: "Password",
		type: "password",
		validation: { minLength: 8 },
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

			navigate("/dashboard", { state: { from: location } });
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
				{fields.map((field, i) => (
					<InputField
						errors={errors}
						field={field}
						key={i}
						register={register}
						size='small'
					/>
				))}

				<StyledButton
					size='large'
					sx={{
						borderRadius: 1.5,
						display: "flex",
						mx: "auto",
						width: "100%",
					}}
					type='submit'>
					Sign Up
				</StyledButton>
			</Box>
		</LoginLayout>
	);
};

export default SignUpPage;
