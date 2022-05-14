import React from "react";
import styled from "styled-components";
import { Event } from "../../Network/SidebarNetwork/SidebarNetwork";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SettingsIcon from "@material-ui/icons/Settings";
function SidebarJob() {
	return (
		<Sidebar>
			<div className="active"></div>
			<div className="wrapper">
				<h2>List Events</h2>
				<div className="list__event">
					{Event(BookmarkIcon, "My Jobs")}
					{Event(NotificationsActiveIcon, "Job Alerts")}
					{Event(MonetizationOnIcon, "Salary")}
					{Event(EventAvailableIcon, "Skill")}
					{Event(FileCopyIcon, "Interview Prep")}
					{Event(LibraryBooksIcon, "Newsletters")}
					{Event(YouTubeIcon, "Job Stiker")}
					{Event(SettingsIcon, "Application Setting")}
				</div>
			</div>
		</Sidebar>
	);
}

export default SidebarJob;
const Sidebar = styled.div`
	position: fixed;
	max-width: 22.6rem;
	width: 100%;
	background-color: #ffffff;
	border-radius: 1rem;
	border: 1px solid #ccc;

	.wrapper {
		position: static;
		top: 5rem;
		h2 {
			padding: 1rem 2rem;
			color: #555;
			border-bottom: 1px solid #ccc;
		}
		.list__event {
			.event {
				display: flex;
				align-items: center;
				margin-top: 1.4rem;
				padding: 0.6rem 1.6rem;
				cursor: pointer;
				&:hover {
					background-color: #dddd;
				}
				h3 {
					font-size: 1.5rem;
					color: #555;
					margin-left: 1rem;
				}
				.icon {
					font-size: 2.6rem;
					color: #666;
				}
			}
		}
	}
	@media screen and (max-width: 723px) {
		display: none;
	}
`;
