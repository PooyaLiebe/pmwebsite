import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost:3306",
  user: "qeltcenb_Pooya",
  password: "yxQK_&RfQ^tJ",
  database: "qeltcenb_PM",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error");
  } else {
    console.log("Connected");
  }
});
