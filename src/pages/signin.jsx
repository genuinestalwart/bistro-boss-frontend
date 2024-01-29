import { Box, Button, TextField } from "@mui/material";
import LoginLayout from "@/layouts/LoginLayout";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "@/providers/AuthProvider";
import { ToastContext } from "@/providers/ToastProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const fieldItems = [
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

const SignInPage = () => {
	const [captchaError, setCaptchaError] = useState(false);
	const navigate = useNavigate();
	const { toast } = useContext(ToastContext);
	const { loginUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		const { captcha, email, password } = data;

		if (validateCaptcha(captcha)) {
			setCaptchaError(false);
			loginUser(email, password)
				.then(() => {
					navigate("/dashboard");
				})
				.catch((error) => {
					toast({
						title: "Incorrect Email or Password!",
						description:
							"The email and password you entered doesn't match. Either your password is wrong or the email was never registered on our website. Try checking the spelling again.",
					});
				});
		} else {
			setCaptchaError(true);
		}
	};

	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	return (
		<LoginLayout login={true}>
			<Helmet>
				<title>Bistro Boss | Sign In</title>
			</Helmet>

			<Box
				className='space-y-6'
				component='form'
				onSubmit={handleSubmit(onSubmit)}
				px={{ xs: 6, md: 0 }}>
				{fieldItems.map((fieldItem, index) => (
					<TextField
						autoComplete='on'
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

				<Box
					sx={{
						"& canvas#canv": {
							borderColor: grey[400],
							borderRadius: 1,
							borderWidth: 2,
						},
					}}>
					<LoadCanvasTemplate />
				</Box>

				<TextField
					color='accent'
					error={captchaError}
					fullWidth
					helperText={
						captchaError
							? "Incorrect captcha. Please try again."
							: ""
					}
					id='captcha'
					placeholder='Write the captcha here'
					{...register("captcha")}
					required
					size='small'
					sx={{
						bgcolor: "primary.main",
					}}
					type='text'
					variant='outlined'
				/>

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
					Sign In
				</Button>
			</Box>
		</LoginLayout>
	);
};

export default SignInPage;
