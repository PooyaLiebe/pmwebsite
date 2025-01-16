import mysql from "mysql";

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "qeltcenb_pooya",
  password: "wjn%m57v_nUR",
  database: "qeltcenb_PM",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
  } else {
    console.log("Connected");
  }
});

export default con;
