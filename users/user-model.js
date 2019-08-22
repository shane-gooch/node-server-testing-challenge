const db = require("../database/dbConfig.js");

module.exports = {
  get,
  getId,
  add
};

function get() {
  return db("users");
}

function getId(id) {
  return db("users").where({ id });
}

function add(user) {
  return db("users").insert(user);
}
