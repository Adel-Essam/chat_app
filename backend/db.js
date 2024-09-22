const sequelize = require("./sequelize");
const User = require("./models/user");
const Chats = require("./models/chat");
const Message = require("./models/message");

const dbConnect = async () => {
	try {
		User.hasMany(Chats);
		Chats.belongsTo(User);

		// await sequelize.authenticate();
		await sequelize.sync({ alter: true });
		await sequelize.sync();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

module.exports = dbConnect;
