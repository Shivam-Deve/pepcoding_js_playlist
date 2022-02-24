let cp = require("child_process");
console.log("Trying to open our 💗");
// cp.execSync("code");
cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("opened our 💗");
let output = cp.execSync("node 2.0.abc.js");
console.log("output 🔥 " + output);