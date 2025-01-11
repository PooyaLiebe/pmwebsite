import express from "express";
import connectDB from "./db.js";
import itemModel from "./models/item.js";
const app = express();
connectDB();
itemModel();
app.listen(3000, () => {
  console.log("App is Running...");
});
