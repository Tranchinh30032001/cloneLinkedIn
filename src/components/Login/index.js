import React from "react";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Logo,
	Form,
	Heading,
	Notice,
	Input,
	Fogot,
	Button,
	New,
	Join,
	Inner,
} from "./styles/login";

function Login({ children }) {
	return <Container>{children}</Container>;
}

export default Login;
Login.Inner = ({ children }) => <Inner>{children}</Inner>;

Login.Logo = ({ src }) => {
	return <Logo src={src}></Logo>;
};
Login.Form = ({ children }) => {
	return <Form>{children}</Form>;
};
Login.Heading = ({ children }) => {
	return <Heading>{children}</Heading>;
};
Login.Notice = ({ children }) => {
	return <Notice>{children}</Notice>;
};
Login.Input = function LoginInput({ properties, ...restProps }) {
	return <Input ref={properties} {...restProps}></Input>;
};
Login.Fogot = ({ children }) => {
	return <Fogot>{children}</Fogot>;
};
Login.Button = ({ children, loading, ...restProps }) => {
	return (
		<Button disabled={loading} {...restProps}>
			{children}
		</Button>
	);
};
Login.New = ({ children }) => <New>{children}</New>;
Login.Join = function LoginJoin({ children, link }) {
	return <Join to={link}> {children}</Join>;
};
