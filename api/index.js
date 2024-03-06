import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();
const port = 3000;
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

app.get("/", (req, res) => {
  res.json({
    message: "API is working",
  });
});

app.use("/api/user", userRoutes);
