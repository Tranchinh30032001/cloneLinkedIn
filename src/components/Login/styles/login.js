import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Inner = styled.div`
	box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.2);
	padding: 2rem;
	max-width: 36rem;
	width: 100%;
	border-radius: 1rem;
`;
export const Logo = styled.img`
	position: absolute;
	top: 2rem;
	left: 2rem;
	width: 16rem;
	height: 4rem;
`;
export const Form = styled.form``;
export const Heading = styled.h1`
	font-size: 3rem;
	margin-bottom: 0.6rem;
`;
export const Notice = styled.p`
	font-size: 1.4rem;
	font-weight: 300;
`;
export const Input = styled.input`
	display: block;
	margin-top: 2rem;
	width: 100%;
	padding: 1.6rem 1.2rem;
	border-radius: 1rem;
`;
export const Fogot = styled.p`
	margin-top: 1rem;
	font-size: 1.5rem;
	color: rgb(10, 102, 194);
	cursor: pointer;
`;
export const Button = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgb(10, 102, 194);
	color: #fff;
	padding: 1.4rem;
	margin: 3rem 0;
	border-radius: 9999px;
	cursor: pointer;
	transition: all 0.2s linear;
	&:hover {
		opacity: 0.9;
	}
	img {
		height: 2rem;
		margin-right: 1rem;
	}
`;
export const New = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.3rem;
`;
export const Join = styled(Link)`
	font-weight: 500;
	color: rgb(10, 102, 194);
	cursor: pointer;
`;
