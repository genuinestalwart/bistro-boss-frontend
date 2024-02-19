import { MenuItem } from "@mui/material";
const numberOfGuests = [1, 2, 3, 4, 5, 6, 7, 8];

const time = [
	"12:00pm - 12:30pm",
	"12:30pm - 1:00pm",
	"1:00pm - 1:30pm",
	"1:30pm - 2:00pm",
	"2:00pm - 2:30pm",
	"2:30pm - 3:00pm",
	"3:00pm - 3:30pm",
	"3:30pm - 4:00pm",
	"4:00pm - 4:30pm",
	"4:30pm - 5:00pm",
	"5:00pm - 5:30pm",
	"5:30pm - 6:00pm",
	"6:00pm - 6:30pm",
	"6:30pm - 7:00pm",
	"7:00pm - 7:30pm",
	"7:30pm - 8:00pm",
	"8:00pm - 8:30pm",
	"8:30pm - 9:00pm",
	"9:00pm - 9:30pm",
	"9:30pm - 10:00pm",
	"10:00pm - 10:30pm",
	"10:30pm - 11:00pm",
	"11:00pm - 11:30pm",
	"11:30pm - 12:00am",
];

export const fields = (setTime, setGuests) => [
	{
		children: time.map((option, i) => (
			<MenuItem key={i} value={option}>
				{option}
			</MenuItem>
		)),
		defaultValue: "12:00pm - 12:30pm",
		id: "time",
		label: "Time",
		onChange: setTime,
		select: true,
	},
	{
		children: numberOfGuests.map((option, i) => (
			<MenuItem key={i} value={option}>
				{option}
			</MenuItem>
		)),
		defaultValue: "1",
		id: "guests",
		label: "Guests",
		onChange: setGuests,
		select: true,
	},
];
