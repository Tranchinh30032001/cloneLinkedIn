import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EventNoteIcon from "@material-ui/icons/EventNote";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import React, { useCallback, useMemo, useState } from "react";
import FlipMove from "react-flip-move";
import LazyLoad from "react-lazyload";
import { useSelector } from "react-redux";
import Feed from "../components/Feed";
import Post from "../components/Feed/Post";
import { useFireStore } from "../firebase/useFireStore";
import { statusSelector, userSelector } from "../redux/selectors";
import PostModal from "./PostModal";

function FeedContainer() {
	const [modal, setModal] = useState(false);
	const user = useSelector(userSelector);
	const statusLoading = useSelector(statusSelector);
	const datas = useFireStore("posts");
	const renderPost = useMemo(() => {
		if (datas?.length > 0) {
			return datas.map(({ id, data }) => {
				return (
					<LazyLoad once={true} offset={200} key={id}>
						<Post key={id} {...data} id={id} />
					</LazyLoad>
				);
			});
		}
	}, [datas]);

	const handleModal = useCallback(() => {
		setModal((prevModal) => !prevModal);
	}, []);
	return (
		<Feed>
			<Feed.Post>
				<Avatar src={user?.photoUrl} />
				<Feed.ButtonPost handleModal={handleModal} />
				<Feed.Break />
				<Feed.Options
					handleModal={handleModal}
					color="rgb(112,181,249)"
					Icon={InsertPhotoIcon}
				>
					Photo
				</Feed.Options>
				<Feed.Options
					handleModal={handleModal}
					color="rgb(127,193,94)"
					Icon={OndemandVideoIcon}
				>
					Video
				</Feed.Options>
				<Feed.Options color="rgb(231,163,62)" Icon={AssignmentIcon}>
					Event
				</Feed.Options>
				<Feed.Options color="rgb(252,146,149)" Icon={EventNoteIcon}>
					Write article
				</Feed.Options>
			</Feed.Post>
			<Feed.Sort>
				<Feed.Line />
				<Feed.TextSmall>Sort by:</Feed.TextSmall>
				<Feed.TextBold>Recent</Feed.TextBold>
				<Feed.IconDown Icon={ArrowDropDownIcon} />
			</Feed.Sort>

			{(!renderPost || statusLoading) && (
				<img className="render" src="./img/spinner123.svg" />
			)}
			<FlipMove>{renderPost}</FlipMove>
			{modal && <PostModal handleModal={handleModal} />}
		</Feed>
	);
}

export default FeedContainer;
