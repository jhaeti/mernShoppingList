const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());

// Pointing to routes file
app.use("/api/items", require("./routes/itemRoute"));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/auth", require("./routes/authRoute"));

const port = process.env.PORT || 5000;

// Getting mongo uri from the keys folder
const url =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI
    : process.env.MONGO_DEV_URI;

// Connect to mongodb using mongoose
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected..."))
  .catch((err) => console.log(err));

// Serve static assert if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, console.log(`Server running on port ${port}`));
