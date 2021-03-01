const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  // require("dotenv").config();
  const token = req.header("x-auth-token");

  if (!token) {
    res.status(401).json({ msg: "No token, Authorization denied" });
  } else {
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: "Token is not valid" });
    }
  }
};
