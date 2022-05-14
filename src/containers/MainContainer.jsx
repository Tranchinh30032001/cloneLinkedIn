import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Footer from "./Footer";
import Marketing from "./Marketing";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

function MainContainer() {
	const navigate = useNavigate();
	const user = useSelector(userSelector);
	return (
		<Container>
			{user ? navigate("/feed") : null}
			<Nav>
				<a href="#">
					<img src="/img/LinkedLogin.svg" alt="" />
				</a>
				<div className="right">
					<Header.NavLink>
						<Header.Option to="discover" Icon={ExploreOutlinedIcon}>
							Discover
						</Header.Option>
						<Header.Option to="people" Icon={PeopleIcon}>
							People
						</Header.Option>
						<Header.Option to="learning" Icon={CastForEducationIcon}>
							Learning
						</Header.Option>
						<Header.Option to="work" Icon={WorkIcon}>
							Jobs
						</Header.Option>
					</Header.NavLink>
					<Header.Line />
					<h3>Join now</h3>
					<Link className="btn-signup" to="/signup">
						<span>Sign Up</span>
					</Link>
				</div>
			</Nav>
			<Feature />
			<Marketing />
			<Footer />
		</Container>
	);
}

export default MainContainer;

const Container = styled.div`
	width: 100%;
	margin: 0 auto;
`;
const Nav = styled.div`
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 8rem;
	position: relative;
	img {
		width: 17rem;
		height: 100%;
		position: relative;
		left: -1.6rem;
	}
	.right {
		display: flex;
		align-items: center;
		justify-content: center;
		h3 {
			font-size: 1.4rem;
			margin-right: 2rem;
			font-weight: 500;
			padding: 1rem 2rem;
			border-radius: 0.6rem;
			transition: all 0.25s linear;
			cursor: pointer;
			color: gray;
			&:hover {
				background-color: #eee;
			}
		}
		.btn-signup {
			border: 1px solid rgb(10, 102, 202);
			border-radius: 9999px;
			padding: 0.8rem 2rem;
			background-color: #ffffff;
			transition: background-color 0.25s linear;
			cursor: pointer;
			&:hover {
				box-shadow: 0 0 0 1px rgb(10, 102, 202);
				background: #eee;
			}
			span {
				color: #222;
				font-size: 1.5rem;
				color: rgb(10, 102, 202);
				font-weight: 600;
			}
		}
	}
`;
