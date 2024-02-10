import { Box, TextField } from "@mui/material";
import LoginLayout from "@/layouts/LoginLayout";
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect } from "react";
import { grey } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "@/providers/AuthProvider";
import { useForm } from "react-hook-form";
import LoginButton from "@/components/login/LoginButton";
import { useLocation, useNavigate } from "react-router-dom";

const fieldProps = [
	{
		autoComplete: "on",
		id: "email",
		helperText: "",
		label: "Email",
		type: "email",
		validation: {
			pattern:
				/^([a-z0-9]+(\.[^\WA-Z_]+)*){6,30}@((([a-z0-9-](?!--)){3,}\.)+[a-z]{2,})$/,
		},
	},
	{
		autoComplete: "on",
		id: "password",
		helperText: "",
		label: "Password",
		type: "password",
		validation: {
			minLength: 8,
		},
	},
	{
		id: "captcha",
		helperText: "Incorrect captcha. Please try again.",
		placeholder: "Write the captcha here",
		type: "text",
		validation: {
			validate: (value) => validateCaptcha(value, false),
		},
	},
];

const SignInPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { loading, user, loginUser } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		loginUser(data.email, data.password).then(() => {
			navigate("/dashboard", {
				replace: true,
				state: location.state,
			});
		});
	};

	useEffect(() => {
		if (!loading && !user) {
			loadCaptchaEnginge(6);
		}
	}, [loading, user]);

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
				{fieldProps.map((fieldItem, index) => (
					<TextField
						autoComplete={fieldItem.autoComplete}
						color='accent'
						error={errors[fieldItem.id] ? true : false}
						fullWidth
						helperText={
							errors[fieldItem.id] ? fieldItem.helperText : ""
						}
						id={fieldItem.id}
						key={index}
						label={fieldItem.label}
						placeholder={fieldItem.placeholder}
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

				<LoginButton text='Sign In' />
			</Box>
		</LoginLayout>
	);
};

export default SignInPage;
