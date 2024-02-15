import { Box } from "@mui/material";
import cupcake from "@/assets/others/cupcake.gif";

const DataLoading = () => {
	return (
		<Box height='40vh' maxHeight={{ "2xl": "324px" }}>
			<img alt='cupcake' className='mx-auto w-1/3' src={cupcake} />
		</Box>
	);
};

export default DataLoading;
