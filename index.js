const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { connectMongoDb } = require("./connection");

const router = require('./routes/user')
const path = require("path");
const dotenv = require('dotenv')


dotenv.config();
connectMongoDb(process.env.MONGO);

const server = express();
server.use(cors()); // middleware = use()
server.use(bodyParser.json()); // undefined in output
server.use("/" , router)
server.use(express.static(path.join(__dirname,"front"  , "build")));
server.use("*", function (req, res) {
  const index = path.join(__dirname,"front", "build" ,"index.html");
  res.sendFile(index);
});


server.listen(8080, () => {
  console.log("server started..");
});
