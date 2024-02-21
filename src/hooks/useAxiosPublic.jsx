import axios from "axios";

const axiosPublic = axios.create({
	baseURL: "https://gs-bistro-boss-backend.vercel.app",
});

const useAxiosPublic = () => axiosPublic;
export default useAxiosPublic;
