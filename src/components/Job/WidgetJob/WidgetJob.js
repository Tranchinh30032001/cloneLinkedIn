import React from "react";
import styled from "styled-components";

function WidgetJob() {
	return (
		<Widget>
			<Inner>
				<div className="heading">
					<h2 className="title">Job seeker guidance</h2>
					<p className="subTitle">Recommended based on your activity</p>
				</div>
				<div className="content">
					<div className="box">
						<a href="">I want to improve my resume</a>
						<img src="./img/widgetJob/widgetJob.jpg" alt="" />
					</div>
					<p>
						Explore our curated guide of expert-led courses, such as how to
						improve your resume and grow your network, to help you land your
						next opportunity.
					</p>
				</div>
			</Inner>
			<div className="footer">
				<div className="list__link">
					<div className="group">
						<a href="">About</a>
						<a href="">Accessibility</a>
						<a href="">Help Center</a>
					</div>
					<div className="group">
						<a href="">Privacy & Terms </a>
						<a href="">Ad Choices</a>
					</div>
					<div className="group">
						<a href="">Advertising</a>
						<a href="">Business Services</a>
					</div>
					<div className="group">
						<a href="">Get the Linkedin App</a>
						<a href="">More</a>
					</div>
				</div>
				<div className="signature">
					<img src="./img/Logo.svg" alt="" />
					<p>LinkedIn corporation © 2022</p>
				</div>
			</div>
		</Widget>
	);
}

export default WidgetJob;
const Widget = styled.div`
	position: fixed;
	margin-left: calc(22.6rem + 53rem + 2rem + 2rem);
	max-width: 30.2rem;
	width: 100%;
	.footer {
		padding: 1.5rem 2.8rem;
		.list__link {
			.group {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 0.6rem;
			}
			a {
				color: #666;
				margin-left: 1.6rem;
				font-size: 1.2rem;
				position: relative;
				&:hover {
					&::after {
						content: "";
						position: absolute;
						top: 100%;
						left: 0;
						width: 100%;
						height: 1px;
						background-color: rgb(18, 107, 196);
					}
				}
			}
		}
		.signature {
			display: flex;
			align-items: center;
			img {
				width: 10rem;
			}
			p {
				font-size: 1.1rem;
			}
		}
	}
	@media screen and (max-width: 1115px) {
		display: none;
	}
`;
const Inner = styled.div`
	padding: 2rem 0;
	background-color: #ffffff;
	border-radius: 1rem;
	border: 1px solid #ccc;
	.heading {
		padding: 0 2rem;
		margin-bottom: 2rem;
		.title {
			font-size: 1.8rem;
			color: #666;
		}
		.subTitle {
			font-size: 1.3rem;
			color: #666;
			margin-top: 0.4rem;
		}
	}
	.content {
		.box {
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 1rem 2rem;
			background-color: rgb(249, 250, 251);
			&:hover {
				background-color: rgb(249, 240, 240);
				cursor: pointer;
			}
			a {
				font-size: 1.4rem;
				font-weight: 500;
				color: #333;
			}
			img {
				width: 12rem;
				height: 6rem;
				object-fit: cover;
				border-radius: 1rem;
			}
		}
		p {
			margin-top: 2rem;
			font-size: 1.36rem;
			padding: 0 2rem;
			font-weight: 300;
			line-height: 1.5;
		}
	}
`;
