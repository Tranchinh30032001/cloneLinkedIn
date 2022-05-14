import styled from "styled-components";

export const Container = styled.div`
	flex: 0.285;
	@media screen and (max-width: 1115px) {
		display: none;
	}
`;
export const Top = styled.div`
	background-color: #fff;
	padding: 1.5rem 1rem;
	border-radius: 1rem;
	border: 1px solid #ddd;
`;
export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1.4rem;
`;
export const Title = styled.h1`
	font-size: 1.5rem;
	color: #444;
	font-weight: 500;
`;
export const List = styled.div``;
export const Suggest = styled.div`
	display: flex;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 1.5rem;
	}
`;
export const Info = styled.div`
	margin-left: 1rem;
`;
export const Name = styled.h3`
	color: #444;
`;
export const Intro = styled.p`
	line-height: 1.5;
	font-size: 1.2rem;
	color: #666;
`;
export const Follow = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	margin-top: 0.6rem;
	background-color: ${({ bg }) => (bg ? "rgb(10,102,194)" : "#fff")};
	padding: 0.5rem 2.4rem;
	border: 1px solid #ccc;
	border-radius: 9999px;
	color: ${({ bg }) => (bg ? "#fff" : "#666")};
`;
export const Body = styled.div`
	position: sticky;
	top: 7rem;
	border-radius: 1rem;
	overflow: hidden;
	background-color: #fff;
	border-radius: 1rem;
	margin-top: 1rem;
`;
export const Img = styled.img`
	width: 100%;
	height: 25rem;
	object-fit: cover;
`;
export const Recomment = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.3rem;
	margin-top: 1rem;
	color: #555;
	cursor: pointer;
	padding: 0.5rem 1rem;
	transition: all 0.2s linear;
	&:hover {
		background-color: #ccc;
		border-radius: 1rem;
	}
`;
export const Footer = styled.div`
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
`;
