/* eslint-disable no-unused-vars */
import express from "express";
import connectDB from "./db.js";
import mongoose from "mongoose";
import itemModel from "./models/item.js";
import FormModel from "./models/Login.js";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://preventivepm.netlify.app",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
connectDB();

app.post("/submitform", async (req, res) => {
  console.log(req.body);
  try {
    const formInstance = new FormModel(req.body);
    await formInstance.save();
    res
      .status(200)
      .json({ Status: "success", message: "Form data saved successfully!" });
    console.log(formInstance);
  } catch (err) {
    if (err.name === "ValidationError") {
      res.status(400).json({
        Status: "error",
        Error: "Validation Error",
        message: err.message,
      });
    } else {
      res.status(500).json({
        Status: "error",
        Error: "Error saving form data.",
        message: err.message,
      });
    }
    console.error("Error saving form data:", err);
  }
});

app.listen(3000, () => {
  console.log("Server is Running");
});
