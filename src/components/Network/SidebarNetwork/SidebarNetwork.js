import React from "react";
import styled from "styled-components";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

export const Event = (Icon, method) => {
	return (
		<div className="event">
			<Icon className="icon" />
			<h3>{method}</h3>
		</div>
	);
};
function SidebarNetwork() {
	return (
		<Inner>
			<div className="wrapper">
				<div className="top">
					<h2>Manage my network</h2>
					<div className="list__event">
						{Event(PermContactCalendarIcon, "Contact")}
						{Event(SupervisedUserCircleIcon, "People | Follow")}
						{Event(GroupAddIcon, "Group")}
						{Event(EventNoteIcon, "Events")}
						{Event(MenuBookIcon, "Page")}
						{Event(LibraryBooksIcon, "Newsletters")}
					</div>
				</div>
				<div className="body">
					<img src="./img/network/bodyNetwork.png" alt="" />
				</div>
				<div className="footer">
					<div className="list__link">
						<div className="group">
							<a href="">About</a>
							<a href="">Accessibility</a>
							<a href="">Help Center</a>
						</div>
						<div className="group">
							<a href="">Privacy & Terms </a>
							<a href="">Ad Choices</a>
						</div>
						<div className="group">
							<a href="">Advertising</a>
							<a href="">Business Services</a>
						</div>
						<div className="group">
							<a href="">Get the Linkedin App</a>
							<a href="">More</a>
						</div>
					</div>
					<div className="signature">
						<img src="./img/Logo.svg" alt="" />
						<p>LinkedIn corporation © 2022</p>
					</div>
				</div>
			</div>
		</Inner>
	);
}

export default SidebarNetwork;

const Inner = styled.div`
	flex: 0.28;
	background-color: #ffffff;
	border: 1px solid #ccc;
	border-radius: 1rem;
	@media screen and (max-width: 1115px) {
		display: none;
	}
	.wrapper {
		position: sticky;
		top: 5rem;
	}
	.top {
		padding: 1.6rem 0;
		h2 {
			padding: 0 1.6rem;
			font-size: 1.7rem;
			color: #666;
		}
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
	.body {
		img {
			display: block;
			width: 100%;
		}
	}
	.footer {
		padding: 1.5rem 2.8rem;
		.list__link {
			.group {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 0.6rem;
			}
			a {
				color: #666;
				margin-left: 1.6rem;
				font-size: 1.2rem;
				position: relative;
				&:hover {
					&::after {
						content: "";
						position: absolute;
						top: 100%;
						left: 0;
						width: 100%;
						height: 1px;
						background-color: rgb(18, 107, 196);
					}
				}
			}
		}
		.signature {
			display: flex;
			align-items: center;
			img {
				width: 10rem;
			}
			p {
				font-size: 1.1rem;
			}
		}
	}
`;
