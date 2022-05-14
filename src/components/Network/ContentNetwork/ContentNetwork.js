import React, { useState } from "react";
import styled from "styled-components";
import Invitation from "./Invitation";
import CardUser from "./CardUser";
import { DataCard } from "./DataCard";
import LazyLoad from "react-lazyload";
import { DataInvation } from "./DataInvation";
function ContentNetwork() {
	const [showmore, setShowmore] = useState(3);
	const handleShowmore = () => {
		setShowmore(6);
	};
	return (
		<Inner>
			<Invitations>
				<h2>Invitations</h2>
				<div className="list__invitations">
					{DataInvation.map(
						(item, index) =>
							index < showmore && <Invitation key={index} {...item} />
					)}
				</div>
				<div className="footer">
					<button onClick={handleShowmore}>
						{!showmore ? "Show More" : "Show Less"}
					</button>
				</div>
			</Invitations>
			<Suggesstion>
				<h2>Suggesstion for you </h2>
				<div className="list__suggesstion">
					{DataCard?.length > 0 &&
						DataCard.map((item, index) => {
							return (
								<LazyLoad key={index} height={800}>
									<CardUser key={index} {...item} id={index} />
								</LazyLoad>
							);
						})}
				</div>
			</Suggesstion>
		</Inner>
	);
}

export default ContentNetwork;
const Inner = styled.div`
	flex: 0.72;
	@media screen and (max-width: 1115px) {
		flex: 1;
	}
`;
const Suggesstion = styled.div`
	padding: 1rem;
	background-color: #ffffff;
	border: 1px solid #ccc;
	border-radius: 1rem;
	margin-top: 2rem;
	h2 {
		color: #555;
		margin: 0.5rem 0 1.5rem 0;
		font-weight: 400;
		font-size: 1.7rem;
	}
	.list__suggesstion {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1rem 1rem;
	}
`;
const Invitations = styled.div`
	border: 1px solid #ccc;
	background-color: #ffffff;
	border-radius: 1rem;
	overflow: hidden;
	h2 {
		padding: 1.4rem;
	}
	.footer {
		border-top: 1px solid #ccc;
		button {
			cursor: pointer;
			position: relative;
			color: rgb(18, 107, 196);
			font-weight: 600;
			font-size: 1.6rem;
			margin-left: 50%;
			padding: 1rem 0;
			display: block;
			transform: translateX(-50%);
			background-color: transparent;
			&:hover {
				opacity: 0.8;
			}
		}
	}
`;
