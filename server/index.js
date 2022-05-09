const express = require("express");
const cors = require("cors");

const app = express();
const mysql = require("mysql2");
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "mustafa246",
  database: "Register",
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO Register (username, password ) VALUES (?,?)",
    [username, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM Register WHERE username = ? AND password = ? ",
//     [username, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }
//       if (result.length > 0) {
//         res.send(result);
//       } else {
//         res.send({ message: "Wrong password/username" });
//       }
//     }
//   );
// });

app.listen(3001, () => {
  console.log("server running on port 3001");
});
