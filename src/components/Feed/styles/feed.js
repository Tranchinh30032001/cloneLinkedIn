import styled from "styled-components";

export const Container = styled.div`
	flex: 0.5;
	.inputPost {
		flex: 1;
		padding: 1.2rem;
	}
	.btnPost {
		display: none;
	}
	.render {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		z-index: -1;
		top: -3rem;
	}
	@media screen and (max-width: 1115px) {
		flex: 0.72;
	}
`;
export const Post = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	padding: 1.2rem 2rem;
	justify-content: space-around;
	background-color: #fff;
	border-radius: 1rem;
	border: 0.6px solid #ddd;
`;
export const Input = styled.input`
	flex: 1;
	height: 4rem;
	padding: 0 2rem;
	border-radius: 9999px;
	margin-left: 1rem;
	border: 1px solid #999;
`;
export const Break = styled.div`
	flex-basis: 100%;
`;
export const Options = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
	font-size: 1.4rem;
	color: #555;
	cursor: pointer;
	padding: 1rem;
	&:hover {
		background-color: #ddd;
		border-radius: 1rem;
	}
	.icon {
		margin-right: 1rem;
		font-size: 2.2rem;
	}
`;
export const Line = styled.div`
	flex: 1;
	height: 1px;
	background-color: #ccc;
`;
export const Sort = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0.6rem 0;
	cursor: pointer;
	.icondown {
		font-size: 2rem;
	}
`;
export const TextSmall = styled.small`
	font-size: 1rem;
	margin-left: 1rem;
	margin-right: 0.5rem;
`;
export const TextBold = styled.p`
	font-size: 1.1rem;
	color: #000;
	font-weight: 500;
`;
export const Content = styled.div`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	white-space: pre-line;
	border-radius: 1rem;
	border: 0.8px solid #ccc;
	margin-bottom: 1.4rem;
`;
export const User = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	position: relative;
	padding: 1.4rem;
	.left {
		display: flex;
		align-items: center;
	}
	.right {
		position: relative;
		.delete {
			position: absolute;
			top: 100%;
			right: -1rem;
			background-color: transparent;
			padding: 0.1rem 0.5rem;
			cursor: pointer;
			border: 1px solid #ccc;
			border-radius: 999px;
		}
	}
	.right > .MuiSvgIcon-root {
		font-size: 2.2rem;
		cursor: pointer;
	}
	.active {
		position: absolute;
		background-color: green;
		border: 2px solid #ffffff;
		top: 4rem;
		left: 4.4rem;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 100%;
		z-index: 100;
	}
`;
export const Job = styled.p`
	font-size: 1.2rem;
	color: #555;
`;
export const Info = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1rem;
`;
export const ContentPost = styled.div`
	font-size: 1.5rem;
	padding: 0.8rem 0;
	display: flex;
	flex-wrap: wrap;
	img {
		max-width: 100%;
		width: 100%;
		margin: 0 auto;
		max-height: 30rem;
		object-fit: cover;
		margin-top: 1rem;
		overflow: hidden;
		display: block;
	}
	p {
		padding: 0 1.4rem;
	}
	.video {
		max-width: 100%;
		margin: 0 auto;
	}
	.numberLikeandComment {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 0 2rem;
		margin-top: 1rem;
		.likeReactions {
			display: flex;
			align-items: center;
			p {
				margin-left: 0.5rem;
				position: relative;
				margin-bottom: 0.2rem;
			}
			.icon {
				font-size: 2rem;
				background-color: #fff;
				&:not(:first-child) {
					margin-left: -0.3rem;
				}
			}
		}
	}
`;
export const Reaction = styled.div`
	display: flex;
	user-select: none;
	align-items: center;
	font-size: 1.3rem;
	cursor: pointer;
	padding: 0.8rem 1.2rem;
	margin-top: 0.4rem;
	color: ${({ like }) => (like ? "rgb(10,102,194)" : "")};
	&:hover {
		background-color: #ccc;
		border-radius: 1rem;
	}
	.reaction {
		font-size: 2rem;
		margin-right: 0.4rem;
		color: "red";
	}
`;
export const ContentFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	padding: 0.4rem 0;
`;
export const Name = styled.h2`
	font-size: 1.3rem;
	margin-bottom: 0.4rem;
`;
export const Comment = styled.form`
	margin-top: 2rem;
	margin-bottom: 1rem;
	padding: 0 1.4rem;
	.showComment {
		margin-bottom: 2rem;
	}
`;
export const ButtonPost = styled.button`
	flex: 1;
	padding: 1.2rem 2rem;
	border-radius: 9999px;
	text-align: left;
	margin-left: 1rem;
	background-color: #ffffff;
	border: 1px solid #ccc;
	color: #666;
	cursor: text;
`;
