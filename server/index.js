import express from "express";
import cors from "cors";
import { AdminRouter } from "../Routes/PmRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", AdminRouter);

app.listen(3000, () => {
  console.log("Server is Running");
});
