import { useEffect, useState, createContext } from "react";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	const updateUser = (info) => {
		return updateProfile(user, info);
	};

	const verifyEmail = () => {
		return sendEmailVerification(user);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	return (
		<AuthContext.Provider
			value={{
				createUser,
				loading,
				loginUser,
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
