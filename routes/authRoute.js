const express = require("express");
const jwt = require("jsonwebtoken");

const auth = require("../middleware");

const User = require("../models/user");

const route = express.Router();

route.get("/", auth, (req, res) => {
  User.findById({ _id: req.user.id })
    .select("-password")
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = route;
