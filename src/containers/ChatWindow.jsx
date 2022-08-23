import { Avatar } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SendIcon from "@material-ui/icons/Send";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import { AvatarGroup } from "@material-ui/lab";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	serverTimestamp,
	updateDoc,
	where,
} from "firebase/firestore";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Chat from "../components/GroupChat/Chat";
import { db } from "../firebase/firebase";
import {
	listRoomSelector,
	roomIdSelector,
	roomSelected,
} from "../redux/selectors";
import { selectedRoom } from "../redux/UserSlice";
function ChatWindow({ user }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const inputRef = useRef("");
	const { roomId } = useParams();
	const [noticeAddUser, setNoticeAddUser] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const target = collection(db, "rooms", roomId, "message");
		const payload = {
			createdAt: serverTimestamp(),
			message: inputRef.current.value,
			photoUrl: user.photoUrl,
			displayName: user.displayName,
		};
		addDoc(target, payload);
		inputRef.current.value = "";
		inputRef.current.focus();
	};

	const [modalChat, setModalChat] = useState(false);
	const handleModalChat = async () => {
		const room = doc(db, "rooms", roomId);
		const dataRoom = await getDoc(room);
		const ownerRoom = await dataRoom.data().ownerRoom;
		const { uid } = user;
		if (uid === ownerRoom) {
			setModalChat(!modalChat);
			setScan(false);
		} else {
			setNoticeAddUser(true);
			setTimeout(() => {
				setNoticeAddUser(false);
			}, 3000);
		}
	};
	const [searchText, setSearchText] = useState("");
	const [listPerson, setListPerson] = useState([]); // danh sach cac person co trong db
	const [scan, setScan] = useState(false); // ấn Search là bắt đầu quét
	const codition = searchText ? searchText : "";
	useEffect(() => {
		async function fetchListPerson() {
			const target = collection(db, "users");
			let result = null;
			if (searchText) {
				result = await query(
					target,
					where("keyWord", "array-contains", searchText)
				);
			} else {
				result = target;
			}
			const querySnapshort = await getDocs(result);

			const newArray = [];
			querySnapshort.forEach((doc) => {
				const user = {
					name: doc.data().name,
					uid: doc.data().uid,
					photoUrl: doc.data().photoUrl,
				};
				newArray.push(user);
			});
			setListPerson(newArray);
		}
		fetchListPerson();
	}, [codition]);
	const handleRoomUser = async (id) => {
		setModalChat(false);
		setSearchText("");
		const Room = doc(db, "rooms", roomId);
		const memberRoom = (await getDoc(Room)).data().members;
		await updateDoc(Room, {
			members: [...memberRoom, id],
		});
	};
	const rooms = useSelector(listRoomSelector);
	const selectedRoomId = useSelector(roomIdSelector);
	const roomChoose = useMemo(() => {
		return rooms.find((item) => item.id === selectedRoomId);
	}, [rooms, selectedRoomId]);
	dispatch(selectedRoom(roomChoose));

	const dataRoomSelected = useSelector(roomSelected);
	const membersOfRoom = dataRoomSelected?.data?.members;

	const getInforMemberInRoomSelected = () => {
		const result = [];
		for (let i = 0; i < listPerson.length; i++) {
			for (let j = 0; j < membersOfRoom?.length; j++) {
				if (listPerson[i]?.uid === membersOfRoom[j]) {
					result.push(listPerson[i]);
				}
			}
		}
		return result;
	};
	const danhsachPerson = getInforMemberInRoomSelected();
	const getInforMemberSuggest = () => {
		const result = [];
		for (let i = 0; i < listPerson.length; i++) {
			let count = 0;
			for (let j = 0; j < danhsachPerson.length; j++) {
				if (listPerson[i]?.uid !== danhsachPerson[j]?.uid) {
					count++;
				}
			}
			if (count === danhsachPerson.length) {
				result.push(listPerson[i]);
			}
		}
		return result;
	};
	const listSuggest = getInforMemberSuggest();

	const [roomChooses, setRoomChooses] = useState({});
	return (
		<Container roomId={roomId ? roomId : null}>
			{roomId ? (
				<HeaderChat>
					<Box>
						<ArrowBackIcon
							onClick={() => navigate("/message")}
							className="icon-left"
						/>
						<Avatar src={dataRoomSelected?.data?.imageGroupChat} />
						<Info>
							<h2>{dataRoomSelected?.data?.nameRoom}</h2>
							<p>
								{dataRoomSelected?.data?.createdAt
									? new Date(
											dataRoomSelected.data.createdAt?.toDate()
									  ).toUTCString(+7)
									: ""}
							</p>
						</Info>
					</Box>
					<Box>
						<AvatarGroup max={3}>
							{danhsachPerson?.length > 0 &&
								danhsachPerson.map((item) => {
									return <Avatar src={item.photoUrl} key={item.uid} />;
								})}
						</AvatarGroup>
						<PersonAddIcon onClick={handleModalChat} className="icon" />
						{noticeAddUser && (
							<h3
								style={{
									position: "absolute",
									top: "7rem",
									right: "3rem",
									width: "18rem",
									boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
									padding: "0.8rem 2rem",
									borderRadius: "1rem",
								}}
							>
								Bạn không phải là chủ phòng nên không có quyền chỉnh sửa người
								dùng
							</h3>
						)}
					</Box>
				</HeaderChat>
			) : (
				<h2
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
					}}
				>
					Xin vui lòng chọn nhóm chat
				</h2>
			)}

			<ContentChat>
				<Routes>
					<Route path="room/:roomId" element={<Chat roomId={roomId} />} />
				</Routes>
				{/* <Outlet /> */}
			</ContentChat>
			<InputChat onSubmit={handleSubmit}>
				<SentimentSatisfiedAltIcon className="icon" />
				<div className="field-input">
					<input ref={inputRef} type="text" placeholder="Type a message..." />
					<button type="submit" style={{ display: "none" }}></button>
					<SendIcon className="icon" />
				</div>
			</InputChat>
			{modalChat && (
				<Modal>
					<Inner>
						<h2 style={{ textAlign: "center" }}>Add Person</h2>
						<input
							style={{
								padding: "1rem",
								width: "30rem",
								boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
								marginTop: "10px",
							}}
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
							type="text"
							placeholder="Search Person"
						/>
						<button
							// onClick={handleSearch}
							style={{
								display: "inline-block",
								padding: "1rem",
								background: "skyblue",
								color: "#555",
								cursor: "pointer",
							}}
						>
							Search
						</button>
						<HighlightOffIcon onClick={handleModalChat} className="icon" />
						<div className="listSuggess">
							{listSuggest.map((item) => {
								return (
									<Person
										onClick={() => handleRoomUser(item.uid)}
										key={item.uid}
									>
										<div className="infor">
											<Avatar size="small" src={item.photoUrl} />
											<h3>{item.name}</h3>
										</div>
										<div className="icons">
											<PersonAddIcon className="addIcon" />
										</div>
									</Person>
								);
							})}
						</div>
					</Inner>
				</Modal>
			)}
		</Container>
	);
}

