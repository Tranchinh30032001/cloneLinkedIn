import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { memo, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import GroupChat from "../components/GroupChat";
import { db } from "../firebase/firebase";
import { useFireStore } from "../firebase/useFireStore";
import { useParams } from "react-router-dom";

function SidebarChat({ user, setSelectGroup }) {
	const [addChat, setAddChat] = useState(false);
	const { roomId } = useParams();
	const nameRoomRef = useRef();
	const handleAddChat = () => {
		setAddChat(true);
	};
	const handleSubmit = useCallback((e) => {
		e.preventDefault();
		const nameRoom = nameRoomRef.current.value;
		const target = collection(db, "rooms");
		const payload = {
			nameRoom,
			createdAt: serverTimestamp(),
		};
		addDoc(target, payload);
		setAddChat(false);
	}, []);
	const result = useFireStore("rooms");
	return (
		<Container roomId={roomId ? roomId : null}>
			<PrivateUser>
				<Box>
					<Avatar src={user ? user.photoUrl : ""} />
					<div className="name">{user ? user.displayName : ""}</div>
				</Box>
				<Box>
					<GroupAddTwoToneIcon className="icon" />
					<MessageOutlinedIcon className="icon" />
					<MoreVertTwoToneIcon className="icon" />
				</Box>
			</PrivateUser>

			<WindowChat>
				<div className="content">
					<h2>Group Chat</h2>
					<div className="wrapper__chat">
						{result?.length > 0 &&
							result.map(({ id, data: { nameRoom, createdAt } }) => {
								return (
									<GroupChat
										setSelectGroup={setSelectGroup}
										key={id}
										nameGroup={nameRoom}
										createdAt={createdAt}
										id={id}
									/>
								);
							})}
					</div>
				</div>
			</WindowChat>
			{addChat && (
				<SearchForm>
					<div className="search-input">
						<SearchIcon className="icon" />
						<input ref={nameRoomRef} type="text" placeholder="Add a new chat" />
						<button
							onClick={handleSubmit}
							type="submit"
							style={{ display: "none" }}
						></button>
					</div>
				</SearchForm>
			)}
			<div onClick={handleAddChat} className="footer">
				<AddIcon />
				<button>Add a new chat</button>
			</div>
		</Container>
	);
}

export default memo(SidebarChat);
const Container = styled.div`
	flex: 0.25;
	display: flex;
	flex-direction: column;
	.footer {
		margin-top: auto;
		padding: 2rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		& > .MuiSvgIcon-root {
			font-size: 2rem;
			margin-right: 0.5rem;
		}
		button {
			font-weight: 600;
			cursor: pointer;
		}
	}
	@media screen and (max-width: 723px) {
		flex: 1;
		padding: 0 2rem;
		display: ${({ roomId }) => (roomId ? "none" : "block")};
	}
`;
export const Box = styled.div`
	display: flex;
	align-items: flex-start;
	.name {
		font-size: 1.2rem;
		font-weight: 500;
		margin-left: 0.4rem;
	}
	.icon {
		font-size: 2.2rem;
		border-radius: 100%;
		padding: 0.6rem;
		box-sizing: content-box;
		cursor: pointer;
		&:not(:first-child) {
			margin-left: 1rem;
		}
		&:hover {
			background-color: #ccc;
		}
	}
`;
const PrivateUser = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const SearchForm = styled.form`
	background-color: #ccc;
	padding: 1rem;
	.search-input {
		display: flex;
		align-items: center;
		background-color: #ffffff;
		padding: 1rem;
		border-radius: 99999px;
		.icon {
			font-size: 1.8rem;
			margin-right: 1rem;
		}
	}
`;
const WindowChat = styled.div`
	flex: 1;
	height: 70vh;
	background-color: #ffffff;
	h2 {
		padding: 1rem;
	}
`;
