import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { userSelector } from "../redux/selectors";

function HeaderContainer() {
	const user = useSelector(userSelector);
	return (
		<Header>
			<Header.Flex>
				<Header.Logo src="https://www.seekpng.com/png/full/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png" />
				<Header.Search>
					<Header.SearchIcon Icon={SearchIcon} to="" />
					<Header.Input placeholder="Search" />
				</Header.Search>
			</Header.Flex>
			<Header.Flex>
				<Header.NavLink>
					<Header.Option Icon={HomeIcon} to="/feed">
						Home
					</Header.Option>
					<Header.Option Icon={SupervisorAccountIcon} to="/network">
						My Networks
					</Header.Option>
					<Header.Option Icon={WorkIcon} to="/jobs">
						Jobs
					</Header.Option>
					<Header.Option Icon={MessageIcon} to="/message">
						Messaging
					</Header.Option>
					<Header.Notification Icon={NotificationsActiveIcon}>
						Notifications
					</Header.Notification>
				</Header.NavLink>
				<Header.User>
					<Avatar
						src={user?.photoUrl}
						style={{
							width: "2.4rem",
							height: "2.4rem",
							marginBottom: "0.1rem",
						}}
					/>
				</Header.User>
				<Header.Line />
				<Header.Work Icon={AppsIcon}>Work</Header.Work>

				<Header.Premium>Try Premium for free</Header.Premium>
			</Header.Flex>
		</Header>
	);
}

export default HeaderContainer;
