// index.js
const Express = require("express");
const app = Express();
const DB = require("./database/db.js");

app.get("/posts", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  DB.all("SELECT * FROM posts", (err, rows) => {
    if (err) {
      console.log(err);
      res.end("error");
    }
    res.json(rows);
  });
});

app.get("/posts/:id", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const postID = req.params.id;
  DB.all("SELECT * FROM POSTS WHERE ID= ?", [postID], (err, rows) => {
    if (err) {
      console.log(err);
      res.end("error");
    }
    console.log(rows);
    res.json(rows);
  });
});

app.get("/hello", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end("hello");
});

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end("foo");
});

app.get("/bar", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end("bar");
});

app.listen(8080);

// app.get("/hello/:name", (req, res) => {
//   res.end("hello " + req.params.name);
// });
