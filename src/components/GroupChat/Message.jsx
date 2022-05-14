import React from "react";
import { memo } from "react";
import styled from "styled-components";

function Message({ message, createdAt, photoUrl, displayName }) {
	return (
		<StyledMessage>
			<a href="">
				<img src={photoUrl ? photoUrl : ""} alt="" />
			</a>
			<div className="info">
				<h3>
					{displayName ? displayName : ""}{" "}
					<span>
						{createdAt ? new Date(createdAt?.toDate()).toUTCString() : ""}
					</span>{" "}
				</h3>
				<p>{message ? message : ""}</p>
			</div>
		</StyledMessage>
	);
}

export default memo(Message);
const StyledMessage = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	img {
		width: 4.4rem;
		height: 4.4rem;
		border-radius: 100%;
		object-fit: cover;
		margin-right: 0.8rem;
	}
	h3 {
		font-size: 1.4rem;
		span {
			font-size: 1.1rem;
			font-weight: 300;
			margin-left: 0.3rem;
		}
	}
	p {
		font-size: 1.4rem;
		margin-top: 0.2rem;
	}
`;
