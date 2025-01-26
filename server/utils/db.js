import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "planning_pooya",
  password: "Po@60376911",
  database: "planning_pm",
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
