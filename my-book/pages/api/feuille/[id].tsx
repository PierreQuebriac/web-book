import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";

const DBSOURCE = "./pages.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    throw err;
  } else {
    db.run(
      `CREATE TABLE PAGES (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            TYPE_ INTEGER,             
            CONTENT TEXT)`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows

          let insert = "INSERT INTO PAGES (TYPE_, CONTENT) VALUES (?,?)";
          db.run(insert, [0, "Première page"], (err) => {});
        }
      }
    );
  }
});

export default function getPageByID(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    db.all("SELECT * FROM PAGES WHERE ID=?", [req.query.id], (err, rows) => {
      if (err) {
        //console.log(err);
        res.end("error");
      }
      console.log(rows);
      res.json(rows);
    });
  }
}
