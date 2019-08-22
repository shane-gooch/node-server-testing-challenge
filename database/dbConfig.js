const knex = require("knex");
const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "developmment";

module.exports = knex(config.testing);
