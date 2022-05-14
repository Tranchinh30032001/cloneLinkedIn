import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { logout } from "../../redux/UserSlice";

import {
	Flex,
	Search,
	Line,
	Input,
	Logo,
	Option,
	Premium,
	Work,
	Container,
	Inner,
	User,
	Notification,
	NavLink,
} from "./styles/header";

function Header({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

export default Header;
Header.SearchIcon = ({ children, Icon }) => {
	return <Icon className="icon"></Icon>;
};
Header.Flex = ({ children }) => {
	return <Flex>{children}</Flex>;
};
Header.Logo = ({ children, ...restProps }) => {
	return (
		<Link to="/feed">
			<Logo {...restProps} />
		</Link>
	);
};
Header.Search = ({ children, ...restProps }) => {
	return <Search>{children}</Search>;
};
Header.Option = ({ children, Icon, to, onClick, ...restProps }) => {
	return (
		<Option to={to && to}>
			<Icon className="icon" />
			{children}
		</Option>
	);
};
Header.Work = function HeaderWork({ children, Icon }) {
	const handleActive = () => {};
	return (
		<Work onClick={handleActive}>
			<Icon className="icon" />
			{children}
		</Work>
	);
};
Header.Line = ({ children }) => {
	return <Line>{children}</Line>;
};
Header.Input = ({ children, ...restProps }) => {
	return <Input {...restProps} />;
};
Header.Premium = ({ children }) => {
	return <Premium>{children}</Premium>;
};
Header.User = function HeaderUser({ children }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClick = () => {
		dispatch(logout());
		auth.signOut();
		navigate("/");
	};
	return <User onClick={handleClick}>{children} </User>;
};
Header.Notification = function HeaderNotification({ children, Icon }) {
	const handleActive = () => {};
	return (
		<Notification onClick={handleActive}>
			<Icon className="icon" />
			{children}
		</Notification>
	);
};
Header.NavLink = ({ children }) => {
	return <NavLink>{children}</NavLink>;
};
