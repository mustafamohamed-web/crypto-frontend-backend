const express = require("express");
const cors = require("cors");

const app = express();
const mysql = require("mysql2");
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "mustafa246",
  database: "Login",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  db.query(
    "INSERT INTO Login (username, password, email ) VALUES (?,?,?)",
    [username, password, email],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
