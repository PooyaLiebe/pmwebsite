import express from "express";
import con from "../server/utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();
router.post("/technicianlogin", (req, res) => {
  const sql =
    "SELECT * FROM technician WHERE username = ? and password = ? AND role = ?";
  con.query(sql, [req.body.username, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query Failed" });
    if (result.length > 0) {
      const username = result[0].username;
      const role = result[0].role;
      if (role === "technician") {
        const token = jwt.sign(
          { role: role, username: username, id: result[0].id },
          "jwt_secret_key",
          {
            expiresIn: "1d",
          }
        );
        res.cookie("token", token);
        return res.json({ loginStatus: true });
      } else {
        return res.json({
          loginStatus: false,
          Error: "You are not authenticated",
        });
      }
    } else {
      return res.json({ loginStatus: false, Error: "Wrong Credentials" });
    }
  });
});

export { router as TechnicianRouter };
