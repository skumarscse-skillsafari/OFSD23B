const { createReadStream } = require("fs");

let streamContent = createReadStream("./content.txt", {
  highWaterMark: 500000,
  encoding: "utf-8",
});
streamContent.on("data", (data) => {
  console.log(data);
});

streamContent.on("error", (err) => {
  console.log(err);
});
