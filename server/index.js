const express = require("express");

const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "mustafa246",
  database: "Login",
});

app.get("/insert", (req, res) => {
  db.query(
    "INSERT INTO Login (username, password) VALUES ('hannan', 'mustafa')",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
