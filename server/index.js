import express from "express";
import cors from "cors";
import { AdminRouter } from "../Routes/AdminRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", AdminRouter);

app.listen(8080, () => {
  console.log("Server is Running");
});
