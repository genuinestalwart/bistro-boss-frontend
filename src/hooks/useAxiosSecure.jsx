import { AuthContext } from "@/providers/AuthProvider";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
	baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
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
				if ([401, 403].includes(error.response.status)) {
					await logOut();
					navigate("/signin");
				}

				return Promise.reject(error);
			}
		);

		return () => {
			axiosSecure.interceptors.request.eject(secureTheRequest);
			axiosSecure.interceptors.response.eject(secureTheResponse);
		};
	}, [logOut, navigate]);

	return axiosSecure;
};

export default useAxiosSecure;
