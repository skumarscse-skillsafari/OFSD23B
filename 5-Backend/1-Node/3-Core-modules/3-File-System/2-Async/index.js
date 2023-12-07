const { readFile, writeFile } = require("fs");

readFile("./data.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    return;
  }
  //   console.log(data);
  let contentOne = data;
  readFile("./data-1.txt", { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return;
    }
    let contentTwo = data;
    writeFile(
      "./write-data/result.txt",
      `Content from Async: ${contentOne}\n${"----------------------------------------"}\n${contentTwo}\n`,
      { flag: "a" },
      (err) => {
        if (err) {
          return;
        }
      }
    );
  });
});
