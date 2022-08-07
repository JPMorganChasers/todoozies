const Sequelize = require("sequelize");
const db = require("../db");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const Todos = db.define("todo", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Todos;
