import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { forwardRef, memo, useState } from "react";
import LazyLoad from "react-lazyload";
import ReactPlayer from "react-player/youtube";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import { selectUser } from "../../redux/UserSlice";
import Comment from "./Comment";
import FieldComment from "./FieldComment";
import Feed from "./index";

const Post = forwardRef(
	(
		{
			actor,
			contentPost,
			video,
			imageLink,
			numberLike,
			numberComment,
			id,
			contentComment,
			subCommnent,
		},
		refPost
	) => {
		const user = useSelector(selectUser);
		const [like, setLike] = useState(false);
		const [showDelete, setShowDelete] = useState(false);
		const handleLike = () => {
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
		};

		const handleDelete = () => {
			const target = doc(db, "posts", id);
			deleteDoc(target)
				.then(() => {
					console.log("delete success");
				})
				.catch((error) => {
					console.log("delete fail: " + error);
				});
		};
		return (
			<>
				<Feed.Content li={refPost}>
					<Feed.User>
						<div className="left">
							<Avatar src={actor?.image}>H</Avatar>
							<Feed.Info>
								<Feed.Name>{actor?.title}</Feed.Name>
								<Feed.Job>{actor?.descriptions}</Feed.Job>
							</Feed.Info>
						</div>
						<div className="right">
							<MoreHorizIcon onClick={() => setShowDelete(!showDelete)} />
							{showDelete && (
								<button onClick={handleDelete} className="delete">
									Delete
								</button>
							)}
						</div>
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
								placeholder={<img src="./img/spinner50.svg" alt="" />}
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
						<Feed.Reaction Icon={ChatBubbleOutlineOutlinedIcon}>
							Comment
						</Feed.Reaction>
					</Feed.ContentFooter>
					<Feed.Comment>
						{contentComment?.current?.length > 0 && (
							<div className="showComment">
								{contentComment.current.map((item) => {
									return (
										<Comment
											key={item.cid}
											{...item}
											id={id}
											cid={item.cid}
											numberComment={numberComment}
											contentComment={contentComment}
											subCommnent={subCommnent}
										/>
									);
								})}
							</div>
						)}
						<FieldComment
							user={user}
							id={id}
							numberComment={numberComment}
							contentComment={contentComment}
						/>
					</Feed.Comment>
				</Feed.Content>
			</>
		);
	}
);

export default memo(Post);
