import { Avatar } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styled from "styled-components";

function Comment({
	valueInputRef,
	displayName,
	photoUrl,
	cid,
	id,
	numberComment,
	contentComment,
	subComment,
}) {
	const [feedback, setFeedback] = useState(false);
	const [idFeedback, setIdFeedback] = useState();
	const inputRef = useRef();
	const handleFeedback = () => {
		console.log("id: " + cid);
		setIdFeedback(cid);
		setFeedback(true);
	};
	// const handleSubmitSubComment = (e) => {
	// 	e.preventDefault();
	// 	const target = collection(db, "posts", id,);
	// 	addDoc(target, {
	// 		subComment: inputRef.current.value,
	// 	});
	// 	inputRef.current.value = "";
	// 	inputRef.current.focus();
	// };
	return (
		<StyledComment>
			<div className="wrapper">
				<Avatar
					style={{ width: "2.5rem", height: "2.5rem" }}
					src={photoUrl ? photoUrl : ""}
				/>
				<div className="text">
					<div className="top">
						<h3>{displayName ? displayName : ""}</h3>
						<p>{valueInputRef ? valueInputRef : ""}</p>
					</div>
					<div className="bottom">
						<p>Thích</p>
						<p onClick={handleFeedback}>Phản hồi</p>
					</div>
				</div>
			</div>
			{feedback && idFeedback === cid && (
				<div className="fieldComment">
					<Avatar
						className="avatar"
						style={{ width: "3.2rem", height: "3.2rem" }}
						src={photoUrl ? photoUrl : ""}
					/>
					<input ref={inputRef} type="text" placeholder="Write your comment" />
					<button
						// onClick={handleSubmitSubComment}
						type="submit"
						style={{ display: "none" }}
					></button>
				</div>
			)}
		</StyledComment>
	);
}

export default Comment;

const StyledComment = styled.div`
	position: relative;
	.wrapper {
		display: flex;
	}
	&:not(:first-child) {
		margin-top: 1rem;
	}
	.text {
		margin-left: 0.8rem;
		width: fit-content;
		color: #222;
	}
	.top {
		background-color: #ccc;
		padding: 0.4rem 1rem;
		border-radius: 1rem;
		p {
			font-size: 1.2rem;
			margin-top: 2px;
			word-break: break-word;
		}
	}
	.bottom {
		display: flex;
		align-items: center;
		margin-top: 5px;
		p {
			cursor: pointer;
			font-weight: 600;
			margin-right: 1.2rem;
			&:hover {
				color: rgb(29, 161, 260);
			}
		}
	}

	.fieldComment {
		margin-left: 3.4rem;
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
		input {
			border: 1px solid #ccc;
			flex: 1;
			line-height: 2.4rem;
			border-radius: 99999px;
			padding: 0 1rem;
			margin-left: 0.8rem;
		}
		.avatar {
			width: 2rem !important;
			height: 2rem !important;
		}
	}
`;
