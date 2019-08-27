const express = require("express"),
  server = express();

const UserRoute = require("../users/user-route.js");

server.use(express.json());

server.use("/api/users", UserRoute);

server.get("/", (req, res) => {
  res.status(200).json({ api: "connected" });
});

module.exports = server;
