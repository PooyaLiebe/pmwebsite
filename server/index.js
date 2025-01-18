import express from "express";
import cors from "cors";
import { AdminRouter } from "../Routes/PmRoutes.js";
import { OperatorRouter } from "../Routes/OperatorRoutes.js";
import Jwt from "jsonwebtoken";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", AdminRouter);
app.use("/operator", OperatorRouter);

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    Jwt.verify(token, "jwt_secret_key", (err, decoded) => {
      if (err) res.json({ Status: false, Error: "Wrong Token" });
      req.id = decoded.id;
      req.role = decoded.role;
      next();
    });
  } else {
    return res.json({ Status: false, Error: "Not Authenticated" });
  }
};

app.get("/verify", verifyUser, (res, req) => {
  return res.json({ Status: true, role: req.role, id: req.id });
});

app.listen(3000, () => {
  console.log("Server is Running");
});
