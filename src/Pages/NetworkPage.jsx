import React from "react";
import styled from "styled-components";
import ContentNetwork from "../components/Network/ContentNetwork/ContentNetwork";
import SidebarNetwork from "../components/Network/SidebarNetwork/SidebarNetwork";
import HeaderContainer from "../containers/HeaderContainer";
import { auth } from "../firebase/firebase";
import { useOnStateChange } from "../firebase/useOnStateChange";

function NetworkPage() {
	useOnStateChange(auth);
	return (
		<>
			<HeaderContainer />
			<Body>
				<SidebarNetwork />
				<ContentNetwork />
			</Body>
		</>
	);
}

export default NetworkPage;

const Body = styled.div`
	display: flex;
	gap: 0 2.4rem;
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	margin-top: 7rem;
	@media screen and (max-width: 1115px) {
		max-width: 78rem;
		width: 100%;
	}
	@media screen and (max-width: 723px) {
		padding: 0 2rem;
	}
	@media screen and (max-width: 530px) {
		margin-top: 12rem;
	}
`;
