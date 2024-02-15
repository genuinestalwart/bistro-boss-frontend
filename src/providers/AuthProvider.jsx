import { useEffect, useState, createContext, useContext } from "react";
import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase.config";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { ToastContext } from "@/providers/ToastProvider";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const googleProvider = new GoogleAuthProvider();
	const axiosPublic = useAxiosPublic();
	const { toast } = useContext(ToastContext);
	const updateUser = (info) => updateProfile(auth.currentUser, info);
	const verifyEmail = () => sendEmailVerification(auth.currentUser);

	const createUser = async (email, password) => {
		setLoading(true);

		try {
			return await createUserWithEmailAndPassword(auth, email, password);
		} catch {
			setLoading(false);

			toast({
				title: "Email Address Already Taken!",
				type: "error",
				position: { horizontal: "right", vertical: "bottom" },
				description:
					"Someone has already signed up using this email address. If that's you, please sign in instead.",
			});
		}
	};
	const loginUser = async (email, password) => {
		setLoading(true);

		try {
			return await signInWithEmailAndPassword(auth, email, password);
		} catch {
			setLoading(false);

			toast({
				title: "Incorrect Email or Password!",
				type: "error",
				position: { horizontal: "right", vertical: "bottom" },
				description:
					"The email and password you entered doesn't match. Either your password is wrong or the email was never registered on our website. Try checking the spelling again.",
			});
		}
	};

	const loginWithGoogle = async () => {
		setLoading(true);
		return await signInWithPopup(auth, googleProvider);
	};

	const logOut = async () => {
		setLoading(true);
		return await signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);

			currentUser
				? axiosPublic
						.post("/auth", { email: currentUser.email })
						.then((res) => {
							res.data.token &&
								localStorage.setItem(
									"access-token",
									res.data.token
								);
						})
				: localStorage.removeItem("access-token");

			setLoading(false);
		});

		return () => unsubscribe();
	}, [axiosPublic]);

	return (
		<AuthContext.Provider
			value={{
				createUser,
				loading,
				loginUser,
				loginWithGoogle,
				logOut,
				updateUser,
				user,
				verifyEmail,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
