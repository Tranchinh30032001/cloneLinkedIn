import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<Container>
			<Inner>
				<div className="wrapper">
					<div className="column">
						<img src="./img/LinkedLogin.svg" alt="" />
					</div>
					<div className="column">
						<h4>General</h4>
						<a href="">Sign Up</a>
						<a href="">Help Center</a>
						<a href="">About</a>
						<a href="">Press</a>
						<a href="">Blog</a>
						<a href="">Career</a>
						<a href="">Developer</a>
					</div>
					<div className="column">
						<h4>Browse LinkedIn</h4>
						<a href="">Learning</a>
						<a href="">Jobs</a>
						<a href="">Salary</a>
						<a href="">Mobiles</a>
						<a href="">Service</a>
						<a href="">Products</a>
					</div>
					<div className="column">
						<h4>Business Solutions</h4>
						<a href="">Talent</a>
						<a href="">Marketing</a>
						<a href="">Sales</a>
						<a href="">Learning</a>
					</div>
					<div className="column">
						<h4>Directories</h4>
						<a href="">Members</a>
						<a href="">Jobs</a>
						<a href="">Companies</a>
						<a href="">Salaries</a>
						<a href="">Featured</a>
						<a href="">Learning</a>
						<a href="">Posts</a>
						<a href="">Articles</a>
						<a href="">School</a>
						<a href="">News</a>
						<a href="">News Letter</a>
						<a href="">Services</a>
						<a href="">Interview Prep</a>
						<a href="">Product</a>
						<a href="">Content Topic</a>
					</div>
				</div>
			</Inner>
			<div className="Footer-bottom">
				<Inner>
					<div className="signature">
						<img src="./img/LinkedLogin.svg" alt="" />
						<span>© 2022</span>
						<span>About</span>
						<span>Accessibility</span>
						<span>User Agreement</span>
						<span>Privacy Policy</span>
						<span>Cookie Policy</span>
						<span>Copyright Policy</span>
						<span>Brand Policy</span>
						<span>Guest Controls</span>
						<span>Community Guidelines</span>
						<span>Language</span>
					</div>
				</Inner>
			</div>
		</Container>
	);
}

export default Footer;
const Container = styled.div`
	background-color: #eeeeee;

	.Footer-bottom {
		background-color: #ffffff;
		margin-top: auto;
	}
`;
const Inner = styled.div`
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	.wrapper {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		padding: 2rem 0;
		@media screen and (max-width: 723px) {
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;
		}
		img {
			width: 10rem;
			height: 3rem;
			margin-left: -1rem;
		}
		h4 {
			font-size: 1.6rem;
		}
		a {
			display: block;
			font-size: 1.4rem;
			margin-top: 1rem;
			color: #333;
			&:hover {
				text-decoration: underline;
				text-decoration-color: rgb(10, 102, 194);
				color: rgb(10, 102, 194);
			}
		}
	}
	.signature {
		display: flex;
		align-items: center;
		padding: 1rem 0;
		span {
			margin-left: 2rem;
			font-size: 1.1rem;
			color: #444;
			cursor: pointer;
			font-weight: 500;
		}
		img {
			width: 8rem;
			height: 2.4rem;
			display: inline-block;
		}
		@media screen and (max-width: 723px) {
			display: none;
		}
	}
`;
