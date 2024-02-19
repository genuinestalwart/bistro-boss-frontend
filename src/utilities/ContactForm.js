export const fields = [
	{
		autoComplete: "name",
		gridColumn: { md: "span 2 / span 2" },
		id: "name",
		label: "Name",
		placeholder: "Enter your name",
		type: "text",
	},
	{
		autoComplete: "email",
		id: "email",
		label: "Email",
		placeholder: "Enter your email",
		type: "email",
	},
	{
		autoComplete: "tel",
		id: "phone",
		label: "Phone",
		placeholder: "Enter your phone number",
		type: "tel",
	},
	{
		gridColumn: { md: "span 2 / span 2" },
		id: "message",
		label: "Message",
		minRows: 8,
		multiline: true,
		placeholder: "Write your message here",
	},
];
