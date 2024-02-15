import { validateCaptcha } from "react-simple-captcha";

export const fields = [
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
