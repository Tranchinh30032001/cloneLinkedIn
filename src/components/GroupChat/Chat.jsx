import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { memo, useEffect, useMemo, useState } from "react";
import { db } from "../../firebase/firebase";
import Message from "./Message";

function Chat({ roomId }) {
	const [roomMessage, setRoomMessage] = useState("");

	const listMessage = useMemo(() => {
		if (roomMessage?.length > 0) {
			return roomMessage.map((item, index) => (
				<Message key={index} {...item} />
			));
		}
	}, [roomMessage]);

	useEffect(() => {
		const docRef = collection(db, "rooms", roomId, "message");
		const docMain = query(docRef, orderBy("createdAt", "asc"));
		const unSub = onSnapshot(docMain, (snap) => {
			const dataArray = snap.docs.map((item) => {
				return item.data();
			});
			setRoomMessage(dataArray);
		});
		return () => {
			unSub();
		};
	}, [roomId]);

	return <>{listMessage}</>;
}

export default memo(Chat);
