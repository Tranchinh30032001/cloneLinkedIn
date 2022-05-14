import { Avatar } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import { serverTimestamp } from "firebase/firestore";
import React, { memo, useCallback, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PostAPI } from "../action";
import { selectUser } from "../redux/UserSlice";
function PostModal({ handleModal }) {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	const [openDocument, setOpenDocument] = useState(false);
	const [image, setImage] = useState("");
	const [typeShow, setTypeShow] = useState("");
	const textareaRef = useRef();
	const videoRef = useRef("");
	const handlePost = (e) => {
		e.preventDefault();
		const payload = {
			imageLink: image,
			videoLink: videoRef.current.value || null,
			contentPost: textareaRef.current.value,
			timestamp: serverTimestamp(),
			user: user,
			numberLike: 0,
			numberComment: 0,
			contentComment: [],
			subComment: [],
		};
		dispatch(PostAPI(payload));
		handleModal();
	};

	const handleDocument = () => {
		setOpenDocument(true);
		setTypeShow("image");
		// videoRef.current.value = "";
	};
	const handleVideo = () => {
		setOpenDocument(true);
		setTypeShow("video");
		// setImage("");
	};
	const handleImage = (e) => {
		const image = e.target.files[0];
		if (!image) {
			alert(`not an image, the file is a ${typeof image}`);
			return;
		}
		setImage(image);
	};
	return (
		<Container>
			<Inner>
				<div className="header">
					<h2>Create a post</h2>
					<CloseIcon onClick={handleModal} className="icon" />
				</div>
				<div className="body">
					<div className="header__body">
						<Avatar src={user?.photoUrl} />
						<div className="model">
							<h3>{user?.displayName}</h3>
							<p>{user?.email}</p>
						</div>
					</div>
					<div className="content__body">
						<textarea
							ref={textareaRef}
							placeholder="What do you like to talk about?"
							name=""
							id=""
							cols="30"
							rows="4"
						></textarea>
						{image && <img src={URL.createObjectURL(image)} />}
						{openDocument && typeShow === "image" && (
							<>
								<input
									type="file"
									accept="image/gif, image/jpeg, image/png"
									name="image"
									id="file"
									style={{ display: "none" }}
									onChange={handleImage}
								/>
								{typeShow === "image" && (
									<p className="select-image">
										<label htmlFor="file">Select image to post</label>
									</p>
								)}
							</>
						)}
						{openDocument && typeShow === "video" && (
							<>
								<input
									type="url"
									ref={videoRef}
									placeholder="Please enter your Url"
								/>

								<ReactPlayer
									width="100%"
									height={"20rem"}
									style={{ border: "1px solid #000" }}
									url={videoRef.current.value}
								/>
							</>
						)}
					</div>
				</div>
				<div className="footer">
					<div className="icons">
						<InsertPhotoIcon
							onClick={handleDocument}
							className="icon"
						></InsertPhotoIcon>
						<OndemandVideoIcon onClick={handleVideo} className="icon" />
						<AttachFileIcon className="icon" />
					</div>
					<button onClick={handlePost} className="btn-post">
						Post
					</button>
				</div>
			</Inner>
		</Container>
	);
}

export default memo(PostModal);
const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 9999;
`;
const Inner = styled.div`
	background-color: #ffffff;
	max-width: 50rem;
	width: 100%;
	margin: 0 auto;
	border-radius: 1.5rem;
	margin-top: 5rem;

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		padding: 1.6rem;
		h2 {
			font-weight: 400;
			color: #555;
			font-size: 1.8rem;
		}
		.icon {
			font-size: 2rem;
			cursor: pointer;
		}
	}
	.body {
		padding: 1.6rem 2rem;
		.header__body {
			display: flex;
			align-items: center;
			.model {
				margin-left: 1rem;
				p {
					color: #666;
					margin-top: 0.3rem;
				}
			}
		}
		.content__body {
			margin-top: 2rem;
			textarea {
				width: 100%;
				resize: none;
			}
			img {
				width: 100%;
				height: 18rem;
				object-fit: cover;
				object-position: 10% 15%;
			}
			.select-image {
				text-align: center;
				font-size: 1.6rem;
				cursor: pointer;
			}
		}
	}
	.footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		.icons {
			.icon {
				font-size: 2rem;
				padding: 1rem;
				box-sizing: content-box;
				color: #555;
				cursor: pointer;
				&:hover {
					background-color: #ccc;

					border-radius: 100%;
				}
			}
		}
		.btn-post {
			padding: 0.6rem 2rem;
			border-radius: 99999px;
			cursor: pointer;
			background-color: rgb(10, 102, 194);
			color: #ffffff;
		}
	}
`;
