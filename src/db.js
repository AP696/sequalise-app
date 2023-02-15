// const sequelize = require("sequelize") // import an entire library
// const sequelize = require('./index') // importing from a file

const { Sequelize } = require("sequelize");
const path = require("path");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, "db.sqlite"),
    

});

module.exports = sequelize;