const fsDemo = require("fs");

const contents = fsDemo.readFileSync("a.txt", "utf-8");    //synchronously
console.log(contents);

const contents2 = fsDemo.readFileSync("b.txt", "utf-8");    //synchronously
console.log(contents2);