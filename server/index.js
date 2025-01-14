/* eslint-disable no-unused-vars */
import express from "express";
import connectDB from "./db.js";
import mongoose from "mongoose";
import KarshenasModel from "./models/Karshenas.js";
import OperatorModel from "./models/OperatorSubmit.js";
import TechnicianModel from "./models/TechnicianSubmit.js";
import cors from "cors";
import AghlamModel from "./models/Aghlam.js";
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
connectDB();

// Operatror DB
app.post("/submitform", async (req, res) => {
  console.log(req.body);
  try {
    const formInstance = new OperatorModel(req.body);
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

// Technician DB
app.post("/techniciansubmit", async (req, res) => {
  console.log(req.body);
  try {
    const formInstance = new TechnicianModel(req.body);
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

// Aghlam DB
app.post("/aghlam", async (req, res) => {
  console.log(req.body);
  try {
    const formInstance = new AghlamModel(req.body);
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


// Karshenas
app.post("/technician", async (req, res) => {
  console.log(req.body);
  try {
    const formInstance = new KarshenasModel(req.body);
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
