// var express = require("express");
// var cors = require("cors");
// var bodyParser = require("body-parser");
// var app = express();
// app.use(cors());

// var jsonParser = bodyParser.json();

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.post("/user/login", jsonParser, function (req, res) {
//   var username = req.body.username;
//   var password = req.body.password;

//   if (username == "admin123" && password == "123") {
//     res.json({ "success": 1, "username": username, "password": password });
//   }
//   res.json({ "success": 0, "username": username, "password": password });
// });

// app.listen(8888, function () {
//   console.log("Server đang lắng nghe port 8888");
// });
