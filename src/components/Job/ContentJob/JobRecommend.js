import React from "react";
import styled from "styled-components";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function JobRecommend({
	img,
	description,
	name,
	adress,
	time,
	numberApplicants,
}) {
	return (
		<Recommend>
			<div className="box">
				<a href="">
					<img src={img} alt="" />
				</a>
				<div className="info">
					<a href="#" className="descriptions">
						{description}
					</a>
					<p className="name">{name}</p>
					<h3 className="adress">{adress}</h3>
					<p>
						{time}{" "}
						{numberApplicants && (
							<span className="appli">{numberApplicants}</span>
						)}{" "}
						<span>
							<img src="./img/LinkedInShort.svg" alt="" /> Easy Apply
						</span>
					</p>
				</div>
			</div>
			<BookmarkBorderIcon className="icon" />
		</Recommend>
	);
}

export default JobRecommend;
const Recommend = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-top: 1px solid #ccc;
	padding: 1.2rem;
	.box {
		display: flex;
		align-items: center;
		.info {
			.descriptions {
				font-size: 1.6rem;
				font-weight: 500;
				color: rgb(10, 102, 194);
				margin-bottom: 0.6rem;
				cursor: pointer;
				position: relative;
				&:hover {
					&::after {
						content: "";
						position: absolute;
						top: 100%;
						left: 0;
						width: 100%;
						height: 1.6px;
						background-color: rgb(18, 107, 196);
					}
				}
			}
			.name {
				margin-bottom: 0.6rem;
				color: #666;
			}

			.appli {
				color: rgb(5, 118, 66);
			}
			p {
				display: flex;
				align-items: center;
				font-size: 1.2rem;
				margin-top: 0.6rem;
				img {
					width: 3rem;
					height: 3rem;
					margin: 0;
					margin-left: 0.8rem;
				}
				span {
					display: flex;
					align-items: center;
				}
				.appli {
					margin-left: 0.8rem;
					font-weight: 500;
				}
			}
		}
	}
	img {
		width: 8rem;
		height: 8rem;
		border-radius: 100%;
		object-fit: cover;
		display: block;
		margin-right: 2rem;
	}
	.icon {
		font-size: 2.4rem;
		cursor: pointer;
		color: #666;
		&:hover {
			color: rgb(10, 102, 194);
		}
	}
`;
