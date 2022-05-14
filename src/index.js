import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { Global } from "./StyledComponent/Global";
import store from "./redux/Store";
import { ThemeProvider } from "styled-components";

const theme = {
	colorActive: "rgb(58,59,60)",
};

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Global />
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById("root")
);
