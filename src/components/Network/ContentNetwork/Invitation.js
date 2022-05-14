import React from "react";
import styled from "styled-components";
function Invitation({ img, name, job }) {
	return (
		<StyledInvitation>
			<div className="left">
				<img src={img} alt="" />
				<div className="info">
					<h3 className="name">{name}</h3>
					<p className="work">{job}</p>
				</div>
			</div>
			<div className="right">
				<button className="ignore">Ignore</button>
				<button className="accept">Accept</button>
			</div>
		</StyledInvitation>
	);
}

export default Invitation;
const StyledInvitation = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.4rem;
	border-top: 1px solid #ccc;
	position: relative;
	.left {
		display: flex;
		align-items: center;
		h3 {
			font-size: 1.6rem;
			color: #444;
		}
		p {
			font-size: 1.4rem;
			color: #666;
			font-weight: 300;
			margin-top: 0.4rem;
		}
		img {
			width: 6rem;
			height: 6rem;
			border-radius: 100%;
			object-fit: cover;
			margin-right: 1rem;
		}
	}
	.right {
		button {
			padding: 1rem 2rem;
			border-radius: 99999px;
			cursor: pointer;
			font-weight: 600;
		}
		.accept {
			border: 2px solid rgb(18, 107, 196);
			color: rgb(18, 107, 196);

			&:hover {
				background-color: skyblue;
			}
		}
		.ignore {
			color: #555;
			border: 2px solid #666;

			&:hover {
				background-color: #ccc;
			}
			margin-right: 1rem;
		}
	}
	@media screen and (max-width: 723px) {
		display: block;
		.left {
			margin-bottom: 0.5rem;
		}
		.right {
			text-align: center;
		}
	}
`;
