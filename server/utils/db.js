import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "qeltcenb_pooya",
  password: "Po@60376911",
  database: "qeltcenb_PM",
  port: 3306,
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
  } else {
    console.log("Connected");
  }
});

export default con;
