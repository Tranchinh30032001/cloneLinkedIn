import { Avatar } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import SendIcon from "@material-ui/icons/Send";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Chat from "../components/GroupChat/Chat";
import { db } from "../firebase/firebase";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function ChatWindow({ user, selectGroup }) {
	const navigate = useNavigate();
	const { roomId } = useParams();
	const inputRef = useRef();
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

	return (
		<Container roomId={roomId ? roomId : null}>
			<HeaderChat>
				<Box>
					<ArrowBackIcon
						onClick={() => navigate("/message")}
						className="icon-left"
					/>
					<Avatar />
					<Info>
						<h2>{selectGroup?.nameGroup}</h2>
						<p>
							{selectGroup.createdAt
								? new Date(selectGroup.createdAt?.toDate()).toUTCString(+7)
								: ""}
						</p>
					</Info>
				</Box>
				<Box>
					<PhoneOutlinedIcon className="icon" />
					<VideocamOutlinedIcon className="icon" />
					<InfoOutlinedIcon className="icon" />
				</Box>
			</HeaderChat>

			<ContentChat>
				<Routes>
					<Route path="room/:roomId" element={<Chat roomId={roomId} />} />
				</Routes>
			</ContentChat>
			<InputChat onSubmit={handleSubmit}>
				<SentimentSatisfiedAltIcon className="icon" />
				<div className="field-input">
					<input ref={inputRef} type="text" placeholder="Type a message..." />
					<button type="submit" style={{ display: "none" }}></button>
					<SendIcon className="icon" />
				</div>
			</InputChat>
		</Container>
	);
}

export default ChatWindow;
const Container = styled.div`
	flex: 0.75;
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
	background-color: #ffffff;
	position: relative;
`;
const ContentChat = styled.div`
	flex: 1;
	background-color: rgb(228, 218, 212);
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
