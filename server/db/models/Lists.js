const Sequelize = require("sequelize");
const db = require("../db");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

const Lists = db.define("list", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Lists;
