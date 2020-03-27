const fs = require("fs");
let textLines = fs.readFileSync("numerot.txt").toString().split("\n");
let addition = 0;
textLines.forEach(e => addition += parseInt(e));
console.log(addition);
