import express from "express";
import cors from "cors";
import { AdminRouter } from "../Routes/PmRoutes.js";
import { OperatorRouter } from "../Routes/OperatorRoutes.js";
import { TechnicianRouter } from "../Routes/TechnicianRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", AdminRouter);
app.use("/operator", OperatorRouter);
app.use("/technician", TechnicianRouter);

app.listen(3306, () => {
  console.log("Server is Running");
});
