import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { doc, updateDoc } from "firebase/firestore";
import React, { forwardRef, memo, useCallback, useRef, useState } from "react";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player/youtube";
import { db } from "../../firebase/firebase";
import Feed from "./index";
const Post = forwardRef(
	(
		{ actor, contentPost, video, imageLink, numberLike, numberComment, id },
		refPost
	) => {
		const [like, setLike] = useState(false);
		const inputRef = useRef();
		const data = useRef([]);
		const handleLike = useCallback(() => {
			const target = doc(db, "posts", id);
			updateDoc(target, {
				numberLike: !like ? numberLike + 1 : numberLike - 1,
			})
				.then(() => {
					console.log("update success");
				})
				.catch((error) => {
					console.log("fail: " + error);
				});
			setLike(!like);
		}, []);
		const handleComment = () => {
			inputRef.current.focus();
		};
		const handleSubmitComment = useCallback((e) => {
			e.preventDefault();
			const target = doc(db, "posts", id);
			data.current.push(inputRef.current.value);
			updateDoc(target, {
				contentComment: data,
			})
				.then(() => {
					console.log("upload comment success");
				})
				.catch((error) => {
					console.log("upload comment fail: " + error);
				});
			inputRef.current.value = "";
			inputRef.current.focus();
		}, []);

		const Loadings = () => {
			return (
				<div style={{ width: "3rem", height: "3rem" }}>
					<img src="./img/spin-loading.svg" alt="" />
				</div>
			);
		};
		return (
			<>
				<Feed.Content li={refPost}>
					<Feed.User>
						<Avatar src={actor?.image}>H</Avatar>
						<Feed.Info>
							<Feed.Name>{actor?.title}</Feed.Name>
							<Feed.Job>{actor?.descriptions}</Feed.Job>
						</Feed.Info>
					</Feed.User>
					<Feed.ContentPost>
						{contentPost && <p>{contentPost}</p>}
						{!imageLink && video ? (
							<ReactPlayer
								url={video}
								controls={true}
								width="100%"
								style={{ marginTop: "1rem" }}
							/>
						) : (
							<LazyLoad
								style={{ width: "100%" }}
								once={true}
								placeholder={<img src="./img/spinner50.svg" />}
							>
								<img src={imageLink} alt="" />
							</LazyLoad>
						)}

						<div className="numberLikeandComment">
							<div className="likeReactions">
								<div className="listReaction">
									<ThumbUpOutlinedIcon
										className="icon"
										style={{ color: "rgb(10,102,194)" }}
									/>
									<EmojiEmotionsIcon
										className="icon"
										style={{ color: "rgb(245,187,92)" }}
									/>
									<FavoriteIcon className="icon" style={{ color: "red" }} />
								</div>
								<p>{numberLike}</p>
							</div>
							<div className="comment">{numberComment} comment</div>
						</div>
					</Feed.ContentPost>
					<Feed.ContentFooter>
						<Feed.Reaction
							handleLike={handleLike}
							like={like}
							Icon={ThumbUpOutlinedIcon}
						>
							Like
						</Feed.Reaction>
						<Feed.Reaction
							onComment={handleComment}
							Icon={ChatBubbleOutlineOutlinedIcon}
						>
							Comment
						</Feed.Reaction>
					</Feed.ContentFooter>
					<Feed.Comment>
						<Avatar
							style={{ width: "3.2rem", height: "3.2rem" }}
							src={actor?.image}
						/>
						<input
							ref={inputRef}
							type="text"
							placeholder="Write your comment"
						/>
						<button
							onClick={handleSubmitComment}
							type="submit"
							style={{ display: "none" }}
						></button>
					</Feed.Comment>
				</Feed.Content>
			</>
		);
	}
);

export default memo(Post);
