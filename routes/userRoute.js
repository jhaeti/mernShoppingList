const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const route = express.Router();

route.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please enter all fields" });
  } else {
    //   Check whether user already exist
    User.findOne({ email }).then((user) => {
      if (user) {
        res.status(400).json({ msg: "User already exist" });
      } else {
        const newUser = new User({ name, email, password });
        //   Hashing password before sending to mongoddb
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            res.json({ msg: "erro" });
          }
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then((user) => {
              jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET_KEY,
                (err, token) => {
                  const { name, email, id } = user;
                  if (err) throw err;
                  res.json({ token, user: { name, email, id } });
                }
              );
            });
          });
        });
      }
    });
  }
});

module.exports = route;
