import React from "react";
import styled from "styled-components";
import {
	FeedContainer,
	HeaderContainer,
	SidebarContainer,
	WidgetsContainer,
} from "../containers/index";
import { auth } from "../firebase/firebase";
import { useOnStateChange } from "../firebase/useOnStateChange";

function HomePage() {
	useOnStateChange(auth);
	return (
		<>
			<HeaderContainer />
			<Body>
				<SidebarContainer />
				<FeedContainer />
				<WidgetsContainer />
			</Body>
		</>
	);
}

export default HomePage;

const Body = styled.div`
	display: flex;
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	margin-top: 7rem;
	gap: 0 2rem;
	@media screen and (max-width: 1115px) {
		max-width: 78rem;
		width: 100%;
		padding: 0 1rem;
		gap: 0 1rem;
	}
	@media screen and (max-width: 723px) {
		display: block;
		padding: 0 2rem;
	}
	@media screen and (max-width: 530px) {
		padding: 0 1rem;
		margin-top: 12rem;
	}
`;
