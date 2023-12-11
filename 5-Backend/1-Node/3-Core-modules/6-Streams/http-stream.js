const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  //   res.write("<h1>Welcome page</h1>");
  //   res.end();
  let contentStream = createReadStream("./content.txt", {
    highWaterMark: 500000,
    encoding: "utf-8",
  });
  contentStream.on("open", () => {
    contentStream.pipe(res);
  });

  contentStream.on("error", (err) => {
    console.log(err);
  });
});

server.listen(5000, () => {
  console.log(`Server is running in http://localhost:5000`);
});
