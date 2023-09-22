import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
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

app.use(bodyparser.json())
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
