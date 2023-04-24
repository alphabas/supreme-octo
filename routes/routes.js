const express = require("express");
const router = express.Router();
const userTemplate = require("../models/userModels");

router.post("/users", (request, response) => {
  const users = request.body;
  const saveUsers = new userTemplate({
    userName: users.userName,
    dateOfBirth: users.dateOfBirth,
  });
  saveUsers
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      response.json(err);
    });
});

router.get("/users", async (request, response) => {
  userTemplate
    .find()
    .then((data) => {
      response.json(data);
    })
    .catch((err) => {
      response.json(err);
    });
});

module.exports = router;
