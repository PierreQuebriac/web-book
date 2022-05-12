// index.js
const Express = require("express");
const app = Express();
const cors = require("cors");
const DB = require("./database/db.js");
app.use(Express.json());

let corsOption = {
  origin: "http://localhost:3000",
};
app.use(cors());

app.get("/posts/:page", (req, res) => {
  //res.setHeader("Access-Control-Allow-Origin", "*");
  const page_num = req.params.page;
  DB.all("SELECT * FROM PAGES WHERE PAGE_NUM= ?", [page_num], (err, rows) => {
    if (err) {
      console.log(err);
      res.end("error");
    }
    //console.log(res);

    res.json(rows);
  });
});

// app.post("/posts", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   const page_num = req.body.page;
//   const type = req.body.type;
//   const content = req.body.content;
//   DB.run("INSERT INTO  PAGES (PAGE_NUM = ?,ATTRIBUT = ?, CONTENT= ?)", [page_num, type, content], (err, rows) => {
//     if (err) {
//       console.log(err);
//       res.end("error");
//     }
//     console.log(rows);

//     res.json(rows);
//   });
//   console.log(res);
// });

app.post("/posts", (req, res) => {
  //res.setHeader("Access-Control-Allow-Origin", "*");
  const page_num = req.body.page;
  const type = req.body.type;
  const content = req.body.content;
  DB.all("INSERT INTO  PAGES (PAGE_NUM = ?,ATTRIBUT = ?, CONTENT= ?)", [page_num, type, content], (err, rows) => {
    if (err) {
      console.log(err);
      res.end("error");
    }
    //console.log(res);
    res.status(200).json(null);
  });
});

app.listen(8080);

// app.get("/hello/:name", (req, res) => {
//   res.end("hello " + req.params.name);
// });
