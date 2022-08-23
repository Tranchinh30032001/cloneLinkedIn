import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { addDocument } from "../firebase/addDoc";

function SignUpPage() {
	const [error, setError] = useState(false);
	const emailRef = useRef();
	const passwordRef = useRef();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const handleClick = useCallback((e) => {
		e.preventDefault();
		setLoading(true);
		const auth = getAuth();
		signInWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then(() => {
				navigate("/feed");
				setLoading(false);
			})
			.catch((error) => {
				setError(true);
				setLoading(false);
				emailRef.current.value = "";
				passwordRef.current.value = "";
				emailRef.current.focus();
			});
	}, []);
	return (
		<Login>
			<Login.Logo src={"./img/LinkedLogin.svg"} />
			<Login.Inner>
				<Login.Form>
					{error && (
						<p
							style={{
								textAlign: "center",
								color: "red",
								fontSize: "1.4rem",
								marginBottom: "2rem",
							}}
						>
							{" "}
							Please try to check your accout !
						</p>
					)}
					<Login.Heading>Login</Login.Heading>
					<Login.Notice>Stay updated on your professional world</Login.Notice>

					<Login.Input properties={emailRef} type="text" placeholder="Email" />
					<Login.Input
						properties={passwordRef}
						type="password"
						placeholder="Password"
					/>

					<Login.Fogot>Forgot password?</Login.Fogot>
					<Login.Button loading={loading} onClick={handleClick}>
						{loading && <img src="./img/loading.svg" alt="" />}
						Login
					</Login.Button>
				</Login.Form>
				<Login.New>
					New to LinkedIn?
					<Login.Join link="/signup">Sign Up</Login.Join>
				</Login.New>
			</Login.Inner>
		</Login>
	);
}

export default SignUpPage;
