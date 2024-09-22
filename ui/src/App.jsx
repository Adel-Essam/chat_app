import { useEffect, useState } from "react";
import "./App.css";
import useUsernameHook from "./hooks/usernameHook";
import SendMessage from "./components/sendMessage";
import Messages from "./components/messages";
import useSocketHook from "./hooks/socketHook";
import useChatIdHook from "./hooks/chatIdHook";
import useAuthHook from "./hooks/authHook";
import Login from "./components/login";
import Sidebar from "./components/sidebar";
import ChatOptions from "./components/chatOptions";
import useMessagesHook from "./hooks/messagesHook";
import Modal from "./components/common/modal";
import useAppStore from "./stores/appStore";

function App() {
	const [messages, setMessages] = useState([]);
	const sender = useUsernameHook();
	const chatId = useChatIdHook();
	const socket = useSocketHook({ chatId });
	useMessagesHook({ chatId, socket, setMessages });

	const { modal, setModal } = useAppStore();

	const { isLoggedIn } = useAuthHook({ socket });

	useEffect(() => {
		if (socket != null) {
			socket.on("message", (message) => {
				setMessages([...messages, message]);
			});
		}
	}, [socket, messages, setMessages]);

	return (
		<>
			{isLoggedIn && (
				<div className="flex h-screen overflow-hidden">
					<Sidebar socket={socket} />

					<div className="flex-1">
						<header className="bg-white p-4 text-gray-700">
							<h1 className="text-2xl font-semibold">
								{chatId}
								<ChatOptions chatId={chatId} socket={socket} />
							</h1>
						</header>

						<Messages messages={messages} />

						<SendMessage
							chatId={chatId}
							socket={socket}
							sender={sender}
							messages={messages}
							setMessages={setMessages}
						/>
					</div>
				</div>
			)}

			{!isLoggedIn && <Login socket={socket} />}

			<Modal onClick={modal.onClick} show={modal.show}>
				{modal.children}
			</Modal>
		</>
	);
}

export default App;

/* 


Adel Essam
adel.essam233@gmail.com
September 9, 2024


Dear Hiring Manager,

I am writing to express my enthusiasm for the Node.js Intern position at Adroiti Technologies, as advertised.
With a Bachelor of Science in Computer Science from Port Said University and practical experience as a
web developer intern at NeuronetiX and CodSoft, I am well-equipped to contribute effectively to your
team.
My expertise in Node.js, Express, and backend development, along with a solid foundation in full-stack
development using MongoDB, MYSQL EJS, and Pug which aligns perfectly with the responsibilities outlined in the
job description.

During my internships, I collaborated closely with senior developers and front-end teams to deliver
projects like Chat-app, social media platforms, E-Commerce, and job boards. I am confident in my
ability to assist in developing and maintaining Node.js applications, integrating APIs, debugging, and
optimizing code to support Adroit Technologies's localization services.

I am excited to apply my academic knowledge and practical skills in a
professional setting at Adroiti Technologies. I am eager to contribute to real-world projects, participate in code
reviews, and work collaboratively with the development team to deliver effective solutions.

Thank you for considering my application.
I look forward to the possibility of discussing how my background, skills, and enthusiasm align with
the needs of your team.

Warm regards,

Adel Essam

*/
