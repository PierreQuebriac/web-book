import type { NextApiRequest, NextApiResponse } from "next";
import { stringify } from "querystring";
import sqlite3 from "sqlite3";

//Create a SQLite DB
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

// SELECT the right row to display as a feuille (not fonctional)

// export default function getPageByID(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     db.all("SELECT * FROM PAGES WHERE ID=?", [req.query.id], (err, rows) => {
//       if (err) {
//         res.end("error");
//       }
//       res.json(rows);
//     });
//   }
// }

// Basic response to test the connexion between all component
export default function getPageByID(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({ ID: req.query.id, type: 0, content: "page number : " + String(req.query.id) });
  }
}
