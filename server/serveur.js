// index.js
const Http = require("http");
const Fs = require("fs");

const server = Http.createServer((req, res) => {
  if (req.method === "GET") {
    Fs.readFile(
      req.url.replace("/", "/home/pierre/"),
      "utf-8",
      (err, content) => {
        if (err !== null) {
          console.error("[error]", err.message);
          res.writeHead(404);
          res.end("no such file " + "home/pierre/" + req.url);
          return;
        }
        res.writeHead(200);
        res.end(content);
      }
    );
  }
  // res.end("hello: " + req.url.replace("/", "~/") + " " + req.method);
});

server.listen(8080);
