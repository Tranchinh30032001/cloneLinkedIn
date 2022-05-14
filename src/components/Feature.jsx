import {
	getAdditionalUserInfo,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addDocument } from "../firebase/addDoc";
import { auth } from "../firebase/firebase";
import { signInAPI } from "../redux/UserSlice";

import { useDispatch } from "react-redux";

function Feature() {
	const dispatch = useDispatch();
	// const navigate = useNavigate();
	// const signInWithGoogle = async (e) => {
	// 	e.preventDefault();
	// 	const provider = new GoogleAuthProvider();
	// 	signInWithPopup(auth, provider)
	// 		.then(async (result) => {
	// 			navigate("/feed");
	// 			const { isNewUser, profile, providerId } =
	// 				getAdditionalUserInfo(result);
	// 			if (isNewUser) {
	// 				addDocument("users", {
	// 					email: profile.email,
	// 					name: profile.name,
	// 					photoUrl: profile.picture,
	// 					uid: profile.id,
	// 					providerId: providerId,
	// 				});
	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	return (
		<Container>
			<img src="./img/Feature/feature.svg" alt="" />
			<Inner>
				<div className="wrapper">
					<h1>Welcome to your professional comunity</h1>
					<div action="" className="form">
						<input type="text" placeholder="Email or phone number" />
						<input type="password" placeholder="Password" />
						<div className="forgot">
							<a href="#">Forgot Password?</a>
						</div>

						<Link className="btn btn-sign" to="/signin">
							<span style={{ color: "#fff" }}>Sign in</span>
						</Link>
						<div className="line">
							<span>or</span>
						</div>
						<button
							onClick={() => dispatch(signInAPI())}
							className="btn btn-google"
						>
							<img src="./img/google.svg" alt="" />
							Sign in with Google
						</button>
					</div>
				</div>
			</Inner>
		</Container>
	);
}

export default Feature;

const Container = styled.div`
	padding: 2rem 0;
	position: relative;
	img {
		max-width: 60rem;
		display: block;
		margin-left: auto;
		@media screen and (max-width: 723px) {
			max-width: 40rem;
		}
		@media screen and (max-width: 1115px) {
			margin: 0 auto;
		}
	}
	@media screen and (max-width: 723px) {
		margin-top: 8rem;
	}
`;
const Inner = styled.div`
	max-width: 110rem;
	margin: 0 auto;
	width: 100%;
	.wrapper {
		position: absolute;
		top: 2rem;
		left: auto;
		@media screen and (max-width: 1115px) {
			text-align: center;
			position: relative;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
	h1 {
		font-size: 5rem;
		max-width: 55rem;
		width: 100%;
		color: rgb(143, 88, 73);
		font-weight: 300;
		margin-bottom: 3rem;
	}
	.form {
		input {
			display: block;
			max-width: 38rem;
			width: 100%;
			line-height: 4.8rem;
			margin-bottom: 1rem;
			box-shadow: 0 0 0 1px #666;
			padding: 0 2rem;
			@media screen and (max-width: 1115px) {
				width: 30rem !important;
			}
			&:focus {
				font-size: 1.5rem;
				box-shadow: 0 0 1.2px 1.2px rgb(10, 102, 205);
				border-radius: 0.1rem;
				::placeholder {
					transition: all 0.2s ease-in-out;
					font-size: 1.1rem;
					transform: translateY(-1.5rem);
				}
			}
		}
		.forgot {
			margin-top: 2rem;
			font-size: 1.4rem;
			a {
				color: #333;
			}
		}

		.line {
			max-width: 40.8rem;
			width: 100%;
			height: 0.8px;
			background-color: #999;
			margin-top: 2.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			span {
				background-color: #ffffff;
				padding: 0 1rem;
				font-size: 1.4rem;
			}
		}

		.btn {
			max-width: 38rem;
			width: 100%;
			font-size: 1.6rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 9999px;
			line-height: 4.8rem;
			margin-top: 2.5rem;
			color: #fff;
			font-size: 1.5rem;
			overflow: hidden;
			cursor: pointer;
			background-color: #ffffff;
		}
		.btn-sign {
			background-color: rgba(10, 102, 205);
			&:hover {
				opacity: 0.8;
			}
		}
		.btn-google {
			margin-top: 2.5rem;
			color: #666;
			border: 1px solid #ccc;
			&:hover {
				box-shadow: 0 0 0 1.4px #000;
			}
			img {
				width: 3rem;
				height: 3rem;
				background-color: #ffffff;
				display: block;
				margin: 0;
				margin-right: 2rem;
			}
		}
	}
`;
