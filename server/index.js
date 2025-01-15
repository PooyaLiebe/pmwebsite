/* eslint-disable no-unused-vars */
import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://planningmaintenance.ir/",
  credentials: true,
};

app.listen(3000, () => {
  console.log("Server is Running");
});
