// const { Resend } = require("resend");

const nodemailer = require("nodemailer");

async function sendOtp(email, otp) {
	// const resend = new Resend(process.env.RESEND_API_KEY);
	// resend.emails.send({
	// 	from: "onboarding@resend.dev",
	// 	to: email,
	// 	subject: "Please verify your email",
	// 	html: `<p>Please use this one time password: ${otp}</p>`,
	// });

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "adel.essam233@gmail.com",
			pass: process.env.SENDING_PASSWORD,
		},
	});

	const message = {
		from: "Chat-app", // sender address
		to: email, // list of receivers
		subject: "Email Verification for Chat-app", // Subject line
		text: "Please verify your email", // plain text body
		html: `<p>Please use this one time password: ${otp}</p>`, // html body
	};
	await transporter.sendMail(message);
}

async function sendInvite(email, chatId) {
	// const resend = new Resend(process.env.RESEND_API_KEY);
	// resend.emails.send({
	// 	from: "onboarding@resend.dev",
	// 	to: email,
	// 	subject: "You have been invited",
	// 	html: `<p>You have an invitation for this chat: <a href="${process.env.PUBLIC_URL}/?chatId=${chatId}">Chat Link</a></p>`,
	// });

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "adel.essam233@gmail.com",
			pass: process.env.SENDING_PASSWORD,
		},
	});

	const message = {
		from: "Chat-app", // sender address
		to: email, // list of receivers
		subject: "You have been invited", // Subject line
		text: "Please verify your email", // plain text body
		html: `<p>You have an invitation for this chat: <a href="http://${process.env.PUBLIC_URL}/?chatId=${chatId}">Chat Link</a></p>`, // html body
	};
	await transporter.sendMail(message);
}

module.exports = {
	sendOtp,
	sendInvite,
};

/* 
	//* Just to test
	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for port 465, false for other ports
		auth: {
			user: "maddison53@ethereal.email",
			pass: "jn7jnAPss4f63QBp6D",
		},
	});

	const message = {
		from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
		to: "bar@example.com, baz@example.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
	};

	const info = await transporter.sendMail(message);

	console.log("info >> ", info.messageId);
	console.log(nodemailer.getTestMessageUrl(info)); */
