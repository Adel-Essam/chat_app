const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const User = sequelize.define("User", {
	userName: DataTypes.STRING,
	email: DataTypes.STRING,
	otp: DataTypes.STRING, //one time password
});

module.exports = User;
