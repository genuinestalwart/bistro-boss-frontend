import { Divider } from "@mui/material";

const HomeTitles = (props) => {
	const { smallTitle, bigTitle, borderColor } = props;

	return (
		<>
			<div className='italic font-medium mb-2 text-accent text-sm'>
				---{smallTitle}---
			</div>

			<Divider
				className={`[&.css-9mgopn-MuiDivider-root]:border-y [&.css-9mgopn-MuiDivider-root]:mx-auto w-1/3 ${borderColor}`}
			/>

			<h2 className='font-medium my-3 text-2xl uppercase'>{bigTitle}</h2>

			<Divider
				className={`[&.css-9mgopn-MuiDivider-root]:border-y [&.css-9mgopn-MuiDivider-root]:mx-auto w-1/3 ${borderColor}`}
			/>
		</>
	);
};

export default HomeTitles;
