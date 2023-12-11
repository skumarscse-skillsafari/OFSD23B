const { writeFileSync } = require("fs");

for (let i = 1; i <= 100000; i++) {
  writeFileSync("./content.txt", `Line number: ${i}\n`, { flag: "a" });
}
