import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const Container = styled.div`
	background-color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 1000;
`;

export const Inner = styled.div`
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 300;
	@media screen and (max-width: 1115px) {
		max-width: 78rem;
		width: 100%;
	}
	@media screen and (max-width: 723px) {
		justify-content: space-around;
	}
	@media screen and (max-width: 530px) {
		padding: 0 1rem;
	}
`;
export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: gray;
`;
export const Search = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: rgb(238, 243, 248);
	height: 3.2rem;
	padding: 0 1rem;
	border-radius: 0.4rem;
	@media screen and (max-width: 1115px) {
		display: none;
	}
	@media screen and (max-width: 530px) {
		display: flex;
		width: 32rem;
		max-width: 100% !important;
		margin-right: 0.5rem;
	}
`;
export const Line = styled.div`
	height: 3rem;
	width: 1px;
	background-color: #ddd;
	margin-right: 2rem;
	@media screen and (max-width: 723px) {
		display: none;
	}
`;
export const Input = styled.input`
	background-color: rgb(238, 243, 248);
	padding: 0 1rem;
	padding-right: 3rem;
`;
export const Premium = styled.p`
	max-width: 8rem;
	text-align: center;
	font-size: 1.15rem;
	color: rgb(145, 89, 7);
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	@media screen and (max-width: 723px) {
		display: none;
	}
`;
export const Logo = styled.img`
	width: 3.2rem;
	height: 3.2rem;
	object-fit: cover;
	margin-right: 1rem;
	@media screen and (max-width: 1115px) {
		/* margin-right: 10rem; */
	}
`;
export const Option = styled(RouterLink)`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: gray;
	margin-right: 3rem;
	font-size: 1.12rem;
	&:hover {
		color: #000;
	}
	.icon {
		font-size: 2.2rem;
		margin-bottom: 0.2rem;
	}
	&.active {
		color: #111;
	}
	&.active::after {
		content: "";
		position: absolute;
		bottom: -0.55rem;
		left: -1.5rem;
		width: 6rem;
		height: 1.5px;
		background-color: #111;
	}
	@media screen and (max-width: 530px) {
		/* display: none; */
	}
`;
export const Work = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: gray;
	margin-right: 1.8rem;
	font-size: 1.15rem;
	@media screen and (max-width: 723px) {
		display: none;
	}

	.icon {
		font-size: 2.2rem;
		cursor: pointer;
	}
	.active {
		color: red;
	}
`;
export const User = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-right: 2.4rem;
	cursor: pointer;
	@media screen and (max-width: 540px) {
		/* display: none; */
	}
`;
export const Notification = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: gray;
	margin-right: 1.8rem;
	font-size: 1.15rem;
	.icon {
		font-size: 2.4rem;
	}
	@media screen and (max-width: 540px) {
		/* display: none; */
	}
`;
export const NavLink = styled.div`
	display: flex;
	@media screen and (max-width: 723px) {
		position: absolute;
		left: 0;
		right: 0;
		top: 103%;
		height: 5rem;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
