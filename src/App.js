import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import MainPage from "./Pages/MainPage";
import MessagePage from "./Pages/MessagePage";
import NotFoundPage from "./Pages/NotFoundPage";
import NetworkPage from "./Pages/NetworkPage";
import JobPage from "./Pages/JobPage";
import Chat from "./components/GroupChat/Chat";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="signup" element={<LoginPage />} />
				<Route path="signin" element={<SignUpPage />} />
				<Route path="feed" element={<HomePage />} />
				<Route path="message" element={<MessagePage />}>
					<Route path="room/:roomId" element={<Chat />} />
				</Route>
				<Route path="network" element={<NetworkPage />} />
				<Route path="jobs" element={<JobPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
}

export default App;
