export const fields = [
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
