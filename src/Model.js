const sequelize = require("./db"); // importing connection from db.js
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
    
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rating: DataTypes.NUMBER
})

module.exports = { User } // {User: User}