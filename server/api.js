import express from "express";
import con from "../server/utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/verifyUser", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Status: false, Error: "No token provided" });
  }

  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ Status: false, Error: "Failed to authenticate token" });
    }

    const sql = "SELECT role FROM personel WHERE id = ?";
    con.query(sql, [decoded.id], (err, result) => {
      if (err) {
        return res.json({ Status: false, Error: "Query Failed" });
      }
      if (result.length > 0) {
        return res.json({ Status: true, role: result[0].role });
      } else {
        return res.json({ Status: false, Error: "User not found" });
      }
    });
  });
});

export { router as VerifyUserRouter };
