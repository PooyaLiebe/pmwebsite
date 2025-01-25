import mysql from "mysql";

const con = mysql.createConnection({
  host: "45.156.184.36",
  user: "qeltcenb_pooya",
  password: "Po@60376911",
  database: "qeltcenb_PM",
  port: 8080,
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
  } else {
    console.log("Connected");
  }
});

export default con;
