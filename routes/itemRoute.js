const { response } = require("express");
const express = require("express");

const Item = require("../models/item");

const route = express.Router();

const auth = require("../middleware");

// Getting all items and sending it in json
route.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

// Sending an Item and sending it back in json
route.post("/", (req, res) => {
route.post("/", auth, (req, res) => { register-login
  const { name } = req.body;
  const newItem = new Item({ name });
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

// Deleting an Item
route.delete("/:id", (req, res) => {
route.delete("/:id", auth, (req, res) => {
register-login
  const { id } = req.params;
  Item.findById({ _id: id })
    .then((item) => {
      item.remove().then(() => res.json({ success: true }));
    })
    .catch(() => res.json({ success: false }));
});

module.exports = route;
