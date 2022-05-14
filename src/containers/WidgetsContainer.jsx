import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import PriorityHighOutlinedIcon from "@material-ui/icons/PriorityHighOutlined";
import React from "react";
import Widget from "../components/Widgets";

function WidgetsContainer() {
	const Suggest = (url, name, intro) => {
		return (
			<Widget.Suggest>
				<Avatar src={url ? url : ""} />
				<Widget.Info>
					<Widget.Name>{name}</Widget.Name>
					<Widget.Intro>{intro}</Widget.Intro>
					<Widget.Follow>
						<Widget.Icon Icon={AddIcon} />
						Follow
					</Widget.Follow>
				</Widget.Info>
			</Widget.Suggest>
		);
	};
	return (
		<Widget>
			<Widget.Top>
				<Widget.Header>
					<Widget.Title>Add to your feed</Widget.Title>
					<Widget.Icon Icon={PriorityHighOutlinedIcon} />
				</Widget.Header>
				<Widget.List>
					{Suggest(
						"https://images.unsplash.com/photo-1646744683993-ce90cb0064c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
						"Leo Messi",
						"Lionel Andrés Messi, còn được gọi là Leo Messi"
					)}
					{Suggest(
						"https://images.unsplash.com/photo-1580128637411-80206ae868e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80",
						"Bill Gates",
						'William Henry "Bill" Gates III là một doanh nhân người Mỹ, nhà từ thiện'
					)}
					{Suggest(
						"https://images.unsplash.com/photo-1646589389846-4ee4fa616a5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
						"Elon Musk",
						"Elon Reeve Musk FRS, là một kỹ sư, nhà tài phiệt, nhà phát minh, doanh nhân công nghệ và nhà từ thiện Người Mỹ gốc Nam Phi"
					)}
				</Widget.List>
				<Widget.Recomment>
					View all recommendations
					<Widget.Icon Icon={ArrowRightAltIcon} />
				</Widget.Recomment>
			</Widget.Top>
			<Widget.Body>
				<Widget.Img src="https://images.unsplash.com/photo-1646734710313-3e64ba87722e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=363&q=80" />
				<Widget.Footer>
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
				</Widget.Footer>
			</Widget.Body>
		</Widget>
	);
}

export default WidgetsContainer;