export default ChatWindow;
const Person = styled.div`
	&:first-child {
		margin-top: 2rem;
	}
	margin-top: 0.6rem;
	background-color: #dddddd;
	padding: 0.4rem 1rem;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	&:hover {
		background-color: #ccc;
	}
	.infor {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
		}
	}
	.addIcon {
		font-size: 2.4rem;
	}
`;
const Modal = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 2;
	.icon {
		position: absolute;
		top: -2.4rem;
		right: -2.4rem;
		font-size: 2.8rem;
		cursor: pointer;
		&:hover {
			color: blue;
		}
	}
`;
const Inner = styled.div`
	position: absolute;
	top: 20%;
	left: 50%;
	transform: translateX(-50%);
	background-color: #ffffff;
	padding: 2rem 4rem;
	/* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4); */
`;
const Container = styled.div`
	flex: 0.8;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 723px) {
		display: ${({ roomId }) => (roomId ? "block" : "none")};
		flex: 1;
	}
`;
const HeaderChat = styled.div`
	height: 6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	background-color: #cccccc;

	position: relative;
`;
const ContentChat = styled.div`
	flex: 1;
	background-color: #fff;
	padding: 1rem;
	scroll-behavior: smooth;
	overflow: scroll;
	height: 70vh;
`;
const InputChat = styled.form`
	height: 6rem;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	background-color: #ffffff;
	border-left: 1px solid #ccc;
	.icon {
		font-size: 2rem;
		cursor: pointer;
		&:hover {
			opacity: 0.6;
		}
	}
	.field-input {
		flex: 1;
		margin-left: 1.6rem;
		background-color: #ffff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 99999px;
		padding: 0 2rem;
		border: 1px solid #ccc;
		input {
			line-height: 3.6rem;
			width: 100%;
		}
	}
`;
const Box = styled.div`
	display: flex;
	align-items: center;
	.icon-left {
		display: none;
		@media screen and (max-width: 723px) {
			display: block;
			margin-right: 1.6rem;
			font-size: 2.4rem;
			&:active {
				color: skyblue;
			}
		}
	}

	.icon {
		font-size: 2.4rem;
		padding: 1rem;
		border-radius: 100%;
		box-sizing: content-box;
		margin-left: 0.4rem;
		cursor: pointer;
		color: #555;

		&:hover {
			color: #3d76ff;
			background-color: #ccc;
		}
	}
`;
const Info = styled.div`
	margin-left: 1rem;
`;
