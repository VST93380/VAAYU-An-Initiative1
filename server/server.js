const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const authurls = require("./routes/auth");
const app = express();
const mongoURL = "mongodb://localhost:27017/mydatabase"; // Replace with your actual database name

(async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected!!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/auth", authurls);
app.use("/vaayu", vaayuurls);

const port =  5000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});