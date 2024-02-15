import { TextField } from "@mui/material";

const InputField = ({
	children,
	errors = {},
	field,
	register = () => {},
	size,
}) => {
	return (
		<TextField
			autoComplete={field.autoComplete || "off"}
			color='accent'
			defaultValue={field.defaultValue}
			error={errors[field.id] ? true : false}
			fullWidth={field.fullWidth}
			helperText={errors[field.id] ? field.helperText : ""}
			id={field.id}
			inputProps={field.inputProps}
			label={field.label}
			minRows={field.minRows}
			multiline={field.multiline}
			placeholder={field.placeholder}
			{...register(field.id, field.validation)}
			required
			select={field.select}
			size={size || "medium"}
			sx={{
				bgcolor: "primary.main",
				borderRadius: 1,
				gridColumn: field.gridColumn || "auto",
				"& .MuiInputLabel-root": {
					bgcolor: "primary.main",
					borderRadius: 1,
					px: 1,
				},
			}}
			type={field.type}
			variant='outlined'>
			{children}
		</TextField>
	);
};

export default InputField;
