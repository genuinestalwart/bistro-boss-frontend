const HomeTitles = (props) => {
	const { smallTitle, bigTitle, borderColor } = props;

	return (
		<>
			<div className='italic font-medium mb-2 text-accent text-sm'>
				---{smallTitle}---
			</div>

			<hr className={`border-y mx-auto w-1/3 ${borderColor}`} />

			<h2 className='font-medium my-3 text-2xl uppercase'>{bigTitle}</h2>

			<hr className={`border-y mx-auto w-1/3 ${borderColor}`} />
		</>
	);
};

export default HomeTitles;
