/* eslint-disable no-unused-vars */
import express from "express";
import connectDB from "./db.js";
import itemModel from "./models/item.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  const personels = itemModel.find();
  res.json(personels);
});
app.listen(3000, () => {
  console.log("Server is Running");
});
