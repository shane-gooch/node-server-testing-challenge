const router = require("express").Router();

const Users = require("./user-model.js");

router.get("/", (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Error" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.getId(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ message: "Error" });
    });
});

router.get("/:id/comments", (req, res) => {});

router.post("/", (req, res) => {
  const user = req.body;

  Users.add(user)
    .then(count => {
      res.status(201).json({ message: "User has been added" });
    })
    .catch(err => {
      res.status(500).json({ message: "Error" });
    });
});

router.post("/:id/comments", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.delete("/:id/comments", (req, res) => {});

module.exports = router;
