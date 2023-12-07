const path = require("path");

// console.log(path);

let customPath = path.join("/base-folder", "/sub-folder", "/info.txt");
// console.log(customPath); // return relative path

// console.log(path.basename(customPath));

// console.log(path.resolve(customPath));

console.log(__dirname);
console.log(path.resolve(__dirname, "base-folder", "sub-folder", "info.txt"));
