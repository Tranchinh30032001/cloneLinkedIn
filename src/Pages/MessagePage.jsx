import React, { useState } from "react";
import styled from "styled-components";
import HeaderContainer from "../containers/HeaderContainer";
import { ChatWindow, SidebarChat } from "../containers/index";
import { auth } from "../firebase/firebase";
import { useOnStateChange } from "../firebase/useOnStateChange";
import { selectUser } from "../redux/UserSlice";
import { useSelector } from "react-redux";

function MessagePage() {
	useOnStateChange(auth);
	const user = useSelector(selectUser);
	const [selectGroup, setSelectGroup] = useState({});

	return (
		<>
			<HeaderContainer />
			<Container>
				<Inner>
					<SidebarChat user={user} setSelectGroup={setSelectGroup} />
					<ChatWindow user={user} selectGroup={selectGroup} />
				</Inner>
			</Container>
		</>
	);
}

export default MessagePage;
const Container = styled.div`
	margin-top: 7rem;
	@media screen and (max-width: 723px) {
		margin-top: 11rem;
	}
`;
const Inner = styled.div`
	max-width: 110rem;
	width: 100%;
	margin: 0 auto;
	display: flex;
	box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
	height: calc(100vh - 8rem);
`;
