import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import GroupAddTwoToneIcon from "@material-ui/icons/GroupAddTwoTone";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import MoreVertTwoToneIcon from "@material-ui/icons/MoreVertTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { memo, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import GroupChat from "../components/GroupChat";
import { db } from "../firebase/firebase";
import { useFireStore } from "../firebase/useFireStore";
import { listRoom } from "../redux/UserSlice";
import { listImage } from "../listImageRandom";

function SidebarChat({ user }) {
	const dispatch = useDispatch();
	const { uid } = user || "1111";
	const [addChat, setAddChat] = useState(false);
	const { roomId } = useParams();
	const nameRoomRef = useRef();
	const handleAddChat = () => {
		setAddChat(true);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const nameRoom = nameRoomRef.current.value;
		const target = collection(db, "rooms");
		const numberRandom = Math.floor(Math.random() * 24);
		const payload = {
			nameRoom,
			members: [uid],
			createdAt: serverTimestamp(),
			ownerRoom: uid,
			imageGroupChat: listImage[numberRandom],
		};
		addDoc(target, payload);
		setAddChat(false);
	};
	const roomConditon = useMemo(() => {
		return {
			fieldName: "members",
			operator: "array-contains",
			compareValue: uid,
		};
	}, [uid]);
	const result = useFireStore("rooms", roomConditon);
	dispatch(listRoom([...result]));

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
							result.map(
								({
									id,
									data: { nameRoom, createdAt, members, imageGroupChat },
								}) => {
									return (
										<GroupChat
											key={id}
											nameGroup={nameRoom}
											// createdAt={createdAt}
											id={id}
											// members={members}
											imageGroupChat={imageGroupChat}
										/>
									);
								}
							)}
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
				<button>Add a new group chat</button>
			</div>
		</Container>
	);
}

export default memo(SidebarChat);
const Container = styled.div`
	flex: 0.2;
	display: flex;
	flex-direction: column;
	background-color: #0d5fc3df;
	color: #ffff;
	.footer {
		margin-top: auto;
		padding: 2rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #0ead69;
		cursor: pointer;
		& > .MuiSvgIcon-root {
			font-size: 2rem;
			margin-right: 0.5rem;
		}
		button {
			font-weight: 600;
			cursor: pointer;
			background-color: transparent;
			color: #fff;
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
	color: #fff;
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
	overflow: auto;
	::-webkit-scrollbar {
		width: 1rem;
	}
	/* html::-webkit-scrollbar-track {
		background-color: blue;
	}
	html::-webkit-scrollbar-thumb {
		background-color: yellow;
	} */
	/* background-color: #62b6cb; */
	border-top: 1px solid #cccccc;
	h2 {
		padding: 1rem;
	}
`;
