const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Post = require("../models/Post");
const { update } = require("../models/User");
const { route } = require("./auth");

//Get posts
router.get("/", (req, res, next) => {
  res.send("hello world")
  
});



module.exports = router;
