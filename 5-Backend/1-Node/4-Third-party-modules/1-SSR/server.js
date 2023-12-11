const http = require("http");
const { readFileSync } = require("fs");
const PORT = 5000;

const indexContent = readFileSync("./Course-Website/index.html", {
  encoding: "utf-8",
});
const cssContent = readFileSync("./Course-Website/css/style.css", {
  encoding: "utf-8",
});
const jsContent = readFileSync("./Course-Website/js/index.js", {
  encoding: "utf-8",
});

const headerShapeImg = readFileSync("./Course-Website/images/header-shape.svg");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(indexContent);
    res.end();
  } else if (req.url === "/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(cssContent);
    res.end();
  } else if (req.url === "/js/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(jsContent);
    res.end();
  } else if (req.url === "/images/header-shape.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(headerShapeImg);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(`
        <h2>Something went wrong</h2>
        <a href="/">Back to home page</a>
        `);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
