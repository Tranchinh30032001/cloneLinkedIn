import { Avatar } from "@material-ui/core";
import TurnedInIcon from "@material-ui/icons//TurnedIn";
import AddIcon from "@material-ui/icons/Add";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { selectUser } from "../redux/UserSlice";

function SidebarContainer() {
	const user = useSelector(selectUser);
	return (
		<Sidebar>
			<Sidebar.Section>
				<Sidebar.Top>
					<Sidebar.Background src="https://images.unsplash.com/photo-1646673974332-804492240491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80" />
					<Avatar
						style={{ width: "4.4rem", height: "4.4rem" }}
						src={user?.photoUrl}
					/>
					<Sidebar.Name>{user?.displayName}</Sidebar.Name>
					<Sidebar.TextSmall>{user?.email}</Sidebar.TextSmall>
				</Sidebar.Top>
				<Sidebar.Content>
					<Sidebar.TextSmall>Connections</Sidebar.TextSmall>
					<GroupAddIcon className="between" />
					<Sidebar.Break />
					<Sidebar.TextBold>Grow your network</Sidebar.TextBold>
				</Sidebar.Content>
				<Sidebar.Content>
					<Sidebar.TextSmall>
						Access exclusive tools & insights
					</Sidebar.TextSmall>
					<Sidebar.TextBold>Try Premium for free</Sidebar.TextBold>
				</Sidebar.Content>
				<Sidebar.Content>
					<TurnedInIcon />
					<Sidebar.TextBold>My items</Sidebar.TextBold>
				</Sidebar.Content>
			</Sidebar.Section>
			<Sidebar.SectionGroup>
				<Sidebar.Content>
					<Sidebar.BoldColor>Group</Sidebar.BoldColor>
					<Sidebar.Break />
					<Sidebar.BoldColor>Events</Sidebar.BoldColor>
					<AddIcon className="between" />
					<Sidebar.Break />
					<Sidebar.BoldColor>Followed Hashtag</Sidebar.BoldColor>
				</Sidebar.Content>
				<Sidebar.Discover>Discover more</Sidebar.Discover>
			</Sidebar.SectionGroup>
		</Sidebar>
	);
}

export default memo(SidebarContainer);
