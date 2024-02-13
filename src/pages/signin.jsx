import { Box } from "@mui/material";
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
import { useLocation, useNavigate } from "react-router-dom";
import StyledButton from "@/components/shared/buttons/StyledButton";
import InputField from "@/components/shared/InputField";

const fields = [
	{
		autoComplete: "email",
		fullWidth: true,
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
		autoComplete: "new-password",
		fullWidth: true,
		id: "password",
		helperText: "",
		label: "Password",
		type: "password",
		validation: { minLength: 8 },
	},
	{
		fullWidth: true,
		id: "captcha",
		helperText: "Incorrect captcha. Please try again.",
		placeholder: "Write the captcha here",
		type: "text",
		validation: { validate: (value) => validateCaptcha(value, false) },
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
			navigate("/dashboard", { state: { from: location } });
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
				{fields.map((field, i) => (
					<InputField
						errors={errors}
						field={field}
						key={i}
						register={register}
						size='small'
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

				<StyledButton
					size='large'
					sx={{
						borderRadius: 1.5,
						display: "flex",
						mx: "auto",
						width: "100%",
					}}
					type='submit'>
					Sign In
				</StyledButton>
			</Box>
		</LoginLayout>
	);
};

export default SignInPage;
