import React, { memo } from "react";
import { Avatar } from "@material-ui/core";
import { useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import styled from "styled-components";

function FieldComment({
	user: { displayName, photoUrl },
	id,
	numberComment,
	contentComment: { current },
}) {
	const inputRef = useRef();
	const data = useRef(current?.length > 0 ? [...current] : []); // current ở đây là một mảng xem trong firebase
	const handleSubmitComment = (e) => {
		e.preventDefault();
		const target = doc(db, "posts", id);
		const valueInputRef = inputRef.current.value;
		const cid = new Date().getTime().toString();
		let subComment = [];
		data.current.push({
			valueInputRef,
			displayName,
			photoUrl,
			cid,
			subComment,
		});
		updateDoc(target, {
			contentComment: data, // bao gồm nội dung, thông tin người bình luận
			numberComment: numberComment + 1,
		})
			.then(() => {
				console.log("upload comment success");
			})
			.catch((error) => {
				console.log("upload comment fail: " + error);
			});
		inputRef.current.value = "";
		inputRef.current.focus();
	};
	return (
		<StyledFieldComment className="fieldComment">
			<Avatar
				className="avatar"
				style={{ width: "3.2rem", height: "3.2rem" }}
				src={photoUrl ? photoUrl : ""}
			/>
			<input ref={inputRef} type="text" placeholder="Write your comment" />
			<button
				onClick={handleSubmitComment}
				type="submit"
				style={{ display: "none" }}
			></button>
		</StyledFieldComment>
	);
}

export default memo(FieldComment);
export const StyledFieldComment = styled.div`
	display: flex;
	align-items: center;
	input {
		border: 1px solid #ccc;
		flex: 1;
		line-height: 3.6rem;
		border-radius: 99999px;
		padding: 0 1rem;
		margin-left: 0.8rem;
	}
`;
