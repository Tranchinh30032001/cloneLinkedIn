import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { openModalPost } from "../../redux/UserSlice";
import { useMemo } from "react";
import {
	Break,
	Container,
	Content,
	ContentFooter,
	ContentPost,
	Info,
	Job,
	Line,
	Name,
	Options,
	Post,
	Reaction,
	Sort,
	TextBold,
	TextSmall,
	User,
	Comment,
	ButtonPost,
} from "./styles/feed";

function Feed({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
export default Feed;

Feed.Post = function FeedPost({ children }) {
	return <Post>{children}</Post>;
};
Feed.ButtonPost = function FeedForm({ children, handleModal }) {
	return <ButtonPost onClick={handleModal}>Start your post ...</ButtonPost>;
};
Feed.Break = () => {
	return <Break />;
};
Feed.Options = ({ children, Icon, color }) => {
	return (
		<Options>
			<Icon style={{ color: color }} className="icon" />
			{children}
		</Options>
	);
};
Feed.Line = ({ children }) => {
	return <Line />;
};
Feed.Sort = ({ children }) => {
	return <Sort>{children}</Sort>;
};
Feed.TextSmall = ({ children }) => {
	return <TextSmall>{children}</TextSmall>;
};
Feed.TextBold = ({ children }) => {
	return <TextBold>{children}</TextBold>;
};
Feed.IconDown = ({ children, Icon }) => {
	return <Icon className="icondown" />;
};
Feed.Content = ({ children, li }) => <Content ref={li}>{children}</Content>;
Feed.User = ({ children }) => {
	return <User>{children}</User>;
};
Feed.Job = ({ children }) => {
	return <Job>{children}</Job>;
};
Feed.Info = ({ children }) => <Info>{children}</Info>;
Feed.ContentPost = function FeedContentPost({ children }) {
	return <ContentPost>{children}</ContentPost>;
};
Feed.ContentFooter = ({ children }) => (
	<ContentFooter>{children}</ContentFooter>
);
Feed.Reaction = function FeedReaction({
	children,
	Icon,
	handleLike,
	like,
	onComment,
}) {
	return (
		<Reaction like={like} onClick={handleLike ? handleLike : onComment}>
			<Icon
				style={{ color: like ? "rgb(10,102,194)" : "" }}
				className="reaction"
			/>
			{children}
		</Reaction>
	);
};
Feed.Name = ({ children }) => {
	return <Name>{children}</Name>;
};
Feed.Comment = function FeedComment({ children }) {
	return <Comment>{children}</Comment>;
};
