import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

function CardUser({ bg, img, name, job, id }) {
	return (
		<LazyLoad key={id}>
			<Card bg={bg}>
				<div className="top">
					<img src={bg} alt="" />
				</div>
				<div className="body">
					<LazyLoad once={true} placeholder={<img src="./img/spinner50.svg" />}>
						<img src={img} alt="" />
					</LazyLoad>
					<h4>{name}</h4>
					<p>{job}</p>
					<small>Based on your profile</small>
				</div>
				<div className="footer">
					<button>Connect</button>
				</div>
			</Card>
		</LazyLoad>
	);
}

export default CardUser;
const Card = styled.a`
	display: flex;
	flex-direction: column;
	max-width: 20rem;
	height: 28rem;
	border: 0.8px solid #ccc;
	border-radius: 1rem;
	overflow: hidden;
	cursor: pointer;
	&:hover {
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
	}
	.top {
		img {
			width: 100%;
			height: 6.2rem;
			object-fit: cover;
			display: inline-block;
			flex-shrink: 0;
		}
	}
	.body {
		flex: 0.6;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 2rem;
		img {
			width: 9.4rem;
			height: 9.4rem;
			border-radius: 100%;
			object-fit: cover;
			flex-shrink: 0;
			margin-top: -4.7rem;
			display: block;
		}
		h4 {
			margin-top: 1.2rem;
			font-size: 1.6rem;
			font-weight: 500;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			word-break: break-word;
		}
		p {
			font-size: 1.3rem;
			text-align: center;
			margin-top: 0.6rem;
			color: #666;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			text-overflow: ellipsis;
			word-break: break-word;
		}
		small {
			font-size: 1.2rem;
			margin-top: 2rem;
			color: #666;
		}
	}
	.footer {
		margin-top: auto;
		margin-bottom: 2rem;
		button {
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			border: 2px solid rgb(18, 107, 196);
			padding: 0.5rem 3rem;
			border-radius: 9999px;
			cursor: pointer;
			color: rgb(18, 107, 196);
			font-weight: 600;
			&:hover {
				background-color: skyblue;
			}
		}
	}
`;
