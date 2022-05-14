import React from "react";
import styled from "styled-components";
import MainContainer from "../containers/MainContainer";

function MainPage() {
	return (
		<Container>
			<MainContainer />
		</Container>
	);
}

export default MainPage;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #ffffff;
	@media screen and (max-width: 723px) {
		padding: 0 2rem;
	}
`;
