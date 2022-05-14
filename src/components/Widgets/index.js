import React, { useState } from "react";
import {
	Container,
	Top,
	Header,
	Title,
	List,
	Suggest,
	Name,
	Info,
	Follow,
	Body,
	Intro,
	Img,
	Recomment,
	Footer,
} from "./styles/widget";

function Widget({ children, ...restProps }) {
	return <Container>{children}</Container>;
}

export default Widget;

Widget.Top = ({ children }) => {
	return <Top>{children}</Top>;
};
Widget.Header = ({ children }) => {
	return <Header>{children}</Header>;
};
Widget.Title = ({ children }) => {
	return <Title>{children}</Title>;
};
Widget.Icon = ({ children, Icon }) => {
	return <Icon />;
};
Widget.List = ({ children }) => {
	return <List>{children}</List>;
};
Widget.Suggest = ({ children }) => {
	return <Suggest>{children}</Suggest>;
};
Widget.Info = ({ children }) => {
	return <Info>{children}</Info>;
};
Widget.Name = ({ children }) => {
	return <Name>{children}</Name>;
};
Widget.Intro = ({ children }) => {
	return <Intro>{children}</Intro>;
};
Widget.Follow = function WidgetFollow({ children }) {
	const [bg, setBg] = useState(false);
	const handleClick = () => {
		setBg(!bg);
	};
	return (
		<Follow bg={bg} onClick={handleClick}>
			{children}
		</Follow>
	);
};
Widget.Body = ({ children }) => {
	return <Body>{children}</Body>;
};
Widget.Img = ({ src }) => {
	return <Img src={src} />;
};
Widget.Recomment = ({ children }) => {
	return <Recomment>{children}</Recomment>;
};
Widget.Footer = ({ children }) => {
	return <Footer>{children}</Footer>;
};
