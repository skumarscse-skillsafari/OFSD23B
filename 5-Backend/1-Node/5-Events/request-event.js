const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("<h1>Inbuilt Events</h1>");
//   res.end();
// });

const server = http.createServer();

server.on("request", (req, res) => {
  res.write("<h1>Inbuilt Events</h1>");
  res.end();
});

// server.on("error", (err) => {
//   console.log(err);
// });

server.listen(5000, () => {
  console.log("Server is running in http://localhost:5000");
});
