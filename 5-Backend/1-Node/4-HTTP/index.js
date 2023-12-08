const http = require("http");
// http => req - res cycle between client and server
// client => browser => req => in the address bar as "url"
// server => backend application which responds to the request
// http => create your own backend server
const PORT = 5000;
const server = http.createServer((req, res) => {
  // routes for performing req-res
  // req => http://localhost:5000
  // res => <h1>Welcome to Node.js</h1>
  // "/" => baseURL => http://localhost:5000
  // Restart => ctrl + c
  //   console.log(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Welcome to Node.js</h1>");
    res.end(); // end of the req
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is About page</h1>");
    res.end(); // end of the req
  } else if (req.url === "/projects") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>This is Projects page</h1>");
    res.end(); // end of the req
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write("{ success: true, message: 'This is contact page' }");
    res.end(); // end of the req
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`
    <h1>Something went wrong</h1>
    <a href="/">Back to home page</a>
    `);
    res.end();
  }
});

// React
// http://localhost:3000
// Backend => 5000
// http://localhost:5000

server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:5000`);
});
