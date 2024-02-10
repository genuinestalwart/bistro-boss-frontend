import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://gs-bistro-boss-backend.vercel.app",
});

const useAxiosPublic = () => {
	return axiosPublic;
};

export default useAxiosPublic;
