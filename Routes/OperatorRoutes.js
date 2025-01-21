import express from "express";
import con from "../server/utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/operatorlogin", (req, res) => {
  const sql =
    "SELECT * FROM operator WHERE username = ? and password = ? AND role = ?";
  con.query(
    sql,
    [req.body.username, req.body.password, req.body.role],
    (err, result) => {
      if (err) {
        console.error("Query Failed:", err);
        return res.json({ loginStatus: false, Error: "Query Failed" });
      }
      console.log("Query Result:", result);
      if (result.length > 0) {
        const username = result[0].username;
        const role = result[0].role; // Get the role from the result
        console.log("User Role:", role); // Log the role
        if (role === "operator") {
          const token = jwt.sign(
            { role: role, username: username, id: result[0].id },
            "jwt_secret_key",
            {
              expiresIn: "1d",
            }
          );
          res.cookie("token", token);
          return res.json({ loginStatus: true, role: role }); // Include role in response
        } else {
          return res.json({
            loginStatus: false,
            Error: "You are not authenticated",
          });
        }
      } else {
        return res.json({ loginStatus: false, Error: "Wrong Credentials" });
      }
    }
  );
});

export { router as OperatorRouter };
