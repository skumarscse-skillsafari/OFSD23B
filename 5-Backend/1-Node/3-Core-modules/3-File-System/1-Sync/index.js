const { readFileSync, writeFileSync } = require("fs");

const content = readFileSync("./data.txt", { encoding: "utf-8" });
// console.log(content);

writeFileSync("./write-data/result.txt", `Data from data.txt: ${content}\n`, {
  flag: "a",
});
