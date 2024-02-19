import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment";

const InputDate = ({ selectedDate, setSelectedDate }) => {
	return (
		<DatePicker
			disableHighlightToday
			disablePast
			format='DD-MM-YYYY'
			formatDensity='spacious'
			label='Date'
			onChange={(newValue) => setSelectedDate(newValue)}
			shouldDisableDate={(day) =>
				moment(day).format("D M YYYY") === moment().format("D M YYYY")
			}
			slotProps={{
				day: {
					sx: {
						"&.Mui-selected, &:focus.Mui-selected": {
							bgcolor: "accent.main",
							color: "secondary.main",
						},
						"&:enabled:hover": {
							bgcolor: "secondary.main",
							color: "accent.main",
						},
						"&.Mui-disabled": {
							cursor: "not-allowed",
							pointerEvents: "auto",
						},
					},
				},
				textField: { required: true },
			}}
			sx={{
				bgcolor: "primary.main",
				borderRadius: 1,
				"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
					{ borderColor: "accent.main" },
				"& .MuiInputLabel-root.Mui-focused": { color: "accent.main" },
				"& .MuiInputLabel-root": {
					bgcolor: "primary.main",
					borderRadius: 1,
					px: 1,
				},
			}}
			value={selectedDate}
		/>
	);
};

export default InputDate;
