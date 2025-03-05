import mysql from "mysql";

const con = mysql.createConnection({
  host: "5.144.130.141",
  user: "planning_pooya",
  password: "Po@60376911",
  database: "planning_pm",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
  } else {
    console.log("Connected");
  }
});

export default con;
