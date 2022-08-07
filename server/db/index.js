//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Lists = require("./models/Lists");
const Todos = require("./models/Todos");


//associations could go here!

// Lists.hasMany(Todos);
// Todos.belongsTo(Lists);
// User.belongsToMany(Product, { through: OrderProducts });
// Product.belongsToMany(Order, { through: OrderProducts });

module.exports = {
  db,
  User,
};
