import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import styled from "styled-components";
import SidebarJob from "../components/Job/SidebarJob/SidebarJob";
import ContentJob from "../components/Job/ContentJob/ContentJob";
import WidgetJob from "../components/Job/WidgetJob/WidgetJob";
import { auth } from "../firebase/firebase";
import { useOnStateChange } from "../firebase/useOnStateChange";

function JobPage() {
	useOnStateChange(auth);
	return (
		<>
			<HeaderContainer />
			<Body>
				<SidebarJob />
				<ContentJob />
				<WidgetJob />
			</Body>
		</>
	);
}

export default JobPage;
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
		/* padding: 0 2rem; */
	}
	@media screen and (max-width: 723px) {
		max-width: 53rem;
		width: 100%;
		padding: 0 2rem;
	}
	@media screen and (max-width: 530px) {
		max-width: 50rem;
		width: 100%;
		margin-top: 12rem;
	}
`;
