import React, { useState } from "react";
import styled from "styled-components";
import HeaderContainer from "../containers/HeaderContainer";
import { ChatWindow, SidebarChat } from "../containers/index";
import { auth } from "../firebase/firebase";
import { useOnStateChange } from "../firebase/useOnStateChange";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/selectors";

function MessagePage() {
	useOnStateChange(auth);
	const user = useSelector(userSelector);
	return (
		<>
			<HeaderContainer />
			<Container>
				<Inner>
					<SidebarChat user={user} />
					<ChatWindow user={user} />
				</Inner>
			</Container>
		</>
	);
}

export default MessagePage;
const Container = styled.div`
	margin-top: 7rem;
	/* border-radius: 1rem; */
	/* border: 1px solid black; */
	@media screen and (max-width: 723px) {
		margin-top: 11rem;
	}
	overflow: hidden !important;
`;
const Inner = styled.div`
	max-width: 140rem;
	border-radius: 1rem;
	overflow: hidden;
	margin: 0 auto;
	display: flex;
	/* box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3); */
	border: 1px solid #ccc;
	height: calc(100vh - 8rem);
`;
