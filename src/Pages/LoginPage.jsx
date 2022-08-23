import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { addDocument } from "../firebase/addDoc";
import { auth } from "../firebase/firebase";
import { generateKeywords } from "../redux/selectors";

function LoginPage() {
	const userNameRef = useRef();
	const passwordRef = useRef();
	const urlRef = useRef();
	const emailRef = useRef();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleClick = useCallback((e) => {
		e.preventDefault();
		if (!userNameRef.current.value) {
			return alert("xin vui long kiem tra lai");
		}
		setLoading(true);
		createUserWithEmailAndPassword(
			auth,
			emailRef.current.value,
			passwordRef.current.value
		)
			.then((userCredential) => {
				updateProfile(userCredential.user, {
					displayName: userNameRef.current.value,
					photoURL: urlRef.current.value,
				})
					.then(() => {
						const { email, displayName, uid, photoURL, providerId } =
							userCredential.user;
						addDocument("users", {
							email: email,
							name: displayName,
							photoUrl: photoURL,
							uid: uid,
							providerId: providerId,
							keyWord: generateKeywords(displayName),
						});
						navigate("/signin");
						setLoading(false);
					})
					.catch((error) => {
						console.log("update fail: " + error);
						setLoading(false);
					});
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<Login>
			<Login.Logo src={"./img/LinkedLogin.svg"} />
			<Login.Inner>
				<Login.Form>
					<Login.Heading>Log Up</Login.Heading>
					<Login.Notice>Stay updated on your professional world</Login.Notice>

					<Login.Input
						properties={userNameRef}
						type="text"
						placeholder="Username"
					/>
					<Login.Input properties={urlRef} type="text" placeholder="URL" />
					<Login.Input
						properties={emailRef}
						type="text"
						placeholder="Email or Phone"
					/>
					<Login.Input
						properties={passwordRef}
						type="password"
						placeholder="Password"
					/>

					<Login.Fogot>Forgot password?</Login.Fogot>
					<Login.Button loading={loading} onClick={handleClick}>
						{loading && <img src="./img/loading.svg" alt="" />}
						Sign Up
					</Login.Button>
				</Login.Form>
				<Login.New>
					New to LinkedIn?
					<Login.Join link="/signin">Sign In</Login.Join>
				</Login.New>
			</Login.Inner>
		</Login>
	);
}

export default LoginPage;
