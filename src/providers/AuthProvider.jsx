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

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password).catch(
			() => {
				setLoading(false);

				toast({
					title: "Email Address Already Taken!",
					type: "error",
					position: { horizontal: "right", vertical: "bottom" },
					description:
						"Someone has already signed up using this email address. If that's you, please sign in instead.",
				});
			}
		);
	};
	const loginUser = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password).catch(() => {
			setLoading(false);

			toast({
				title: "Incorrect Email or Password!",
				type: "error",
				position: { horizontal: "right", vertical: "bottom" },
				description:
					"The email and password you entered doesn't match. Either your password is wrong or the email was never registered on our website. Try checking the spelling again.",
			});
		});
	};

	const loginWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const updateUser = (info) => {
		return updateProfile(auth.currentUser, info);
	};

	const verifyEmail = () => {
		return sendEmailVerification(auth.currentUser);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);

			if (currentUser) {
				axiosPublic
					.post("/auth", { email: currentUser.email })
					.then((res) => {
						if (res.data.token) {
							localStorage.setItem(
								"access-token",
								res.data.token
							);
						}
					});
			} else {
				localStorage.removeItem("access-token");
			}

			setLoading(false);
		});

		return () => {
			return unsubscribe();
		};
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
