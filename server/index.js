var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/";
// const router = express.Router();
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@projectdemo.zyb5mvs.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,

        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log("error: ", error.message);
    process.exit(1);
  }
};

connectDB();
// app.get("/abc", (req, res) => res.send("hello world"));

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

//insert
app.get("/chen", (req, res) => {
  MongoClient.connect(url, function (err, client) {
    var db = client.db("news");
    var doc1 = {
      idCategory: 5,
      nameCategory: "Sức khỏessss",
      number: 15,
      show: false,
    };
    db.collection("newsCategory").insertOne(doc1, function (err, res) {
      console.log("Đã chèn document");
      client.close();
    });
  });
  res.send("Chèn xong!");
});

//update
app.get("/capnhat", (req, res) => {
  MongoClient.connect(url, function (err, client) {
    var dbo = client.db("news");
    var myquery = { number: 15 };
    var values = { $set: { nameCategory: "Đời sống", number: 10 } };
    dbo
      .collection("newsCategory")
      .updateOne(myquery, values, function (err, res) {
        console.log("Da cap nhat");
        client.close();
      });
  });
  res.send("cập nhật xong!");
});

//remove
app.get("/xoa", (req, res) => {
  MongoClient.connect(url, function (err, client) {
    var dbo = client.db("news");
    var myquery = { _id: mongo.ObjectId("633665aad622ee4a53b08dac") };
    dbo.collection("newsCategory").deleteOne(myquery, function (err, obj) {
      console.log("Da xoa");
      client.close();
    });
  });
  res.send("đã xóa!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
