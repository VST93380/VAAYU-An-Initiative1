const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const authurls = require("./routes/auth");

const app = express();
//to process env files
dotenv.config();

// Use async/await to connect to the database
(async () => {
  try {
    await mongoose.connect(process.env.DATABASE_ACCESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected!!");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();



app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.use("/api",authurls);
  

//listening on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
