import React from "react";
import {
	Section,
	Background,
	Name,
	TextBold,
	TextSmall,
	Content,
	Discover,
	Break,
	BoldColor,
	Container,
	Top,
	SectionGroup,
} from "./styles/sidebar";

function Sidebar({ children }) {
	return <Container>{children}</Container>;
}

export default Sidebar;

Sidebar.Section = ({ children }) => {
	return <Section>{children}</Section>;
};
Sidebar.Top = ({ children }) => {
	return <Top>{children}</Top>;
};
Sidebar.Background = ({ children, ...restProps }) => {
	return <Background {...restProps}>{children}</Background>;
};
Sidebar.Name = ({ children }) => {
	return <Name>{children}</Name>;
};
Sidebar.TextSmall = ({ children }) => {
	return <TextSmall>{children}</TextSmall>;
};
Sidebar.Content = ({ children }) => {
	return <Content>{children}</Content>;
};
Sidebar.TextBold = ({ children }) => {
	return <TextBold>{children}</TextBold>;
};
Sidebar.Break = ({ children }) => {
	return <Break>{children}</Break>;
};
Sidebar.BoldColor = ({ children }) => {
	return <BoldColor>{children}</BoldColor>;
};
Sidebar.Discover = ({ children }) => {
	return <Discover>{children}</Discover>;
};
Sidebar.SectionGroup = ({ children }) => {
	return <SectionGroup>{children}</SectionGroup>;
};
