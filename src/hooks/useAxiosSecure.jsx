import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
	baseURL: "https://gs-bistro-boss-backend.vercel.app",
});

const useAxiosSecure = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { logOut } = useContext(AuthContext);

	useEffect(() => {
		const secureTheRequest = axiosSecure.interceptors.request.use(
			(config) => {
				config.headers.Authorization = `Bearer ${localStorage.getItem(
					"access-token"
				)}`;

				return config;
			},

			(error) => Promise.reject(error)
		);

		const secureTheResponse = axiosSecure.interceptors.response.use(
			(response) => response,

			async (error) => {
				if (
					error.response.status === 401 ||
					error.response.status == 403
				) {
					await logOut();
					navigate("/signin", { state: { from: location } });
				}

				return Promise.reject(error);
			}
		);

		return () => {
			axiosSecure.interceptors.request.eject(secureTheRequest);
			axiosSecure.interceptors.response.eject(secureTheResponse);
		};
	}, [location, logOut, navigate]);

	return axiosSecure;
};

export default useAxiosSecure;
