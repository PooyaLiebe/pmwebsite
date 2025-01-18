import mysql from "mysql";

// const con = mysql.createConnection({
//   host: "45.156.184.36",
//   user: "qeltcenb_pooya",
//   password: "Po@60376911",
//   database: "qeltcenb_pooya",
// });
const con = mysql.createConnection({
  host: "localhost",
  user: "qeltcenb_pooya",
  password: "Po@60376911",
  database: "qeltcenb_pm",
});
con.connect(function (err) {
  if (err) {
    console.log("Connection Error", err);
  } else {
    console.log("Connected");
  }
});

export default con;
