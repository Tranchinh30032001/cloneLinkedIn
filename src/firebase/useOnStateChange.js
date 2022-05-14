import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/UserSlice";
import { useNavigate } from "react-router-dom";

export const useOnStateChange = (auth) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		const unSubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				dispatch(logout());
				navigate("/login");
			}
		});
		return () => unSubscribe();
	}, []);
};
