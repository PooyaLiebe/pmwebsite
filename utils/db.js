import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pm",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
  } else {
    console.log("Connected");
  }
});

export default con;
