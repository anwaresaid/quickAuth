const express = require("express");
const app = express();
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);
let db = new sqlite3.Database("credentialsuser.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("connected to db successfully");
});
app.post("/validatePassword", (req, res) => {
  const { username, password } = req.body;
  db.all(
    `select * from credentialsuser where username= '${username}' and password='${password}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      if (rows.length) {
        res.send({ validation: true });
      } else {
        res.send({ validation: false });
      }
    }
  );
});

app.listen(3000, () => console.log("listening port 3000"));
