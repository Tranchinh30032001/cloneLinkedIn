import styled from "styled-components";

export const Container = styled.div`
	flex: 0.215;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 1115px) {
		flex: 0.28;
	}
`;
export const Top = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
`;
export const Section = styled.div`
	border-radius: 1rem;
	margin-bottom: 2rem;
	border: 0.88px solid #ddd;
	overflow: hidden;
	background-color: #fff;
	/* display: block; */
`;
export const Name = styled.h1`
	position: relative;
	margin-top: 2rem;
	margin-bottom: 0.6rem;
	display: inline-block;
	cursor: pointer;
	&:hover::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: blue;
	}
`;
export const TextSmall = styled.small`
	font-size: 1.1rem;
	color: #555;
	font-weight: 300;
	&:last-of-type {
		margin-bottom: 0.6rem;
	}
`;
export const Content = styled.div`
	padding: 1.3rem 1.2rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	&:hover {
		background-color: #ccc;
		cursor: pointer;
	}
	.between {
		margin-left: 0.6rem;
	}
`;
export const TextBold = styled.h2`
	font-size: 1.15rem;
	font-weight: 400;
	color: #222;
`;
export const Break = styled.div`
	flex-basis: 100%;
`;
export const BoldColor = styled.h2`
	position: relative;
	font-size: 1.2rem;
	font-weight: 500;
	color: rgb(79, 145, 211);
	padding: 0.8rem 0;
	display: inline-block;
	cursor: pointer;
	&:hover::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0.8rem;
		width: 100%;
		height: 0.4px;
		background-color: rgb(79, 145, 211);
	}
`;
export const Discover = styled.h1`
	border-top: 1px solid #ccc;
	padding: 1.2rem 0;
	text-align: center;
	font-size: 1.4rem;
	color: #666;
	&:hover {
		cursor: pointer;
		background-color: #eee;
	}
`;
export const Background = styled.img`
	width: 100%;
	height: 6rem;
	display: block;
	object-fit: cover;
	margin-bottom: -2.3rem;
	display: block;
`;
export const SectionGroup = styled(Section)`
	position: sticky;
	top: 7rem;
	/* border: 1px solid black; */
`;
