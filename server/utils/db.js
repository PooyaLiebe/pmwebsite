import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "planni_pooya",
  password: "Po@60376911",
  database: "planni_pm",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
  } else {
    console.log("Connected");
  }
});

export default con;
