const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

const mongodbpass = process.env.MONGODB_PASS;

mongoose.connect(
  `mongodb+srv://Kevin:${mongodbpass}@opreeaismain.dsjcl.mongodb.net/OpreeaisMainDB?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
