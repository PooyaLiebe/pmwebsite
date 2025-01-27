import express from "express";
import cors from "cors";
import { AdminRouter } from "../Routes/PmRoutes.js";
import { OperatorRouter } from "../Routes/OperatorRoutes.js";
import { TechnicianRouter } from "../Routes/TechnicianRoutes.js";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", AdminRouter);
app.use("/operator", OperatorRouter);
app.use("/technician", TechnicianRouter);
// eslint-disable-next-line no-undef
app.listen(process.env.DB_PORT, () => {
  console.log("Server is Running");
});
